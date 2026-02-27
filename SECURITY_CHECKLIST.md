# OWASP Security Checklist & Requirements
## ECIH Study Platform - Node.js/Express Authentication System

**Version:** 1.0
**Date:** 2026-02-27
**Standard:** OWASP Top 10 (2021), OWASP ASVS 4.0, OWASP Testing Guide v4
**Stack:** Express.js 4.x, better-sqlite3, JWT (jsonwebtoken), bcryptjs, helmet, express-rate-limit, express-validator, cookie-parser, hpp, csurf

---

## Table of Contents

1. [OWASP Top 10 (2021) Mapping](#1-owasp-top-10-2021-mapping)
2. [Authentication Security Checklist](#2-authentication-security-checklist)
3. [Input Validation Checklist](#3-input-validation-checklist)
4. [HTTP Security Headers](#4-http-security-headers)
5. [Rate Limiting Configuration](#5-rate-limiting-configuration)
6. [Database Security](#6-database-security)
7. [Penetration Test Cases](#7-penetration-test-cases)
8. [Deployment Hardening](#8-deployment-hardening)
9. [Incident Response Considerations](#9-incident-response-considerations)

---

## 1. OWASP Top 10 (2021) Mapping

### A01:2021 - Broken Access Control

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A01-01 | [ ] `requireAuth` middleware is applied to ALL protected API routes | | Verify no route is accidentally exposed |
| A01-02 | [ ] `requireAdmin` middleware is applied to ALL admin-only endpoints (user CRUD, role changes) | | Must chain after `requireAuth` |
| A01-03 | [ ] `protectRoutes` middleware is placed BEFORE `express.static()` in server.js | | Order matters - static files served before middleware = bypass |
| A01-04 | [ ] Users cannot escalate their own role (e.g., PUT /api/users/:id cannot set `role: 'admin'` unless requester is admin) | | Check that role field is stripped from non-admin requests |
| A01-05 | [ ] Users cannot modify other users' data without admin privileges | | Enforce `req.user.id === targetId \|\| req.user.role === 'admin'` |
| A01-06 | [ ] JWT `sub` claim is validated against the database on EVERY request (not just trusted from token) | | Current `auth.js` does this correctly - verify it stays |
| A01-07 | [ ] Directory listing is disabled on `express.static()` | | `express.static` does not list directories by default, but confirm no `serve-index` is added |
| A01-08 | [ ] No IDOR: user A cannot access user B's data by changing the ID parameter | | Test all `/api/users/:id` endpoints |
| A01-09 | [ ] CORS `origin` is restricted to the exact production domain, not `*` | | Check `cors()` configuration |
| A01-10 | [ ] `is_active` flag is checked on every authenticated request, not just at login | | Current `auth.js` line 53 checks this - verify |
| A01-11 | [ ] Account lockout status (`locked_until`) is enforced on token validation, not just login | | Current `auth.js` lines 58-69 do this - verify |
| A01-12 | [ ] HTTP methods are restricted per route (e.g., user list is GET only, not DELETE) | | Use `router.get()`, `router.post()` explicitly, never `router.all()` |
| A01-13 | [ ] The `/api/` prefix is listed as PUBLIC in `protect-routes.js` (line 21) - verify that API route-level auth compensates | | API endpoints must have their own `requireAuth` |
| A01-14 | [ ] No path traversal in static file serving (e.g., `/../../../etc/passwd`) | | Express.static has built-in protection, but test manually |

### A02:2021 - Cryptographic Failures

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A02-01 | [ ] bcrypt cost factor is >= 12 rounds | | Current `init.js` uses 12 - verify all hash calls use the same constant |
| A02-02 | [ ] JWT_SECRET is loaded from environment variable, never hardcoded | | `process.env.JWT_SECRET` used in `auth.js` - verify no fallback default |
| A02-03 | [ ] JWT_SECRET has minimum 256 bits of entropy (32+ random bytes, base64 encoded) | | Generate with: `node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"` |
| A02-04 | [ ] JWT signing algorithm is explicitly set to `HS256` (not `none`, not RS256 with HS256 key) | | Pass `{ algorithm: 'HS256' }` to BOTH `jwt.sign()` and `jwt.verify()` |
| A02-05 | [ ] JWT `verify()` explicitly specifies `algorithms: ['HS256']` to prevent algorithm confusion attacks | | **CRITICAL** - without this, attacker can use `alg: none` |
| A02-06 | [ ] Password hashes are never returned in any API response | | Check all user queries - SELECT should exclude `password_hash` |
| A02-07 | [ ] Database file (`database.sqlite`) has restrictive file permissions (600 or 640) | | `chmod 600 db/database.sqlite` on deployment |
| A02-08 | [ ] TLS 1.2+ is enforced in production (via reverse proxy: nginx/caddy) | | Not handled by Express directly |
| A02-09 | [ ] Default admin password (`Admin2026!`) in `init.js` is changed immediately after first deployment | | Add a forced password change on first login, or require env var for initial password |
| A02-10 | [ ] No sensitive data (passwords, tokens, secrets) in server logs | | Audit all `console.log` / `console.error` calls |
| A02-11 | [ ] JWT tokens have a reasonable expiration (`exp` claim): 15-30 minutes for access tokens | | Check `jwt.sign()` options for `expiresIn` |
| A02-12 | [ ] HTTPS-only cookies in production (`secure: true` flag on cookie) | | Only possible when served over HTTPS |

### A03:2021 - Injection

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A03-01 | [ ] ALL database queries use parameterized statements (`db.prepare().run/get/all()` with `?` placeholders) | | better-sqlite3 prepared statements are safe - verify no string concatenation |
| A03-02 | [ ] No raw SQL built with template literals or string concatenation | | Search codebase for `db.exec(\`...${` or `db.prepare(\`...${` patterns |
| A03-03 | [ ] `express-validator` is used on ALL user-facing input endpoints | | Login, register, user update, password change |
| A03-04 | [ ] Email input is validated with `isEmail()` and `normalizeEmail()` | | Prevents Unicode homoglyph attacks |
| A03-05 | [ ] Name fields are sanitized with `trim()` and `escape()` | | Prevents stored XSS |
| A03-06 | [ ] Role field only accepts enum values: `['admin', 'user']` - validated server-side | | DB CHECK constraint exists, but validate at API level too |
| A03-07 | [ ] No `eval()`, `Function()`, `child_process.exec()` with user input anywhere in codebase | | Search entire codebase |
| A03-08 | [ ] `hpp` (HTTP Parameter Pollution) middleware is active | | Listed in dependencies - verify it is `app.use(hpp())` |
| A03-09 | [ ] Content-Type header is validated on POST/PUT endpoints (must be `application/json`) | | Reject `text/plain` or `multipart/form-data` on API routes |
| A03-10 | [ ] JSON body parser has a size limit: `express.json({ limit: '10kb' })` | | Prevents large payload DoS |

### A04:2021 - Insecure Design

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A04-01 | [ ] Authentication flows follow defense-in-depth: cookie + CSRF token, or SameSite + httpOnly | | Not just one mechanism |
| A04-02 | [ ] Error messages on login do not reveal whether the email exists ("Invalid email or password" for both cases) | | Prevents user enumeration |
| A04-03 | [ ] Account lockout is implemented per-account (current: 5 attempts / 15 min lockout) | | Verify in `auth.js` |
| A04-04 | [ ] Password reset (if implemented) uses time-limited, single-use tokens | | Not currently implemented - document as out of scope or add |
| A04-05 | [ ] Admin cannot delete their own account (prevent self-lockout) | | Add check in delete endpoint |
| A04-06 | [ ] Admin cannot demote themselves if they are the last admin | | Prevent orphan system with no admins |
| A04-07 | [ ] Session invalidation: when password is changed or account is disabled, all existing JWTs must be invalidated | | Requires a token blacklist or `jti` + revocation table, or short-lived tokens |
| A04-08 | [ ] Logout endpoint clears the httpOnly cookie AND advises client to discard the token | | `res.clearCookie('token', { ... })` |
| A04-09 | [ ] No sensitive operations via GET requests (all mutations use POST/PUT/DELETE) | | GET is cacheable and logged in browser history |
| A04-10 | [ ] Principle of least privilege: default user role is `'user'`, not `'admin'` | | DB default is `'user'` - verify registration endpoint |

### A05:2021 - Security Misconfiguration

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A05-01 | [ ] `helmet()` middleware is active with default settings | | Sets X-Content-Type-Options, X-Frame-Options, etc. |
| A05-02 | [ ] `express.json()` is used (not `body-parser` which is deprecated for new projects) | | Already built into Express 4.16+ |
| A05-03 | [ ] `NODE_ENV=production` is set in production | | Disables stack traces in error responses |
| A05-04 | [ ] Custom error handler does NOT leak stack traces to the client | | `app.use((err, req, res, next) => { ... })` should return generic message |
| A05-05 | [ ] `X-Powered-By` header is removed | | `helmet()` does this, or `app.disable('x-powered-by')` |
| A05-06 | [ ] No development endpoints or debug routes left in production | | Search for `/debug`, `/test`, `/dev` routes |
| A05-07 | [ ] `.env` file is in `.gitignore` | | Never commit secrets |
| A05-08 | [ ] `database.sqlite` is in `.gitignore` | | Never commit the database |
| A05-09 | [ ] `csurf` is configured correctly if using cookie-based sessions | | Note: `csurf` is deprecated. Consider `csrf-csrf` or `lusca` as replacement. If using SameSite=Strict cookies, CSRF protection may be handled at the cookie level |
| A05-10 | [ ] `trust proxy` is set correctly if behind a reverse proxy | | `app.set('trust proxy', 1)` for rate limiting to work with X-Forwarded-For |
| A05-11 | [ ] CORS is not set to `origin: '*'` with `credentials: true` (this is an invalid and dangerous combination) | | Must specify exact origin(s) |
| A05-12 | [ ] No default credentials ship in the production deployment beyond the seeded admin | | Force password change on first login |

### A06:2021 - Vulnerable and Outdated Components

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A06-01 | [ ] Run `npm audit` - zero high/critical vulnerabilities | | Automate in CI/CD |
| A06-02 | [ ] `csurf` is deprecated and has known issues - evaluate replacement | | Use `csrf-csrf`, `lusca`, or rely on SameSite cookies |
| A06-03 | [ ] All dependencies are on latest stable minor versions | | `npm outdated` to check |
| A06-04 | [ ] `package-lock.json` is committed and used for deterministic installs (`npm ci`) | | Never use `npm install` in CI |
| A06-05 | [ ] No `dependencies` that should be `devDependencies` (and vice versa) | | Reduces attack surface in production |
| A06-06 | [ ] Node.js version is LTS (22.x or 20.x as of 2026) | | Document required version in `.nvmrc` or `engines` field |
| A06-07 | [ ] Enable automated dependency updates (Dependabot, Renovate, or Snyk) | | At minimum weekly scans |
| A06-08 | [ ] Review transitive dependencies: `npm ls --all` to check for known-bad packages | | Supply chain attacks are increasing |

### A07:2021 - Identification and Authentication Failures

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A07-01 | [ ] Passwords are hashed with bcrypt (cost >= 12), never stored in plaintext | | Verified in `init.js` |
| A07-02 | [ ] Password minimum length >= 12 characters | | Enforce in registration/password-change validation |
| A07-03 | [ ] Password maximum length is capped at 72 bytes (bcrypt limit) or 128 characters | | bcrypt silently truncates at 72 bytes - validate before hashing |
| A07-04 | [ ] Passwords are checked against a breached-password list (HIBP API or top-100k list) | | Recommended by NIST SP 800-63B |
| A07-05 | [ ] No password composition rules beyond minimum length (NIST 800-63B recommends against complexity rules) | | Allow any characters, including Unicode |
| A07-06 | [ ] Account lockout (5 attempts / 15 min) does not cause permanent denial of service | | Lockout auto-expires - verified in current code |
| A07-07 | [ ] Timing-safe comparison is used for password verification | | `bcrypt.compare()` is inherently timing-safe |
| A07-08 | [ ] Login response time is consistent whether the email exists or not | | Hash a dummy password when email not found: `await bcrypt.compare(password, DUMMY_HASH)` |
| A07-09 | [ ] JWT contains minimal claims: `sub` (user ID), `iat`, `exp`, `role` | | Never include password hash, email, or PII in JWT |
| A07-10 | [ ] JWT is NOT stored in localStorage (XSS-accessible) | | Use httpOnly cookie only |
| A07-11 | [ ] Refresh token rotation is implemented if using refresh tokens | | Or use short-lived access tokens (15 min) with re-authentication |
| A07-12 | [ ] `jwt.verify()` call specifies `algorithms` whitelist | | Prevents algorithm substitution attack |
| A07-13 | [ ] Password change requires the current password | | Prevent unauthorized password changes via CSRF or stolen session |
| A07-14 | [ ] After password change, all other sessions/tokens are invalidated | | Requires token blacklist mechanism |

### A08:2021 - Software and Data Integrity Failures

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A08-01 | [ ] `package-lock.json` integrity hashes are verified on install (`npm ci`) | | Prevents dependency tampering |
| A08-02 | [ ] No inline scripts or external CDN scripts without SRI (Subresource Integrity) hashes | | Add `integrity` and `crossorigin` attributes to all `<script>` and `<link>` tags |
| A08-03 | [ ] JWT signature is verified on every request (not just decoded) | | `jwt.verify()` not `jwt.decode()` |
| A08-04 | [ ] No deserialization of untrusted data (no `JSON.parse()` on arbitrary user strings without validation) | | `express.json()` handles this safely for body parsing |
| A08-05 | [ ] CI/CD pipeline does not auto-deploy without review on main branch | | Require PR reviews or manual approval |
| A08-06 | [ ] `__proto__` pollution protection: validate that request body keys do not include `__proto__`, `constructor`, `prototype` | | Some express.json configurations handle this; verify or add middleware |

### A09:2021 - Security Logging and Monitoring Failures

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A09-01 | [ ] All authentication events are logged: login success, login failure, lockout triggered | | Include timestamp, IP address, user email (not password) |
| A09-02 | [ ] All authorization failures are logged (403 responses) | | Include endpoint, user ID, and required role |
| A09-03 | [ ] Admin actions are logged: user creation, deletion, role changes, account enable/disable | | Audit trail for accountability |
| A09-04 | [ ] Failed JWT verification attempts are logged | | Include IP address, token fingerprint (last 8 chars) |
| A09-05 | [ ] Log format is structured (JSON) for ingestion by log aggregators | | Use `winston`, `pino`, or structured `console.log` |
| A09-06 | [ ] Logs do NOT contain: passwords, JWT tokens, session IDs, or PII beyond email | | Sensitive data in logs is a breach vector |
| A09-07 | [ ] Rate limit hits are logged (potential brute-force indicator) | | `express-rate-limit` has an `onLimitReached` callback |
| A09-08 | [ ] Log files are rotated and have appropriate retention (30-90 days) | | Use `pm2` log rotation or OS-level logrotate |
| A09-09 | [ ] Monitoring alert for: >10 failed logins from same IP in 5 minutes | | Indicates brute force |
| A09-10 | [ ] Monitoring alert for: admin account lockout | | High-priority security event |

### A10:2021 - Server-Side Request Forgery (SSRF)

| # | Check | Status | Notes |
|---|-------|--------|-------|
| A10-01 | [ ] No endpoint accepts a URL parameter and makes a server-side HTTP request to it | | This app likely has low SSRF risk |
| A10-02 | [ ] If any future feature adds URL-based input (avatar URL, webhook, etc.), validate against an allowlist of domains | | Never fetch arbitrary URLs server-side |
| A10-03 | [ ] No endpoint proxies requests to internal services based on user input | | Review all routes for `http.get()`, `fetch()`, `axios()` calls |
| A10-04 | [ ] DNS rebinding protection: resolve hostname and validate IP before making request | | Block `127.0.0.1`, `10.x`, `172.16-31.x`, `192.168.x`, `169.254.x`, `::1` |

---

## 2. Authentication Security Checklist

### 2.1 Password Policy

| # | Requirement | Value | Status |
|---|------------|-------|--------|
| PW-01 | [ ] Minimum length | 12 characters | |
| PW-02 | [ ] Maximum length | 128 characters (enforce before bcrypt) | |
| PW-03 | [ ] bcrypt rounds | 12 (current) - increase to 13-14 if hardware allows <100ms hash time | |
| PW-04 | [ ] No complexity rules (NIST 800-63B) | Allow any characters | |
| PW-05 | [ ] Breached password check | Check against top-100k common passwords at minimum | |
| PW-06 | [ ] Password change requires current password | Prevent unauthorized changes | |
| PW-07 | [ ] No password history required (NIST 800-63B) | Do not force periodic rotation | |
| PW-08 | [ ] Admin seed password must be changed on first login | Force password change flag in DB | |

### 2.2 Session / Token Management

| # | Requirement | Value | Status |
|---|------------|-------|--------|
| SM-01 | [ ] Access token lifetime | 15 minutes (`expiresIn: '15m'`) | |
| SM-02 | [ ] Refresh token lifetime (if used) | 7 days, stored in httpOnly cookie, rotated on use | |
| SM-03 | [ ] Token contains minimal claims | `{ sub: userId, role: userRole, iat, exp }` | |
| SM-04 | [ ] Token signing algorithm | `HS256` - explicitly set in both `sign()` and `verify()` | |
| SM-05 | [ ] Token revocation on password change | Increment a `token_version` in users table; include in JWT and validate | |
| SM-06 | [ ] Token revocation on account disable | `is_active` check on every request (already implemented) | |
| SM-07 | [ ] Logout clears the httpOnly cookie server-side | `res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'Strict', path: '/' })` | |
| SM-08 | [ ] No token in URL query parameters | Tokens only in cookies or Authorization header | |

### 2.3 Account Lockout

| # | Requirement | Value | Status |
|---|------------|-------|--------|
| LO-01 | [ ] Lockout threshold | 5 failed attempts (current) | |
| LO-02 | [ ] Lockout duration | 15 minutes (current) | |
| LO-03 | [ ] Lockout auto-expires (no permanent lockout) | Verified in current code | |
| LO-04 | [ ] Failed attempt counter resets on successful login | `resetFailedAttempts()` called (current) | |
| LO-05 | [ ] Lockout is per-account, not per-IP (current implementation) | Consider adding per-IP throttling as well | |
| LO-06 | [ ] Lockout event is logged with IP address | For security monitoring | |
| LO-07 | [ ] Admin can manually unlock accounts | Admin endpoint to reset `failed_attempts` and `locked_until` | |

### 2.4 JWT Configuration Specification

```javascript
// --- SIGNING (on login success) ---
const token = jwt.sign(
  {
    sub: user.id,
    role: user.role
    // Do NOT include: email, name, password_hash
  },
  process.env.JWT_SECRET,
  {
    algorithm: 'HS256',
    expiresIn: '15m',    // 15-minute access token
    issuer: 'ecih-study-platform',
    audience: 'ecih-web'
  }
);

// --- VERIFICATION (on every authenticated request) ---
const payload = jwt.verify(token, process.env.JWT_SECRET, {
  algorithms: ['HS256'],     // CRITICAL: whitelist algorithms
  issuer: 'ecih-study-platform',
  audience: 'ecih-web',
  clockTolerance: 30         // 30-second tolerance for clock skew
});
```

### 2.5 Cookie Security Flags

```javascript
res.cookie('token', token, {
  httpOnly: true,      // Not accessible via document.cookie (XSS protection)
  secure: true,        // Only sent over HTTPS (set false in development only)
  sameSite: 'Strict',  // Not sent with cross-origin requests (CSRF protection)
  path: '/',           // Available to all routes
  maxAge: 15 * 60 * 1000,  // 15 minutes - matches JWT expiration
  // domain: omit to default to current domain (most secure)
});
```

| # | Flag | Value | Rationale | Status |
|---|------|-------|-----------|--------|
| CK-01 | [ ] `httpOnly` | `true` | Prevents XSS from stealing cookies | |
| CK-02 | [ ] `secure` | `true` (prod) | Cookie only sent over HTTPS | |
| CK-03 | [ ] `sameSite` | `'Strict'` | Blocks cross-site cookie transmission (CSRF mitigation) | |
| CK-04 | [ ] `path` | `'/'` | Available to all application routes | |
| CK-05 | [ ] `maxAge` | Matches JWT `expiresIn` | Cookie and token expire together | |
| CK-06 | [ ] `domain` | Not set (defaults to current domain) | Prevents cookie leaking to subdomains | |
| CK-07 | [ ] No `__Secure-` or `__Host-` prefix used | Consider `__Host-token` prefix for additional security | |

---

## 3. Input Validation Checklist

### 3.1 Endpoint Inventory

| Endpoint | Method | Auth | Input Fields | Status |
|----------|--------|------|-------------|--------|
| `POST /api/auth/login` | POST | None | `email`, `password` | [ ] |
| `POST /api/auth/logout` | POST | User | None | [ ] |
| `GET /api/auth/me` | GET | User | None | [ ] |
| `POST /api/auth/change-password` | POST | User | `currentPassword`, `newPassword` | [ ] |
| `GET /api/users` | GET | Admin | Query: `page`, `limit`, `search` | [ ] |
| `POST /api/users` | POST | Admin | `email`, `password`, `name`, `role` | [ ] |
| `GET /api/users/:id` | GET | Admin | Param: `id` | [ ] |
| `PUT /api/users/:id` | PUT | Admin | `email`, `name`, `role`, `is_active` | [ ] |
| `DELETE /api/users/:id` | DELETE | Admin | Param: `id` | [ ] |

### 3.2 Validation Rules Per Field

```javascript
// --- express-validator rules ---

// Email
body('email')
  .trim()
  .isEmail().withMessage('Valid email required')
  .normalizeEmail({ gmail_remove_dots: false })
  .isLength({ max: 254 }).withMessage('Email too long'),

// Password (login - no strength rules, just presence)
body('password')
  .notEmpty().withMessage('Password required')
  .isLength({ max: 128 }).withMessage('Password too long'),

// Password (registration/change - enforce policy)
body('newPassword')
  .isLength({ min: 12 }).withMessage('Password must be at least 12 characters')
  .isLength({ max: 128 }).withMessage('Password must be at most 128 characters')
  .not().equals(body('email')).withMessage('Password cannot be the same as email'),

// Name
body('name')
  .trim()
  .isLength({ min: 1, max: 100 }).withMessage('Name must be 1-100 characters')
  .escape(),  // HTML-encode special characters

// Role
body('role')
  .optional()
  .isIn(['admin', 'user']).withMessage('Role must be admin or user'),

// is_active
body('is_active')
  .optional()
  .isBoolean().withMessage('is_active must be boolean')
  .toBoolean(),

// URL parameter: id
param('id')
  .isInt({ min: 1 }).withMessage('Invalid user ID')
  .toInt(),

// Query: pagination
query('page')
  .optional()
  .isInt({ min: 1, max: 10000 }).withMessage('Invalid page')
  .toInt(),

query('limit')
  .optional()
  .isInt({ min: 1, max: 100 }).withMessage('Limit must be 1-100')
  .toInt(),

// Query: search
query('search')
  .optional()
  .trim()
  .isLength({ max: 100 }).withMessage('Search query too long')
  .escape()
```

### 3.3 Sanitization Requirements

| # | Requirement | Status |
|---|------------|--------|
| SAN-01 | [ ] All string inputs are trimmed of leading/trailing whitespace | |
| SAN-02 | [ ] Email is normalized (lowercase, consistent formatting) | |
| SAN-03 | [ ] Name fields are HTML-escaped before storage (or escaped on output) | |
| SAN-04 | [ ] Integer parameters are parsed to int (prevent string injection) | |
| SAN-05 | [ ] Request body Content-Type must be `application/json` for API routes | |
| SAN-06 | [ ] Reject requests with unexpected fields (whitelist expected fields, strip others) | |
| SAN-07 | [ ] Null bytes (`\0`) are stripped from all string inputs | |
| SAN-08 | [ ] Unicode normalization is applied to prevent homoglyph attacks on emails | |

---

## 4. HTTP Security Headers

### 4.1 Headers Configuration

```javascript
const helmet = require('helmet');

app.use(helmet({
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],           // No 'unsafe-inline', no 'unsafe-eval'
      styleSrc: ["'self'", "'unsafe-inline'"],  // Allow inline styles if needed; prefer nonces
      imgSrc: ["'self'", "data:"],     // Allow data: URIs for inline images
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],          // API calls to same origin only
      frameSrc: ["'none'"],            // No iframes allowed
      objectSrc: ["'none'"],           // No Flash/Java objects
      baseUri: ["'self'"],             // Restrict <base> tag
      formAction: ["'self'"],          // Forms can only submit to same origin
      frameAncestors: ["'none'"],      // Prevent clickjacking (replaces X-Frame-Options)
      upgradeInsecureRequests: [],     // Upgrade HTTP to HTTPS
    }
  },
  // Cross-Origin settings
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: { policy: 'same-origin' },
  crossOriginResourcePolicy: { policy: 'same-origin' },
  // Other helmet defaults (all enabled)
  dnsPrefetchControl: { allow: false },
  frameguard: { action: 'deny' },
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  ieNoOpen: true,
  noSniff: true,
  originAgentCluster: true,
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  xssFilter: true  // Note: modern browsers have deprecated X-XSS-Protection, but helmet sets it
}));
```

### 4.2 Header Verification Checklist

| # | Header | Expected Value | Status |
|---|--------|---------------|--------|
| H-01 | [ ] `Content-Security-Policy` | See CSP above | |
| H-02 | [ ] `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | |
| H-03 | [ ] `X-Content-Type-Options` | `nosniff` | |
| H-04 | [ ] `X-Frame-Options` | `DENY` | |
| H-05 | [ ] `X-XSS-Protection` | `0` (disabled - rely on CSP instead) | |
| H-06 | [ ] `Referrer-Policy` | `strict-origin-when-cross-origin` | |
| H-07 | [ ] `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=()` | |
| H-08 | [ ] `X-Powered-By` | REMOVED (not present) | |
| H-09 | [ ] `Cross-Origin-Opener-Policy` | `same-origin` | |
| H-10 | [ ] `Cross-Origin-Resource-Policy` | `same-origin` | |
| H-11 | [ ] `Cross-Origin-Embedder-Policy` | `require-corp` | |
| H-12 | [ ] `Cache-Control` on API responses | `no-store, no-cache, must-revalidate, proxy-revalidate` | |
| H-13 | [ ] `Pragma` on API responses | `no-cache` | |

**Verification command:**
```bash
curl -I https://your-domain.com/ 2>/dev/null | grep -iE '^(content-security|strict-transport|x-content-type|x-frame|x-xss|referrer-policy|permissions-policy|x-powered|cross-origin|cache-control|pragma)'
```

---

## 5. Rate Limiting Configuration

### 5.1 Per-Endpoint Limits

```javascript
const rateLimit = require('express-rate-limit');

// Global rate limit - all routes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 300,                    // 300 requests per window per IP
  standardHeaders: true,       // Return rate limit info in RateLimit-* headers
  legacyHeaders: false,        // Disable X-RateLimit-* headers
  message: { error: 'Too many requests, please try again later.' },
  skip: (req) => req.ip === '127.0.0.1'  // Optional: skip for health checks
});

// Login rate limit - strict
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 10,                     // 10 login attempts per window per IP
  skipSuccessfulRequests: true, // Only count failed attempts
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' },
  keyGenerator: (req) => {
    // Rate limit by IP + email combo for targeted protection
    return `${req.ip}-${(req.body.email || '').toLowerCase()}`;
  }
});

// Account creation rate limit
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 5,                      // 5 account creations per hour per IP
  message: { error: 'Too many accounts created. Please try again later.' }
});

// Password change rate limit
const passwordChangeLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 5,                      // 5 password changes per hour
  message: { error: 'Too many password change attempts.' }
});

// Admin operations rate limit
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many admin operations.' }
});
```

### 5.2 Rate Limiting Checklist

| # | Requirement | Status |
|---|------------|--------|
| RL-01 | [ ] Global rate limit applied: 300 req/15min per IP | |
| RL-02 | [ ] Login endpoint: 10 attempts/15min per IP (failed only) | |
| RL-03 | [ ] Account creation: 5/hour per IP | |
| RL-04 | [ ] Password change: 5/hour per user | |
| RL-05 | [ ] Admin operations: 100/15min per IP | |
| RL-06 | [ ] `trust proxy` is set if behind reverse proxy (so `req.ip` is correct) | |
| RL-07 | [ ] Rate limit headers are returned (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`) | |
| RL-08 | [ ] Rate limit events are logged for monitoring | |
| RL-09 | [ ] Consider Redis or external store for rate limiting in multi-process deployments | |
| RL-10 | [ ] Slowloris protection: set `server.headersTimeout` and `server.requestTimeout` | |

---

## 6. Database Security

### 6.1 Query Parameterization Verification

| # | Check | Status |
|---|-------|--------|
| DB-01 | [ ] All SELECT queries use `db.prepare('... WHERE col = ?').get(value)` pattern | |
| DB-02 | [ ] All INSERT queries use `db.prepare('INSERT INTO ... VALUES (?, ?, ?)').run(...)` pattern | |
| DB-03 | [ ] All UPDATE queries use parameterized `WHERE` clauses | |
| DB-04 | [ ] All DELETE queries use parameterized `WHERE` clauses | |
| DB-05 | [ ] No string concatenation or template literals in SQL queries | |
| DB-06 | [ ] `db.exec()` is ONLY used for schema DDL (CREATE TABLE), never with user input | |
| DB-07 | [ ] Search/filter queries use `LIKE ? ` with `%${sanitized}%` passed as parameter, NOT in the SQL string | |
| DB-08 | [ ] ORDER BY clauses use a whitelist of allowed columns, not user input directly | |

**Audit command to find potential SQL injection:**
```bash
grep -rn "db\.\(exec\|prepare\)" --include="*.js" | grep -E '(\$\{|` \+|" \+|'"'"' \+)'
```

### 6.2 Data at Rest

| # | Check | Status |
|---|-------|--------|
| DR-01 | [ ] `database.sqlite` file permissions are `600` (owner read/write only) | |
| DR-02 | [ ] `database.sqlite` is in `.gitignore` | |
| DR-03 | [ ] Database file is on an encrypted filesystem in production | |
| DR-04 | [ ] WAL mode is enabled (current - improves concurrent reads) | |
| DR-05 | [ ] Foreign keys are enabled (`PRAGMA foreign_keys = ON`) | |
| DR-06 | [ ] Regular backups of `database.sqlite` are scheduled | |
| DR-07 | [ ] Backup files have the same restrictive permissions | |
| DR-08 | [ ] `password_hash` column is never included in SELECT queries except during login verification | |
| DR-09 | [ ] Consider SQLite encryption extension (`sqlcipher`) for sensitive deployments | |
| DR-10 | [ ] Database vacuum/optimize runs periodically to reclaim space and defragment | |

### 6.3 Schema Security

| # | Check | Status |
|---|-------|--------|
| SC-01 | [ ] `role` column has CHECK constraint: `CHECK(role IN ('admin', 'user'))` | Verified in init.js |
| SC-02 | [ ] `email` column has UNIQUE constraint | Verified in init.js |
| SC-03 | [ ] `email` column has NOT NULL constraint | Verified in init.js |
| SC-04 | [ ] `is_active` defaults to 1 (active) | Verified in init.js |
| SC-05 | [ ] `failed_attempts` defaults to 0 | Verified in init.js |
| SC-06 | [ ] `created_at` is auto-set and cannot be modified by users | |
| SC-07 | [ ] No sensitive defaults that could leak if schema is exposed | |

---

## 7. Penetration Test Cases

### 7.1 SQL Injection Tests

| # | Test Case | Target | Payload Examples | Expected Result | Status |
|---|-----------|--------|-----------------|-----------------|--------|
| SQLi-01 | [ ] Classic login bypass | `POST /api/auth/login` | `email: "admin@ecih.local' OR '1'='1"` | Login fails, no SQL error | |
| SQLi-02 | [ ] Union-based injection | `POST /api/auth/login` | `email: "' UNION SELECT 1,2,3,4,5,6,7,8,9,10--"` | Login fails, no data leak | |
| SQLi-03 | [ ] Boolean-based blind | `GET /api/users?search=` | `search: "' AND 1=1--"` | No behavioral difference | |
| SQLi-04 | [ ] Time-based blind | `POST /api/auth/login` | `email: "admin@ecih.local'; WAITFOR DELAY '0:0:5'--"` | No delay (SQLite doesn't support WAITFOR but test for stacked queries) | |
| SQLi-05 | [ ] Stacked queries | `POST /api/auth/login` | `email: "'; DROP TABLE users;--"` | Table intact, request fails gracefully | |
| SQLi-06 | [ ] Second-order injection | Register user with SQL in name | `name: "Robert'; DROP TABLE users;--"` | Name stored literally, no execution on retrieval | |
| SQLi-07 | [ ] Parameter pollution | `GET /api/users/:id` | `id: "1 OR 1=1"` | Validation rejects non-integer | |
| SQLi-08 | [ ] NULL byte injection | `POST /api/auth/login` | `email: "admin@ecih.local%00"` | Login fails or null stripped | |

### 7.2 XSS (Cross-Site Scripting) Tests

| # | Test Case | Target | Payload Examples | Expected Result | Status |
|---|-----------|--------|-----------------|-----------------|--------|
| XSS-01 | [ ] Reflected XSS in error messages | All endpoints | `email: "<script>alert(1)</script>"` | HTML escaped in response | |
| XSS-02 | [ ] Stored XSS via user name | `POST /api/users` | `name: "<img src=x onerror=alert(1)>"` | Sanitized on input or escaped on output | |
| XSS-03 | [ ] Stored XSS via email field | `POST /api/users` | `email: "test<script>alert(1)</script>@test.com"` | Validation rejects invalid email | |
| XSS-04 | [ ] DOM XSS via URL parameters | Login page | `login.html?redirect=javascript:alert(1)` | No unvalidated redirect | |
| XSS-05 | [ ] XSS via JSON response (Content-Type) | All API endpoints | Verify `Content-Type: application/json` header | Browser won't execute JSON as HTML | |
| XSS-06 | [ ] XSS via HTTP headers | Custom headers | `X-Custom: <script>alert(1)</script>` | Headers not reflected in response body | |
| XSS-07 | [ ] SVG/HTML upload XSS | If file upload exists | Upload `.svg` with embedded JS | File type validation rejects | |
| XSS-08 | [ ] Cookie theft attempt | If XSS found | `document.cookie` | httpOnly prevents access | |

### 7.3 CSRF (Cross-Site Request Forgery) Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| CSRF-01 | [ ] Cross-origin POST to login | `POST /api/auth/login` | HTML form from attacker.com | SameSite=Strict cookie not sent | |
| CSRF-02 | [ ] Cross-origin state change | `PUT /api/users/:id` | Fetch from attacker.com | CORS blocks, no cookie sent | |
| CSRF-03 | [ ] Cross-origin admin action | `DELETE /api/users/:id` | Hidden form submission | SameSite blocks cookie | |
| CSRF-04 | [ ] CSRF token bypass (if csurf used) | All mutation endpoints | Omit CSRF token | 403 Forbidden | |
| CSRF-05 | [ ] Subdomain CSRF | If subdomains exist | Request from sub.domain.com | SameSite=Strict blocks | |
| CSRF-06 | [ ] JSON content-type CSRF bypass | `POST /api/auth/login` | `enctype="text/plain"` form | Server rejects non-JSON Content-Type | |
| CSRF-07 | [ ] Flash/Silverlight CSRF | Cross-domain policy | crossdomain.xml probe | File does not exist / denied | |

### 7.4 Brute Force Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| BF-01 | [ ] Password brute force (single account) | `POST /api/auth/login` | 100 attempts with wrong password | Account locked after 5, rate limited after 10 | |
| BF-02 | [ ] Password spraying (many accounts) | `POST /api/auth/login` | 1 attempt each for 100 emails | Rate limit triggers on IP | |
| BF-03 | [ ] Credential stuffing | `POST /api/auth/login` | Known breached credential pairs | Rate limit + lockout | |
| BF-04 | [ ] Rate limit bypass via IP rotation | `POST /api/auth/login` | X-Forwarded-For spoofing | `trust proxy` must be set correctly | |
| BF-05 | [ ] Rate limit bypass via slow requests | `POST /api/auth/login` | 1 request per second | Still triggers within window | |
| BF-06 | [ ] User enumeration via timing | `POST /api/auth/login` | Valid email vs invalid email | Response time is consistent (dummy bcrypt compare) | |
| BF-07 | [ ] User enumeration via error messages | `POST /api/auth/login` | Valid email vs invalid email | Same error message for both | |
| BF-08 | [ ] User enumeration via registration | `POST /api/users` | Existing email | Generic error, not "email already exists" | |
| BF-09 | [ ] Lockout DoS | `POST /api/auth/login` | Lock all known accounts | Lockout auto-expires in 15min | |

### 7.5 JWT Manipulation Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| JWT-01 | [ ] Algorithm `none` attack | All authenticated endpoints | Modify JWT header to `{"alg":"none"}`, remove signature | 401 Unauthorized | |
| JWT-02 | [ ] Algorithm confusion (RS256 to HS256) | All authenticated endpoints | Sign with public key using HS256 | 401 Unauthorized (algorithms whitelist blocks) | |
| JWT-03 | [ ] Expired token reuse | All authenticated endpoints | Use token after `exp` has passed | 401 Unauthorized | |
| JWT-04 | [ ] Token tampering (modify `sub`) | All authenticated endpoints | Change `sub` claim to admin ID, re-encode (no re-sign) | 401 Unauthorized (signature invalid) | |
| JWT-05 | [ ] Token tampering (modify `role`) | All authenticated endpoints | Change `role` to `admin` in payload | 401 (invalid signature) AND role checked against DB | |
| JWT-06 | [ ] Token with future `iat` | All authenticated endpoints | Set `iat` to far future | Accepted or rejected depending on policy | |
| JWT-07 | [ ] Empty/null token | All authenticated endpoints | `Cookie: token=` or `Authorization: Bearer ` | 401 Unauthorized | |
| JWT-08 | [ ] Extremely long token (DoS) | All authenticated endpoints | 1MB JWT string | Request rejected by body size limit | |
| JWT-09 | [ ] Token after password change | All authenticated endpoints | Use old token after password change | Should be 401 (requires token revocation) | |
| JWT-10 | [ ] Token after account disable | All authenticated endpoints | Use token after admin disables account | 403 (is_active check) | |
| JWT-11 | [ ] JWT in URL parameter | Any page | `?token=<jwt>` | Not processed (only cookie/header) | |
| JWT-12 | [ ] `kid` (Key ID) injection | JWT header | Add `kid: "../../etc/passwd"` | Ignored (no kid lookup implemented) | |

### 7.6 Privilege Escalation Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| PE-01 | [ ] Regular user accesses admin panel | `GET /api/users` | Login as regular user, request admin endpoint | 403 Forbidden | |
| PE-02 | [ ] Self-promote to admin | `PUT /api/users/:id` (own ID) | Send `{ "role": "admin" }` as regular user | 403 Forbidden | |
| PE-03 | [ ] Access other user's data | `GET /api/users/:id` (other ID) | Request with non-admin token | 403 Forbidden | |
| PE-04 | [ ] Modify other user's data | `PUT /api/users/:id` (other ID) | Non-admin sends update for another user | 403 Forbidden | |
| PE-05 | [ ] Delete other user | `DELETE /api/users/:id` | Non-admin sends delete | 403 Forbidden | |
| PE-06 | [ ] Horizontal privilege escalation | Password change endpoint | Change password for different user ID | Rejected (must match authenticated user) | |
| PE-07 | [ ] Mass assignment | `PUT /api/users/:id` | Send unexpected fields: `is_active`, `failed_attempts`, `created_at` | Extra fields ignored/stripped | |
| PE-08 | [ ] HTTP method override | `POST /api/users/:id` with `X-HTTP-Method-Override: DELETE` | Method override header | Not supported / ignored | |
| PE-09 | [ ] Prototype pollution via JSON body | Any POST/PUT endpoint | `{ "__proto__": { "isAdmin": true } }` | No effect on server state | |

### 7.7 Directory Traversal Tests

| # | Test Case | Target | Payload | Expected Result | Status |
|---|-----------|--------|---------|-----------------|--------|
| DT-01 | [ ] Basic path traversal | Static file serving | `GET /../../../etc/passwd` | 400/404, not file contents | |
| DT-02 | [ ] Encoded traversal | Static file serving | `GET /..%2f..%2f..%2fetc/passwd` | 400/404 | |
| DT-03 | [ ] Double-encoded traversal | Static file serving | `GET /..%252f..%252f..%252fetc/passwd` | 400/404 | |
| DT-04 | [ ] Null byte traversal | Static file serving | `GET /index.html%00.png` | 400/404 | |
| DT-05 | [ ] Unicode traversal | Static file serving | `GET /..%c0%af..%c0%afetc/passwd` | 400/404 | |
| DT-06 | [ ] Access database file | Static file serving | `GET /db/database.sqlite` | 404 (db/ not in static root) | |
| DT-07 | [ ] Access .env file | Static file serving | `GET /.env` | 404 (not in static root) | |
| DT-08 | [ ] Access server source | Static file serving | `GET /server.js` | Either protected by auth or not served (depends on static root) | |
| DT-09 | [ ] Access node_modules | Static file serving | `GET /node_modules/express/package.json` | 404 (not in static root) | |

### 7.8 Denial of Service Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| DoS-01 | [ ] Large JSON body | All POST endpoints | Send 10MB JSON payload | Rejected by body size limit (10kb) | |
| DoS-02 | [ ] Deep JSON nesting | All POST endpoints | 1000 levels of nested objects | Rejected or parsed without crash | |
| DoS-03 | [ ] Regex DoS (ReDoS) | Search/filter endpoints | Pathological regex input | No user input used in regex | |
| DoS-04 | [ ] Slow POST (Slowloris) | All endpoints | Send headers slowly, 1 byte/sec | Connection timeout kills it | |
| DoS-05 | [ ] Many concurrent connections | Server | 10,000 simultaneous connections | Rate limiter + OS limits handle it | |
| DoS-06 | [ ] Hash collision attack | Login endpoint | Many passwords that hash to same bcrypt prefix | bcrypt is inherently slow; rate limit protects | |
| DoS-07 | [ ] Account lockout abuse | Login endpoint | Lock all known accounts intentionally | Lockout auto-expires; log & alert | |

### 7.9 Additional Security Tests

| # | Test Case | Target | Method | Expected Result | Status |
|---|-----------|--------|--------|-----------------|--------|
| MISC-01 | [ ] HTTP method tampering | All endpoints | Send TRACE, OPTIONS, PATCH | Only defined methods respond, others get 404/405 | |
| MISC-02 | [ ] CORS preflight response | All endpoints | `OPTIONS` with `Origin: https://evil.com` | Not allowed (exact origin match only) | |
| MISC-03 | [ ] Host header injection | Any endpoint | `Host: evil.com` | No effect on application behavior | |
| MISC-04 | [ ] Clickjacking | Login page | Embed in iframe on attacker.com | X-Frame-Options: DENY blocks it | |
| MISC-05 | [ ] Open redirect | Login redirect | `?redirect=https://evil.com` | Redirect only to whitelisted paths | |
| MISC-06 | [ ] HTTP response splitting | Any endpoint | Inject `\r\n` in response header values | Framework sanitizes | |
| MISC-07 | [ ] Information disclosure in errors | Force 500 error | Malformed JSON body | Generic error message, no stack trace | |
| MISC-08 | [ ] Server version disclosure | Any request | Check `Server` header | No version info exposed | |
| MISC-09 | [ ] Source map exposure | Frontend assets | `GET /app.js.map` | 404 (no source maps in production) | |
| MISC-10 | [ ] robots.txt / sitemap.xml | Root | `GET /robots.txt` | Disallow admin paths if public-facing | |

---

## 8. Deployment Hardening

| # | Requirement | Status |
|---|------------|--------|
| DEP-01 | [ ] `NODE_ENV=production` is set | |
| DEP-02 | [ ] `JWT_SECRET` is set via environment variable (not hardcoded, not in .env committed to git) | |
| DEP-03 | [ ] `JWT_SECRET` is at least 64 characters of random data | |
| DEP-04 | [ ] Process runs as non-root user | |
| DEP-05 | [ ] `database.sqlite` has `chmod 600` permissions | |
| DEP-06 | [ ] `.env` file has `chmod 600` permissions | |
| DEP-07 | [ ] Reverse proxy (nginx/caddy) terminates TLS with TLS 1.2+ only | |
| DEP-08 | [ ] HTTP requests are redirected to HTTPS | |
| DEP-09 | [ ] `npm ci --omit=dev` used for production installs (no dev dependencies) | |
| DEP-10 | [ ] Process manager (pm2/systemd) configured for auto-restart on crash | |
| DEP-11 | [ ] Firewall allows only 80/443 inbound | |
| DEP-12 | [ ] Database file is NOT inside the static file serving directory | |
| DEP-13 | [ ] `.git` directory is NOT accessible via the web server | |
| DEP-14 | [ ] Error pages do not reveal framework or version information | |
| DEP-15 | [ ] Automated backup of database file (daily minimum) | |
| DEP-16 | [ ] Log files are written to a directory outside the web root | |
| DEP-17 | [ ] `ulimit` and `maxHeaderSize` configured to prevent resource exhaustion | |

---

## 9. Incident Response Considerations

| # | Scenario | Response Action | Status |
|---|----------|----------------|--------|
| IR-01 | [ ] Mass account lockouts detected | Investigate brute force; consider IP ban at firewall level | |
| IR-02 | [ ] JWT_SECRET compromise suspected | Rotate secret immediately; all users forced to re-authenticate | |
| IR-03 | [ ] Database breach suspected | Reset all password hashes; force password change; notify affected users | |
| IR-04 | [ ] Admin account compromised | Disable account; audit all admin actions since last known good state | |
| IR-05 | [ ] Dependency vulnerability disclosed | Run `npm audit fix`; if critical, deploy patch within 24 hours | |
| IR-06 | [ ] DDoS detected | Enable upstream rate limiting (CDN/WAF); scale horizontally if possible | |

---

## Tool References

| Tool | Purpose | Command |
|------|---------|---------|
| OWASP ZAP | Automated vulnerability scan | `zap-cli quick-scan http://localhost:3000` |
| sqlmap | SQL injection testing | `sqlmap -u "http://localhost:3000/api/auth/login" --data='{"email":"*","password":"test"}' --level=5` |
| Burp Suite | Manual penetration testing | Proxy all requests through Burp |
| jwt_tool | JWT attack testing | `python3 jwt_tool.py <token> -C -d wordlist.txt` |
| nikto | Web server misconfiguration | `nikto -h http://localhost:3000` |
| npm audit | Dependency vulnerability scan | `npm audit --audit-level=high` |
| helmet-csp-header | CSP validation | Browser DevTools > Console (CSP violations) |
| curl | Header verification | `curl -I http://localhost:3000` |

---

## Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Developer | | | |
| Security Reviewer | | | |
| Project Lead | | | |

---

*This document should be reviewed and updated whenever the application's authentication system, dependencies, or deployment architecture changes. Minimum review frequency: quarterly or after any security incident.*
