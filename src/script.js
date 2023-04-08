'use strict';

// Toggle navigation bar

const hamburger = document.querySelector('.navigation__hamburger');
console.log(hamburger);

const toggleNavigationBar = function () {
  console.log('Clicked');
  document
    .querySelector('.navigation__hamburger--links')
    .classList.toggle('hidden');
};

// INITALIZATION OF THE PAGE
const init = function () {
  hamburger.addEventListener('click', toggleNavigationBar);
};

init();
