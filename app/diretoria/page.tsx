import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { directors, fiscalCouncil } from "../data/site";

export const metadata: Metadata = {
  title: "Diretoria e Conselho Fiscal",
  description: "Conheça a diretoria voluntária e o Conselho Fiscal do Lar Itatibense da Criança.",
};

export default function BoardPage() {
  return (
    <>
      <PageHero eyebrow="Diretoria" title="Conheça quem cuida do Lar." description="A administração do Lar é realizada por uma diretoria voluntária, com apoio dos conselhos deliberativo e fiscal." tone="green" />
      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Diretoria</p><h2>Vigência de 19 de fevereiro de 2024 a 18 de fevereiro de 2027.</h2></div></div>
        <div className="container board-grid">
          {directors.map((person) => (
            <article className="board-card" key={`${person.name}-${person.role}`}>
              <div className="board-photo"><img src={person.photo} alt={`Foto de ${person.name}, ${person.role} do Lar Itatibense da Criança`} width="400" height="400" loading="lazy" decoding="async" /></div>
              <div className="board-card-copy"><span>{person.role}</span><h2>{person.name}</h2></div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container section-heading-row"><div><p className="eyebrow">Conselho Fiscal</p><h2>Vigência de 18 de fevereiro de 2024 a 17 de fevereiro de 2030.</h2></div></div>
        <div className="container cards-3">
          {fiscalCouncil.map((name) => <article className="info-card" key={name}><p className="eyebrow">Conselheiro fiscal</p><h2>{name}</h2></article>)}
        </div>
      </section>
      <CtaBand eyebrow="Documentos" title="Governança transparente fortalece a confiança." text="Consulte estatuto, balanços, certificados e registros institucionais na área de transparência." primaryHref="/transparencia" primaryLabel="Acessar transparência" secondaryHref="/#fale-com-o-lar" secondaryLabel="Falar com o Lar" />
    </>
  );
}
