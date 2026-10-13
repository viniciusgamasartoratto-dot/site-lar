import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { transparencyDocuments } from "../data/site";
import { PublishedContent } from "../components/PublishedContent";

export const metadata: Metadata = {
  title: "Transparência",
  description: "Acesse documentos institucionais, balanço, estatuto, CNPJ, certidões e registros do Lar Itatibense da Criança.",
};

export default function TransparencyPage() {
  return (
    <>
      <PageHero eyebrow="Transparência" title="Prestação de contas, ao seu alcance" description="Consulte e baixe balanços, documentos institucionais, certidões e registros de governança do Lar." tone="green" />
      <section className="section section-soft">
        <PublishedContent kind="pdf" />
        <div className="container document-toolbar"><p>{transparencyDocuments.length} documentos do acervo inicial</p><span className="document-category">PDFs e acervo institucional</span></div>
        <div className="container document-grid">
          {transparencyDocuments.map((document) => (
            <article className={`document-card${document.source === "local" ? " document-card-featured" : ""}`} key={document.title}>
              <span className="document-category">{document.category}</span>
              <h2>{document.title}</h2>
              <p>{document.description}</p>
              <dl className="document-meta">
                <div><dt>Referência</dt><dd>{document.date}</dd></div>
                <div><dt>Arquivo</dt><dd>{document.fileMeta}</dd></div>
              </dl>
              {document.source === "local" ? (
                <div className="document-actions">
                  <a className="document-action" href={document.href} target="_blank" rel="noopener noreferrer">Visualizar PDF <span aria-hidden="true">↗</span></a>
                  <a className="document-download" href={document.href} download>Baixar PDF <span aria-hidden="true">↓</span></a>
                </div>
              ) : (
                <a className="document-action" href={document.href} target="_blank" rel="noopener noreferrer">Visualizar no acervo <span aria-hidden="true">↗</span></a>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
