/**
 * js/blog-shell.js
 * Included by every blogs/*.html file.
 * Handles: theme, hamburger, fast-reader mode, footer year.
 */

(function () {
  // Theme toggle button
  const themeBtn = document.getElementById('themeToggle');
  function syncBtn() {
    if (themeBtn) themeBtn.textContent = Theme.get() === 'dark' ? '[ light ]' : '[ dark ]';
  }
  if (themeBtn) themeBtn.addEventListener('click', () => { Theme.toggle(); syncBtn(); });
  syncBtn();

  // Mobile nav
  MobileNav.init();

  // Footer year
  const yr = document.getElementById('footerYear');
  if (yr) yr.textContent = new Date().getFullYear();

  // Fast-reader mode
  const readerToggle = document.querySelector('.reader-toggle');
  const readerExit   = document.querySelector('.reader-exit');

  if (readerToggle) {
    readerToggle.addEventListener('click', () => {
      document.body.classList.add('reader-mode');
    });
  }
  if (readerExit) {
    readerExit.addEventListener('click', () => {
      document.body.classList.remove('reader-mode');
    });
  }
})();
