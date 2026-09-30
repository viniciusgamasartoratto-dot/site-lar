import { isVisible, publicRecord, storage, unavailable, type Publication } from "../../lib/content";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const kind = new URL(request.url).searchParams.get("kind");
  if (kind !== "pdf" && kind !== "banner") return Response.json({ error: "Tipo inválido" }, { status: 400 });
  try {
    const { results } = await storage().db.prepare("SELECT * FROM publications WHERE kind = ? AND published = 1 ORDER BY created DESC").bind(kind).all<Publication>();
    return Response.json(results.filter((row) => isVisible(row)).map(publicRecord), { headers: { "Cache-Control": "no-store" } });
  } catch (error) { return unavailable(error); }
}
