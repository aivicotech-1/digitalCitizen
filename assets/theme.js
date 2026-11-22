// Apply the saved palette before styles paint, then attach the shared control.
(() => {
  'use strict';
  const key = 'digital-citizen-theme';
  const root = document.documentElement;
  let current = 'dark';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') current = saved;
  } catch { /* The toggle still works when storage is unavailable. */ }

  function apply(theme) {
    current = theme;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101916' : '#f3f1ec');
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const next = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} mode`);
    button.title = `Switch to ${next} mode`;
    button.querySelector('.theme-toggle-label').textContent = `${next === 'light' ? 'Light' : 'Dark'} mode`;
  }
  apply(current);

  document.addEventListener('DOMContentLoaded', () => {
    const host = document.querySelector('.header-inner, .activity-navigation');
    if (!host) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.innerHTML = '<svg class="theme-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg><svg class="theme-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/></svg><span class="theme-toggle-label"></span>';
    button.addEventListener('click', () => {
      apply(current === 'dark' ? 'light' : 'dark');
      try { localStorage.setItem(key, current); } catch { /* Session-only fallback. */ }
    });
    host.insertBefore(button, host.querySelector('.menu-toggle'));
    apply(current);
  }, { once: true });

  // Keep already-open pages in sync without resetting any activity state.
  window.addEventListener('storage', event => {
    if (event.key === key && event.storageArea === localStorage) {
      apply(event.newValue === 'light' ? 'light' : 'dark');
    }
  });
})();
