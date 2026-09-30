import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({ eyebrow = "Faça parte", title, text, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">
          <Link className="button button-cream" href={primaryHref}>{primaryLabel}</Link>
          {secondaryHref && secondaryLabel ? <Link className="button button-ghost-light" href={secondaryHref}>{secondaryLabel}</Link> : null}
        </div>
      </div>
    </section>
  );
}
