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
      <PageHero eyebrow="Como ajudar" title="Para onde vai sua doação" description="Sua contribuição apoia o desenvolvimento de novos projetos do Lar." tone="coral" className="help-donation-hero" image={{ src: "/images/sobre-maos.jpg", alt: "Mãos reunidas representando cooperação e apoio" }}>
        <div className="help-donation-copy">
          <p>Essas doações não se destinam ao custeio da operação do serviço de acolhimento institucional. A garantia desse atendimento é responsabilidade do poder público, com atuação municipal e responsabilidade compartilhada entre as três esferas de governo, conforme o <a href="https://www.planalto.gov.br/ccivil_03/leis/l8069.htm" target="_blank" rel="noopener noreferrer">Estatuto da Criança e do Adolescente</a>.</p>
          <p>Com seu apoio, podemos ampliar as iniciativas em benefício de crianças, adolescentes e famílias.</p>
        </div>
        <nav className="button-row help-donation-actions" aria-label="Formas de contribuir">
          <Link className="button button-coral" href="#doar">Doar por Pix</Link>
          <Link className="button button-outline" href="#nota-fiscal-paulista">Nota Fiscal Paulista</Link>
          <Link className="button button-outline" href="#ficha-de-associado">Seja associado</Link>
          <Link className="button button-outline" href="#parcerias">Seja parceiro</Link>
        </nav>
      </PageHero>
      <section className="section section-soft" id="doar">
        <div className="container section-heading"><p className="eyebrow">Doação por Pix</p><h2 id="pix-title">Contribua com o Lar</h2><p>Apoie o trabalho do Lar Itatibense da Criança com uma doação por Pix.</p></div>
        <div className="container pix-destinations" aria-labelledby="pix-title">
          {[
            { id: "lar", title: "Pix para o Lar", description: "Apoie o trabalho do Lar Itatibense da Criança" },
          ].map(destination => (
            <article className="pix-panel pix-destination" id={`pix-${destination.id}`} key={destination.id} aria-labelledby={`pix-${destination.id}-title`}>
              <h3 id={`pix-${destination.id}-title`}>{destination.title}</h3>
              <p className="pix-destination-description">{destination.description}</p>
              <div className="pix-awaiting"><strong>Dados Pix em preparação</strong><p>O QR Code e o código Pix do Lar serão disponibilizados aqui.</p></div>
              <label htmlFor={`pix-code-${destination.id}`}>Pix Copia e Cola</label>
              <input id={`pix-code-${destination.id}`} type="text" value="Aguardando o código Pix oficial" readOnly disabled />
              <button className="button button-green" type="button" disabled aria-describedby={`pix-pending-${destination.id}`}>Copiar Pix do Lar</button>
              <p id={`pix-pending-${destination.id}`} className="pix-pending">Disponível após a inclusão dos dados oficiais.</p>

            </article>
          ))}
        </div>
        <div className="container pix-guidance"><p>Quando os dados estiverem disponíveis, use o QR Code ou o Pix Copia e Cola do Lar no aplicativo do seu banco. Antes de confirmar, confira o beneficiário e o valor da doação.</p></div>
        <div className="container donation-options">
          <article className="info-card" id="parcerias"><p className="eyebrow">Empresas e profissionais</p><h2>Quero construir uma parceria</h2><p>Empresas e profissionais podem apoiar com recursos, serviços ou conhecimento, conforme alinhamento institucional.</p><Link className="button button-green" href="/#fale-com-o-lar">Quero ser parceiro</Link></article>
        </div>
      </section>

      <section className="section nfp-section" id="nota-fiscal-paulista" aria-labelledby="nfp-title">
        <div className="container section-heading"><p className="eyebrow">Nota Fiscal Paulista</p><h2 id="nfp-title">Suas notas fiscais também podem ajudar o Lar</h2><p>Escolha a doação automática das notas com seu CPF ou cadastre individualmente notas sem CPF.</p></div>
        <div className="container nfp-entity"><strong>Lar Itatibense da Criança</strong><span>CNPJ: 50.119.288/0001-96</span><p>Use estes dados para localizar e conferir a entidade no sistema.</p></div>
        <div className="container cards-2 nfp-guides">
          <article className="info-card"><p className="eyebrow">Com seu CPF</p><h3>Ative a doação automática</h3>
            <ol className="nfp-steps">
              <li>Acesse o sistema da Nota Fiscal Paulista como consumidor. Se ainda não tiver cadastro, faça sua inscrição no portal oficial.</li>
              <li>Em <strong>Entidades</strong>, escolha <strong>Doação de Cupons com CPF (automática)</strong>.</li>
              <li>Leia as condições de início e validade. Clique em pesquisar e informe o CNPJ do Lar: <strong>50.119.288/0001-96</strong>.</li>
              <li>Confira o nome da instituição, selecione o Lar e avance. Confirme a doação automática e aguarde a mensagem de registro.</li>
              <li>Nas próximas compras, peça a nota com <strong>seu próprio CPF</strong>. Conforme a vigência cadastrada, os créditos gerados serão destinados à entidade selecionada.</li>
            </ol>
            <a className="text-link" href="https://portal.fazenda.sp.gov.br/servicos/nfp/Paginas/Guia-doacao_automatica.aspx" target="_blank" rel="noopener noreferrer">Ver guia oficial da doação automática ↗</a>
          </article>
          <article className="info-card"><p className="eyebrow">Sem CPF na nota</p><h3>Cadastre uma nota para doar</h3>
            <ol className="nfp-steps">
              <li>Tenha em mãos uma nota ou cupom fiscal emitido <strong>sem CPF</strong>.</li>
              <li>Entre no sistema como consumidor e, em <strong>Entidades</strong>, escolha <strong>Doação de cupom fiscal sem CPF</strong>.</li>
              <li>Selecione o tipo correto de documento e preencha os dados solicitados. Para NFC-e e CF-e-SAT, utilize a chave de acesso de <strong>44 números</strong>.</li>
              <li>Selecione o <strong>Lar Itatibense da Criança</strong>, conferindo o CNPJ <strong>50.119.288/0001-96</strong>, e conclua o registro seguindo as instruções do sistema.</li>
            </ol>
            <a className="text-link" href="https://portal.fazenda.sp.gov.br/servicos/nfp/Paginas/Guia-doacao_manual.aspx" target="_blank" rel="noopener noreferrer">Ver guia oficial do cadastro de notas ↗</a>
          </article>
        </div>
        <div className="container nfp-action"><p>Na compra, não informe o CNPJ do Lar. Ele é usado apenas para selecionar a entidade no sistema de doação.</p><a className="button button-green" href="https://www.nfp.fazenda.sp.gov.br/" target="_blank" rel="noopener noreferrer">Acessar a Nota Fiscal Paulista ↗</a></div>
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
