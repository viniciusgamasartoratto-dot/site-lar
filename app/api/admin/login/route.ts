import { configuration, digest, newSession, verifyPassword } from "../../../lib/admin-auth";
export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origem inválida." }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 2048) return Response.json({ error: "Dados inválidos." }, { status: 400 });
  try {
    const { db, username, passwordHash } = configuration();
    const now = Date.now(), window = Math.floor(now / 900000);
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const keys = [`ip:${await digest(passwordHash + ip)}:${window}`, `account:${window}`];
    const counts = await db.batch(keys.map(key => db.prepare("INSERT INTO login_attempts (key, count, expires) VALUES (?, 1, ?) ON CONFLICT(key) DO UPDATE SET count = count + 1 RETURNING count").bind(key, (window + 1) * 900000)));
    if (counts[0].results[0].count > 10 || counts[1].results[0].count > 50) return Response.json({ error: "Muitas tentativas. Aguarde 15 minutos e tente novamente." }, { status: 429, headers: { "Retry-After": "900" } });
    const data = await request.json();
    if (typeof data.username !== "string" || typeof data.password !== "string" || data.password.length > 256 || data.username.length > 80) return Response.json({ error: "Usuário ou senha inválidos." }, { status: 400 });
    const correct = await verifyPassword(data.password, passwordHash);
    if (!correct || data.username !== username) return Response.json({ error: "Usuário ou senha incorretos." }, { status: 401 });
    await db.batch([db.prepare("DELETE FROM admin_sessions WHERE expires < ?").bind(now), db.prepare("DELETE FROM login_attempts WHERE expires < ?").bind(now)]);
    return Response.json({ ok: true }, { headers: { "Set-Cookie": await newSession(), "Cache-Control": "no-store" } });
  } catch (error) { console.error("Admin login failed", error); return Response.json({ error: "Não foi possível entrar. Tente novamente em instantes." }, { status: 503 }); }
}
