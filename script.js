// SIDEBAR LINK CLICK & PAGINA LOAD
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = e.currentTarget.getAttribute('data-page');

    // Pagina laden
    fetch(`content/${page}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById('content-area').innerHTML = html;
      })
      .catch(err => {
        document.getElementById('content-area').innerHTML = `<p>⚠️ Kon de pagina niet laden.</p>`;
      });

    // Sidebar automatisch sluiten op mobiel met animatie
    if (window.innerWidth <= 768) {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('active'); // start transitie
    }
  });
});

// SIDEBAR TOGGLE (mobiel)
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}

// SEARCH & HIGHLIGHT
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const tocList = document.getElementById('toc-list');
  const items = Array.from(tocList.querySelectorAll('li'));

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    items.forEach(li => {
      const originalText = li.textContent;

      // Reset eerst de inhoud
      li.innerHTML = originalText;

      if (query && originalText.toLowerCase().includes(query)) {
        // Highlight alleen de match
        const regex = new RegExp(`(${query})`, 'gi');
        li.innerHTML = originalText.replace(regex, `<span class="highlight">$1</span>`);
      }
    });
  });
});
