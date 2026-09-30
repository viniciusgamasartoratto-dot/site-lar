import { env } from "cloudflare:workers";
const COOKIE = "__Host-lar_admin";
const encoder = new TextEncoder();
export function configuration() {
  const username = String(env.ADMIN_USERNAME || "");
  const passwordHash = String(env.ADMIN_PASSWORD_HASH || "");
  if (!username || !/^[a-f0-9]{32}:[a-f0-9]{64}$/.test(passwordHash) || !env.DB) throw new Error("Login administrativo não configurado");
  return { username, passwordHash, db: env.DB };
}
export async function digest(value: string) { return hex(await crypto.subtle.digest("SHA-256", encoder.encode(value))); }
function hex(value: ArrayBuffer) { return Array.from(new Uint8Array(value), byte => byte.toString(16).padStart(2, "0")).join(""); }
export async function verifyPassword(password: string, encoded: string) {
  const [salt, expected] = encoded.split(":");
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const hash = hex(await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 100000, hash: "SHA-256" }, key, 256));
  let difference = hash.length ^ expected.length;
  for (let index = 0; index < hash.length; index++) difference |= hash.charCodeAt(index) ^ expected.charCodeAt(index);
  return difference === 0;
}
export function sessionToken(cookie: string | null) {
  return (cookie || "").split(";").map(value => value.trim()).find(value => value.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1) || "";
}
export async function hasAdminSession(cookie: string | null) {
  const token = sessionToken(cookie);
  if (!/^[a-f0-9]{64}$/.test(token)) return false;
  const { db, passwordHash } = configuration();
  const row = await db.prepare("SELECT auth_version, expires FROM admin_sessions WHERE token_hash = ?").bind(await digest(token)).first<{ auth_version: string; expires: number }>();
  return !!row && row.expires > Date.now() && row.auth_version === await digest(passwordHash);
}
export async function newSession() {
  const { db, passwordHash } = configuration();
  const token = hex(crypto.getRandomValues(new Uint8Array(32)).buffer);
  await db.prepare("INSERT INTO admin_sessions (token_hash, auth_version, expires) VALUES (?, ?, ?)").bind(await digest(token), await digest(passwordHash), Date.now() + 8 * 60 * 60 * 1000).run();
  return `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`;
}
export async function endSession(cookie: string | null) {
  const { db } = configuration();
  await db.prepare("DELETE FROM admin_sessions WHERE token_hash = ?").bind(await digest(sessionToken(cookie))).run();
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}
