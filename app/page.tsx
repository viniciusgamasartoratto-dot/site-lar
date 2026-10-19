import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "./components/CtaBand";
import { ProgramHero } from "./components/ProgramHero";
import { PublishedContent } from "./components/PublishedContent";
import { HomeCarousel } from "./components/HomeCarousel";
import { institutionalFacts, programHighlights, structureImages } from "./data/site";

export const metadata: Metadata = {
  title: "Acolhimento e proteção desde 1952",
  description: "Conheça o Lar Itatibense da Criança, o Programa Crê-Ser e as formas de apoiar o cuidado de crianças, adolescentes e famílias em Itatiba.",
};

export default function Home() {
  return (
    <>
      <HomeCarousel><ProgramHero showProgramLink /></HomeCarousel>

      <PublishedContent kind="banner" />
      <section className="section intro-section">
        <div className="container welcome-layout">
          <figure className="welcome-photo"><img src="/images/recepcao.jpg" alt="Fachada do prédio administrativo do Lar Itatibense" width="600" height="400" loading="lazy" /></figure>
          <div className="welcome-content">
          <div>
            <p className="eyebrow">Sobre o Lar</p>
            <h2>Bem-vindo ao Lar Itatibense da Criança</h2>
          </div>
          <div className="lead-copy">
            <p>Desde 30 de julho de 1952, o Lar Itatibense da Criança atua no acolhimento institucional de crianças e adolescentes encaminhados pelo Poder Judiciário como medida de proteção.</p>
            <p>Organização sem fins lucrativos e de utilidade pública, é administrada por uma diretoria com apoio dos conselhos deliberativo e fiscal.</p>
            <Link className="text-link" href="/sobre-o-lar">Conheça nossa história <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        </div>
        <div className="container facts-grid">
          {institutionalFacts.map((fact, index) => (
            <article className={`fact-card fact-card-${index + 1}`} key={fact.value}>
              <p className="eyebrow">{fact.eyebrow}</p>
              <div className="fact-value"><strong>{fact.value}</strong>{"suffix" in fact ? <span>{fact.suffix}</span> : null}</div>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section program-feature">
        <div className="container program-feature-shell">
          <div className="program-feature-heading">
            <figure className="program-home-photo program-home-symbol"><img src="/images/cre-ser-logo.png" alt="Símbolo do Programa Crê-Ser" width="540" height="540" loading="lazy" /></figure>
            <div>
              <p className="eyebrow">Programa Crê-Ser</p>
              <h2>Cuidar de uma criança também é apoiar sua família</h2>
              <p className="section-lead">A iniciativa recebe encaminhamentos de órgãos ligados à infância e acompanha crianças e famílias expostas a riscos sociais.</p>
            </div>
          </div>
          <div className="program-cards">
            {programHighlights.map((item) => (
              <article key={item.number} className="number-card">
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="feature-action">
            <p>Quer orientar um encaminhamento, apoiar a iniciativa ou construir uma parceria?</p>
            <Link className="button button-green" href="/programa-cre-ser">Ver página completa do programa</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row">
          <div><p className="eyebrow">Como ajudar</p><h2>Há muitas formas de estar presente</h2></div>
          <p>Doações e parcerias ajudam o Lar a manter um cuidado contínuo e responsável.</p>
        </div>
        <div className="container cards-2 help-options">
          <article className="help-card help-card-green"><h3>Faça uma doação</h3><p>Contribua financeiramente ou converse com o Lar sobre os materiais necessários no momento.</p><Link href="/como-ajudar#doar">Quero doar →</Link></article>
          <article className="help-card help-card-blue"><h3>Construa uma parceria</h3><p>Aproxime sua empresa ou especialidade profissional de uma instituição comprometida com a infância.</p><Link href="/como-ajudar#parcerias">Quero ser parceiro →</Link></article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-heading-row">
          <div><p className="eyebrow">Nosso espaço</p><h2>Conheça nosso espaço</h2></div>
          <Link className="text-link" href="/estrutura">Conheça toda a estrutura <span aria-hidden="true">→</span></Link>
        </div>
        <div className="container gallery-preview">
          {structureImages.slice(0, 4).map((image, index) => (
            <figure key={image.src} className={index === 0 ? "gallery-featured" : undefined}>
              <img src={image.src} alt={image.alt} width="720" height="540" loading="lazy" decoding="async" />
              
            </figure>
          ))}
        </div>
      </section>

<section className="section transparency-preview">
        <div className="container transparency-card">
          <div><p className="eyebrow eyebrow-light">Transparência</p><h2>Nosso trabalho, de portas abertas</h2><p>Consulte documentos institucionais, certificações, balanços, estatuto e registros de governança.</p></div>
          <Link className="button button-cream" href="/transparencia">Acessar documentos</Link>
        </div>
      </section>

      <CtaBand title="Tem um lugar para você nesta história" text="Converse com a nossa equipe e descubra como participar do dia a dia do Lar." primaryHref="/como-ajudar" primaryLabel="Quero ajudar" secondaryHref="/#fale-com-o-lar" secondaryLabel="Falar com o Lar" />
    </>
  );
}
