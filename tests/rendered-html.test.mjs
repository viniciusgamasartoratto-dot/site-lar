import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { register } from "node:module";

register("./cloudflare-test-loader.mjs", import.meta.url);

const root = new URL("../", import.meta.url);
const routes = [
  "/",
  "/sobre-o-lar",
  "/programa-cre-ser",
  "/estrutura",
  "/como-ajudar",
  "/diretoria",
  "/transparencia",
];

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) files.push(...await sourceFiles(url));
    else if (/\.(tsx?|css|md)$/.test(entry.name)) files.push(url);
  }
  return files;
}

test("renders every institutional route", async () => {
  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
    const html = await response.text();
    assert.match(html, /Lar Itatibense/, route);
    assert.match(html, /Programa Crê-Ser/, route);
  }
});

test("keeps the program prominent and exclusive", async () => {
  const home = await (await render("/")).text();
  const program = await (await render("/programa-cre-ser")).text();
  assert.match(home, /Conheça o Programa Crê-Ser/);
  assert.match(program, /acompanhamento psicossocial/i);
  assert.doesNotMatch(program, /Espaço preparado|após validação|fonte consultada/i);
  assert.doesNotMatch(`${home}\n${program}`, /Projeto Crê-Ser/i);
});

test("contains no retired content or starter preview", async () => {
  const files = await sourceFiles(new URL("../app/", import.meta.url));
  const source = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
  const retired = /Voltei e Agora|Grupo de Orientação de Pais|EnLaço|Dindos do Lar|Parceiros da Infância|Projeto Crê-Ser|\bProjetos\b/i;
  assert.doesNotMatch(source, retired);
  assert.doesNotMatch(source, /codex-preview|SkeletonPreview|Lorem ipsum/i);
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
});

test("ships SEO and editing guidance", async () => {
  const [layout, readme, sitemap] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
  ]);
  assert.match(layout, /openGraph/);
  assert.match(layout, /summary_large_image/);
  assert.match(readme, /Onde editar/);
  assert.match(readme, /Informações a confirmar/);
  assert.match(sitemap, /programa-cre-ser/);
});

test("publishes a valid downloadable balance PDF", async () => {
  const response = await render("/transparencia");
  const html = await response.text();
  assert.match(html, /href="\/documentos\/balanco\.pdf" download/);
  assert.match(html, /Balanço patrimonial/);
  const pdf = await readFile(new URL("../public/documentos/balanco.pdf", import.meta.url));
  assert.equal(pdf.subarray(0, 4).toString("ascii"), "%PDF");
  assert.ok(pdf.length > 100_000);
});

test("shows the directors with official photos and simplifies the home facts", async () => {
  const board = await (await render("/diretoria")).text();
  const home = await (await render("/")).text();
  assert.match(board, /\/images\/diretoria\/washington-panzarin\.jpg/);
  assert.match(board, /Foto de Washington Panzarin/);
  assert.match(board, /\/images\/diretoria\/jose-sesti\.jpg/);
  assert.match(home, /Nossa história/);
  assert.match(home, /Quem acolhemos/);
  assert.doesNotMatch(home, /vagas de capacidade estrutural/i);
});
