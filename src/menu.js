import pancakes from '/src/pancakes.jpg';
import frenchtoast from '/src/frenchToast.jpg';
import veggiesandwich from '/src/veggieSandwich.jpg';

function menuPage() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const item1 = createMenuItem('Pancakes', 'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.', 
                               '4', pancakes);
  const item2 = createMenuItem('French Toast', 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.',
                               '5', frenchtoast);
  const item3 = createMenuItem('Veggie Sandwich', 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.',
                               '8', veggiesandwich);

  title.textContent = 'Menu';

  function createMenuItem(item, description, price, img) {
    const menuElement = document.createElement('div');
    const itemElement = document.createElement('h2');
    const infoElement = document.createElement('p');
    const priceElement = document.createElement('p');
    const imgElement = document.createElement('img');

    itemElement.textContent = item;
    infoElement.textContent = description;
    priceElement.textContent = '$' + price;
    imgElement.setAttribute('src', img);


    for (const e of [itemElement, infoElement, priceElement, imgElement]) {
      menuElement.appendChild(e);
    }
    menuElement.classList.add('menu-item');
    return menuElement;
  }

  

  for (const e of [title, item1, item2, item3]) {
    content.appendChild(e);
  }
}


export { menuPage };