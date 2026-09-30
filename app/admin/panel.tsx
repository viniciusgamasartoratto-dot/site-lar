"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
type Item = { id: string; kind: "pdf" | "banner"; title: string; description: string; category: string; reference: string; link: string; starts: string; ends: string; published: number; url: string; filename: string };
function localDate(value: string) { if (!value) return ""; const date = new Date(value); return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0,16); }
export function AdminPanel() {
  const [kind, setKind] = useState<"pdf" | "banner">("pdf");
  const [items, setItems] = useState<Item[]>([]);
  const [editing, setEditing] = useState<Item | null>(null);
  const [revision, setRevision] = useState(0);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  async function load() {
    setLoading(true);
    try { const response = await fetch("/api/admin/content", { cache: "no-store" }); const data = await response.json(); if (!response.ok) throw new Error(data.error); setItems(data); }
    catch (e) { setError(e instanceof Error ? e.message : "Não foi possível carregar as publicações."); }
    finally { setLoading(false); }
  }
  useEffect(() => { void load(); }, []);
  function reset() { setEditing(null); setRevision(value => value + 1); }
  async function send(data: FormData) {
    const response = await fetch("/api/admin/content", { method: "POST", body: data });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Não foi possível salvar. Tente novamente.");
  }
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    const data = new FormData(event.currentTarget);
    data.set("kind", kind); data.set("id", editing?.id || "");
    for (const name of ["starts", "ends"]) { const value = String(data.get(name) || ""); data.set(name, value ? new Date(value).toISOString() : ""); }
    try { await send(data); reset(); setMessage("Conteúdo salvo. Publicações ativas aparecem no site dentro do período escolhido."); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : "Erro ao salvar. Seus campos foram preservados."); }
    finally { setBusy(false); }
  }
  async function remove(id: string) {
    setBusy(true); setError(""); setMessage("");
    try { const data = new FormData(); data.set("id", id); data.set("action", "delete"); await send(data); setDeleting(null); if (editing?.id === id) reset(); setMessage("Publicação excluída."); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : "Não foi possível excluir."); }
    finally { setBusy(false); }
  }
  const filtered = items.filter(item => item.kind === kind);
  return <div className="admin-panel">
    <div className="admin-switch" aria-label="Tipo de conteúdo">{(["pdf", "banner"] as const).map(value => <button key={value} type="button" className={`button ${kind === value ? "button-green" : "admin-secondary"}`} aria-pressed={kind === value} disabled={busy} onClick={() => { setKind(value); reset(); setError(""); setMessage(""); }}>{value === "pdf" ? "Documentos PDF" : "Banners de eventos"}</button>)}</div>
    {error && <div className="admin-feedback admin-error" role="alert">{error} <button type="button" onClick={() => { setError(""); void load(); }}>Recarregar lista</button></div>}
    {message && <p className="admin-feedback" role="status">{message}</p>}
    <div className="admin-layout"><form ref={formRef} key={`${kind}-${editing?.id || "new"}-${revision}`} className="admin-form" onSubmit={save}>
      <h2>{editing ? "Editar publicação" : kind === "pdf" ? "Adicionar documento" : "Adicionar banner"}</h2>
      <fieldset disabled={busy}><label>Título<input name="title" required maxLength={150} defaultValue={editing?.title} /></label>
      <label>Descrição<textarea name="description" rows={3} maxLength={1500} defaultValue={editing?.description} /></label>
      {kind === "pdf" ? <><label>Categoria<input name="category" maxLength={80} placeholder="Ex.: Balanço, Estatuto, Certidão" defaultValue={editing?.category} /></label><label>Ano ou referência<input name="reference" maxLength={80} placeholder="Ex.: Exercício de 2025" defaultValue={editing?.reference} /></label></> : <><label>Link do evento (opcional)<input name="link" maxLength={1000} placeholder="https://… ou /como-ajudar" defaultValue={editing?.link} /></label><div className="admin-dates"><label>Exibir a partir de<input name="starts" type="datetime-local" defaultValue={localDate(editing?.starts || "")} /></label><label>Exibir até<input name="ends" type="datetime-local" defaultValue={localDate(editing?.ends || "")} /></label></div><p className="admin-hint">Horários do seu dispositivo. Deixe em branco para não limitar o período.</p></>}
      <label>{editing ? "Substituir arquivo (opcional)" : kind === "pdf" ? "Arquivo PDF" : "Imagem do banner"}<input name="file" type="file" required={!editing} accept={kind === "pdf" ? ".pdf,application/pdf" : ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"} /></label>
      <p className="admin-hint">{kind === "pdf" ? "PDF de até 10 MB. Publique apenas documentos aprovados para divulgação." : "JPG, PNG ou WebP de até 5 MB. Prefira imagem horizontal (ex.: 1600 × 600 px). A imagem será exibida inteira, sem corte."}</p>
      {editing && <a href={editing.url} target="_blank" rel="noopener noreferrer">Ver arquivo atual: {editing.filename}</a>}
      <label className="admin-check"><input name="published" type="checkbox" value="1" defaultChecked={editing ? editing.published === 1 : false} />Publicar no site</label><p className="admin-hint">Desmarcado: salva como rascunho, visível apenas no painel.</p>
      <div className="admin-actions"><button className="button button-green" type="submit">{busy ? "Salvando…" : "Salvar conteúdo"}</button>{editing && <button className="button admin-secondary" type="button" onClick={reset}>Cancelar edição</button>}</div></fieldset>
    </form><div className="admin-list"><h2>{kind === "pdf" ? "Documentos cadastrados" : "Banners cadastrados"}</h2><p className="admin-hint">{kind === "pdf" ? "Os documentos anteriores do acervo continuam disponíveis. Esta lista gerencia os arquivos adicionados pelo painel." : "Somente banners publicados e dentro do período aparecem na página inicial."}</p>
    {loading ? <p role="status">Carregando…</p> : !filtered.length ? <p>Nenhum {kind === "pdf" ? "documento" : "banner"} cadastrado pelo painel ainda.</p> : filtered.map(item => { const now = new Date().toISOString(); const status = !item.published ? "Rascunho" : item.starts && item.starts > now ? "Agendado" : item.ends && item.ends < now ? "Encerrado" : "Publicado"; return <article className="admin-item" key={item.id}>{kind === "banner" && <img src={item.url} alt={item.title} />}<span className="document-category">{status}</span><h3>{item.title}</h3><p>{item.filename}</p><div className="admin-actions"><a href={item.url} target="_blank" rel="noopener noreferrer">Visualizar</a><button type="button" disabled={busy} onClick={() => { setEditing(item); setMessage(""); formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>Editar</button><button type="button" disabled={busy} onClick={() => setDeleting(item.id)}>Excluir</button></div>{deleting === item.id && <div className="admin-feedback" role="alert"><p>Excluir “{item.title}” e seu arquivo? Esta ação não pode ser desfeita.</p><div className="admin-actions"><button type="button" disabled={busy} onClick={() => remove(item.id)}>Confirmar exclusão</button><button type="button" disabled={busy} onClick={() => setDeleting(null)}>Cancelar</button></div></div>}</article>; })}</div></div>
  </div>;
}
