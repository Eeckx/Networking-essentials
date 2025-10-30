document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
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
