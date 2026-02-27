'use strict';

const jwt = require('jsonwebtoken');
const path = require('path');

/**
 * Static paths that require authentication.
 * Requests matching these paths without a valid JWT are redirected to /login.html.
 */
const PROTECTED_EXTENSIONS = new Set(['.html', '.js']);

// Exact filenames (no path) that are public (always allowed)
const PUBLIC_FILES = new Set([
  'login.html',
  'favicon.ico'
]);

// Path prefixes that are always public
const PUBLIC_PREFIXES = [
  '/api/',
  '/img/',
  '/styles.css',
  '/login.html'
];

// JS files that the login page itself needs (don't lock these behind auth)
const PUBLIC_JS_FILES = new Set([
  // none currently — add any public-facing script here
]);

/**
 * Determines whether a request URL points to a protected resource.
 * Rules:
 *  - /api/* — always public (handled by route-level auth)
 *  - /img/*, /styles.css, /login.html — always public (assets & login page)
 *  - *.html files other than login.html — protected
 *  - *.js files that are application code — protected
 *  - everything else (no extension, etc.) — protected and redirected to login
 */
function isPublicPath(urlPath) {
  // Strip query string
  const clean = urlPath.split('?')[0].split('#')[0];

  for (const prefix of PUBLIC_PREFIXES) {
    if (clean === prefix || clean.startsWith(prefix)) {
      return true;
    }
  }

  const basename = path.basename(clean);

  if (PUBLIC_FILES.has(basename)) {
    return true;
  }

  if (PUBLIC_JS_FILES.has(basename)) {
    return true;
  }

  return false;
}

/**
 * Express middleware that guards protected static files.
 * Place this BEFORE express.static() in server.js.
 */
function protectRoutes(req, res, next) {
  const urlPath = req.path || '/';

  // Always let public paths through
  if (isPublicPath(urlPath)) {
    return next();
  }

  // Try to verify JWT from cookie or Authorization header
  let token = null;

  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else {
    const authHeader = req.headers['authorization'] || '';
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.slice(7);
    }
  }

  if (!token) {
    // Redirect browser requests to login page; return 401 for XHR/fetch
    const acceptsHtml = req.headers.accept && req.headers.accept.includes('text/html');
    if (acceptsHtml) {
      return res.redirect('/login.html');
    }
    return res.status(401).json({ error: 'Authentication required.' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (_err) {
    const acceptsHtml = req.headers.accept && req.headers.accept.includes('text/html');
    if (acceptsHtml) {
      return res.redirect('/login.html');
    }
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

module.exports = protectRoutes;
