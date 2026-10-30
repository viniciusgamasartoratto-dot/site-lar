import Link from "next/link";
import type { ReactNode } from "react";

export function HomeCarousel({ children }: { children: ReactNode }) {
  return <section className="home-carousel" data-home-carousel aria-label="Destaques do Lar" aria-roledescription="carrossel">
    <div className="home-carousel-stage">
      <div className="home-carousel-slide is-active" role="group" aria-roledescription="slide" aria-label="1 de 2: Lar Itatibense da Criança" aria-hidden="false">
        <section className="lar-intro-hero" aria-labelledby="lar-hero-title">
          <img className="lar-hero-photo" src="/images/recepcao.jpg" alt="" width="1200" height="800" fetchPriority="high" />
          <div className="container lar-hero-content"><p className="eyebrow">Lar Itatibense da Criança</p><h1 id="lar-hero-title">Uma história de cuidado e proteção desde 1952</h1><p>Há mais de sete décadas, o Lar Itatibense da Criança atua na proteção de crianças e adolescentes, com o apoio da comunidade.</p><div className="button-row"><Link className="button button-coral" href="/como-ajudar#doar">Doe agora</Link><Link className="button button-outline" href="#sobre-o-lar">Conheça o Lar</Link></div></div>
        </section>
      </div>
      <div className="home-carousel-slide" role="group" aria-roledescription="slide" aria-label="2 de 2: Programa Crê-Ser" aria-hidden="true" inert>{children}</div>
    </div>
    <script src="/scripts/home-carousel.js" defer data-home-carousel-script="true" />
  </section>;
}
