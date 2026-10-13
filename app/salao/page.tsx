import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../data/site";
import "./salao.css";

const title = "Salão de eventos";
const description = "Realize seu evento no salão do Lar Itatibense da Criança. O aluguel do espaço arrecada recursos para apoiar o trabalho da instituição.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title: `${title} | ${site.name}`, description },
  twitter: { title: `${title} | ${site.name}`, description },
};

const inquiry = `mailto:${site.email}?subject=${encodeURIComponent("Consulta sobre aluguel do salão")}&body=${encodeURIComponent("Olá! Gostaria de saber mais sobre o aluguel do salão do Lar.\n\nNome:\nTelefone:\nTipo de evento:\nData desejada:\nNúmero estimado de convidados:\n\nObrigado!")}`;

export default function SalaoPage() {
  return (
    <div className="salao-page">
      <section className="salao-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Trilha de navegação"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>Salão de eventos</span></nav>
          <div className="salao-hero-grid">
            <div>
              <p className="eyebrow">Salão de eventos · Lar Itatibense</p>
              <h1>Seu encontro pode fazer <em>a diferença</em></h1>
              <p className="salao-intro">Um espaço para realizar seu evento. Uma forma de contribuir com o Lar.</p>
              <p>Ao alugar nosso salão de eventos, você ajuda a arrecadar recursos para o trabalho do Lar Itatibense da Criança.</p>
              <div className="button-row"><a className="button button-coral" href="#consultar-salao">Consultar disponibilidade</a><a className="salao-link" href="#como-alugar">Como alugar <span aria-hidden="true">↓</span></a></div>
            </div>
            <aside className="salao-purpose" aria-label="O propósito do aluguel">
              <span className="salao-symbol" aria-hidden="true">✳</span>
              <p className="eyebrow">Encontros que ajudam</p>
              <h2>Você reúne pessoas<br />Juntos, apoiamos o Lar</h2>
              <p>A renda do aluguel contribui para a continuidade das atividades da instituição em favor de crianças e adolescentes.</p>
              <span className="salao-purpose-signature">Celebrar também é uma forma de cuidar.</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="como-alugar" aria-labelledby="salao-steps-title">
        <div className="container">
          <p className="eyebrow">Planeje seu evento</p>
          <h2 id="salao-steps-title">Vamos conversar sobre o seu encontro?</h2>
          <p className="salao-section-intro">A equipe do Lar orienta você sobre a disponibilidade e as condições de locação.</p>
          <div className="salao-steps">
            <article><span>01</span><h3>Conte sua ideia</h3><p>Informe o tipo de evento, a data desejada e uma estimativa de convidados.</p></article>
            <article><span>02</span><h3>Conheça as condições</h3><p>Consulte valores, capacidade, horários, estrutura disponível e regras de uso diretamente com a equipe.</p></article>
            <article><span>03</span><h3>Combine os detalhes</h3><p>Converse sobre uma visita ao espaço e receba as orientações para confirmar a locação.</p></article>
          </div>
        </div>
      </section>

      <section className="section salao-contact-section" id="consultar-salao" aria-labelledby="salao-contact-title">
        <div className="container salao-contact">
          <div><p className="eyebrow">Fale com o Lar</p><h2 id="salao-contact-title">Seu próximo evento começa com uma conversa</h2><p>Entre em contato para consultar datas e solicitar informações sobre o aluguel do salão.</p><p className="salao-contact-note">A disponibilidade e a reserva são confirmadas pela equipe do Lar.</p></div>
          <div className="salao-contact-card"><h3>Consulte datas e valores</h3><a className="button button-green" href={inquiry}>Solicitar informações por e-mail</a><p>Prefere ligar?</p>{site.phones.map((phone, index) => <a className="salao-phone" href={`tel:${site.phoneLinks[index]}`} key={phone}>{phone}</a>)}<a className="salao-email" href={inquiry}>{site.email}</a></div>
        </div>
      </section>
    </div>
  );
}
