import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div><span>404</span><p className="eyebrow">Página não encontrada</p><h1>Este caminho não está disponível.</h1><p>O endereço pode ter mudado. Volte ao início ou use o menu para encontrar as informações do Lar.</p><Link className="button button-green" href="/">Voltar ao início</Link></div></section>;
}
