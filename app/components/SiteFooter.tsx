import Link from "next/link";
import { navigation, site, socialLinks } from "../data/site";
import { BrandSignature } from "./BrandSignature";

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.2V6.7c0-.7.5-.9 1-.9h2.6V2.1L14.6 2C11.1 2 10 4.1 10 6.4v1.8H7.2v4H10V22h4.2v-9.8h3.2l.5-4h-3.7Z" />
    </svg>
  );
}

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
          <div className="social-links" aria-label="Redes sociais do Lar Itatibense da Criança">
            {socialLinks.map((social) => (
              <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} do Lar Itatibense da Criança (abre em nova aba)`}>
                <span className={`social-icon social-icon-${social.icon}`}><SocialIcon icon={social.icon} /></span>

              </a>
            ))}
          </div>
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
          <h2>Seu apoio abre caminhos</h2>
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
