'use strict';

// Toggle navigation bar

const hamburger = document.querySelector('.navigation__hamburger');
console.log(hamburger);

const toggleNavigationBar = function () {
  console.log('Clicked');
  document
    .querySelector('.navigation__hamburger--links')
    .classList.toggle('hidden');

  document.querySelector('.line-1').classList.toggle('line-1-clicked');
  document.querySelector('.line-2').classList.toggle('line-2-clicked');
  document.querySelector('.line-3').classList.toggle('line-3-clicked');
};

// INITALIZATION OF THE PAGE
const init = function () {
  hamburger.addEventListener('click', toggleNavigationBar);
};

init();
