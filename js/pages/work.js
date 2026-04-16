/**
 * js/pages/work.js — reads from data/projects.js (PROJECTS array)
 */

Pages.work = function () {
  const sMap   = { active: 's-active', wip: 's-wip', archive: 's-archive' };
  const sLabel = { active: '● active', wip: '◐ in progress', archive: '○ archived' };

  // Collect all unique topics from projects
  const allTopics = [...new Set(PROJECTS.flatMap(p => p.topics))].sort();

  const topicBtns = ['all', ...allTopics].map(t => `
    <button class="topic-btn ${t === 'all' ? 'active' : ''}" data-topic="${t}">
      ${t}
    </button>
  `).join('');

  function cardHTML(p) {
    const links = [];
    if (p.github) links.push(`<a class="proj-link" href="${p.github}" target="_blank" rel="noopener">github</a>`);
    if (p.live)   links.push(`<a class="proj-link live" href="${p.live}" target="_blank" rel="noopener">live ↗</a>`);
    return `
      <div class="proj-card" data-topics="${p.topics.join(',')}">
        <div class="proj-status ${sMap[p.status]}">${sLabel[p.status]}</div>
        <div class="proj-name">${p.name}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
        </div>
        ${links.length ? `<div class="proj-links">${links.join('')}</div>` : ''}
      </div>
    `;
  }

  const allCards = PROJECTS.map(cardHTML).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">ls -la ./work</span>
    </div>
    <div class="page-heading">work</div>

    <div class="filter-bar">
      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input class="search-input" id="workSearch" type="text" placeholder="search projects..." autocomplete="off" spellcheck="false">
      </div>
    </div>

    <div class="topic-filters" id="topicFilters">
      ${topicBtns}
    </div>

    <div class="projects-grid" id="projectsGrid">${allCards}</div>
    <div class="no-results" id="workNoResults" style="display:none;">// no matching projects found</div>
  `;
};

// Work page interactivity — called after render via delegation in router
Pages.work.init = function () {
  const searchEl  = document.getElementById('workSearch');
  const filtersEl = document.getElementById('topicFilters');
  const gridEl    = document.getElementById('projectsGrid');
  const noResults = document.getElementById('workNoResults');

  if (!searchEl || !filtersEl || !gridEl) return;

  let activeTopic = 'all';
  let query = '';

  function update() {
    const cards = gridEl.querySelectorAll('.proj-card');
    let visible = 0;
    cards.forEach(card => {
      const topics  = card.dataset.topics.split(',');
      const name    = card.querySelector('.proj-name').textContent.toLowerCase();
      const desc    = card.querySelector('.proj-desc').textContent.toLowerCase();
      const tags    = [...card.querySelectorAll('.proj-tag')].map(t => t.textContent.toLowerCase()).join(' ');
      const topicOk = activeTopic === 'all' || topics.includes(activeTopic);
      const queryOk = !query || [name, desc, tags].some(s => s.includes(query));
      const show    = topicOk && queryOk;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  searchEl.addEventListener('input', () => { query = searchEl.value.toLowerCase().trim(); update(); });

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.topic-btn');
    if (!btn) return;
    filtersEl.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTopic = btn.dataset.topic;
    update();
  });
};
