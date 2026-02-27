'use strict';

const path = require('path');
const Database = require('better-sqlite3');

const DB_PATH = path.join(__dirname, 'database.sqlite');

let _db = null;

/**
 * Returns the singleton better-sqlite3 instance.
 * Lazy-initialized on first call.
 */
function getDb() {
  if (!_db) {
    _db = new Database(DB_PATH);
    // Enable WAL mode for better concurrent read performance
    _db.pragma('journal_mode = WAL');
    // Enforce foreign key constraints
    _db.pragma('foreign_keys = ON');
  }
  return _db;
}

module.exports = getDb;
