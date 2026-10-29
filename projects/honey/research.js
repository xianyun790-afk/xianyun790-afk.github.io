(() => {
  const rail = document.querySelector('#research-scroll');
  const stage = document.querySelector('.research-stage');
  if (!rail || !stage) return;
  const cards = [...stage.querySelectorAll('.proposal-card')];
  if (!cards.length) return;
  const number = document.querySelector('#research-page-number');
  const title = document.querySelector('#research-page-title');
  const previous = stage.querySelector('.research-prev');
  const next = stage.querySelector('.research-next');
  const track = stage.querySelector('.research-track span');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const count = cards.length;
  let step = 500;
  let gap = 500;
  let railStart = 0;
  let target = 0;
  let position = 0;
  let current = -1;
  let frame = 0;
  let scrollDirty = true;
  let firstPaint = true;
  let settleTimer = 0;
  let lastScrollY = window.scrollY;
  let scrollDirection = 1;

  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

  function preloadAround(index) {
    for (let i = Math.max(0, index - 2); i <= Math.min(count - 1, index + 2); i++) {
      const image=cards[i].querySelector('img');
      if (image.dataset.src) { image.src=window.innerWidth<700 ? image.dataset.src.replace('.webp','-mobile.webp') : image.dataset.src; delete image.dataset.src; }
      image.loading='eager';
    }
  }

  function render() {
    if (!Number.isFinite(position)) position=0;
    cards.forEach((card, i) => {
      const delta = i - position;
      const distance = Math.abs(delta);
      const visible = distance < 2.25;
      card.style.visibility = visible ? 'visible' : 'hidden';
      if (!visible) {
        card.style.willChange = 'auto';
        return;
      }
      const focus = clamp(distance, 0, 1);
      const scale = 1 - .085 * focus;
      card.style.transform = `translate(-50%, -50%) translateY(${delta * gap}px) scale(${scale})`;
      card.style.filter = reducedMotion.matches || window.innerWidth < 900 ? 'none' : `blur(${Math.max(0, focus - .1) * 6}px)`;
      card.style.opacity = String(1 - .38 * focus);
      card.style.zIndex = String(100 - Math.round(distance * 20));
      card.style.willChange = 'transform, filter, opacity';
    });
    const selected = clamp(Math.round(position), 0, count - 1);
    if (current !== selected) {
      current = selected;
      cards.forEach((card, i) => card.setAttribute('aria-hidden', String(i !== current)));
      number.textContent = String(current + 1).padStart(2, '0');
      title.textContent = cards[current].querySelector('figcaption').textContent;
      if ((current === 0 && document.activeElement === previous) || (current === count - 1 && document.activeElement === next)) stage.focus({ preventScroll: true });
      previous.disabled = current === 0;
      next.disabled = current === count - 1;
      preloadAround(current);
    }
    track.style.transform = `scaleX(${(position + 1) / count})`;
  }

  function tick() {
    frame = 0;
    if (scrollDirty) {
      target = clamp((window.scrollY - railStart) / step, 0, count - 1);
      scrollDirty = false;
    }
    if (firstPaint || reducedMotion.matches) {
      position = target;
      firstPaint = false;
    } else {
      position += (target - position) * .24;
      if (Math.abs(target - position) < .001) position = target;
    }
    render();
    if (position !== target) frame = requestAnimationFrame(tick);
  }

  function requestRender() {
    scrollDirty = true;
    if (!frame) frame = requestAnimationFrame(tick);
  }

  function measure() {
    step = clamp(window.innerHeight * .58, 320, 640);
    rail.style.height = `${stage.offsetHeight + step * (count - 1)}px`;
    railStart = rail.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(stage).top) || 0);
    gap = cards[0].offsetHeight * .82 + 24;
    requestRender();
  }

  function goTo(index) {
    const page = clamp(index, 0, count - 1);
    window.scrollTo({ top: railStart + page * step, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }

  previous.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  stage.addEventListener('keydown', event => {
    const directions = { ArrowDown: 1, ArrowRight: 1, PageDown: 1, ArrowUp: -1, ArrowLeft: -1, PageUp: -1 };
    if (event.key in directions) {
      event.preventDefault();
      goTo(current + directions[event.key]);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      goTo(event.key === 'Home' ? 0 : count - 1);
    }
  });
  function onScroll() {
    const movement = window.scrollY - lastScrollY;
    if (Math.abs(movement) > .5) scrollDirection = Math.sign(movement);
    lastScrollY = window.scrollY;
    requestRender();
    clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      const progress = (window.scrollY - railStart) / step;
      // Let normal scrolling enter and leave the section at both ends.
      if (progress <= 0 || progress >= count - 1) return;
      const fraction = progress - Math.floor(progress);
      let nearest = Math.round(progress);
      // A deliberate short wheel gesture should advance, rather than snap back.
      if (scrollDirection > 0 && fraction > .14 && fraction < .5) nearest = Math.ceil(progress);
      if (scrollDirection < 0 && fraction < .86 && fraction > .5) nearest = Math.floor(progress);
      if (Math.abs(progress - nearest) > .012) goTo(nearest);
    }, 180);
  }
  stage.addEventListener('touchstart', () => clearTimeout(settleTimer), { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure, { once: true });
  reducedMotion.addEventListener('change', requestRender);
  if (window.ResizeObserver) new ResizeObserver(measure).observe(stage);
  const firstImage=cards[0].querySelector('img');
  if(window.innerWidth<700) firstImage.src=firstImage.getAttribute('src').replace('.webp','-mobile.webp');
  measure();
})();
