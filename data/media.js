/**
 * data/media.js — Photo/media registry
 *
 * HOW TO ADD A NEW PHOTO:
 * 1. Convert your image to .webp (see README note below)
 * 2. Drop the file into  assets/media/
 * 3. Add a new entry to the MEDIA array below (newest first)
 *
 * FIELDS:
 *   file     — filename inside assets/media/  (e.g. "campus-gate.webp")
 *   caption  — one-line caption shown below the image
 *   date     — human-readable date shown below caption (e.g. "March 2025")
 *   year     — numeric year for filtering (e.g. 2025)
 *   alt      — accessibility alt text (describe the image)
 *
 * IMAGE FORMAT NOTE:
 *   WebP is the recommended format for this site:
 *   - ~30% smaller than JPEG at the same visual quality
 *   - Supports transparency (unlike JPEG)
 *   - Supported by all modern browsers
 *   - Easy to create: use Squoosh (squoosh.app), cwebp CLI, or
 *     Photoshop / GIMP export
 *
 *   AVIF is even better compression but encoding is slow and
 *   browser support, while good, is slightly less universal.
 *   Stick with WebP unless you have a specific reason for AVIF.
 *
 * ASPECT RATIOS:
 *   All aspect ratios work — 1:1, 4:3, 3:4, 16:9, 9:16.
 *   The masonry layout handles them automatically.
 */

const MEDIA = [
  // ── Placeholder entries — replace with your real photos ─────────────
  {
    file:    'rm-building.webp',
    caption: 'RM Building, CSE, IITK',
    date:    'March 2026',
    year:    2026,
    alt:     'CSE Building',
  },
  {
    file:    'metro.webp',
    caption: 'First day at IIT Kanpur campus',
    date:    'August 2025',
    year:    2025,
    alt:     'Metro View',
  },
  {
    file:    'vending-machine.webp',
    caption: 'Hall 12 mess food is surprisingly decent',
    date:    'September 2025',
    year:    2025,
    alt:     'Mess hall food',
  },
  {
    file:    'computer-center.webp',
    caption: 'Late night debugging session',
    date:    'October 2025',
    year:    2025,
    alt:     'Laptop screen in dark room',
  },
  {
    file:    'computer-center.webp',
    caption: 'Late night debugging session',
    date:    'October 2025',
    year:    2025,
    alt:     'Laptop screen in dark room',
  },
  // {
  //   file:    'placeholder-4.jpg',
  //   caption: 'The lake looks unreal at golden hour',
  //   date:    'November 2025',
  //   year:    2025,
  //   alt:     'IITK lake at sunset',
  // },
  // {
  //   file:    'placeholder-5.jpg',
  //   caption: 'Research group whiteboard session',
  //   date:    'December 2025',
  //   year:    2025,
  //   alt:     'Whiteboard with equations',
  // },
  // {
  //   file:    'placeholder-6.jpg',
  //   caption: 'Winter fog on campus',
  //   date:    'January 2026',
  //   year:    2026,
  //   alt:     'Foggy morning on campus road',
  // },
];
