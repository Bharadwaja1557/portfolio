/**
 * data/blogs.js — Blog post registry
 *
 * HOW TO ADD A NEW BLOG:
 * 1. Copy  blogs/template.html  →  blogs/blog-XX.html
 * 2. Write your content inside the new file
 * 3. Add a new entry to the BLOGS array below (newest first)
 * 4. That's it — the Logs page will automatically pick it up.
 */

const BLOGS = [
  {
    id:      'blog-01',
    title:   'Understanding Attention Mechanisms in Transformers',
    date:    'Mar 2025',
    excerpt: 'A deep dive into scaled dot-product attention and why position matters.',
    tag:     'ML',
    file:    'blogs/blog-01.html',
  },
  {
    id:      'blog-02',
    title:   'My Journey to IIT Kanpur MTech CSE',
    date:    'Feb 2025',
    excerpt: 'GATE prep, the admission process, and what to expect on day one.',
    tag:     'Personal',
    file:    'blogs/blog-02.html',
  },
  {
    id:      'blog-03',
    title:   'Building Production-Ready APIs with FastAPI',
    date:    'Jan 2025',
    excerpt: 'Structuring async Python APIs for reliability and clean deployment.',
    tag:     'Dev',
    file:    'blogs/blog-03.html',
  },
  {
    id:      'blog-04',
    title:   'Graph Neural Networks: A Practical Introduction',
    date:    'Dec 2024',
    excerpt: 'Getting started with GNNs and PyTorch Geometric on citation datasets.',
    tag:     'ML',
    file:    'blogs/blog-04.html',
  },
];
