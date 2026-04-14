/**
 * js/pages/logs.js
 * Reads from the global BLOGS array (data/blogs.js).
 * To add a post: add an entry to data/blogs.js + create the blog file.
 */

Pages.blogs = function () {
  const rows = BLOGS.map(b => `
    <a class="blog-item" href="${b.file}">
      <div class="blog-date">${b.date}</div>
      <div>
        <div class="blog-title">
          ${b.title}
          <span class="blog-badge">${b.tag}</span>
        </div>
        <div class="blog-excerpt">${b.excerpt}</div>
      </div>
    </a>
  `).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">tail -f blog.log</span>
    </div>
    <div class="page-heading">Logs</div>
    <div class="blog-list">${rows}</div>
  `;
};
