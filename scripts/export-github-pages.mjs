import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { register } from "node:module";
import { dirname, resolve } from "node:path";

register("../tests/cloudflare-test-loader.mjs", import.meta.url);

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "pages-dist");
const repositoryPath = "/site-lar";
const routes = [
  "/",
  "/sobre-o-lar",
  "/programa-cre-ser",
  "/estrutura",
  "/como-ajudar",
  "/salao",
  "/diretoria",
  "/transparencia",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", String(Date.now()));
const { default: worker } = await import(workerUrl.href);

function pageUrl(pathname) {
  if (pathname === "/") return `${repositoryPath}/`;
  return `${repositoryPath}${pathname}/`;
}

function rewriteHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, tag => tag.includes('src="/scripts/associate-form.js"') && tag.includes('data-associate-form="true"') ? tag : "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\b(href|src)="\/([^\"]*)"/g, (match, attribute, target) => {
      if (!target) return `${attribute}="${repositoryPath}/"`;
      if (target.startsWith("#")) return `${attribute}="${repositoryPath}/${target}"`;
      const [pathAndQuery, hash = ""] = target.split("#", 2);
      const cleanPath = pathAndQuery.split("?", 1)[0];
      const isPage = routes.includes(`/${cleanPath}`);
      const suffix = isPage && !pathAndQuery.endsWith("/") ? "/" : "";
      return `${attribute}="${repositoryPath}/${pathAndQuery}${suffix}${hash ? `#${hash}` : ""}"`;
    })
    .replaceAll("http://localhost", `https://viniciusgamasartoratto-dot.github.io${repositoryPath}`);
}

for (const pathname of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  if (!response.ok) throw new Error(`Falha ao exportar ${pathname}: ${response.status}`);
  const destination = pathname === "/"
    ? resolve(output, "index.html")
    : resolve(output, pathname.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, rewriteHtml(await response.text()));
}

await writeFile(resolve(output, ".nojekyll"), "");
await writeFile(resolve(output, "404.html"), rewriteHtml(await (await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
)).text()));

console.log(`GitHub Pages exportado em ${output}`);
