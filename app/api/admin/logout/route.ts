import { endSession } from "../../../lib/admin-auth";
export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return new Response("Origem inválida", { status: 403 });
  try { return new Response(null, { status: 303, headers: { Location: "/admin", "Set-Cookie": await endSession(request.headers.get("cookie")), "Cache-Control": "no-store" } }); }
  catch { return new Response("Não foi possível encerrar a sessão. Tente novamente.", { status: 503 }); }
}
