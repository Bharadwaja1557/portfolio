/**
 * js/pages/media.js — reads MEDIA from data/media.js
 *
 * Layout: CSS-columns masonry — handles all aspect ratios naturally.
 * Cards are flush (image touches all three top edges), caption + date sit below.
 */

Pages.media = function () {
  // Auto-collect years from data for filter buttons
  const years = [...new Set(MEDIA.map(m => m.year))].sort((a, b) => b - a);

  const yearBtns = ['all', ...years].map(y => `
    <button class="filter-btn ${y === 'all' ? 'active' : ''}" data-year="${y}">${y}</button>
  `).join('');

  function cardHTML(item) {
    const src = `assets/media/${item.file}`;
    return `
      <div class="media-card" data-year="${item.year}" data-caption="${item.caption.toLowerCase()}">
        <div class="media-img-wrap">
          <img
            src="${src}"
            alt="${item.alt}"
            loading="lazy"
            class="media-img"
            onerror="this.closest('.media-card').classList.add('media-card--placeholder')"
          >
          <!-- Shown when image fails to load -->
          <div class="media-placeholder-inner" aria-hidden="true">${item.file}</div>
        </div>
        <div class="media-card-body">
          <p class="media-caption">${item.caption}</p>
          <span class="media-date">${item.date}</span>
        </div>
      </div>
    `;
  }

  const allCards = MEDIA.map(cardHTML).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">open ./media</span>
    </div>
    <div class="page-heading">media</div>

    <div class="filter-bar">
      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input
          class="search-input"
          id="mediaSearch"
          type="text"
          placeholder="search captions..."
          autocomplete="off"
          spellcheck="false"
        >
      </div>
      <div class="filter-btns" id="mediaYearFilters">
        ${yearBtns}
      </div>
    </div>

    <div class="masonry-grid" id="masonryGrid">${allCards}</div>
    <div class="no-results" id="mediaNoResults" style="display:none;">// no photos match that filter</div>
  `;
};

Pages.media.init = function () {
  const searchEl   = document.getElementById('mediaSearch');
  const gridEl     = document.getElementById('masonryGrid');
  const filterBtns = document.querySelectorAll('#mediaYearFilters .filter-btn');
  const noResults  = document.getElementById('mediaNoResults');

  if (!searchEl || !gridEl) return;

  let activeYear = 'all';
  let query = '';

  function update() {
    const cards = gridEl.querySelectorAll('.media-card');
    let visible = 0;
    cards.forEach(card => {
      const yearOk    = activeYear === 'all' || String(card.dataset.year) === String(activeYear);
      const captionOk = !query || card.dataset.caption.includes(query);
      const show      = yearOk && captionOk;
      // Use visibility + height collapse so masonry columns reflow properly
      card.style.display = show ? '' : 'none';
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
      activeYear = btn.dataset.year;
      update();
    });
  });
};
