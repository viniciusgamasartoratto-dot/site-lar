import { isAdmin, isVisible, storage, unavailable, type Publication } from "../../../lib/content";
export const dynamic = "force-dynamic";
export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const { db, bucket } = storage();
    const row = await db.prepare("SELECT * FROM publications WHERE id = ?").bind(id).first<Publication>();
    if (!row || (!isVisible(row) && !await isAdmin(request))) return new Response("Arquivo não encontrado", { status: 404 });
    const object = await bucket.get(row.file_key);
    if (!object) return new Response("Arquivo não encontrado", { status: 404 });
    const download = new URL(request.url).searchParams.has("download");
    return new Response(object.body, { headers: {
      "Content-Type": row.mime,
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename*=UTF-8''${encodeURIComponent(row.filename)}`,
      "X-Content-Type-Options": "nosniff", "Cache-Control": "private, no-store",
      "Content-Security-Policy": "sandbox",
    } });
  } catch (error) { return unavailable(error); }
}
