// Progressive enhancement: navigation remains usable without JavaScript.
document.documentElement.classList.add('js-enabled');
(() => {
 const toggle = document.querySelector('.menu-toggle');
 const nav = document.getElementById('site-nav');
 if (!toggle || !nav) return;
 const close = (restoreFocus = false) => {
  const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  nav.classList.remove('is-open');
  if (restoreFocus && wasOpen) toggle.focus();
 };
 toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  nav.classList.toggle('is-open', open);
 });
 nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
 document.addEventListener('keydown', e => { if (e.key === 'Escape') close(true); });
 document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) close(); });
 document.addEventListener('focusin', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) close(); });
 window.addEventListener('resize', () => { if (window.innerWidth > 640) close(); });
})();
