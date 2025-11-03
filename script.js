document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = e.currentTarget.getAttribute('data-page');
    fetch(`content/${page}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById('content-area').innerHTML = html;
      })
      .catch(err => {
        document.getElementById('content-area').innerHTML = `<p>⚠️ Kon de pagina niet laden.</p>`;
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const tocList = document.getElementById('toc-list');
  const items = Array.from(tocList.querySelectorAll('li'));

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    items.forEach(li => {
      const text = li.textContent.toLowerCase();
      if (query && text.includes(query)) {
        li.style.backgroundColor = '#787975ff';
        li.style.color = '#000';
      } else {
        li.style.backgroundColor = 'transparent';
        li.style.color = '#020202ff';
      }
    });
  });
}); // <-- this closing was missing

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
}
