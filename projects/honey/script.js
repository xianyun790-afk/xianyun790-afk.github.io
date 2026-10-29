const hero = document.querySelector('.hero');
const fitHero = () => hero.style.setProperty('--hero-scale', String(hero.clientWidth / (hero.clientWidth <= 700 ? 700 : 1920)));
new ResizeObserver(fitHero).observe(hero);
fitHero();

const galleryImages = [
  ['assets/gallery-one.webp', '嗡嗡乐蜂蜜包装设计，暖色背景蜂蜜罐'],
  ['assets/gallery-two.webp', '嗡嗡乐蜂蜜包装设计，林间蜂蜜罐'],
  ['assets/gallery-three.webp', '嗡嗡乐蜂蜜包装设计，蜂巢背景蜂蜜罐'],
  ['assets/gallery-four.webp', '嗡嗡乐蜂蜜包装设计，绿植中的蜂蜜罐'],
  ['assets/gallery-five.webp', '嗡嗡乐蜂蜜包装设计，蜂巢与蜂蜜罐']
];
const galleryMain = document.querySelector('#gallery-main');
const galleryBlur = document.querySelector('#gallery-blur');
const galleryButtons = [...document.querySelectorAll('.gallery-thumbs button')];
function showGallery(index) {
  const [original, alt] = galleryImages[index];
  const src=window.innerWidth<700 ? original.replace('.webp','-mobile.webp') : original;
  galleryMain.classList.add('changing');
  const next = new Image();
  next.onload = () => {
    galleryMain.removeAttribute('srcset');
    galleryMain.src = src;
    galleryMain.alt = alt;
    galleryBlur.style.backgroundImage = `url('${src}')`;
    galleryMain.classList.remove('changing');
  };
  next.onerror=()=>galleryMain.classList.remove('changing');
  next.src = src;
  galleryButtons.forEach((button, buttonIndex) => {
    const selected = buttonIndex === index;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
galleryButtons.forEach(button => button.addEventListener('click', () => showGallery(Number(button.dataset.index))));

