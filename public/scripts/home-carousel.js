(() => {
  const root = document.querySelector('[data-home-carousel]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = 'true';
  const slides = [...root.querySelectorAll('.home-carousel-slide')];
  const buttons = [...root.querySelectorAll('[data-slide]')];
  const pause = root.querySelector('[data-carousel-pause]');
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
      if (i === active) buttons[i].setAttribute('aria-current', 'true');
      else buttons[i].removeAttribute('aria-current');
    });
    schedule();
  }
  function label() { pause.textContent = paused ? 'Retomar banners' : 'Pausar banners'; }
  buttons.forEach((button, i) => button.addEventListener('click', () => select(i)));
  pause.addEventListener('click', () => { paused = !paused; label(); schedule(); });
  root.addEventListener('focusin', () => { focused = true; schedule(); });
  root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) { focused = false; schedule(); } });
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { paused = motion.matches; label(); schedule(); });
  label(); schedule();
})();
