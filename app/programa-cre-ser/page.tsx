import type { Metadata } from "next";
import Link from "next/link";

import { programSupporters, structureImages } from "../data/site";

export const metadata: Metadata = {
  title: "Programa Crê-Ser",
  description: "Conheça a atuação preventiva e comunitária do Crê-Ser: cuidado integral, terapias especiais, contraturno escolar e fortalecimento das famílias em Itatiba.",
};

const workshops = [
  { name: "Saber e Crê-Ser", ages: "5 a 17 anos", days: "Segunda de manhã e terça à tarde" },
  { name: "Semear e Crê-Ser", ages: "3 a 17 anos", days: "Quarta de manhã e segunda à tarde" },
  { name: "Música", ages: "3 a 17 anos", days: "Sexta de manhã e à tarde" },
  { name: "Projeto de Vida e Mundo do Trabalho", ages: "14 a 17 anos", days: "Quarta à tarde" },
  { name: "Informática", ages: "6 a 17 anos", days: "Terça de manhã e quinta à tarde" },
  { name: "Luderia", ages: "12 a 17 anos", days: "Quarta à tarde" },
  { name: "Culinária", ages: "6 a 17 anos", days: "Quarta de manhã e à tarde" },
  { name: "Dança", ages: "6 a 17 anos", days: "Segunda de manhã e quinta à tarde" },
  { name: "Teatro", ages: "6 a 17 anos", days: "Terça de manhã e segunda à tarde" },
];
const careAreas = ["Psicologia", "Fonoaudiologia", "Terapia Ocupacional", "Psicopedagogia"];
const entryPoints = ["Procura da família", "Saúde", "Escola", "CRAS", "CREAS", "Conselho Tutelar", "Vara da Infância"];
const indicators = [
  { value: "157", label: "participantes únicos em terapias especiais e/ou contraturno" },
  { value: "43", label: "participantes no contraturno escolar" },
  { value: "830", label: "atendimentos em terapias especiais" },
  { value: "94", label: "orientações familiares" },
];
const team = [
  ["Coordenação institucional", "1"], ["Gestão", "1"], ["Psicologia", "3"],
  ["Terapia Ocupacional", "1"], ["Fonoaudiologia", "1"], ["Psicopedagogia", "1"],
  ["Assistência Social", "1"], ["Educadores sociais", "3"], ["Oficineiros", "5"],
  ["Recepção e administrativo", "1"],
];
const faqs = [
  { question: "É necessário encaminhamento para procurar o Crê-Ser?", answer: "A família pode procurar diretamente o programa. Também são recebidos encaminhamentos da saúde, escola, CRAS, CREAS, Conselho Tutelar e Vara da Infância. Todas as portas de entrada seguem o mesmo processo de avaliação técnica." },
  { question: "Como é definido o ingresso?", answer: "A equipe avalia a vulnerabilidade social, a modalidade de atendimento, a disponibilidade de vagas e a adesão da família. A avaliação pode resultar em ingresso, lista de espera ou encaminhamento a outro serviço da rede." },
  { question: "Os atendimentos são em grupo ou individuais?", answer: "O atendimento grupal é o formato predominante. A equipe técnica avalia idade, necessidades e contexto de cada criança ou adolescente para definir a modalidade adequada." },
  { question: "O Crê-Ser é o serviço de acolhimento do Lar?", answer: "O Crê-Ser é uma iniciativa preventiva e comunitária do Lar, distinta do Serviço de Acolhimento Institucional para Crianças e Adolescentes (SAICA). Seu trabalho busca fortalecer vínculos e prevenir situações que possam levar ao acolhimento." },
  { question: "Como confirmar horários e vagas?", answer: "Entre em contato pelo telefone (11) 4534-2416 ou pelo e-mail projetocreserlaritatibense@gmail.com. A grade e os números apresentados nesta página têm como referência a apresentação institucional de agosto de 2026." },
];

export default function ProgramPage() {
  return (
    <>
      <section className="page-hero page-hero-green cre-program-hero" aria-labelledby="cre-hero-title">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Trilha de navegação"><Link href="/">Início</Link><span aria-hidden="true">/</span><span>Programa Crê-Ser</span></nav>
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
            <div><dt>Na lista de espera</dt><dd>152</dd><p>Total apresentado por especialidade</p></div>
            <div><dt>Atendimentos em terapias</dt><dd>{indicators[2].value}</dd><p>Psicologia, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia</p></div>
            <div><dt>No contraturno escolar</dt><dd>{indicators[1].value}</dd><p>Participantes em oficinas e atividades</p></div>
          </dl>
          <a className="cre-hero-data-link" href="#alcance">Conheça os indicadores do programa <span aria-hidden="true">↓</span></a>
        </div>
      </section>

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
        <div className="container cards-2">
          <article className="info-card"><p className="eyebrow">SAICA</p><h3>Acolhimento institucional</h3><p>Serviço de proteção especial articulado ao sistema de assistência social e ao Judiciário, destinado ao acolhimento por medida protetiva e encaminhamento judicial.</p></article>
          <article className="info-card"><p className="eyebrow">Crê-Ser</p><h3>Atuação preventiva e comunitária</h3><p>Iniciativa própria do Lar, viabilizada por investimento social privado, que fortalece vínculos familiares e atua na prevenção de sua ruptura. Complementa a missão institucional e não integra o SAICA.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Nossa trajetória</p><h2>Uma resposta construída a partir do cuidado</h2></div></div>
        <div className="container cards-3">
          <article className="info-card"><p className="eyebrow">01 · A necessidade</p><h3>Atendimento psicológico estruturado</h3><p>O cuidado às crianças e adolescentes acolhidos revelou a necessidade de acompanhamento psicológico. A resposta começou com estagiários de Psicologia, sob coordenação técnica da Dra. Cláudia Archanjo.</p></article>
          <article className="info-card"><p className="eyebrow">02 · A estruturação</p><h3>Recursos próprios e parceria acadêmica</h3><p>O Lar assumiu o custeio da equipe e formalizou o estágio remunerado por meio de parceria acadêmica, orientada pelo modelo de clínica ampliada. Essa etapa também contou com apoio temporário do CMDCA e do CONDECA.</p></article>
          <article className="info-card"><p className="eyebrow">03 · A consolidação</p><h3>Uma parceria estratégica</h3><p>O Instituto Althaia viabilizou a contratação de profissional especializado. A demanda de crianças egressas do acolhimento consolidou a proposta que deu origem ao Programa Crê-Ser.</p></article>
        </div>
      </section>

      <section className="section section-soft" id="cuidado">
        <div className="container section-heading-row"><div><p className="eyebrow">Como cuidamos</p><h2>Saúde, aprendizagem e vínculos no mesmo percurso</h2></div><p>O programa busca prevenir o acolhimento, fortalecer vínculos familiares, promover saúde mental, acompanhar a escolaridade e apoiar o desenvolvimento integral.</p></div>
        <div className="container cre-care-grid">
          {careAreas.map((area) => <article className="info-card" key={area}><h3>{area}</h3><p>Uma das especialidades que compõem o atendimento multiprofissional do programa.</p></article>)}
        </div>
        <div className="container cre-care-note"><h3>Grupos com avaliação individual de cada caso</h3><p>O atendimento grupal é predominante, favorecendo convivência, pertencimento e fortalecimento de vínculos. A modalidade de atendimento é definida pela equipe técnica a partir da idade, das necessidades e do contexto de cada criança ou adolescente, com acompanhamento das famílias.</p></div>
      </section>

      <section className="section" id="oficinas">
        <div className="container section-heading-row"><div><p className="eyebrow">Contraturno escolar</p><h2>Oficinas para descobrir, conviver e crescer</h2></div><p>Atividades que estimulam autonomia, criatividade e protagonismo. A grade apresentada tem referência em agosto de 2026, com atividades de segunda a sexta, nos períodos das 8h às 12h e das 13h às 17h.</p></div>
        <div className="container cre-table-wrap"><table className="cre-workshop-table"><caption>Oficinas e períodos previstos na apresentação institucional</caption><thead><tr><th scope="col">Oficina</th><th scope="col">Faixa etária</th><th scope="col">Períodos</th></tr></thead><tbody>{workshops.map((workshop) => <tr key={workshop.name}><th scope="row">{workshop.name}</th><td>{workshop.ages}</td><td>{workshop.days}</td></tr>)}</tbody></table></div>
        <p className="container cre-reference-note">A grade semanal também inclui Artesanato na quinta-feira, das 9h às 11h. Consulte a equipe para confirmar horários, faixas etárias e disponibilidade de vagas.</p>
      </section>

      <section className="section section-soft" id="acesso">
        <div className="container section-heading-row"><div><p className="eyebrow">Portas abertas</p><h2>O mesmo caminho de avaliação para todas as famílias</h2></div><p>A procura direta da família e os encaminhamentos da rede chegam à mesma avaliação técnica de vulnerabilidade social.</p></div>
        <ul className="container cre-entry-points" aria-label="Portas de entrada do programa">{entryPoints.map((entry) => <li key={entry}>{entry}</li>)}</ul>
        <div className="container cre-access-grid">
          <article className="info-card"><p className="eyebrow">01</p><h3>Avaliação técnica</h3><p>Realizada pela equipe do programa, por meio da assistência social.</p></article>
          <article className="info-card"><p className="eyebrow">02</p><h3>Vulnerabilidade social</h3><p>Avaliação orientada pelo IVF-PR e pela Tipificação Nacional dos Serviços Socioassistenciais.</p></article>
          <article className="info-card"><p className="eyebrow">03</p><h3>Disponibilidade de vagas</h3><p>Verificada no momento de cada procura ou encaminhamento recebido.</p></article>
          <article className="info-card"><p className="eyebrow">04</p><h3>Adesão da família</h3><p>O envolvimento e a participação da família são essenciais ao trabalho de convivência proposto.</p></article>
        </div>
        <p className="container cre-reference-note">Após a avaliação, o percurso pode ser o ingresso, a lista de espera ou o encaminhamento a outro serviço da rede.</p>
      </section>

      <section className="section" id="alcance">
        <div className="container section-heading-row"><div><p className="eyebrow">Nosso alcance · Agosto de 2026</p><h2>Números que mostram a dimensão do cuidado</h2></div><p>Dados da apresentação institucional, com referência em agosto de 2026.</p></div>
        <div className="container cre-indicators">{indicators.map((indicator) => <article key={indicator.label}><strong>{indicator.value}</strong><p>{indicator.label}</p></article>)}</div>
        <div className="container cre-waiting"><h3>Lista de espera por especialidade</h3><p>Psicologia: 84 · Psicopedagogia: 42 · Fonoaudiologia: 8 · Terapia Ocupacional: 18</p><p><strong>Total apresentado: 152</strong></p></div>
        <p className="container cre-reference-note">Os indicadores representam medidas diferentes: participantes, atendimentos e orientações. Os 43 participantes do contraturno estão incluídos no total de participantes únicos.</p>
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
      <section className="section section-soft">
        <div className="container section-heading-row"><div><p className="eyebrow">Equipe multiprofissional</p><h2>Diferentes saberes sustentam o cuidado integral</h2></div><p>A apresentação de agosto de 2026 registra uma equipe de 18 profissionais, distribuídos nas funções abaixo.</p></div>
        <dl className="container cre-team-grid">{team.map(([role, count]) => <div key={role}><dt>{role}</dt><dd>{count}</dd></div>)}</dl>
      </section>

      <section className="section">
        <div className="container section-heading-row"><div><p className="eyebrow">Nossa sede</p><h2>Espaços para as atividades do programa</h2></div></div>
        <div className="container program-gallery">{structureImages.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} width="720" height="540" loading="lazy" /></figure>)}</div>
      </section>

      <section className="section section-soft" id="empresas-apoiadoras" aria-labelledby="supporters-title">
        <div className="container section-heading centered-heading"><p className="eyebrow">Patrocínio e parcerias</p><h2 id="supporters-title">Juntos pelo Programa Crê-Ser</h2><p className="section-lead">O investimento social privado fortalece o cuidado integral e a continuidade do programa.</p></div>
        <div className="container"><article className="program-main-sponsor" aria-labelledby="althaia-title">
          <a className="program-main-sponsor-logo" href="https://althaia.com.br/instituto-althaia/" target="_blank" rel="noopener noreferrer" aria-label="Conhecer o Instituto Althaia (abre em nova aba)"><img src="/images/instituto-althaia.png" alt="Instituto Althaia" width="1272" height="545" loading="lazy" /></a>
          <div className="program-main-sponsor-copy"><p className="eyebrow">Patrocínio em destaque</p><h3 id="althaia-title">Instituto Althaia</h3><p className="program-sponsor-status">Um dos nossos principais patrocinadores</p><p>Parceiro na consolidação do Crê-Ser, o Instituto Althaia viabilizou a contratação de profissional especializado e apoia o cuidado integral de crianças, adolescentes e suas famílias.</p><a className="text-link" href="https://althaia.com.br/instituto-althaia/" target="_blank" rel="noopener noreferrer">Conheça o Instituto Althaia <span aria-hidden="true">↗</span></a></div>
        </article></div>
        {programSupporters.length > 0 && <div className="container program-supporters-grid">{programSupporters.map((company) => <article className="program-supporter" key={company.name}>{company.logo && <img src={company.logo} alt={company.name} width="220" height="100" loading="lazy" />}<h3>{company.name}</h3>{company.description && <p>{company.description}</p>}{company.url && <a className="text-link" href={company.url} target="_blank" rel="noopener noreferrer">Conhecer a empresa ↗</a>}</article>)}</div>}
        <div className="container section-heading-row cre-partnership-heading"><div><p className="eyebrow">Oportunidades de parceria</p><h2>Chegar, permanecer e ter um espaço adequado</h2></div><p>Prioridades e estimativas apresentadas em agosto de 2026. A parceria pode ser integral, parcial ou organizada por eixo.</p></div>
        <div className="container cards-3 cre-partnership-cards">
          <article className="info-card"><p className="eyebrow">01 · Chegar</p><h3>Transporte</h3><p>O material identifica 38 participantes com barreiras de transporte: 33 sem conseguir frequentar e 5 com participação esporádica. O estudo de rotas contempla 17 escolas de origem.</p><p className="cre-investment">R$ 15.000/mês</p><p>Estimativa de R$ 180.000 por ano, com capacidade da frota para até 70 crianças.</p></article>
          <article className="info-card"><p className="eyebrow">02 · Permanecer</p><h3>Alimentação</h3><p>Lanches durante a permanência no programa apoiam a participação e a continuidade da rotina do contraturno.</p><p className="cre-investment">R$ 9.000/mês</p><p>Estimativa para 60 crianças: R$ 150 por criança ao mês e R$ 108.000 por ano.</p></article>
          <article className="info-card"><p className="eyebrow">03 · Acolher</p><h3>Requalificação do espaço</h3><p>Adequações para ampliar a qualidade, a segurança e as condições das atividades. A apresentação registra um parceiro privado para assumir parte dos custos e um orçamento global em consolidação.</p><p>Novos parceiros podem compor os recursos necessários para concluir as melhorias.</p></article>
        </div>
        <div className="container cre-investment-summary"><div><h3>Transporte e alimentação</h3><p>Estimativa conjunta de <strong>R$ 24.000/mês</strong> ou <strong>R$ 288.000/ano</strong>. O orçamento da reforma é separado.</p></div><a className="button button-green" href="#contato-cre-ser">Conversar sobre uma parceria</a></div>
      </section>

      <section className="section">
        <div className="container section-heading centered-heading"><p className="eyebrow">Perguntas frequentes</p><h2>Orientações para famílias e parceiros</h2></div>
        <div className="container faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="section cre-contact-section" id="contato-cre-ser">
        <div className="container cre-contact-panel"><div><p className="eyebrow">Fale com o Crê-Ser</p><h2>Uma conversa pode abrir novos caminhos</h2><p>Para procurar atendimento, esclarecer o encaminhamento ou construir uma parceria, entre em contato com a equipe do programa.</p></div><div className="cre-contact-links"><a className="button button-green" href="tel:+551145342416">(11) 4534-2416</a><a href="mailto:projetocreserlaritatibense@gmail.com">projetocreserlaritatibense@gmail.com</a><Link className="text-link" href="/como-ajudar">Conheça outras formas de apoiar →</Link></div></div>
      </section>
    </>
  );
}