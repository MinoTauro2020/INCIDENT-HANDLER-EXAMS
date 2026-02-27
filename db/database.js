'use strict';

const path = require('path');
const fs   = require('fs');

const DB_PATH = path.join(__dirname, 'database.sqlite');

let _db  = null;      // sql.js Database instance
let _SQL = null;      // sql.js module (cached after first init)

/**
 * Returns the singleton sql.js Database instance.
 * Async because sql.js initialisation requires loading a WASM binary.
 * Safe to call multiple times — subsequent calls return the cached instance.
 */
async function getDb() {
  if (_db) return _db;

  // Load the sql.js module once
  if (!_SQL) {
    const initSqlJs = require('sql.js');
    _SQL = await initSqlJs();
  }

  // Load existing DB from disk or create a fresh one
  if (fs.existsSync(DB_PATH)) {
    const buf = fs.readFileSync(DB_PATH);
    _db = new _SQL.Database(buf);
  } else {
    _db = new _SQL.Database();
  }

  return _db;
}

/**
 * Persists the in-memory sql.js database to disk.
 * Must be called after every write operation (INSERT / UPDATE / DELETE).
 */
function saveDb() {
  if (!_db) throw new Error('saveDb() called before getDb() — database not initialised.');
  const data = _db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

module.exports = { getDb, saveDb };
