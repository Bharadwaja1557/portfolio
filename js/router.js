/**
 * js/router.js — Hash-based SPA router for index.html
 *
 * URL scheme: index.html#home, index.html#about, etc.
 * Browser back/forward buttons work automatically via hashchange.
 */

const PAGE_META = {
  home:     { cmd: '~/root',      label: 'Root' },
  about:    { cmd: './profile',   label: 'Profile' },
  projects: { cmd: './work',      label: 'Work' },
  blogs:    { cmd: './logs',      label: 'Logs' },
  gallery:  { cmd: './gallery',   label: 'Gallery' },
  contact:  { cmd: '$ ping me',   label: 'Ping' },
};

function navigate(page) {
  if (!PAGE_META[page] || !Pages[page]) return;

  // Sync URL hash (without triggering hashchange again)
  if (window.location.hash !== `#${page}`) {
    history.pushState(null, '', `#${page}`);
  }

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(el =>
    el.classList.toggle('active', el.dataset.page === page)
  );

  // Update navbar breadcrumb
  document.getElementById('navbarPage').textContent = PAGE_META[page].cmd;

  // Re-trigger animation
  const content = document.getElementById('pageContent');
  content.style.animation = 'none';
  content.offsetHeight; // reflow
  content.style.animation = '';

  // Render page
  content.innerHTML = Pages[page]();

  // Scroll to top
  window.scrollTo({ top: 0 });
}

function initRouter() {
  // Theme toggle button
  const btn = document.getElementById('themeToggle');
  btn.addEventListener('click', () => {
    const next = Theme.toggle();
    btn.textContent = next === 'dark' ? '[ light ]' : '[ dark ]';
  });
  // Reflect current theme on button
  btn.textContent = Theme.get() === 'dark' ? '[ light ]' : '[ dark ]';

  // Sidebar nav clicks
  document.getElementById('sidebarNav').addEventListener('click', e => {
    const item = e.target.closest('.nav-item');
    if (item?.dataset.page) navigate(item.dataset.page);
  });

  // Quick-link buttons inside page content (delegated)
  document.getElementById('pageContent').addEventListener('click', e => {
    const btn = e.target.closest('[data-goto]');
    if (btn?.dataset.goto) navigate(btn.dataset.goto);
  });

  // Browser back / forward
  window.addEventListener('popstate', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    navigate(page);
  });

  // Initial page from URL hash
  const initial = window.location.hash.replace('#', '') || 'home';
  navigate(initial);
}
