"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
type Banner = { id: string; title: string; url: string; link: string };

export function HomeCarousel({ children }: { children: ReactNode }) {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [visible, setVisible] = useState(true);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = banners.length + 1;
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/content?kind=banner", { cache: "no-store", signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error("Banners indisponíveis"); return response.json(); })
      .then(setBanners).catch(error => { if (error.name !== "AbortError") console.error("Não foi possível carregar os banners", error); });
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const onMotion = () => setReducedMotion(media.matches);
    const onVisibility = () => setVisible(!document.hidden);
    media.addEventListener("change", onMotion); document.addEventListener("visibilitychange", onVisibility); onVisibility();
    return () => { controller.abort(); media.removeEventListener("change", onMotion); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  useEffect(() => {
    if (count < 2 || reducedMotion || keyboardFocus || !visible) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % count), 4000);
    return () => window.clearInterval(timer);
  }, [count, reducedMotion, keyboardFocus, visible, active]);
  function select(index: number) { setActive((index + count) % count); }
  return <section className="home-carousel" aria-label="Destaques do Lar" aria-roledescription="carrossel" onFocusCapture={event => { if (event.target.matches(":focus-visible")) setKeyboardFocus(true); }} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocus(false); }}>
    <div className="home-carousel-stage" onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={event => { if (!touch.current || count < 2) return; const dx = event.changedTouches[0].clientX - touch.current.x, dy = event.changedTouches[0].clientY - touch.current.y; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) select(active + (dx < 0 ? 1 : -1)); touch.current = null; }}>
      {banners.map((banner, index) => <div key={banner.id} className={`home-carousel-slide home-carousel-event${active === index ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${count}: ${banner.title}`} aria-hidden={active !== index} inert={active !== index}><a href={banner.link || `#evento-${banner.id}`} aria-label={`Saiba mais: ${banner.title}`}><img src={banner.url} alt={banner.title} decoding="async" /><span className="carousel-event-label">{banner.title}<span>Saiba mais</span></span></a></div>)}
      <div className={`home-carousel-slide${active === banners.length ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${count} de ${count}: Programa Crê-Ser`} aria-hidden={active !== banners.length} inert={active !== banners.length}>{children}</div>
    </div>
    {count > 1 && <div className="home-carousel-controls"><div className="home-carousel-pages" aria-label="Escolher banner">{[...banners.map(banner => banner.title), "Programa Crê-Ser"].map((title, index) => <button key={index} type="button" aria-label={`Mostrar banner ${index + 1}: ${title}`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)}><span /></button>)}</div><span className="sr-only" aria-live={keyboardFocus ? "polite" : "off"}>Banner {active + 1} de {count}</span></div>}
  </section>;
}
