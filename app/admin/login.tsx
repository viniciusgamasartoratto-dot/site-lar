"use client";
import { useState, type FormEvent } from "react";
export function AdminLogin() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: data.get("username"), password: data.get("password") }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error);
      window.location.assign("/admin");
    } catch (error) { setError(error instanceof Error ? error.message : "Não foi possível entrar."); setBusy(false); }
  }
  return <section className="section"><div className="container admin-login"><p className="eyebrow">Área administrativa</p><h1>Entrar no painel</h1><p>Use as credenciais de publicação do Lar.</p><form className="admin-form" onSubmit={submit}><label>Usuário<input name="username" autoComplete="username" required maxLength={80} autoCapitalize="none" spellCheck={false} /></label><label>Senha<input name="password" type="password" autoComplete="current-password" required maxLength={256} /></label>{error && <p role="alert" className="admin-feedback admin-error">{error}</p>}<button className="button button-green" disabled={busy}>{busy ? "Entrando…" : "Entrar"}</button><p className="admin-hint">A sessão é encerrada após 8 horas. Em computador compartilhado, use Sair ao terminar.</p></form></div></section>;
}
