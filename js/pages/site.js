/**
 * js/pages/site.js
 */

Pages.site = function () {
  const todos = [
    { done: true,  text: 'dark / light theme toggle with localStorage persistence' },
    { done: true,  text: 'hash-based SPA routing with browser back/forward support' },
    { done: true,  text: 'responsive mobile layout with hamburger sidebar' },
    { done: true,  text: 'blog system with per-post HTML files and registry' },
    { done: true,  text: 'notes system (short-form, alongside blogs in logs)' },
    { done: true,  text: 'search + filter on logs page (all / blogs / notes)' },
    { done: true,  text: 'search + topic filter on work page' },
    { done: true,  text: 'fast-reader view on all blog/note pages' },
    { done: true,  text: 'footer with copyright on every page' },
    { done: true,  text: 'scrollbar flicker fix (overflow-y: scroll on html)' },
    { done: true,  text: '404 page' },
    { done: false, text: 'RSS feed for logs' },
    { done: false, text: 'gallery / media page with real photos' },
    { done: false, text: 'project showcase with live demo links' },
    { done: false, text: 'dark-mode optimised images' },
    { done: false, text: 'global search across all pages' },
    { done: false, text: 'estimated reading time on blog posts' },
    { done: false, text: 'pagination or infinite scroll on logs/work (once content grows)' },
  ];

  const todoHTML = todos.map(t => `
    <div class="todo-item">
      <span class="todo-cb ${t.done ? 'done' : ''}"></span>
      <span class="${t.done ? 'todo-done' : 'todo-pending'}">${t.text}</span>
    </div>
  `).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">man site</span>
    </div>
    <div class="page-heading">site</div>

    <div class="site-section">
      <div class="site-section-title">about this site</div>
      <p class="site-desc">
        A minimal, terminal-inspired developer portfolio — statically served,
        no build step, no frameworks. Pure HTML, CSS, and vanilla JS.
        Blog and note posts are standalone HTML files; the registry files
        (<code>data/logs.js</code>, <code>data/projects.js</code>) act as
        the content source-of-truth for the main SPA.
      </p>
      <br>
      <div class="site-badge">⚡ fast-reader view</div>&nbsp;
      <span style="font-size:0.78rem;color:var(--text-dim);vertical-align:middle;">
        &nbsp;all blog and note pages support fast-reader view —
        click the <em>reader mode</em> button at the top of any post
        to strip the UI and read distraction-free.
      </span>
    </div>

    <div class="site-section">
      <div class="site-section-title">meta</div>
      <div class="site-meta-grid">
        <div class="site-meta-item">
          <div class="site-meta-key">version</div>
          <div class="site-meta-val hi">1.0.0</div>
        </div>
        <div class="site-meta-item">
          <div class="site-meta-key">stack</div>
          <div class="site-meta-val">HTML · CSS · JS</div>
        </div>
        <div class="site-meta-item">
          <div class="site-meta-key">frameworks</div>
          <div class="site-meta-val">none</div>
        </div>
        <div class="site-meta-item">
          <div class="site-meta-key">fonts</div>
          <div class="site-meta-val">JetBrains Mono</div>
        </div>
        <div class="site-meta-item">
          <div class="site-meta-key">theme</div>
          <div class="site-meta-val">dark / light</div>
        </div>
        <div class="site-meta-item">
          <div class="site-meta-key">routing</div>
          <div class="site-meta-val">hash-based SPA</div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="site-section-title">sitemap</div>
      <div class="sitemap">
<span class="sm-dir">portfolio/</span>
<span class="sm-tree">├── </span><span class="sm-file">index.html</span><span class="sm-note">← main SPA shell</span>
<span class="sm-tree">├── </span><span class="sm-file">404.html</span>
<span class="sm-tree">├── </span><span class="sm-dir">css/</span>
<span class="sm-tree">│   └── </span><span class="sm-file">main.css</span><span class="sm-note">← all styles</span>
<span class="sm-tree">├── </span><span class="sm-dir">js/</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">theme.js</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">router.js</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">mobile-nav.js</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">blog-shell.js</span>
<span class="sm-tree">│   └── </span><span class="sm-dir">pages/</span><span class="sm-note">← one file per SPA page</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">home.js</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">about.js</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">work.js</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">logs.js</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">media.js</span>
<span class="sm-tree">│       ├── </span><span class="sm-file">contact.js</span>
<span class="sm-tree">│       └── </span><span class="sm-file">site.js</span>
<span class="sm-tree">├── </span><span class="sm-dir">data/</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">logs.js</span><span class="sm-note">← add new blogs/notes here</span>
<span class="sm-tree">│   └── </span><span class="sm-file">projects.js</span><span class="sm-note">← add new projects here</span>
<span class="sm-tree">├── </span><span class="sm-dir">blogs/</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">template.html</span><span class="sm-note">← copy to create a new post</span>
<span class="sm-tree">│   ├── </span><span class="sm-file">blog-01..04.html</span>
<span class="sm-tree">│   └── </span><span class="sm-file">note-01.html</span>
<span class="sm-tree">└── </span><span class="sm-dir">assets/</span>
<span class="sm-tree">    ├── </span><span class="sm-dir">img/</span><span class="sm-note">← profile photo → photo.jpg</span>
<span class="sm-tree">    └── </span><span class="sm-dir">books/</span><span class="sm-note">← book cover images</span>
      </div>
    </div>

    <div class="site-section">
      <div class="site-section-title">changelog / todo</div>
      <div class="todo-list">${todoHTML}</div>
    </div>
  `;
};
