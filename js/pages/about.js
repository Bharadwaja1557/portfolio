/**
 * js/pages/about.js
 */

Pages.about = function () {
  const books = [
    { title: 'Deep Learning',                 color: '#1b3a5e' },
    { title: 'CLRS Algorithms',               color: '#2b1b4a' },
    { title: 'Clean Code',                    color: '#1a4530' },
    { title: 'Pattern Recognition & ML',      color: '#4a1f20' },
    { title: 'The Pragmatic Programmer',      color: '#3b3015' },
    { title: 'Designing Data-Intensive Apps', color: '#1a3d3d' },
    { title: 'Hands-On ML',                   color: '#3a1a3a' },
    { title: 'Mathematics for ML',            color: '#1f3a20' },
    { title: 'Computer Networks',             color: '#2e2010' },
  ];

  const bookHTML = books.map(b => `
    <div class="book" style="background:${b.color}" title="${b.title}">
      <div class="book-spine"></div>
      <div class="book-title">${b.title}</div>
    </div>
  `).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">cat profile.md</span>
    </div>
    <div class="page-heading">Profile</div>

    <div class="bento">

      <!-- Bio -->
      <div class="bcell b-bio">
        <div class="cell-lbl">bio</div>
        <div class="bio-name">Bharadwaja <span class="hi">Mavilla</span></div>
        <p class="bio-desc">
          A developer and ML enthusiast currently pursuing MTech in Computer Science &amp; Engineering
          at IIT Kanpur (2025–2027). I enjoy building things that work — from training neural networks
          to shipping full-stack applications. Drawn equally to the theory behind ML models and the
          craft of writing clean, maintainable code.
        </p>
        <div class="bio-tags">
          <span class="bio-tag">Machine Learning</span>
          <span class="bio-tag">Software Development</span>
          <span class="bio-tag">Deep Learning</span>
          <span class="bio-tag">IIT Kanpur · MTech CSE</span>
        </div>
      </div>

      <!-- Photo -->
      <div class="bcell b-photo">
        <div class="cell-lbl">photo</div>
        <div class="avatar">BM</div>
        <div class="avatar-name">Bharadwaja Mavilla</div>
        <div class="avatar-role">MTech CSE @ IITK</div>
      </div>

      <!-- Tech Stack -->
      <div class="bcell b-tech">
        <div class="cell-lbl">tech stack</div>
        <div class="tech-grid">
          <span class="tech-tag hi">Python</span>
          <span class="tech-tag hi">PyTorch</span>
          <span class="tech-tag hi">React</span>
          <span class="tech-tag">TensorFlow</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">C++</span>
          <span class="tech-tag">SQL</span>
          <span class="tech-tag">Git</span>
          <span class="tech-tag">Linux</span>
          <span class="tech-tag">Docker</span>
          <span class="tech-tag">HuggingFace</span>
          <span class="tech-tag">Scikit-learn</span>
          <span class="tech-tag">FastAPI</span>
          <span class="tech-tag">NumPy</span>
        </div>
      </div>

      <!-- Quote -->
      <div class="bcell b-quote">
        <div class="cell-lbl">quote</div>
        <div class="q-mark">&ldquo;</div>
        <p class="q-text">The best way to predict the future is to invent it.</p>
        <div class="q-author">— Alan Kay</div>
      </div>

      <!-- Timeline -->
      <div class="bcell b-timeline">
        <div class="cell-lbl">timeline</div>
        <div class="tl">
          <div class="tl-item now">
            <div class="tl-dot"></div>
            <div class="tl-year">2025 – 2027</div>
            <div class="tl-title">MTech, Computer Science &amp; Engineering</div>
            <div class="tl-sub">Indian Institute of Technology, Kanpur</div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">2021 – 2025</div>
            <div class="tl-title">BTech, Computer Science &amp; Engineering</div>
            <div class="tl-sub">Undergraduate studies</div>
          </div>
          <div class="tl-item">
            <div class="tl-dot"></div>
            <div class="tl-year">ongoing</div>
            <div class="tl-title">ML Research &amp; Development</div>
            <div class="tl-sub">Deep learning, NLP, and full-stack engineering</div>
          </div>
        </div>
      </div>

      <!-- Bookshelf -->
      <div class="bcell b-books">
        <div class="cell-lbl">bookshelf</div>
        <div class="shelf">${bookHTML}</div>
      </div>

    </div>
  `;
};
