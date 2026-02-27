'use strict';

/**
 * Database initialization script.
 * Creates the schema and seeds the default admin account.
 * Safe to run multiple times — uses IF NOT EXISTS / INSERT OR IGNORE.
 */

const bcrypt = require('bcryptjs');
const getDb = require('./database');

const BCRYPT_ROUNDS = 12;
const ADMIN_EMAIL = 'admin@ecih.local';
const ADMIN_PASSWORD = 'Admin2026!';
const ADMIN_NAME = 'Administrator';

async function init() {
  const db = getDb();

  // ── Schema ───────────────────────────────────────────────────────────────
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id              INTEGER PRIMARY KEY AUTOINCREMENT,
      email           TEXT    UNIQUE NOT NULL,
      password_hash   TEXT           NOT NULL,
      name            TEXT           NOT NULL,
      role            TEXT           NOT NULL DEFAULT 'user'
                        CHECK(role IN ('admin', 'user')),
      is_active       INTEGER        NOT NULL DEFAULT 1,
      failed_attempts INTEGER        NOT NULL DEFAULT 0,
      locked_until    TEXT,
      created_at      TEXT           NOT NULL DEFAULT (datetime('now')),
      last_login      TEXT
    );
  `);

  // ── Default admin seed ───────────────────────────────────────────────────
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(ADMIN_EMAIL);

  if (!existing) {
    const hash = await bcrypt.hash(ADMIN_PASSWORD, BCRYPT_ROUNDS);
    db.prepare(`
      INSERT INTO users (email, password_hash, name, role, is_active)
      VALUES (?, ?, ?, 'admin', 1)
    `).run(ADMIN_EMAIL, hash, ADMIN_NAME);

    console.log(`[init-db] Default admin created: ${ADMIN_EMAIL}`);
  } else {
    console.log('[init-db] Admin account already exists — skipping seed.');
  }

  console.log('[init-db] Database initialized successfully.');
}

init().catch((err) => {
  console.error('[init-db] Fatal error during initialization:', err.message);
  process.exit(1);
});
