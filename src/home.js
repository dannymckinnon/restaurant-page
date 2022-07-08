function homePage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const restaurantName = document.createElement('h2');

  restaurantName.textContent = 'Danny\'s restuarant';
  title.textContent = 'Home';

  for (const e of [title, restaurantName]) {
    content.appendChild(e);
  }
}


export { homePage };