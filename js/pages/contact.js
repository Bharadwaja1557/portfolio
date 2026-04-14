/**
 * js/pages/contact.js
 */

Pages.contact = function () {
  const contacts = [
    { platform: 'Gmail',     value: 'bharadwaja1557@gmail.com',       href: 'mailto:bharadwaja1557@gmail.com' },
    { platform: 'LinkedIn',  value: 'linkedin.com/in/bharadwaja1557', href: 'https://linkedin.com/in/bharadwaja1557/' },
    { platform: 'Medium',    value: 'medium.com/@bharadwaja1557',     href: 'https://medium.com/@bharadwaja1557' },
    { platform: 'LeetCode',  value: 'leetcode.com/u/mb1557',         href: 'https://leetcode.com/u/mb1557/' },
    { platform: 'Telegram',  value: 't.me/mb1557',                   href: 'https://t.me/mb1557' },
    { platform: 'Twitter',   value: 'x.com/mb1557',                  href: 'https://x.com/mb1557' },
    { platform: 'Minecraft', value: 'mb1557',                        href: null },
  ];

  const rows = contacts.map(c => {
    const tag   = c.href ? 'a' : 'div';
    const attrs = c.href ? `href="${c.href}" target="_blank" rel="noopener noreferrer"` : '';
    return `
      <${tag} class="contact-row" ${attrs}>
        <span class="contact-platform">${c.platform}</span>
        <span class="contact-value">${c.value}</span>
      </${tag}>
    `;
  }).join('');

  return `
    <div class="term-cmd">
      <span class="term-prompt">$</span>
      <span class="term-text">ping me</span>
    </div>
    <div class="page-heading">Contact</div>
    <div class="contact-list">${rows}</div>
    <p class="contact-note">// feel free to reach out through any of these channels</p>
  `;
};
