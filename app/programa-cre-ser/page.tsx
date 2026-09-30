import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { programHighlights, programSupporters } from "../data/site";

export const metadata: Metadata = {
  title: "Programa Crê-Ser",
  description: "Conheça o Programa Crê-Ser: acompanhamento psicossocial para crianças e famílias da comunidade itatibense em situação de vulnerabilidade.",
};

const faqs = [
  { question: "Quem pode ser atendido pelo Programa Crê-Ser?", answer: "O programa é aberto à comunidade itatibense e atende crianças e famílias que necessitam de acompanhamento especializado diante de situações de vulnerabilidade e risco social." },
  { question: "Como acontece o encaminhamento?", answer: "O programa recebe encaminhamentos de órgãos que atuam com questões relacionadas à infância. Entre em contato com o Lar para orientações sobre encaminhamento." },
  { question: "Qual atendimento é oferecido?", answer: "O programa oferece acompanhamento psicossocial para crianças e suas famílias." },
  { question: "Como posso apoiar o programa?", answer: "Pessoas, empresas e profissionais podem conversar com a instituição sobre doações, voluntariado ou parcerias alinhadas às necessidades atuais do programa." },
] as const;

export default function ProgramPage() {
  return (
    <>
      <PageHero eyebrow="Programa Crê-Ser" title="Ao lado das crianças. Perto das famílias." description="Acompanhamento psicossocial para crianças e famílias da comunidade itatibense expostas a vulnerabilidades e situações de risco social." tone="green" image={{ src: "/images/sobre-maos.jpg", alt: "Mãos reunidas simbolizando apoio, cuidado e trabalho em rede" }} />

      <section className="section">
        <div className="container program-intro-grid">
          <div className="program-intro-logo"><img src="/images/cre-ser-logo.png" alt="Logotipo do Programa Crê-Ser" width="520" height="520" /></div>
          <div className="program-intro-copy">
            <p className="eyebrow">Apresentação</p>
            <h2>Um programa aberto à comunidade e conectado à rede de proteção.</h2>
            <p className="section-lead">O Programa Crê-Ser recebe encaminhamentos de órgãos que atendem questões relacionadas à infância, especialmente quando há exposição a riscos sociais.</p>
            <p>Seu objetivo central é oferecer acompanhamento psicossocial às crianças e às suas famílias quando há necessidade de atendimento especializado.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-heading centered-heading"><p className="eyebrow">Frentes essenciais</p><h2>Escuta, acompanhamento e articulação.</h2></div>
        <div className="container cards-3">
          {programHighlights.map((item) => <article className="info-card" key={item.number}><span className="info-card-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Como funciona</p><h2>Um percurso construído com a família e a rede.</h2></div></div>
        <div className="container process-steps">
          <article className="process-step"><h3>Chegada da demanda</h3><p>A comunidade ou os órgãos ligados à infância procuram orientação e encaminhamento.</p></article>
          <article className="process-step"><h3>Acompanhamento</h3><p>Crianças e famílias recebem acompanhamento psicossocial conforme a necessidade especializada.</p></article>
          <article className="process-step"><h3>Fortalecimento</h3><p>O trabalho busca reduzir vulnerabilidades e apoiar trajetórias familiares e comunitárias.</p></article>
        </div>
      </section>

<section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Galeria institucional</p><h2>Imagens do ambiente de cuidado do Lar.</h2></div></div>
        <div className="container program-gallery">
          <figure><img src="/images/sede-jogos.jpeg" alt="Espaço de jogos da sede" width="720" height="540" loading="lazy" /></figure>
          <figure><img src="/images/sede-convivencia.jpeg" alt="Salão de convivência da sede" width="720" height="540" loading="lazy" /></figure>
        </div>
      </section>

<section className="section">
        <div className="container section-heading centered-heading"><p className="eyebrow">Perguntas frequentes</p><h2>Orientações iniciais sobre o Programa Crê-Ser.</h2></div>
        <div className="container faq-list">
          {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="section section-soft" id="empresas-apoiadoras" aria-labelledby="supporters-title">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">Empresas apoiadoras</p>
          <h2 id="supporters-title">Juntos pelo Programa Crê-Ser.</h2>
          <p className="section-lead">O apoio de empresas contribui para o acompanhamento de crianças e famílias e fortalece o trabalho do programa na comunidade.</p>
        </div>
        {programSupporters.length > 0 && (
          <div className="container program-supporters-grid">
            {programSupporters.map((company) => (
              <article className="program-supporter" key={company.name}>
                {company.logo && <img src={company.logo} alt={company.name} width="220" height="100" loading="lazy" />}
                <h3>{company.name}</h3>
                {company.description && <p>{company.description}</p>}
                {company.url && <a className="text-link" href={company.url} target="_blank" rel="noopener noreferrer">Conhecer a empresa <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        )}
        <div className="container program-supporters-invite">
          <div><h3>Sua empresa também pode apoiar.</h3><p>Converse com a equipe sobre contribuições financeiras, materiais ou serviços para o Programa Crê-Ser.</p></div>
          <Link className="button button-green" href="/#fale-com-o-lar">Quero apoiar o Crê-Ser</Link>
        </div>
      </section>

      <CtaBand eyebrow="Apoie o programa" title="Uma rede forte começa com uma boa conversa." text="Entre em contato para orientar um encaminhamento, propor uma parceria, ser voluntário ou apoiar o Programa Crê-Ser." primaryHref="/#fale-com-o-lar" primaryLabel="Falar com a equipe" secondaryHref="/como-ajudar" secondaryLabel="Ver formas de ajudar" />
    </>
  );
}
