'use strict';

/**
 * Database initialisation script.
 * Creates the schema and seeds the default admin account.
 * Safe to run multiple times — uses IF NOT EXISTS / conditional insert.
 *
 * Can be used two ways:
 *   1. `node db/init.js`          — standalone CLI (runs init() and exits)
 *   2. `require('./db/init')`     — exports { init } for use in server.js
 */

const bcrypt = require('bcryptjs');
const { getDb, saveDb } = require('./database');

const BCRYPT_ROUNDS  = 12;
const ADMIN_EMAIL    = 'admin@ecih.local';
const ADMIN_PASSWORD = 'Admin2026!';
const ADMIN_NAME     = 'Administrator';

async function init() {
  const db = await getDb();

  // ── Schema ───────────────────────────────────────────────────────────────
  db.run(`
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
  const stmt = db.prepare('SELECT id FROM users WHERE email = ?');
  stmt.bind([ADMIN_EMAIL]);
  const exists = stmt.step();
  stmt.free();

  if (!exists) {
    const hash = await bcrypt.hash(ADMIN_PASSWORD, BCRYPT_ROUNDS);
    db.run(
      `INSERT INTO users (email, password_hash, name, role, is_active)
       VALUES (?, ?, ?, 'admin', 1)`,
      [ADMIN_EMAIL, hash, ADMIN_NAME]
    );
    console.log(`[init-db] Default admin created: ${ADMIN_EMAIL}`);
  } else {
    console.log('[init-db] Admin account already exists — skipping seed.');
  }

  saveDb();
  console.log('[init-db] Database initialised successfully.');
}

// Export for programmatic use (server.js)
module.exports = { init };

// When executed directly as a script, run and handle errors
if (require.main === module) {
  init().catch((err) => {
    console.error('[init-db] Fatal error during initialisation:', err.message);
    process.exit(1);
  });
}
