/**
 * js/blog-shell.js
 * Included in every blogs/blog-XX.html file.
 * Handles: theme persistence, sidebar nav links, theme toggle button.
 */

(function () {
  // Apply theme from localStorage immediately (already done inline in HTML,
  // this is a safety fallback and handles the toggle button state)
  const themeBtn = document.getElementById('themeToggle');

  function syncBtn() {
    if (themeBtn) {
      themeBtn.textContent = Theme.get() === 'dark' ? '[ light ]' : '[ dark ]';
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      Theme.toggle();
      syncBtn();
    });
  }

  syncBtn();

  // Mobile nav
  MobileNav.init();
})();
