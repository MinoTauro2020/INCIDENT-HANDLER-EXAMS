'use strict';

const path   = require('path');
const fs     = require('fs');
const crypto = require('crypto');

// ── JWT_SECRET bootstrap ──────────────────────────────────────────────────
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = crypto.randomBytes(64).toString('hex');
  console.warn(
    '[security] WARNING: JWT_SECRET not set in environment. ' +
    'A random secret has been generated for this process. ' +
    'All existing tokens will be invalidated on restart. ' +
    'Set JWT_SECRET in your environment for production use.'
  );
}

const express      = require('express');
const helmet       = require('helmet');
const rateLimit    = require('express-rate-limit');
const hpp          = require('hpp');
const cookieParser = require('cookie-parser');
const cors         = require('cors');

const { getDb }     = require('./db/database');
const { init: initDb } = require('./db/init');
const protectRoutes = require('./middleware/protect-routes');
const authRoutes    = require('./routes/auth');
const adminRoutes   = require('./routes/admin');

const app  = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

// Trust the first proxy (Coolify / Traefik) so Express reads the real client IP
// from X-Forwarded-For. Required for rate limiting and secure cookie detection.
app.set('trust proxy', 1);

// ── Security middleware ───────────────────────────────────────────────────

// Helmet: sets secure HTTP headers including a strict CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:              ["'self'"],
      scriptSrc:               ["'self'", "'unsafe-inline'"],  // login.html & admin.html use inline scripts
      styleSrc:                ["'self'", "'unsafe-inline'"],   // allow inline styles for the app
      imgSrc:                  ["'self'", 'data:'],
      fontSrc:                 ["'self'"],
      connectSrc:              ["'self'"],
      frameSrc:                ["'none'"],
      objectSrc:               ["'none'"],
      baseUri:                 ["'self'"],
      formAction:              ["'self'"],
      upgradeInsecureRequests: null  // MUST be null — removes helmet's default; app runs on HTTP behind Coolify proxy
    }
  },
  crossOriginEmbedderPolicy: false,  // allow loading local resources
  hsts: false,                       // disable HSTS — Coolify handles HTTPS at proxy level
  crossOriginOpenerPolicy: false,
  originAgentCluster: false
}));

// CORS: allow the deployed origin and localhost dev.
// origin: false would strip CORS headers entirely, causing fetch() with
// credentials:'include' to fail even on same-origin behind a reverse proxy.
const ALLOWED_ORIGINS = [
  'http://ckk4400400g0c8gk0co8o04k.46.224.138.85.sslip.io',
  'https://ckk4400400g0c8gk0co8o04k.46.224.138.85.sslip.io',
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no Origin header (e.g., same-origin, curl, Postman)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.indexOf(origin) !== -1) return callback(null, true);
    return callback(new Error('CORS: origin not allowed'));
  },
  credentials: true  // allow cookies to be sent with cross-origin requests from allowed origins
}));

// Global rate limiter (generous; auth routes have their own tighter limits)
app.use(rateLimit({
  windowMs:        15 * 60 * 1000,
  max:             300,
  standardHeaders: true,
  legacyHeaders:   false,
  message:         { error: 'Too many requests. Please slow down.' }
}));

// HTTP Parameter Pollution protection
app.use(hpp());

// Parse cookies (needed for JWT httpOnly cookie)
app.use(cookieParser());

// Parse JSON and URL-encoded bodies (limit payload size)
app.use(express.json({ limit: '64kb' }));
app.use(express.urlencoded({ extended: false, limit: '64kb' }));

// ── Routes ────────────────────────────────────────────────────────────────

// Auth routes (login/logout/me) — no protect-routes guard needed
app.use('/api/auth', authRoutes);

// Admin routes — protected by requireAuth + requireAdmin inside routes/admin.js
app.use('/api/admin', adminRoutes);

// Catch-all for unknown /api/* paths
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found.' });
});

// ── Static file protection ────────────────────────────────────────────────
// Must come BEFORE express.static so unauthenticated requests are intercepted
app.use(protectRoutes);

// Serve static files from the project root directory
app.use(express.static(path.join(__dirname), {
  index:    'index.html',
  dotfiles: 'deny',
  etag:     true,
  maxAge:   '1h'
}));

// ── Global error handler ──────────────────────────────────────────────────
// Must be last — 4-argument signature tells Express this is an error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  const isProd = process.env.NODE_ENV === 'production';
  console.error('[error]', err);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error: isProd ? 'An internal server error occurred.' : err.message
  });
});

// ── Async startup ─────────────────────────────────────────────────────────
(async () => {
  try {
    const DB_PATH = path.join(__dirname, 'db', 'database.sqlite');

    if (!fs.existsSync(DB_PATH)) {
      console.log('[server] Database not found — initialising ...');
      await initDb();
    } else {
      // Warm up the singleton so the first request is fast
      await getDb();
    }

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`[server] Incident Handler Study Platform listening on http://0.0.0.0:${PORT}`);
      console.log(`[server] NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (err) {
    console.error('[server] Fatal startup error:', err);
    process.exit(1);
  }
})();
