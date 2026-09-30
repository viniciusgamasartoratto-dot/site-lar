"use client";

import { FormEvent, useState } from "react";
import { site } from "../data/site";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("company")) return;
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "Contato pelo site");
    const body = String(form.get("message") || "");
    const mailBody = `Nome: ${name}\nE-mail: ${email}\n\n${body}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    setMessage("Seu aplicativo de e-mail foi aberto. Revise a mensagem e confirme o envio.");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Nome completo<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
      </div>
      <label>Assunto<select name="subject" defaultValue="Contato pelo site">
        <option>Contato pelo site</option>
        <option>Quero apoiar o Programa Crê-Ser</option>
        <option>Quero fazer uma doação</option>
        <option>Quero ser voluntário</option>
        <option>Quero ser parceiro</option>
        <option>Encaminhamento ao Programa Crê-Ser</option>
      </select></label>
      <label>Mensagem<textarea name="message" required rows={6} maxLength={2000} /></label>
      <label className="honeypot" aria-hidden="true">Empresa<input name="company" tabIndex={-1} autoComplete="off" /></label>
      <p className="form-note">Ao enviar, a mensagem será preparada no seu aplicativo de e-mail. Nenhum dado é armazenado neste site.</p>
      <button className="button button-green" type="submit">Preparar mensagem</button>
      <p className="form-status" aria-live="polite">{message}</p>
    </form>
  );
}
