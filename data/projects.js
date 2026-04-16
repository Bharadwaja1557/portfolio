/**
 * data/projects.js — Project registry
 *
 * HOW TO ADD A PROJECT:
 * 1. Add a new object to the PROJECTS array (newest first)
 * 2. topics: pick from existing or add new ones — they auto-appear as filter buttons
 * 3. status: 'active' | 'wip' | 'archive'
 * 4. github / live: URL string or null
 */

const PROJECTS = [
  {
    name:    'Neural Style Transfer',
    desc:    'VGG19-based neural style transfer with a web interface to apply artistic styles to images in real-time.',
    tags:    ['Python', 'PyTorch', 'FastAPI', 'React'],
    topics:  ['ML', 'Web'],
    status:  'active',
    github:  'https://github.com/mb1557',
    live:    null,
  },
  {
    name:    'ML Benchmarking Suite',
    desc:    'A framework for evaluating ML model performance across hardware configurations and datasets.',
    tags:    ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    topics:  ['ML'],
    status:  'wip',
    github:  'https://github.com/mb1557',
    live:    null,
  },
  {
    name:    'Terminal Portfolio',
    desc:    'This very site — a minimal developer portfolio with a terminal aesthetic, built with vanilla HTML, CSS, and JS.',
    tags:    ['HTML', 'CSS', 'Vanilla JS'],
    topics:  ['Web'],
    status:  'active',
    github:  'https://github.com/mb1557',
    live:    null,
  },
  {
    name:    'GNN Experiments',
    desc:    'Research experiments exploring graph neural network architectures for node classification on citation networks.',
    tags:    ['Python', 'PyTorch Geometric', 'NetworkX'],
    topics:  ['ML', 'Research'],
    status:  'wip',
    github:  'https://github.com/mb1557',
    live:    null,
  },
];
