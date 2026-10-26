(() => {
  const root = document.querySelector('[data-home-carousel]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = 'true';
  const slides = [...root.querySelectorAll('.home-carousel-slide')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0, paused = motion.matches, focused = false, timer;
  function schedule() {
    clearTimeout(timer);
    if (!paused && !focused && !document.hidden) timer = setTimeout(() => select((active + 1) % slides.length), 8000);
  }
  function select(index) {
    active = index;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === active);
      slide.setAttribute('aria-hidden', String(i !== active));
      slide.inert = i !== active;
    });
    schedule();
  }
  root.addEventListener('focusin', () => { focused = true; schedule(); });
  root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) { focused = false; schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { paused = motion.matches; schedule(); });
  schedule();
})();
