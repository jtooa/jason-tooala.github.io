
// Minimal JS for project filtering and email reveal
document.addEventListener('DOMContentLoaded', () => {
  const filter = document.querySelector('#filter');
  const grid = document.querySelector('[data-grid]');
  if (filter && grid) {
    filter.addEventListener('change', (e) => {
      const val = e.target.value;
      for (const card of grid.children) {
        const tags = (card.getAttribute('data-tags') || '').split(',').map(s => s.trim().toLowerCase());
        card.style.display = (!val || val === 'all' || tags.includes(val)) ? '' : 'none';
      }
    });
  }
});
