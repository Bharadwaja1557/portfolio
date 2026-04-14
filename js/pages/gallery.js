/**
 * js/pages/gallery.js
 */

Pages.gallery = function () {
  const slots = Array.from({ length: 9 }, (_, i) =>
    `<div class="gallery-slot">IMG_${String(i + 1).padStart(3, '0')}</div>`
  ).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">open ./gallery</span>
    </div>
    <div class="page-heading">Gallery</div>
    <div class="gallery-grid">${slots}</div>
    <p class="gallery-note">// photos coming soon</p>
  `;
};
