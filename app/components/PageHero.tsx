import Link from "next/link";
import { BrandSignature } from "./BrandSignature";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "green" | "coral" | "cream";
  image?: { src: string; alt: string };
};

export function PageHero({ eyebrow, title, description, tone = "green", image }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className={`container page-hero-grid${image ? " has-image" : ""}`}>
        <div>
          <nav className="breadcrumbs" aria-label="Trilha de navegação">
            <Link href="/">Início</Link><span aria-hidden="true">/</span><span>{eyebrow}</span>
          </nav>
          <BrandSignature />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-description">{description}</p>
        </div>
        {image && (
          <div className="page-hero-image">
            <img src={image.src} alt={image.alt} width="720" height="540" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
