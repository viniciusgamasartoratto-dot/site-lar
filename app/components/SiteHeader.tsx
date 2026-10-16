"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/site";

export function SiteHeader() {
  const pathname = usePathname()?.replace(/\/$/, "") || "/";
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Lar Itatibense da Criança — página inicial">
          <img src="/images/logo-lar-simbolo.png" alt="" width="120" height="72" />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={item.featured ? "nav-featured" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-coral header-donate" href="/como-ajudar#doar">Doe agora</Link>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu de navegação"><span>Menu</span></summary>
          <nav aria-label="Navegação para dispositivos móveis">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={item.featured ? "nav-featured" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
