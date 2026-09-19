const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('.menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-menu-cta');

function openMenu() {
  menu.hidden = false;
  document.body.classList.add('menu-open');
  menuButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
}

function closeMenu() {
  menu.hidden = true;
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.focus();
}

menuButton?.addEventListener('click', openMenu);
closeButton?.addEventListener('click', closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.hidden = true;
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu.hidden) {
    closeMenu();
  }
});


const searchButtons = document.querySelectorAll('.search-button');
const searchOverlay = document.querySelector('#site-search');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('#site-search-input');
const searchForm = document.querySelector('.search-form');

function openSearch() {
  if (!searchOverlay) return;
  searchOverlay.hidden = false;
  document.body.classList.add('menu-open');
  requestAnimationFrame(() => searchInput?.focus());
}

function closeSearch() {
  if (!searchOverlay) return;
  searchOverlay.hidden = true;
  document.body.classList.remove('menu-open');
  searchButtons[0]?.focus();
}

searchButtons.forEach((button) => button.addEventListener('click', openSearch));
searchClose?.addEventListener('click', closeSearch);

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && searchOverlay && !searchOverlay.hidden) {
    closeSearch();
  }
});
