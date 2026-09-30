import Link from "next/link";
import { navigation, site } from "../data/site";
import { BrandSignature } from "./BrandSignature";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="fale-com-o-lar">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/" aria-label="Lar Itatibense da Criança — página inicial">
            <img src="/images/logo-lar-simbolo.png" alt="" width="116" height="70" loading="lazy" />
          </Link>
          <BrandSignature />
          <p>Organização da sociedade civil, sem fins lucrativos, dedicada ao acolhimento e à proteção de crianças e adolescentes.</p>
        </div>
        <div>
          <h2>Navegue</h2>
          <ul className="footer-links">
            {navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            <li><Link href="/diretoria">Diretoria</Link></li>
          </ul>
        </div>
        <div>
          <h2>Fale com o Lar</h2>
          <address>
            <p>Sede administrativa e Programa Crê-Ser</p>
            <p>{site.address}</p>
            <p>{site.city} — {site.postalCode}</p>
            <p><a href={`tel:${site.phoneLinks[0]}`}>{site.phones[0]}</a></p>
            <p><a href={`tel:${site.phoneLinks[1]}`}>{site.phones[1]}</a></p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </address>
        </div>
        <div className="footer-action">
          <h2>Seu apoio abre caminhos.</h2>
          <p>Converse com a instituição para conhecer as necessidades atuais e a melhor forma de contribuir.</p>
          <Link className="button button-coral" href="/como-ajudar">Quero ajudar</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Lar Itatibense da Criança.</p>
        <Link href="/transparencia">Compromisso com a transparência</Link>
      </div>
    </footer>
  );
}
