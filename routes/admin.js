'use strict';

const express = require('express');
const { body, param, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const getDb = require('../db/database');
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

// ── GET /api/admin/users ──────────────────────────────────────────────────
router.get('/users', (req, res) => {
  const db = getDb();
  const users = db
    .prepare(`
      SELECT id, email, name, role, is_active, failed_attempts, locked_until, created_at, last_login
      FROM users
      ORDER BY created_at DESC
    `)
    .all();

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
  const db = getDb();

  // Check for duplicate email
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) {
    return res.status(409).json({ error: 'A user with that email already exists.' });
  }

  const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);

  const result = db
    .prepare(`
      INSERT INTO users (email, password_hash, name, role, is_active)
      VALUES (?, ?, ?, ?, 1)
    `)
    .run(email, hash, name, role);

  return res.status(201).json({
    message: 'User created successfully.',
    user: {
      id: result.lastInsertRowid,
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
  const db = getDb();

  const target = db.prepare('SELECT id, email, name, role, is_active FROM users WHERE id = ?').get(targetId);
  if (!target) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const { name, role, is_active, password } = req.body;

  // Build update fields dynamically (parameterized — no string concatenation)
  const updates = [];
  const params = [];

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

  db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).run(...params);

  const updated = db
    .prepare('SELECT id, email, name, role, is_active, created_at, last_login FROM users WHERE id = ?')
    .get(targetId);

  return res.json({ message: 'User updated successfully.', user: updated });
});

// ── DELETE /api/admin/users/:id ───────────────────────────────────────────
router.delete('/users/:id', [
  param('id').isInt({ min: 1 }).withMessage('Invalid user ID.')
], (req, res) => {
  if (firstError(req, res)) return;

  const targetId = parseInt(req.params.id, 10);

  // Prevent self-deletion
  if (targetId === req.user.id) {
    return res.status(400).json({ error: 'You cannot delete your own account.' });
  }

  const db = getDb();

  const target = db.prepare('SELECT id FROM users WHERE id = ?').get(targetId);
  if (!target) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Soft delete — set is_active = 0
  db.prepare('UPDATE users SET is_active = 0 WHERE id = ?').run(targetId);

  return res.json({ message: 'User deactivated successfully.' });
});

module.exports = router;
