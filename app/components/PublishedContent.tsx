"use client";
import { useEffect, useState } from "react";
type Item = { id: string; title: string; description: string; category: string; reference: string; link: string; url: string; size: number; updated: string };
export function PublishedContent({ kind }: { kind: "pdf" | "banner" }) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  async function load() {
    setError(false); setLoading(true);
    try { const response = await fetch(`/api/content?kind=${kind}`, { cache: "no-store" }); if (!response.ok) throw new Error(); setItems(await response.json()); }
    catch { setError(true); } finally { setLoading(false); }
  }
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/content?kind=${kind}`, { cache: "no-store", signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("Conteúdo indisponível");
        return response.json() as Promise<Item[]>;
      })
      .then(result => {
        if (!controller.signal.aborted) { setItems(result); setError(false); }
      })
      .catch(() => { if (!controller.signal.aborted) setError(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [kind]);
  if (error) return <div className="container content-feedback" role="status">Não foi possível carregar {kind === "pdf" ? "os novos documentos" : "os eventos"}. <button type="button" className="text-link" onClick={load}>Tentar novamente</button></div>;
  if (loading) return null;
  if (!items.length) return null;
  if (kind === "banner") return <section className="section events-section" aria-labelledby="events-heading"><div className="container"><p className="eyebrow">Acontece no Lar</p><h2 id="events-heading">Eventos e encontros</h2><div className="event-grid">{items.map(item => <article className="event-card" id={`evento-${item.id}`} key={item.id}><img src={item.url} alt={item.title} loading="lazy" /><div><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}{item.link && <a className="button button-green" href={item.link}>Saiba mais sobre o evento</a>}</div></article>)}</div></div></section>;
  return <div className="container uploaded-documents"><h2>Documentos publicados pela equipe</h2><div className="document-grid">{items.map(item => <article className="document-card" key={item.id}><span className="document-category">{item.category || "Documento institucional"}</span><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}<dl className="document-meta"><div><dt>Referência</dt><dd>{item.reference || "Não informada"}</dd></div><div><dt>Arquivo</dt><dd>PDF · {(item.size / 1024 / 1024).toFixed(1)} MB</dd></div></dl><div className="document-actions"><a className="document-action" href={item.url} target="_blank" rel="noopener noreferrer">Visualizar PDF</a><a className="document-download" href={`${item.url}?download=1`} download>Baixar PDF</a></div></article>)}</div></div>;
}
