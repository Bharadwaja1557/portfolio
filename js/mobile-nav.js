/**
 * js/mobile-nav.js — Hamburger menu for mobile
 * Works for both index.html and individual blog pages.
 */

const MobileNav = (() => {
  function init() {
    const hamburger = document.getElementById('hamburger');
    const sidebar   = document.querySelector('.sidebar');
    const overlay   = document.getElementById('mobileOverlay');

    if (!hamburger || !sidebar || !overlay) return;

    function open() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }

    function close() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
      sidebar.classList.contains('open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    // Close when a nav item is clicked (on mobile the user is navigating away)
    sidebar.addEventListener('click', e => {
      if (e.target.closest('.nav-item')) close();
    });
  }

  return { init };
})();
