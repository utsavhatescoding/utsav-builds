const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
