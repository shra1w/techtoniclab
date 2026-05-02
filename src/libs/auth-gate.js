'use client';

// ──────────────────────────────────────────────────────────────────────
// Author key gate (UI-only).
//
// IMPORTANT: this is a *UI gate*, not real authentication. Real security
// is enforced by the fact that publishing requires a Git commit to the
// repo — which the public cannot do. This gate just stops casual visitors
// from reaching the editor.
//
// Configure your key by setting NEXT_PUBLIC_BLOG_AUTHOR_KEY_HASH in
// Vercel → Project → Settings → Environment Variables.
//
// Generate the hash with one of:
//   • bash:   echo -n "YOUR_KEY" | sha256sum
//   • node:   node -e "console.log(require('crypto').createHash('sha256').update('YOUR_KEY').digest('hex'))"
//
// Default key (dev only):  techtonic-author-2026
// ──────────────────────────────────────────────────────────────────────

const SESSION_KEY = 'techtonic.blog.author.token';
const SESSION_VALUE = 'authorized';

const DEFAULT_HASH =
  '6495af36ca091f4bdf78ea8edefda81736846d18ac0a936c227d8dbf878af0f6';

const EXPECTED_HASH = (
  process.env.NEXT_PUBLIC_BLOG_AUTHOR_KEY_HASH || DEFAULT_HASH
).toLowerCase();

export async function hashKey(key) {
  if (typeof key !== 'string' || key.length === 0) {
    throw new Error('hashKey: key must be a non-empty string');
  }
  if (!globalThis.crypto?.subtle) {
    throw new Error('hashKey: SubtleCrypto is unavailable in this environment');
  }
  const bytes = new TextEncoder().encode(key);
  const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyKey(key) {
  const hash = await hashKey(key);
  return hash === EXPECTED_HASH;
}

export function isAuthorized() {
  if (typeof window === 'undefined') return false;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === SESSION_VALUE;
  } catch {
    return false;
  }
}

export function grantAccess() {
  if (typeof window === 'undefined') {
    throw new Error('grantAccess: must run in the browser');
  }
  window.sessionStorage.setItem(SESSION_KEY, SESSION_VALUE);
}

export function revokeAccess() {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(SESSION_KEY);
}