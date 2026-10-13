import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { helpWays } from "../data/site";

export const metadata: Metadata = {
  title: "Como ajudar",
  description: "Conheça as formas de apoiar o Lar Itatibense da Criança com doações, voluntariado, Nota Fiscal Paulista e parcerias.",
};

export default function HelpPage() {
  return (
    <>
      <PageHero eyebrow="Como ajudar" title="Encontre seu jeito de ajudar" description="Uma doação, algumas horas do seu tempo ou uma parceria: há diferentes formas de participar do trabalho do Lar." tone="coral" image={{ src: "/images/sobre-maos.jpg", alt: "Mãos reunidas representando cooperação e apoio" }} />
      <section className="section section-soft" id="doar">
        <div className="container pix-donation" aria-labelledby="pix-title">
          <div>
            <p className="eyebrow">Doação por Pix</p>
            <h2 id="pix-title">Um gesto de carinho faz a diferença</h2>
            <p>Escolha o valor da sua contribuição e conclua a doação no aplicativo do seu banco.</p>
            <ol className="pix-steps">
              <li>Quando o Pix estiver disponível, escaneie o QR Code ou use o Pix Copia e Cola no aplicativo do seu banco.</li>
              <li>Informe o valor que deseja doar.</li>
              <li>Antes de confirmar, confira o nome e o CNPJ do beneficiário com os dados oficiais da instituição.</li>
            </ol>
            <p>Você conclui o pagamento no seu banco. O site não solicita senha bancária. A confirmação do recebimento é feita pela equipe do Lar.</p>
            <Link className="text-link" href="/#fale-com-o-lar">Falar com o Lar sobre minha doação →</Link>
          </div>
          <div className="pix-panel">
            <span className="pix-demo-label">DEMONSTRAÇÃO</span>
            <img src="/images/pix-demonstracao.svg" width="232" height="232" alt="Ilustração de QR Code fictício, sem dados de pagamento" />
            <p className="pix-qr-caption"><strong>QR Code de demonstração</strong><br />Não aceita pagamentos.</p>
            <dl className="pix-details"><div><dt>Instituição</dt><dd>Lar Itatibense da Criança</dd></div><div><dt>Beneficiário e CNPJ da conta</dt><dd>Lar Itatibense da Criança - 50.119.288/0001-96</dd></div></dl>
            <label htmlFor="pix-code">Pix Copia e Cola</label>
            <input id="pix-code" type="text" value="Aguardando o código Pix oficial" readOnly disabled />
            <button className="button button-green" type="button" disabled aria-describedby="pix-pending">Copiar Pix</button>
            <p id="pix-pending" className="pix-pending">Disponível após a inclusão dos dados oficiais.</p>
          </div>
        </div>
        <div className="container cards-3">
          <article className="info-card"><p className="eyebrow">Doação financeira</p><h2>Quero doar</h2><p>Solicite os dados para doação por telefone ou e-mail.</p><Link className="button button-green" href="/#fale-com-o-lar">Pedir dados para doação</Link></article>
          <article className="info-card" id="voluntariado"><p className="eyebrow">Voluntariado</p><h2>Quero doar meu tempo</h2><p>Conte sobre sua disponibilidade e habilidades para que a equipe oriente a forma mais adequada de participação.</p><Link className="button button-green" href="/#fale-com-o-lar">Quero ser voluntário</Link></article>
          <article className="info-card" id="parcerias"><p className="eyebrow">Empresas e profissionais</p><h2>Quero construir uma parceria</h2><p>Empresas e profissionais podem apoiar com recursos, serviços ou conhecimento, conforme alinhamento institucional.</p><Link className="button button-green" href="/#fale-com-o-lar">Quero ser parceiro</Link></article>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Formas de contribuir</p><h2>Escolha a maneira que combina com você</h2></div><p>Antes de doar materiais ou organizar uma ação, converse com o Lar para conhecer as necessidades atuais.</p></div>
        <div className="container support-grid">
          {helpWays.map((way, index) => <article className="support-card" key={way}><span className="support-number">{String(index + 1).padStart(2, "0")}</span><h2>{way}</h2><p>{index === 0 ? "Entre em contato com o Lar para receber os dados para doação." : index === 1 ? "Materiais podem atender à rotina das crianças e adolescentes ou apoiar o bazar da instituição." : index === 5 ? "Consulte o Lar para receber a orientação atual sobre o cadastro e a destinação de documentos fiscais." : "Entre em contato para alinhar sua contribuição às necessidades e possibilidades atuais da instituição."}</p></article>)}
        </div>
      </section>

      <section className="section">
        <div className="container transparency-card">
          <div><p className="eyebrow eyebrow-light">Transparência</p><h2>Acompanhe os documentos do Lar</h2><p>Consulte balanços, estatuto, certidões, certificados e outros registros institucionais.</p></div>
          <Link className="button button-cream" href="/transparencia">Ver transparência</Link>
        </div>
      </section>
    </>
  );
}
