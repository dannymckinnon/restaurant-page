function homePage() {
  let content = document.getElementById('content');
  
  let h1 = document.createElement('h1');

  h1.textContent = 'Home';

  content.appendChild(h1);
}


export { homePage };