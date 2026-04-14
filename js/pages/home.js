/**
 * js/pages/home.js
 */

Pages.home = function () {
  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">whoami</span>
      <span class="term-cursor"></span>
    </div>

    <div class="home-name">
      <span class="fn">Bharadwaja</span><br>
      <span class="ln">Mavilla.</span>
    </div>

    <p class="home-tagline">
      MTech CSE student at IIT Kanpur — exploring the intersection<br>
      of machine learning and full-stack development.
    </p>

    <div class="home-meta">
      <div class="meta-row">
        <span class="meta-key">location</span>
        <span class="meta-val">IIT Kanpur, Uttar Pradesh</span>
      </div>
      <div class="meta-row">
        <span class="meta-key">program</span>
        <span class="meta-val">MTech CSE &nbsp;·&nbsp; 2025 – 2027</span>
      </div>
      <div class="meta-row">
        <span class="meta-key">interests</span>
        <span class="meta-val">ML &nbsp;·&nbsp; Deep Learning &nbsp;·&nbsp; Development</span>
      </div>
      <div class="meta-row">
        <span class="meta-key">status</span>
        <span class="meta-val live">● available for opportunities</span>
      </div>
    </div>

    <div class="home-rule"></div>

    <div class="qlinks">
      <button class="qlink" data-goto="about">
        <span class="qlink-pre">cat</span> profile.md
      </button>
      <button class="qlink" data-goto="projects">
        <span class="qlink-pre">ls</span> work/
      </button>
      <button class="qlink" data-goto="blogs">
        <span class="qlink-pre">tail</span> blog.log
      </button>
      <button class="qlink" data-goto="contact">
        <span class="qlink-pre">$</span> ping me
      </button>
    </div>
  `;
};
