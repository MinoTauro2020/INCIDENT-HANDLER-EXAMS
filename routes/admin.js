'use strict';

const express  = require('express');
const { body, param, validationResult } = require('express-validator');
const bcrypt   = require('bcryptjs');
const { getDb, saveDb } = require('../db/database');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

const BCRYPT_ROUNDS = 12;

// All admin routes require authentication AND admin role
router.use(requireAuth, requireAdmin);

// ── Helper: format validation errors ─────────────────────────────────────
function firstError(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array()[0].msg });
    return true;
  }
  return false;
}

// ── Helper: select one row ────────────────────────────────────────────────
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

// ── Helper: select all rows ───────────────────────────────────────────────
function selectAll(db, sql, params) {
  const stmt = db.prepare(sql);
  if (params && params.length) stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

// ── GET /api/admin/users ──────────────────────────────────────────────────
router.get('/users', async (req, res) => {
  const db    = await getDb();
  const users = selectAll(
    db,
    `SELECT id, email, name, role, is_active, failed_attempts, locked_until, created_at, last_login
     FROM users
     ORDER BY created_at DESC`,
    []
  );

  return res.json({ users });
});

// ── POST /api/admin/users ─────────────────────────────────────────────────
const createUserValidation = [
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('A valid email address is required.'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.'),
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ max: 100 })
    .withMessage('Name must be at most 100 characters.'),
  body('role')
    .isIn(['admin', 'user'])
    .withMessage('Role must be "admin" or "user".')
];

router.post('/users', createUserValidation, async (req, res) => {
  if (firstError(req, res)) return;

  const { email, password, name, role } = req.body;
  const db = await getDb();

  // Check for duplicate email
  const existing = selectOne(db, 'SELECT id FROM users WHERE email = ?', [email]);
  if (existing) {
    return res.status(409).json({ error: 'A user with that email already exists.' });
  }

  const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);

  db.run(
    `INSERT INTO users (email, password_hash, name, role, is_active)
     VALUES (?, ?, ?, ?, 1)`,
    [email, hash, name, role]
  );

  // Retrieve the last inserted row id
  const rowResult = selectOne(db, 'SELECT last_insert_rowid() AS id', []);
  const newId     = rowResult ? rowResult.id : null;

  saveDb();

  return res.status(201).json({
    message: 'User created successfully.',
    user: {
      id:        newId,
      email,
      name,
      role,
      is_active: 1
    }
  });
});

// ── PUT /api/admin/users/:id ──────────────────────────────────────────────
const updateUserValidation = [
  param('id')
    .isInt({ min: 1 })
    .withMessage('Invalid user ID.'),
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Name cannot be empty.')
    .isLength({ max: 100 })
    .withMessage('Name must be at most 100 characters.'),
  body('role')
    .optional()
    .isIn(['admin', 'user'])
    .withMessage('Role must be "admin" or "user".'),
  body('is_active')
    .optional()
    .isBoolean()
    .withMessage('is_active must be a boolean.'),
  body('password')
    .optional()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters.')
];

router.put('/users/:id', updateUserValidation, async (req, res) => {
  if (firstError(req, res)) return;

  const targetId = parseInt(req.params.id, 10);
  const db       = await getDb();

  const target = selectOne(
    db,
    'SELECT id, email, name, role, is_active FROM users WHERE id = ?',
    [targetId]
  );
  if (!target) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const { name, role, is_active, password } = req.body;

  // Build update fields dynamically (parameterized — no string concatenation)
  const updates = [];
  const params  = [];

  if (name !== undefined) {
    updates.push('name = ?');
    params.push(name.trim());
  }
  if (role !== undefined) {
    updates.push('role = ?');
    params.push(role);
  }
  if (is_active !== undefined) {
    updates.push('is_active = ?');
    params.push(is_active ? 1 : 0);
  }
  if (password !== undefined) {
    const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
    updates.push('password_hash = ?');
    params.push(hash);
  }

  if (updates.length === 0) {
    return res.status(400).json({ error: 'No valid fields provided for update.' });
  }

  params.push(targetId);

  db.run(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, params);

  const updated = selectOne(
    db,
    'SELECT id, email, name, role, is_active, created_at, last_login FROM users WHERE id = ?',
    [targetId]
  );

  saveDb();

  return res.json({ message: 'User updated successfully.', user: updated });
});

// ── DELETE /api/admin/users/:id ───────────────────────────────────────────
router.delete('/users/:id', [
  param('id').isInt({ min: 1 }).withMessage('Invalid user ID.')
], async (req, res) => {
  if (firstError(req, res)) return;

  const targetId = parseInt(req.params.id, 10);

  // Prevent self-deletion
  if (targetId === req.user.id) {
    return res.status(400).json({ error: 'You cannot delete your own account.' });
  }

  const db = await getDb();

  const target = selectOne(db, 'SELECT id FROM users WHERE id = ?', [targetId]);
  if (!target) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Soft delete — set is_active = 0
  db.run('UPDATE users SET is_active = 0 WHERE id = ?', [targetId]);
  saveDb();

  return res.json({ message: 'User deactivated successfully.' });
});

module.exports = router;
