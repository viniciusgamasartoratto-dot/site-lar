import type { Metadata } from "next";
import Link from "next/link";
import { AssociateForm } from "../components/AssociateForm";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Como ajudar",
  description: "Conheça as formas de apoiar o Lar Itatibense da Criança com doações e parcerias.",
};

export default function HelpPage() {
  return (
    <>
      <PageHero eyebrow="Como ajudar" title="Encontre seu jeito de ajudar" description="Uma doação ou uma parceria: há diferentes formas de participar do trabalho do Lar." tone="coral" image={{ src: "/images/sobre-maos.jpg", alt: "Mãos reunidas representando cooperação e apoio" }} />
      <section className="section section-soft" id="doar">
        <div className="container section-heading"><p className="eyebrow">Doação por Pix</p><h2 id="pix-title">Escolha para onde deseja contribuir</h2><p>O Lar e o Programa Crê-Ser terão dados Pix diferentes. Escolha o destino da sua doação antes de realizar o pagamento.</p></div>
        <div className="container pix-destinations" aria-labelledby="pix-title">
          {[
            { id: "lar", title: "Pix para o Lar", description: "Apoie o trabalho do Lar Itatibense da Criança", contact: "/#fale-com-o-lar" },
            { id: "cre-ser", title: "Pix para o Crê-Ser", description: "Contribua com as atividades do Programa Crê-Ser", contact: "/programa-cre-ser#contato-cre-ser" },
          ].map(destination => (
            <article className="pix-panel pix-destination" id={`pix-${destination.id}`} key={destination.id} aria-labelledby={`pix-${destination.id}-title`}>
              <h3 id={`pix-${destination.id}-title`}>{destination.title}</h3>
              <p className="pix-destination-description">{destination.description}</p>
              <div className="pix-awaiting"><strong>Dados Pix em preparação</strong><p>O QR Code e o código Pix deste destino serão disponibilizados aqui.</p></div>
              <label htmlFor={`pix-code-${destination.id}`}>Pix Copia e Cola</label>
              <input id={`pix-code-${destination.id}`} type="text" value="Aguardando o código Pix oficial" readOnly disabled />
              <button className="button button-green" type="button" disabled aria-describedby={`pix-pending-${destination.id}`}>Copiar Pix do {destination.id === "lar" ? "Lar" : "Crê-Ser"}</button>
              <p id={`pix-pending-${destination.id}`} className="pix-pending">Disponível após a inclusão dos dados oficiais.</p>
              <Link className="text-link" href={destination.contact}>Falar sobre esta doação →</Link>
            </article>
          ))}
        </div>
        <div className="container pix-guidance"><p>Quando os dados estiverem disponíveis, use o QR Code ou o Pix Copia e Cola do destino escolhido no aplicativo do seu banco. Antes de confirmar, confira o beneficiário e o valor da doação.</p></div>
        <div className="container cards-2 donation-options">
          <article className="info-card"><p className="eyebrow">Doação financeira</p><h2>Quero doar</h2><p>Solicite os dados para doação por telefone ou e-mail.</p><Link className="button button-green" href="/#fale-com-o-lar">Pedir dados para doação</Link></article>
          <article className="info-card" id="parcerias"><p className="eyebrow">Empresas e profissionais</p><h2>Quero construir uma parceria</h2><p>Empresas e profissionais podem apoiar com recursos, serviços ou conhecimento, conforme alinhamento institucional.</p><Link className="button button-green" href="/#fale-com-o-lar">Quero ser parceiro</Link></article>
        </div>
      </section>

<AssociateForm />
<section className="section">
        <div className="container transparency-card">
          <div><p className="eyebrow eyebrow-light">Transparência</p><h2>Acompanhe os documentos do Lar</h2><p>Consulte balanços, estatuto, certidões, certificados e outros registros institucionais.</p></div>
          <Link className="button button-cream" href="/transparencia">Ver transparência</Link>
        </div>
      </section>
    </>
  );
}
