import { env } from "cloudflare:workers";

import { hasAdminSession } from "./admin-auth";
export type Publication = {
  id: string; kind: "pdf" | "banner"; title: string; description: string;
  category: string; reference: string; link: string; starts: string; ends: string;
  published: number; file_key: string; filename: string; mime: string; size: number;
  created: string; updated: string;
};
export function storage() {
  if (!env.DB || !env.BUCKET) throw new Error("Armazenamento indisponível");
  return { db: env.DB, bucket: env.BUCKET };
}
export async function isAdmin(request: Request) {
  try { return await hasAdminSession(request.headers.get("cookie")); }
  catch (error) { console.error("Admin authorization unavailable", error); return false; }
}
export function isVisible(row: Publication, now = new Date().toISOString()) {
  return row.published === 1 && (!row.starts || row.starts <= now) && (!row.ends || row.ends >= now);
}
export function publicRecord(row: Publication) {
  const { file_key, ...record } = row;
  return { ...record, url: `/api/files/${row.id}` };
}
export function unavailable(error: unknown) {
  console.error("Content storage failed", error);
  return Response.json({ error: "Não foi possível acessar os arquivos. Tente novamente em instantes." }, { status: 503 });
}
