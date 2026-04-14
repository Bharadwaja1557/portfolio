/**
 * js/theme.js — Theme management
 * Persists user preference to localStorage so it survives page navigation.
 */

const Theme = (() => {
  const KEY = 'mb-theme';

  function get() {
    return localStorage.getItem(KEY) || 'dark';
  }

  function set(value) {
    localStorage.setItem(KEY, value);
    document.documentElement.setAttribute('data-theme', value);
  }

  function toggle() {
    const next = get() === 'dark' ? 'light' : 'dark';
    set(next);
    return next;
  }

  function init() {
    set(get()); // Apply saved or default theme immediately
  }

  return { get, set, toggle, init };
})();
