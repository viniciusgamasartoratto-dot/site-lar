import type { Metadata } from "next";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";
import { structureImages } from "../data/site";

export const metadata: Metadata = {
  title: "Estrutura",
  description: "Conheça a sede administrativa e do Programa Crê-Ser e as três casas de acolhimento do Lar Itatibense.",
};

export default function StructurePage() {
  return (
    <>
      <PageHero eyebrow="Estrutura" className="structure-hero" title={<><span className="structure-title-line">Uma sede de apoio</span><span className="structure-title-line">Três casas de acolhimento</span></>} description="O Lar conta com uma sede administrativa e do Programa Crê-Ser e três casas destinadas ao acolhimento de crianças e adolescentes." tone="cream" image={{ src: "/images/recepcao.jpg", alt: "Fachada da sede administrativa do Lar Itatibense" }} />
      <section className="section">
        <div className="container split-heading">
          <div><p className="eyebrow">Sede administrativa e Programa Crê-Ser</p><h2>O prédio do Lar tem uma nova função</h2></div>
          <div className="lead-copy"><p>O prédio no Jardim Carlos Borella, em Itatiba, abriga atualmente a sede administrativa do Lar e o Programa Crê-Ser.</p><p>O acolhimento passou a ser realizado em três casas: duas em Itatiba e uma em Morungaba.</p></div>
        </div>
      </section>
      <section className="section section-soft" aria-labelledby="casas-acolhimento">
        <div className="container section-heading-row"><div><p className="eyebrow">Casas de acolhimento</p><h2 id="casas-acolhimento">Três casas, o mesmo compromisso com o cuidado</h2></div><p>Duas unidades em Itatiba e uma em Morungaba.</p></div>
        <div className="container cards-3">
          {["Florecer", "Gira mundo", "Bem-te-vi"].map((name) => <article className="info-card" key={name}><p className="eyebrow">Casa de acolhimento</p><h3>{name}</h3></article>)}
        </div>
      </section>
      <section className="section">
        <div className="container section-heading"><p className="eyebrow">Registros da sede</p><h2>O prédio da sede em imagens</h2></div>
        <div className="container structure-gallery">
          {structureImages.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} width="900" height="680" loading="lazy" decoding="async" /></figure>)}
        </div>
      </section>
      <CtaBand title="Fale com a equipe do Lar" text="Para informações sobre a instituição, o Programa Crê-Ser ou formas de apoio, entre em contato com a sede administrativa." primaryHref="/#fale-com-o-lar" primaryLabel="Falar com a sede" secondaryHref="/como-ajudar" secondaryLabel="Descobrir como ajudar" />
    </>
  );
}
