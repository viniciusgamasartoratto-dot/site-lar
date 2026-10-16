import type { Metadata } from "next";
import Link from "next/link";
import { ProgramHero } from "../components/ProgramHero";
import { programIndicators as indicators } from "../data/program";

import { programSupporters } from "../data/site";

export const metadata: Metadata = {
  title: "Programa Crê-Ser",
  description: "Conheça a atuação preventiva e comunitária do Crê-Ser: cuidado integral, terapias especiais, contraturno escolar e fortalecimento das famílias em Itatiba.",
};

const workshops = [
  "Saber e Crê-Ser", "Semear e Crê-Ser", "Música",
  "Projeto de Vida e Mundo do Trabalho", "Informática", "Luderia",
  "Culinária", "Dança", "Teatro", "Artesanato",
];
const careAreas = ["Psicologia", "Fonoaudiologia", "Terapia Ocupacional", "Psicopedagogia"];

const faqs = [
  { question: "É necessário encaminhamento para procurar o Crê-Ser?", answer: "A família pode procurar diretamente o programa. Também são recebidos encaminhamentos da saúde, escola, CRAS, CREAS, Conselho Tutelar e Vara da Infância. Todas as portas de entrada seguem o mesmo processo de avaliação técnica." },
  { question: "Como é definido o ingresso?", answer: "A equipe avalia a vulnerabilidade social, a modalidade de atendimento, a disponibilidade de vagas e a adesão da família. A avaliação pode resultar em ingresso, lista de espera ou encaminhamento a outro serviço da rede." },
  { question: "Os atendimentos são em grupo ou individuais?", answer: "O atendimento grupal é o formato predominante. A equipe técnica avalia idade, necessidades e contexto de cada criança ou adolescente para definir a modalidade adequada." },
  { question: "O Crê-Ser é o serviço de acolhimento do Lar?", answer: "O Crê-Ser é uma iniciativa preventiva e comunitária do Lar, distinta do Serviço de Acolhimento Institucional para Crianças e Adolescentes (SAICA). Seu trabalho busca fortalecer vínculos e prevenir situações que possam levar ao acolhimento." },
  { question: "Como confirmar horários e vagas?", answer: "Entre em contato pelo telefone (11) 4534-2416 ou pelo e-mail projetocreser@laritatibense.org.br." },
];

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />

      <section className="section" id="sobre-o-programa">
        <div className="container program-intro-grid">
          <div className="program-intro-logo"><img src="/images/cre-ser-logo.png" alt="Logotipo do Programa Crê-Ser" width="520" height="520" /></div>
          <div className="program-intro-copy">
            <p className="eyebrow">Por dentro do Crê-Ser</p>
            <h2>Cuidado integral para crianças, adolescentes e suas famílias</h2>
            <p className="section-lead">O Crê-Ser nasce da experiência do Lar na proteção da infância e da necessidade de investir na prevenção, no fortalecimento das famílias e no desenvolvimento integral.</p>
            <p>Com o apoio do Instituto Althaia, o programa oferece acompanhamento psicossocial a crianças e adolescentes em situação de vulnerabilidade social, articulando saúde mental, escolaridade, cultura e convivência.</p>
            <div className="button-row cre-program-actions"><a className="button button-green" href="#acesso">Como participar</a><a className="text-link" href="#empresas-apoiadoras">Como apoiar →</a></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-heading-row"><div><p className="eyebrow">Duas frentes, uma missão</p><h2>Proteção e prevenção se complementam</h2></div></div>
        <div className="container cards-2 cre-fronts-grid">
          <article className="info-card"><p className="eyebrow">SAICA</p><h3>Acolhimento institucional</h3><p>Serviço de proteção especial articulado ao sistema de assistência social e ao Judiciário, destinado ao acolhimento por medida protetiva e encaminhamento judicial.</p></article>
          <article className="info-card"><p className="eyebrow">Crê-Ser</p><h3>Atuação preventiva e comunitária</h3><p>Iniciativa própria do Lar, viabilizada por investimento social privado, que fortalece vínculos familiares e atua na prevenção de sua ruptura. Complementa a missão institucional e não integra o SAICA.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Nossa trajetória</p><h2>Uma resposta construída a partir do cuidado</h2></div></div>
        <div className="container cards-3 cre-history-grid">
          <article className="info-card"><p className="eyebrow">01 · A necessidade</p><h3>Atendimento psicológico estruturado</h3><p>O cuidado às crianças e adolescentes acolhidos revelou a necessidade de acompanhamento psicológico. A resposta começou com estagiários de Psicologia, sob coordenação técnica da Dra. Cláudia Archanjo.</p></article>
          <article className="info-card"><p className="eyebrow">02 · A estruturação</p><h3>Recursos próprios e parceria acadêmica</h3><p>O Lar assumiu o custeio da equipe e formalizou o estágio remunerado por meio de parceria acadêmica, orientada pelo modelo de clínica ampliada. Essa etapa também contou com apoio temporário do CMDCA e do CONDECA.</p></article>
          <article className="info-card"><p className="eyebrow">03 · A consolidação</p><h3>Uma parceria estratégica</h3><p>O Instituto Althaia viabilizou a contratação de profissional especializado. A demanda de crianças egressas do acolhimento consolidou a proposta que deu origem ao Programa Crê-Ser.</p></article>
        </div>
      </section>

      <section className="section section-soft" id="cuidado">
        <div className="container section-heading-row"><div><p className="eyebrow">Como cuidamos</p><h2>Nossas especialidades</h2></div></div>
        <div className="container cre-care-grid">
          {careAreas.map((area) => <article className="info-card" key={area}><h3>{area}</h3></article>)}
        </div>
      </section>

      <section className="section" id="oficinas">
        <div className="container section-heading-row"><div><p className="eyebrow">Contraturno escolar</p><h2>Nossas oficinas</h2></div></div>
        <ul className="container cre-workshop-names">
          {workshops.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </section>

      <section className="section section-soft" id="acesso">
        <div className="container section-heading-row"><div><p className="eyebrow">Portas abertas</p><h2>O mesmo caminho de avaliação para todas as famílias</h2></div><p>A procura direta da família e os encaminhamentos da rede chegam à mesma avaliação técnica de vulnerabilidade social.</p></div>
        <div className="container cre-access-grid">
          <article className="info-card"><p className="eyebrow">01</p><h3>Avaliação técnica</h3><p>Realizada pela equipe do programa, por meio da assistência social.</p></article>
          <article className="info-card"><p className="eyebrow">02</p><h3>Vulnerabilidade social</h3><p>Avaliação orientada pelo IVF-PR e pela Tipificação Nacional dos Serviços Socioassistenciais.</p></article>
          <article className="info-card"><p className="eyebrow">03</p><h3>Disponibilidade de vagas</h3><p>Verificada no momento de cada procura ou encaminhamento recebido.</p></article>
          <article className="info-card"><p className="eyebrow">04</p><h3>Adesão da família</h3><p>O envolvimento e a participação da família são essenciais ao trabalho de convivência proposto.</p></article>
        </div>
      </section>

      <section className="section" id="alcance">
        <div className="container section-heading-row"><div><p className="eyebrow">Nosso alcance · Setembro de 2026</p><h2>Números que mostram a dimensão do cuidado</h2></div><p>Indicadores de atendimento e acompanhamento familiar de setembro de 2026.</p></div>
        <div className="container cre-indicators">{indicators.map((indicator) => <article key={indicator.label}><strong>{indicator.value}</strong><p>{indicator.label}</p></article>)}</div>
      </section>

      <section className="section section-soft" id="rede-de-atendimento" aria-labelledby="cre-map-title">
        <div className="container section-heading-row"><div><p className="eyebrow">Alcance territorial</p><h2 id="cre-map-title">A rede de atendimento do Crê-Ser</h2></div></div>
        <div className="container">
          <a className="cre-network-map" href="/images/cre-ser-rede-atendimento-escolar.jpg" target="_blank" rel="noopener noreferrer" aria-label="Ampliar mapa da rede de atendimento escolar do Programa Crê-Ser (abre em nova aba)">
            <img src="/images/cre-ser-rede-atendimento-escolar.jpg" alt="Mapa da rede de atendimento escolar do Programa Crê-Ser em Itatiba, em 2026, com sede, escolas dos eixos de convivência e terapias especiais e área de cobertura" width="1562" height="1189" loading="lazy" />
          </a>
          <a className="text-link cre-map-expand" href="/images/cre-ser-rede-atendimento-escolar.jpg" target="_blank" rel="noopener noreferrer">Ampliar mapa <span aria-hidden="true">↗</span></a>
        </div>
      </section>

<section className="section section-soft" id="empresas-apoiadoras" aria-labelledby="supporters-title">
        <div className="container section-heading centered-heading"><p className="eyebrow">Patrocínio e parcerias</p><h2 id="supporters-title">Juntos pelo Programa Crê-Ser</h2><p className="section-lead">O apoio de parceiros fortalece o cuidado integral e a continuidade do programa.</p></div>
        <div className="container"><article className="program-main-sponsor" aria-labelledby="althaia-title">
          <a className="program-main-sponsor-logo" href="https://althaia.com.br/instituto-althaia/" target="_blank" rel="noopener noreferrer" aria-label="Conhecer o Instituto Althaia (abre em nova aba)"><img src="/images/instituto-althaia.png" alt="Instituto Althaia" width="1272" height="545" loading="lazy" /></a>
          <div className="program-main-sponsor-copy"><p className="eyebrow">Patrocínio em destaque</p><h3 id="althaia-title">Instituto Althaia</h3><p className="program-sponsor-status">Um dos nossos principais patrocinadores</p><p>Parceiro na consolidação do Crê-Ser, o Instituto Althaia viabilizou a contratação de profissional especializado e apoia o cuidado integral de crianças, adolescentes e suas famílias.</p><a className="text-link" href="https://althaia.com.br/instituto-althaia/" target="_blank" rel="noopener noreferrer">Conheça o Instituto Althaia <span aria-hidden="true">↗</span></a></div>
        </article></div>
        {programSupporters.length > 0 && <div className="container program-supporters-grid">{programSupporters.map((company) => <article className="program-supporter" key={company.name}>{company.logo && <img src={company.logo} alt={company.name} width="220" height="100" loading="lazy" />}<h3>{company.name}</h3>{company.description && <p>{company.description}</p>}{company.url && <a className="text-link" href={company.url} target="_blank" rel="noopener noreferrer">Conhecer a empresa ↗</a>}</article>)}</div>}
        <div className="container section-heading-row cre-partnership-heading"><div><p className="eyebrow">Oportunidades de parceria</p><h2>Chegar, permanecer e ter um espaço adequado</h2></div><p>Prioridades e estimativas. A parceria pode ser integral, parcial ou organizada por eixo.</p></div>
        <div className="container cards-3 cre-partnership-cards">
          <article className="info-card"><p className="eyebrow">01 · Chegar</p><h3>Transporte</h3><p>Em agosto de 2026, 38 participantes enfrentavam barreiras de transporte: 33 sem conseguir frequentar e 5 com participação esporádica. O estudo de rotas contempla 17 escolas de origem.</p><p className="cre-investment">R$ 15.000/mês</p><p>Estimativa de R$ 180.000 por ano, com capacidade da frota para até 70 crianças.</p></article>
          <article className="info-card"><p className="eyebrow">02 · Permanecer</p><h3>Alimentação</h3><p>Lanches durante a permanência no programa apoiam a participação e a continuidade da rotina do contraturno.</p><p className="cre-investment">R$ 9.000/mês</p><p>Estimativa para 60 crianças: R$ 150 por criança ao mês e R$ 108.000 por ano.</p></article>
          <article className="info-card"><p className="eyebrow">03 · Qualificar o espaço</p><h3>Requalificação do espaço</h3><p>Adequações para ampliar a qualidade, a segurança e as condições das atividades. Em agosto de 2026, parte dos custos já contava com um parceiro privado, enquanto o orçamento global estava em consolidação.</p><p>Novos parceiros podem compor os recursos necessários para concluir as melhorias.</p></article>
        </div>
        <div className="container cre-investment-summary"><div><h3>Transporte e alimentação</h3><p>Estimativa conjunta de <strong>R$ 24.000/mês</strong> ou <strong>R$ 288.000/ano</strong>. O orçamento da reforma é separado.</p></div><a className="button button-green" href="#contato-cre-ser">Conversar sobre uma parceria</a></div>
      </section>

      <section className="section">
        <div className="container section-heading centered-heading"><p className="eyebrow">Perguntas frequentes</p><h2>Orientações para famílias e parceiros</h2></div>
        <div className="container faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="section cre-contact-section" id="contato-cre-ser">
        <div className="container cre-contact-panel"><div><p className="eyebrow">Fale com o Crê-Ser</p><h2>Uma conversa pode abrir novos caminhos</h2><p>Para procurar atendimento, esclarecer o encaminhamento ou construir uma parceria, entre em contato com a equipe do programa.</p></div><div className="cre-contact-links"><a className="button button-green" href="tel:+551145342416">(11) 4534-2416</a><a href="mailto:projetocreser@laritatibense.org.br">projetocreser@laritatibense.org.br</a><Link className="text-link" href="/como-ajudar">Conheça outras formas de apoiar →</Link></div></div>
      </section>
    </>
  );
}