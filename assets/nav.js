(function () {
  const btn = document.getElementById('menu-btn');
  const close = document.getElementById('sidebar-close');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  function toggle(open) {
    sidebar.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (btn) btn.onclick = () => toggle(true);
  if (close) close.onclick = () => toggle(false);
  if (overlay) overlay.onclick = () => toggle(false);
  document.addEventListener('keydown', e => e.key === 'Escape' && toggle(false));
})();
