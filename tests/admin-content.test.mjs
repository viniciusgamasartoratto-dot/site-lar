import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Integration checks against a LOCAL preview only. Never run on production.
const base = "http://localhost:3000";
const admin = { origin: base, cookie: "" };
const endpoint = `${base}/api/admin/content`;
const created = [];
async function list() { const r = await fetch(endpoint, { headers: admin }); assert.equal(r.status, 200); return r.json(); }
async function write(data, headers = admin) { return fetch(endpoint, { method: "POST", headers, body: data }); }
function form(kind, title) { const d = new FormData(); d.set("kind", kind); d.set("title", title); return d; }
try {
  assert.equal((await fetch(endpoint)).status, 403);
  assert.equal((await fetch(endpoint, { headers: { "oai-authenticated-user-id": "forged", "oai-authenticated-user-email": "viniciusgamasartoratto@gmail.com" } })).status, 403);
  async function login(password = "Local-only-test-password-7!") { return fetch(`${base}/api/admin/login`, { method: "POST", headers: { origin: base, "Content-Type": "application/json" }, body: JSON.stringify({ username: "local-test", password }) }); }
  assert.equal((await login("wrong")).status, 401);
  const authenticated = await login(); assert.equal(authenticated.status, 200, await authenticated.text());
  const cookie = authenticated.headers.get("set-cookie"); assert.match(cookie, /HttpOnly/); assert.match(cookie, /Secure/); assert.match(cookie, /SameSite=Strict/); admin.cookie = cookie.split(";")[0];
  assert.equal((await write(form("pdf", "forbidden"), { ...admin, origin: "https://other.example" })).status, 403);
  const invalid = form("pdf", "invalid"); invalid.set("file", new Blob(["not a pdf"]), "invalid.pdf");
  assert.equal((await write(invalid)).status, 400);
  for (const kind of ["pdf", "banner"]) {
    const title = `LOCAL TEST ${kind} ${Date.now()}`;
    const data = form(kind, title);
    const bytes = await readFile(new URL(kind === "pdf" ? "../public/documentos/balanco.pdf" : "../public/images/sobre-maos.jpg", import.meta.url));
    data.set("file", new Blob([bytes]), kind === "pdf" ? "teste.pdf" : "teste.jpg");
    const saved = await write(data); assert.equal(saved.status, 200, await saved.text());
    const item = (await list()).find(row => row.title === title); assert.ok(item); created.push(item.id);
    assert.equal((await fetch(base + item.url)).status, 404);
    assert.equal((await fetch(base + item.url, { headers: admin })).status, 200);
    data.delete("file"); data.set("id", item.id); data.set("published", "1");
    assert.equal((await write(data)).status, 200);
    let visible = await (await fetch(`${base}/api/content?kind=${kind}`)).json(); assert.ok(visible.some(row => row.id === item.id));
    const download = await fetch(base + item.url + "?download=1"); assert.equal(download.status, 200); assert.match(download.headers.get("content-disposition"), /attachment/); assert.equal((await download.arrayBuffer()).byteLength, bytes.byteLength);
    data.set("starts", "2099-01-01T00:00:00.000Z"); assert.equal((await write(data)).status, 200);
    visible = await (await fetch(`${base}/api/content?kind=${kind}`)).json(); assert.ok(!visible.some(row => row.id === item.id));
    data.set("starts", ""); data.set("ends", "2000-01-01T00:00:00.000Z"); assert.equal((await write(data)).status, 200);
    assert.equal((await fetch(base + item.url)).status, 404);
    console.log(`${kind}: upload, draft protection, publish, download and scheduling passed`);
  }
  const page = await fetch(`${base}/admin`, { headers: admin }); assert.equal(page.status, 200); assert.match(await page.text(), /Publicar e cuidar/);
  assert.match(await (await fetch(`${base}/admin`)).text(), /Entrar no painel/);
  console.log("Admin access and validation checks passed");
} finally {
  for (const id of created) { const data = new FormData(); data.set("id", id); data.set("action", "delete"); const deleted = await write(data); assert.equal(deleted.status, 200); }
  if (admin.cookie) {
    const logout = await fetch(`${base}/api/admin/logout`, { method: "POST", headers: admin, redirect: "manual" }); assert.equal(logout.status, 303);
    assert.equal((await fetch(endpoint, { headers: admin })).status, 403);
    console.log("Logout revokes server session");
  }
}
