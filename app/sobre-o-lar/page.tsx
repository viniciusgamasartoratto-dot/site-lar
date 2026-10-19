import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/CtaBand";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Sobre o Lar",
  description: "Conheça a história, a missão, o acolhimento institucional e a governança do Lar Itatibense da Criança.",
};

const timeline = [
  { year: "1952", title: "Início das atividades", text: "A instituição iniciou suas atividades em 30 de julho, por iniciativa do então deputado federal Paulo Abreu." },
  { year: "1988", title: "Intervenção e conclusão do novo prédio", text: "Diante das condições precárias da antiga casa, foi nomeado um interventor e acelerada a conclusão das novas instalações no Jardim Carlos Borella." },
  { year: "1989", title: "Mudança para o prédio próprio", text: "Em julho, o Lar mudou-se para o novo prédio, finalizado com a participação da comunidade itatibense." },
  { year: "1990", title: "Nova etapa de governança e criação do ECA", text: "A Justiça determinou o fim da intervenção, a eleição da primeira diretoria e a criação de novo Estatuto Social e regras de conduta. No mesmo ano, foi instituído o Estatuto da Criança e do Adolescente (ECA), pela Lei nº 8.069, de 13 de julho de 1990, que estabelece a proteção integral de crianças e adolescentes." },
  { year: "2025", title: "Criação das três casas de acolhimento", text: "Foram criadas as casas Florecer, Gira mundo e Bem-te-vi, com duas unidades em Itatiba e uma em Morungaba, destinadas ao acolhimento de crianças e adolescentes." },
  { year: "2026", title: "Programa Crê-Ser", text: "O Programa Crê-Ser marca uma nova etapa de cuidado no espaço do Lar, com acompanhamento psicossocial de crianças e suas famílias da comunidade itatibense." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Sobre o Lar" title="Há mais de sete décadas, uma casa de cuidado e proteção" description="O Lar Itatibense da Criança é uma organização privada, sem fins lucrativos e de utilidade pública, dedicada ao acolhimento institucional de crianças e adolescentes." tone="cream" image={{ src: "/images/sede-jogos.jpeg", alt: "Espaço de jogos do Lar Itatibense" }} />

      <section className="section">
        <div className="container content-grid">
          <aside className="content-aside">
            <h2>Em resumo</h2>
            <ul>
              <li>Atuação desde 30 de julho de 1952</li>
              <li>Acolhimento por medida de proteção</li>
              <li>Público de 0 a 17 anos e 11 meses</li>
              <li>Acolhimento em três casas: duas em Itatiba e uma em Morungaba</li>
              <li>Administração por diretoria</li>
            </ul>
          </aside>
          <div className="prose">
            <h2>Uma instituição que nasceu com a cidade ao seu lado</h2>
            <p>Ao longo da história, o Lar passou por diferentes endereços. Uma de suas sedes ficava à margem do Ribeirão Jacaré e foi severamente atingida por enchentes, mobilizando a população de Itatiba para socorrer as crianças.</p>
            <p>O prédio no Jardim Carlos Borella, construído com apoio comunitário, marcou uma nova etapa da história do Lar. Atualmente, o prédio abriga a administração e o Programa Crê-Ser, sem acolhimento institucional nesse endereço.</p>
            <p>O acolhimento é realizado em três casas — Florecer, Gira mundo e Bem-te-vi —, sendo duas em Itatiba e uma em Morungaba. Suas localizações são mantidas em sigilo para proteger as crianças e os adolescentes.</p>
            <div className="timeline">
              {timeline.map((item) => <article className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><div className="timeline-copy"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>

            <h2>Missão</h2>
            <blockquote>Abrigar, amparar e educar gratuitamente, sem distinção de raça, cor ou religião, oferecendo assistência material, moral e espiritual.</blockquote>
            <p>O acolhimento institucional é destinado a crianças e adolescentes de 0 a 17 anos e 11 meses, encaminhados pelo Poder Judiciário como medida de proteção. A instituição oferece alimentação, atenção cotidiana, acompanhamento escolar na rede pública e cuidados diários.</p>
            <p>Monitores acompanham a rotina da entidade 24 horas por dia, inclusive aos feriados. O trabalho busca responder às necessidades de proteção com carinho, atenção e responsabilidade.</p>

            <h2>Administração e governança</h2>
            <p>A administração é realizada por uma diretoria formada por pessoas de diferentes setores da sociedade local, com assessoramento dos conselhos deliberativo e fiscal.</p>
            <div className="button-row"><Link className="button button-green" href="/diretoria">Conhecer a diretoria</Link><Link className="text-link" href="/transparencia">Consultar documentos →</Link></div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow="Programa em destaque" title="Conheça o Programa Crê-Ser" text="Acompanhamento psicossocial para crianças e famílias da comunidade itatibense em situação de vulnerabilidade." primaryHref="/programa-cre-ser" primaryLabel="Conheça o programa" secondaryHref="/#fale-com-o-lar" secondaryLabel="Entrar em contato" />
    </>
  );
}
