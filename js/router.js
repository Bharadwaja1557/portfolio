/**
 * js/router.js — hash-based SPA router
 * URL scheme: index.html#home, #about, #work, #logs, #media, #contact, #site
 */

const PAGE_META = {
  home:    { cmd: '~/root',      label: 'root'    },
  about:   { cmd: './profile',   label: 'profile' },
  work:    { cmd: './work',      label: 'work'    },
  logs:    { cmd: './logs',      label: 'logs'    },
  media:   { cmd: './media',     label: 'media'   },
  contact: { cmd: '$ ping me',   label: 'ping'    },
  site:    { cmd: '$ man site',  label: 'site'    },
};

const FOOTER_HTML = `
  <footer class="site-footer">
    <span class="footer-copy">© ${new Date().getFullYear()} Mavilla Bharadwaja</span>
    <span class="footer-right">
      <a href="mailto:bharadwaja1557@gmail.com">mail</a>
      <a href="https://github.com/mb1557" target="_blank" rel="noopener">github</a>
      <a href="https://linkedin.com/in/bharadwaja1557/" target="_blank" rel="noopener">linkedin</a>
    </span>
  </footer>
`;

function navigate(page) {
  if (!PAGE_META[page] || !Pages[page]) return;

  if (window.location.hash !== `#${page}`) {
    history.pushState(null, '', `#${page}`);
  }

  // Sidebar active
  document.querySelectorAll('.nav-item[data-page]').forEach(el =>
    el.classList.toggle('active', el.dataset.page === page)
  );

  // Navbar breadcrumb
  document.getElementById('navbarPage').textContent = PAGE_META[page].cmd;

  // Re-trigger animation
  const content = document.getElementById('pageContent');
  content.style.animation = 'none';
  content.offsetHeight;
  content.style.animation = '';

  // Render page + footer
  const mainArea = document.querySelector('.main-area');
  const existingFooter = mainArea.querySelector('.site-footer');
  if (existingFooter) existingFooter.remove();

  content.innerHTML = Pages[page]();
  mainArea.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Run page-specific init if it exists
  if (typeof Pages[page].init === 'function') {
    Pages[page].init();
  }

  window.scrollTo({ top: 0 });
}

function initRouter() {
  // Theme toggle
  const btn = document.getElementById('themeToggle');
  btn.addEventListener('click', () => {
    const next = Theme.toggle();
    btn.textContent = next === 'dark' ? '[ light ]' : '[ dark ]';
  });
  btn.textContent = Theme.get() === 'dark' ? '[ light ]' : '[ dark ]';

  // Sidebar nav clicks
  document.getElementById('sidebarNav').addEventListener('click', e => {
    const item = e.target.closest('.nav-item[data-page]');
    if (item?.dataset.page) navigate(item.dataset.page);
  });

  // Delegated quick-link buttons (data-goto) inside page content
  document.getElementById('pageContent').addEventListener('click', e => {
    const el = e.target.closest('[data-goto]');
    if (el?.dataset.goto) navigate(el.dataset.goto);
  });

  // Browser back/forward
  window.addEventListener('popstate', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    navigate(page);
  });

  // Initial load
  const initial = window.location.hash.replace('#', '') || 'home';
  navigate(initial);
}
