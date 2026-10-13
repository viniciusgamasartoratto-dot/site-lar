import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";
import "./identity.css";
import "./alternative.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174f72",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description = "Acolhimento institucional, Programa Crê-Ser e mobilização comunitária em favor de crianças, adolescentes e famílias de Itatiba.";

  return {
    title: { default: "Lar Itatibense da Criança", template: "%s | Lar Itatibense da Criança" },
    description,
    applicationName: "Lar Itatibense da Criança",
    authors: [{ name: "Lar Itatibense da Criança" }],
    keywords: ["Lar Itatibense da Criança", "Programa Crê-Ser", "acolhimento institucional", "Itatiba", "doação"],
    icons: { icon: "/images/logo-lar.gif", shortcut: "/images/logo-lar.gif" },
    openGraph: { title: "Lar Itatibense da Criança", description, type: "website", locale: "pt_BR", url: origin, images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Lar Itatibense da Criança e Programa Crê-Ser" }] },
    twitter: { card: "summary_large_image", title: "Lar Itatibense da Criança", description, images: [`${origin}/og.png`] },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body data-analytics-id={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || undefined}>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
