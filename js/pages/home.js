/**
 * js/pages/home.js
 */
Pages.home = function () {
  const lines = [
    { cls: 'ok',     text: 'system boot complete',       delay: 0   },
    { cls: 'info',   text: 'kernel: mb-portfolio v1.0',  delay: 120 },
    { cls: 'info',   text: 'loading modules... done',    delay: 240 },
    { cls: 'accent', text: 'session started — welcome.', delay: 380 },
  ];

  const bootHTML = lines.map(l =>
    `<div class="boot-line ${l.cls}" style="animation-delay:${l.delay}ms">${l.text}</div>`
  ).join('');

  return `
    <div class="home-boot">${bootHTML}</div>
    <div class="home-divider"></div>
    <div class="home-greeting">
      <span class="hi">hello, I&apos;m</span>
      <span class="name">Mavilla <span class="accent">Bharadwaja.</span></span>
    </div>
    <div class="home-status">
      <span class="status-dot"></span>
      available for research &amp; collaboration
    </div>
    <p class="home-desc">
      MTech CSE @ IIT Kanpur — building at the intersection of
      machine learning and full-stack development.
      Currently exploring deep learning, GNNs, and clean API design.
    </p>
    <div class="qlinks">
      <button class="qlink" data-goto="about">
        <span class="qlink-pre">cat</span> profile.md
      </button>
      <button class="qlink" data-goto="work">
        <span class="qlink-pre">ls</span> work/
      </button>
      <button class="qlink" data-goto="logs">
        <span class="qlink-pre">tail</span> logs/
      </button>
      <button class="qlink" data-goto="contact">
        <span class="qlink-pre">$</span> ping me
      </button>
    </div>
  `;
};
