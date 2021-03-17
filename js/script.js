const menu = document.querySelector('#js-menu');
const nav = document.querySelector('#js-nav');
nav.style.display = 'none';
const mediaQuery = window.matchMedia('(min-width: 768px)');

const image = {
  menuOpen: `images/icon-hamburger.svg`,
  menuClose: 'images/icon-close.svg',
};

const { menuOpen, menuClose } = image;

const render = mquery => {
  if (mquery.matches) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
};

render(mediaQuery);

const openMenu = () => {
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
    menu.classList.add('active');
    menu.src = menuClose;
  } else {
    nav.style.display = 'none';
    menu.classList.remove('active');
    menu.src = menuOpen;
  }
};

menu.addEventListener('click', openMenu);
mediaQuery.addEventListener('change', render);
