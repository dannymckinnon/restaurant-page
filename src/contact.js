import Mamabear from './mamabear.png';
import Papabear from './papabear.jpeg';
import Babybear from './babybear.jpeg';


function contactPage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const person1 = createContact('Mama Bear', 'Chef', '555-555-5554', 'fakeemail@gmail.com', Mamabear);
  const person2 = createContact('Papa Bear', 'Manager', '555-555-5555', 'tehfakeiones@gmail.com', Papabear);
  const person3 = createContact('Baby Bear', 'Waiter', '555-555-5556', 'fakiestemail@gmail.com', Babybear);

  title.textContent = 'Contact Us';

  function createContact(name, position, number, email, img) {
    const contactElement = document.createElement('div');
    const nameElement = document.createElement('h2');
    const imgElement = document.createElement('img');
    const infoElement = document.createElement('span');
    const positionElement = document.createElement('p');
    const numElement = document.createElement('p');
    const emailElement = document.createElement('p');

    nameElement.textContent = name;
    imgElement.setAttribute('src', img);
    positionElement.textContent = position;
    numElement.textContent = number;
    emailElement.textContent = email;
    
    for (const e of [positionElement, numElement, emailElement]) {
      infoElement.appendChild(e);
    }

    for (const e of [nameElement, imgElement, infoElement]) {
      contactElement.appendChild(e);
    }

    contactElement.classList.add('contact');

    return contactElement;
  }


  for (const e of [title, person1, person2, person3]) {
    content.appendChild(e);
  }
}


export { contactPage };