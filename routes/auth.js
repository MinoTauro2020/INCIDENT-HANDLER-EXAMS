'use strict';

const express    = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');
const rateLimit  = require('express-rate-limit');
const { getDb, saveDb } = require('../db/database');
const { requireAuth, recordFailedAttempt, resetFailedAttempts } = require('../middleware/auth');

const router = express.Router();

const JWT_EXPIRY          = '24h';
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// ── Rate limiter: 5 login attempts per 15 min per IP ──────────────────────
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' }
});

// ── Validation rules ──────────────────────────────────────────────────────
const loginValidation = [
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('A valid email address is required.'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.')
];

// ── Cookie helper ─────────────────────────────────────────────────────────
function issueTokenCookie(res, userId, role) {
  const token = jwt.sign(
    { sub: userId, role },
    process.env.JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure:   false,  // app runs behind Coolify HTTP proxy — never TLS at app level
    sameSite: 'Lax',  // 'Strict' blocks cookies on initial navigation; 'Lax' is safe and works over HTTP
    maxAge:   24 * 60 * 60 * 1000 // 24 hours in ms
  });

  return token;
}

// ── Helper: select one row ─────────────────────────────────────────────────
function selectOne(db, sql, params) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  let row = null;
  if (stmt.step()) {
    row = stmt.getAsObject();
  }
  stmt.free();
  return row;
}

// ── POST /api/auth/login ──────────────────────────────────────────────────
router.post('/login', loginLimiter, loginValidation, async (req, res) => {
  // Validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { email, password } = req.body;
  const db = await getDb();

  // Lookup user — always perform bcrypt compare to prevent timing attacks
  const user = selectOne(
    db,
    'SELECT id, email, name, role, password_hash, is_active, failed_attempts, locked_until FROM users WHERE email = ?',
    [email]
  );

  // Use a dummy hash when user not found to prevent timing side-channel
  const DUMMY_HASH    = '$2a$12$invalidhashtopreventtimingattacksonnonexistentusers..';
  const hashToCompare = user ? user.password_hash : DUMMY_HASH;

  const passwordMatch = await bcrypt.compare(password, hashToCompare);

  if (!user || !passwordMatch) {
    if (user) {
      await recordFailedAttempt(user.id);
    }
    // Generic error — don't reveal whether the email exists
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  // Account disabled
  if (!user.is_active) {
    return res.status(403).json({ error: 'Account is disabled. Contact an administrator.' });
  }

  // Lockout check
  if (user.locked_until) {
    const lockedUntilMs = new Date(user.locked_until).getTime();
    if (Date.now() < lockedUntilMs) {
      const remaining = Math.ceil((lockedUntilMs - Date.now()) / 1000 / 60);
      return res.status(403).json({
        error: `Account is locked due to too many failed attempts. Try again in ${remaining} minute(s).`
      });
    }
  }

  // Success — reset lockout, issue JWT
  await resetFailedAttempts(user.id);
  issueTokenCookie(res, user.id, user.role);

  return res.json({
    message: 'Login successful.',
    user: {
      id:    user.id,
      email: user.email,
      name:  user.name,
      role:  user.role
    }
  });
});

// ── POST /api/auth/logout ─────────────────────────────────────────────────
router.post('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure:   false,  // must match the flags used when the cookie was set
    sameSite: 'Lax'
  });
  return res.json({ message: 'Logged out successfully.' });
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────
router.get('/me', requireAuth, (req, res) => {
  return res.json({ user: req.user });
});

module.exports = router;
