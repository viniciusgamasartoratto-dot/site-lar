import type { MetadataRoute } from "next";

const routes = ["", "/programa-cre-ser", "/estrutura", "/como-ajudar", "/parceiros", "/diretoria", "/transparencia", "/contato"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://lar-itatibense-da-crianca.viniciusgamasartorat.chatgpt.site";
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/programa-cre-ser" ? .9 : .7 }));
}
