// Caroline Arruda — interações leves
(function () {
  'use strict';

  // Breakpoint sincronizado com CSS @media (max-width: 900px)
  const mql = window.matchMedia('(max-width: 900px)');

  // Menu mobile
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav-principal');
  const body = document.body;

  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
      nav.classList.remove('is-open');
      nav.setAttribute('aria-hidden', 'true');
      nav.setAttribute('inert', '');
      body.style.overflow = '';
    };
    const openMenu = () => {
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Fechar menu');
      nav.classList.add('is-open');
      nav.removeAttribute('aria-hidden');
      nav.removeAttribute('inert');
      body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    const navClose = nav.querySelector('.nav-close');
    if (navClose) navClose.addEventListener('click', closeMenu);

    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        if (mql.matches) closeMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    // Ao entrar em desktop, remove restrições de acessibilidade do menu
    const onBreakpointChange = (e) => {
      if (e.matches) {
        nav.setAttribute('aria-hidden', 'true');
        nav.setAttribute('inert', '');
      } else {
        closeMenu();
        nav.removeAttribute('aria-hidden');
        nav.removeAttribute('inert');
      }
    };
    mql.addEventListener('change', onBreakpointChange);
    // Estado inicial correto
    if (!mql.matches) {
      nav.removeAttribute('aria-hidden');
      nav.removeAttribute('inert');
    }
  }

  // Header on-scroll + altura dinâmica para menu mobile
  const header = document.querySelector('.site-header');
  if (header) {
    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
    };
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight, { passive: true });

    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Ano dinâmico
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
