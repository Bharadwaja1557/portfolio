/**
 * js/pages/projects.js
 */

Pages.projects = function () {
  const list = [
    {
      name:   'Neural Style Transfer',
      desc:   'VGG19-based neural style transfer with a web interface to apply artistic styles to images in real-time.',
      tags:   ['Python', 'PyTorch', 'FastAPI', 'React'],
      status: 'active',
    },
    {
      name:   'ML Benchmarking Suite',
      desc:   'A framework for evaluating ML model performance across hardware configurations and datasets.',
      tags:   ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      status: 'wip',
    },
    {
      name:   'Terminal Portfolio',
      desc:   'This very site — a minimal developer portfolio with a terminal aesthetic, built with vanilla HTML, CSS, and JS.',
      tags:   ['HTML', 'CSS', 'Vanilla JS'],
      status: 'active',
    },
    {
      name:   'GNN Experiments',
      desc:   'Research experiments exploring graph neural network architectures for node classification on citation networks.',
      tags:   ['Python', 'PyTorch Geometric', 'NetworkX'],
      status: 'wip',
    },
  ];

  const sMap   = { active: 's-active', wip: 's-wip', archive: 's-archive' };
  const sLabel = { active: '● active', wip: '◐ in progress', archive: '○ archived' };

  const cards = list.map(p => `
    <div class="proj-card">
      <div class="proj-status ${sMap[p.status]}">${sLabel[p.status]}</div>
      <div class="proj-name">${p.name}</div>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-tags">
        ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">ls -la ./work</span>
    </div>
    <div class="page-heading">Work</div>
    <div class="projects-grid">${cards}</div>
  `;
};
