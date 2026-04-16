/**
 * js/pages/logs.js — reads LOGS from data/logs.js
 */

Pages.logs = function () {
  function rowHTML(b) {
    const typeCls   = b.type === 'note' ? 'type-note' : 'type-blog';
    const typeLabel = b.type === 'note' ? 'note' : 'blog';
    return `
      <a class="blog-item" href="${b.file}" data-type="${b.type}" data-title="${b.title.toLowerCase()}">
        <div class="blog-date">${b.date}</div>
        <div>
          <div class="blog-title">
            ${b.title}
            <span class="blog-badge ${typeCls}">${typeLabel}</span>
            <span class="blog-badge">${b.tag}</span>
          </div>
          <div class="blog-excerpt">${b.excerpt}</div>
        </div>
      </a>
    `;
  }

  const allRows = LOGS.map(rowHTML).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">tail -f ./logs</span>
    </div>
    <div class="page-heading">logs</div>

    <div class="filter-bar">
      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input class="search-input" id="logsSearch" type="text" placeholder="search logs..." autocomplete="off" spellcheck="false">
      </div>
      <div class="filter-btns">
        <button class="filter-btn active" data-filter="all">all</button>
        <button class="filter-btn" data-filter="blog">blogs</button>
        <button class="filter-btn" data-filter="note">notes</button>
      </div>
    </div>

    <div class="blog-list" id="logsList">${allRows}</div>
    <div class="no-results" id="logsNoResults" style="display:none;">// nothing matches — try a different query</div>
  `;
};

Pages.logs.init = function () {
  const searchEl  = document.getElementById('logsSearch');
  const listEl    = document.getElementById('logsList');
  const filterBtns= document.querySelectorAll('[data-filter]');
  const noResults = document.getElementById('logsNoResults');

  if (!searchEl || !listEl) return;

  let activeFilter = 'all';
  let query = '';

  function update() {
    const items = listEl.querySelectorAll('.blog-item');
    let visible = 0;
    items.forEach(item => {
      const typeOk  = activeFilter === 'all' || item.dataset.type === activeFilter;
      const queryOk = !query || item.dataset.title.includes(query);
      const show    = typeOk && queryOk;
      item.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  searchEl.addEventListener('input', () => {
    query = searchEl.value.toLowerCase().trim();
    update();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      update();
    });
  });
};
