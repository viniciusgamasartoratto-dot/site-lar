import Link from "next/link";
import { ProgramHeroPhotos } from "./ProgramHeroPhotos";
import { programIndicators as indicators } from "../data/program";

export function ProgramHero({ showProgramLink = false }: { showProgramLink?: boolean }) {
  return (
      <section className="page-hero page-hero-green cre-program-hero" aria-labelledby="cre-hero-title">
        <ProgramHeroPhotos />
        <div className="container">
          {!showProgramLink && <nav className="breadcrumbs" aria-label="Trilha de navegação"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>Programa Crê-Ser</span></nav>}
          <div className="cre-hero-heading">
            <div>
              <p className="eyebrow">Programa Crê-Ser</p>
              <h1 id="cre-hero-title">Cuidar, fortalecer vínculos e ampliar possibilidades</h1>
              <p className="hero-description">Uma frente preventiva e comunitária do Lar Itatibense da Criança que integra educação, saúde, cultura e apoio às famílias.</p>
            </div>
            <div className="cre-hero-symbol"><img src="/images/cre-ser-logo.png" alt="Símbolo do Programa Crê-Ser" width="520" height="520" fetchPriority="high" /></div>
          </div>
          <div className="cre-hero-data-heading"><p>O Crê-Ser em números</p><span>Referência: agosto de 2026</span></div>
          <dl className="cre-hero-stats">
            <div><dt>Participantes únicos</dt><dd>{indicators[0].value}</dd><p>Em terapias especiais e/ou contraturno</p></div>
            <div><dt>Na lista de espera</dt><dd>{indicators[4].value}</dd><p>Distribuição por especialidade</p></div>
            <div><dt>Atendimentos em terapias</dt><dd>{indicators[2].value}</dd><p>Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia</p></div>
            <div><dt>No contraturno escolar</dt><dd>{indicators[1].value}</dd><p>Participantes em oficinas e atividades</p></div>
          </dl>
          {showProgramLink ? <div className="cre-home-hero-actions"><Link className="button button-coral" href="/programa-cre-ser">Conheça o Programa Crê-Ser</Link><Link className="cre-hero-data-link" href="/como-ajudar">Descubra como apoiar →</Link></div> : <a className="cre-hero-data-link" href="#alcance">Conheça os indicadores do programa <span aria-hidden="true">↓</span></a>}
        </div>
      </section>
  );
}
