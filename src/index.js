import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

import './style.css';

homePage();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const content = document.getElementById('content');


homeBtn.addEventListener('click', () => {
  content.innerHTML = '';
  homePage();
});


menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  menuPage();
});


contactBtn.addEventListener('click', () => {
  content.innerHTML = '';
  contactPage();
});