/**
 * data/logs.js — Log entry registry (blogs + notes)
 *
 * HOW TO ADD A NEW BLOG:
 * 1. Copy  blogs/template.html → blogs/blog-XX.html
 * 2. Write your content
 * 3. Add entry here with type: 'blog'
 *
 * HOW TO ADD A NEW NOTE:
 * 1. Copy  blogs/note-template.html → blogs/note-XX.html
 * 2. Write your content
 * 3. Add entry here with type: 'note'
 *
 * Notes are short-form: observations, quick thoughts, snippets.
 * Blogs are long-form: proper articles with headings, code, etc.
 *
 * Always add newest entries at the TOP of the array.
 */

const LOGS = [
  {
    id:      'blog-01',
    title:   'Understanding Attention Mechanisms in Transformers',
    date:    'Mar 2025',
    excerpt: 'A deep dive into scaled dot-product attention and why position matters.',
    tag:     'ML',
    type:    'blog',
    file:    'blogs/blog-01.html',
  },
  {
    id:      'blog-02',
    title:   'My Journey to IIT Kanpur MTech CSE',
    date:    'Feb 2025',
    excerpt: 'GATE prep, the admission process, and what to expect on day one.',
    tag:     'Personal',
    type:    'blog',
    file:    'blogs/blog-02.html',
  },
  {
    id:      'note-01',
    title:   'Softmax temperature controls sharpness, not magnitude',
    date:    'Feb 2025',
    excerpt: 'Quick note on how temperature τ in softmax(x/τ) flattens or sharpens distributions — useful for LLM sampling and knowledge distillation.',
    tag:     'ML',
    type:    'note',
    file:    'blogs/note-01.html',
  },
  {
    id:      'blog-03',
    title:   'Building Production-Ready APIs with FastAPI',
    date:    'Jan 2025',
    excerpt: 'Structuring async Python APIs for reliability and clean deployment.',
    tag:     'Dev',
    type:    'blog',
    file:    'blogs/blog-03.html',
  },
  {
    id:      'blog-04',
    title:   'Graph Neural Networks: A Practical Introduction',
    date:    'Dec 2024',
    excerpt: 'Getting started with GNNs and PyTorch Geometric on citation datasets.',
    tag:     'ML',
    type:    'blog',
    file:    'blogs/blog-04.html',
  },
];
