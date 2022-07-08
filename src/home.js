function homePage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const restaurantName = document.createElement('h2');
  const pancakeImg = document.createElement('img');
  const description = document.createElement('p');
  const hoursTitle = document.createElement('h2');
  const hours = document.createElement('ul');
  const locationTitle = document.createElement('h2');
  const location = document.createElement('p');

  title.textContent = 'Home';
  restaurantName.textContent = 'Danny\'s restuarant';
  pancakeImg.setAttribute('src', '/src/pancakes.jpg');
  pancakeImg.classList.add('home-img');
  description.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ratione.
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, odio?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur unde soluta.
                             Lorem, ipsum dolor.`;
  hoursTitle.textContent = 'Hours';
  
  function createHours(day, hours) {
    const listItem = document.createElement('li');
    listItem.textContent = `${day}: ${hours[0]} - ${hours[1]}`;
    return listItem;
  }

  hours.appendChild(createHours('Sunday', ['8am', '8pm']));
  hours.appendChild(createHours('Monday', ['6am', '6pm']));
  hours.appendChild(createHours('Tuesday', ['6am', '6pm']));
  hours.appendChild(createHours('Wednesday', ['6am', '6pm']));
  hours.appendChild(createHours('Thursday', ['6am', '10pm']));
  hours.appendChild(createHours('Friday', ['6am', '10pm']));
  hours.appendChild(createHours('Saturday', ['8am', '10pm']));

  locationTitle.textContent = 'Location';
  location.textContent = '123 Forest Drive, Forestville, Maine';

  for (const e of [title, restaurantName, pancakeImg, description, hoursTitle, hours, locationTitle, location]) {
    content.appendChild(e);
  }
}


export { homePage };