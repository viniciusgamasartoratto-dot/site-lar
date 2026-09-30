import { isAdmin, publicRecord, storage, unavailable, type Publication } from "../../../lib/content";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  if (!await isAdmin(request)) return Response.json({ error: "Entre no painel para continuar." }, { status: 403 });
  try {
    const { results } = await storage().db.prepare("SELECT * FROM publications ORDER BY created DESC").all<Publication>();
    return Response.json(results.map(publicRecord), { headers: { "Cache-Control": "no-store" } });
  } catch (error) { return unavailable(error); }
}
export async function POST(request: Request) {
  if (!await isAdmin(request)) return Response.json({ error: "Entre no painel para continuar." }, { status: 403 });
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Origem inválida." }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) return Response.json({ error: "Arquivo muito grande. Limite: 10 MB." }, { status: 413 });
  try {
    const data = await request.formData();
    const { db, bucket } = storage();
    const id = String(data.get("id") || "");
    const old = id ? await db.prepare("SELECT * FROM publications WHERE id = ?").bind(id).first<Publication>() : null;
    if (id && !old) return Response.json({ error: "Publicação não encontrada." }, { status: 404 });
    if (data.get("action") === "delete") {
      if (!old) return Response.json({ error: "Selecione uma publicação." }, { status: 400 });
      await db.prepare("DELETE FROM publications WHERE id = ?").bind(id).run();
      await bucket.delete(old.file_key);
      return Response.json({ ok: true });
    }
    const kind = String(data.get("kind"));
    const title = String(data.get("title") || "").trim();
    const description = String(data.get("description") || "").trim();
    const category = String(data.get("category") || "").trim();
    const reference = String(data.get("reference") || "").trim();
    const link = String(data.get("link") || "").trim();
    const starts = String(data.get("starts") || "");
    const ends = String(data.get("ends") || "");
    const validDate = (value: string) => !value || (!isNaN(Date.parse(value)) && new Date(value).toISOString() === value);
    const validLink = !link || /^https:\/\//i.test(link) || (/^\/(?!\/)/.test(link) && !link.includes("\\"));
    if (!["pdf", "banner"].includes(kind) || (old && old.kind !== kind) || !title || title.length > 150 || description.length > 1500 || category.length > 80 || reference.length > 80 || link.length > 1000 || !validLink || !validDate(starts) || !validDate(ends) || (starts && ends && starts > ends)) {
      return Response.json({ error: "Confira o título, os limites dos campos, o link (https://) e o período de exibição." }, { status: 400 });
    }
    let key = old?.file_key, mime = old?.mime, filename = old?.filename, size = old?.size;
    const file = data.get("file");
    let newKey: string | undefined;
    if (file instanceof File && file.size > 0) {
      if (file.size > (kind === "pdf" ? 10 : 5) * 1024 * 1024) return Response.json({ error: `Limite: ${kind === "pdf" ? 10 : 5} MB.` }, { status: 400 });
      const bytes = new Uint8Array(await file.arrayBuffer());
      const text = new TextDecoder("latin1").decode(bytes.slice(0, 12));
      mime = text.startsWith("%PDF-") ? "application/pdf" : bytes[0] === 137 && text.slice(1, 4) === "PNG" ? "image/png" : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255 ? "image/jpeg" : text.startsWith("RIFF") && text.slice(8) === "WEBP" ? "image/webp" : "";
      if (!mime || (kind === "pdf" ? mime !== "application/pdf" : !mime.startsWith("image/"))) return Response.json({ error: "Envie um PDF válido ou uma imagem JPG, PNG ou WebP, conforme o cadastro." }, { status: 400 });
      newKey = `publications/${crypto.randomUUID()}`;
      key = newKey; size = file.size; filename = file.name.replace(/[\x00-\x1f\x7f]/g, "").slice(0, 180) || "arquivo";
      await bucket.put(key, bytes, { httpMetadata: { contentType: mime } });
    }
    if (!key) return Response.json({ error: "Selecione um arquivo." }, { status: 400 });
    const now = new Date().toISOString();
    const published = data.get("published") === "1" ? 1 : 0;
    try {
      await db.prepare("INSERT INTO publications (id,kind,title,description,category,reference,link,starts,ends,published,file_key,filename,mime,size,created,updated) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET title=excluded.title,description=excluded.description,category=excluded.category,reference=excluded.reference,link=excluded.link,starts=excluded.starts,ends=excluded.ends,published=excluded.published,file_key=excluded.file_key,filename=excluded.filename,mime=excluded.mime,size=excluded.size,updated=excluded.updated")
        .bind(id || crypto.randomUUID(), kind, title, description, category, reference, link, starts, ends, published, key, filename, mime, size, old?.created || now, now).run();
    } catch (error) { if (newKey) await bucket.delete(newKey); throw error; }
    if (newKey && old) await bucket.delete(old.file_key);
    return Response.json({ ok: true });
  } catch (error) { return unavailable(error); }
}
