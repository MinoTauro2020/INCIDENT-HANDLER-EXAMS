'use strict';

const jwt = require('jsonwebtoken');
const getDb = require('../db/database');

const LOCKOUT_THRESHOLD = 5;       // failed attempts before lockout
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Extracts the JWT token from:
 *  1. httpOnly cookie named "token"
 *  2. Authorization: Bearer <token> header
 */
function extractToken(req) {
  if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  }
  const authHeader = req.headers['authorization'] || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }
  return null;
}

/**
 * requireAuth middleware
 * Verifies JWT and attaches the full user record to req.user.
 * Respects account lockout status.
 */
function requireAuth(req, res, next) {
  const token = extractToken(req);

  if (!token) {
    return res.status(401).json({ error: 'Authentication required.' });
  }

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }

  const db = getDb();
  const user = db
    .prepare('SELECT id, email, name, role, is_active, failed_attempts, locked_until FROM users WHERE id = ?')
    .get(payload.sub);

  if (!user) {
    return res.status(401).json({ error: 'User not found.' });
  }

  if (!user.is_active) {
    return res.status(403).json({ error: 'Account is disabled.' });
  }

  // Check lockout
  if (user.locked_until) {
    const lockedUntilMs = new Date(user.locked_until).getTime();
    if (Date.now() < lockedUntilMs) {
      const remaining = Math.ceil((lockedUntilMs - Date.now()) / 1000 / 60);
      return res.status(403).json({
        error: `Account is locked. Try again in ${remaining} minute(s).`
      });
    }
    // Lockout expired — clear it
    db.prepare('UPDATE users SET failed_attempts = 0, locked_until = NULL WHERE id = ?').run(user.id);
    user.failed_attempts = 0;
    user.locked_until = null;
  }

  // Attach to request (exclude sensitive fields)
  req.user = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  };

  next();
}

/**
 * requireAdmin middleware
 * Must be used AFTER requireAuth.
 */
function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required.' });
  }
  next();
}

/**
 * Utility: record a failed login attempt and lock the account if threshold is reached.
 * @param {number} userId
 */
function recordFailedAttempt(userId) {
  const db = getDb();

  // Increment failed_attempts
  db.prepare('UPDATE users SET failed_attempts = failed_attempts + 1 WHERE id = ?').run(userId);

  const user = db.prepare('SELECT failed_attempts FROM users WHERE id = ?').get(userId);

  if (user && user.failed_attempts >= LOCKOUT_THRESHOLD) {
    const lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MS).toISOString();
    db.prepare('UPDATE users SET locked_until = ? WHERE id = ?').run(lockedUntil, userId);
  }
}

/**
 * Utility: reset failed attempts and lockout after successful login.
 * @param {number} userId
 */
function resetFailedAttempts(userId) {
  const db = getDb();
  db.prepare(
    'UPDATE users SET failed_attempts = 0, locked_until = NULL, last_login = datetime(\'now\') WHERE id = ?'
  ).run(userId);
}

module.exports = { requireAuth, requireAdmin, recordFailedAttempt, resetFailedAttempts };
