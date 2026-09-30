import { headers } from "next/headers";
import { hasAdminSession } from "../lib/admin-auth";
import { AdminLogin } from "./login";
import { AdminPanel } from "./panel";
export const dynamic = "force-dynamic";
export const metadata = { title: "Administração", robots: { index: false, follow: false } };
export default async function AdminPage() {
  let authenticated = false;
  try { authenticated = await hasAdminSession((await headers()).get("cookie")); }
  catch (error) { console.error("Admin session unavailable", error); }
  if (!authenticated) return <AdminLogin />;
  return <section className="section admin-section"><div className="container"><div className="admin-heading"><p className="eyebrow">Administração do Lar</p><form action="/api/admin/logout" method="post"><button className="button admin-secondary">Sair do painel</button></form></div><h1>Publicar e cuidar do conteúdo.</h1><p>Cadastre documentos para a Transparência e banners de eventos para a página inicial.</p><AdminPanel /></div></section>;
}
