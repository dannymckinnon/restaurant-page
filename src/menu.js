function menuPage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');

  title.textContent = 'Menu';

  for (const e of [title]) {
    content.appendChild(e);
  }
}


export { menuPage };