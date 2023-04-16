'use strict';

// DOM ELEMENTS

// Navigation bar elements
const hamburger = document.querySelector('.navigation__hamburger');
const hamburgerLinks = document.querySelector('.navigation__hamburger--links');
const hamburgerLineOne = document.querySelector('.line-1');
const hamburgerLineTwo = document.querySelector('.line-2');
const hamburgerLineThree = document.querySelector('.line-3');

// Main body elements
let video = document.querySelector('.hero__background--video--playing');
let sectionAboutUs = document.querySelector('.section--restaurant');
let menuSection = document.querySelector('.section-menu');
let chefSection = document.querySelector('.chef-section');
let theRestaurantSection = document.querySelector('.the-restaurant-section');

let heroImage = document.createElement('heroImage');

/* //////////////////////////////////////////////// */
// Toggle navigation bar
/* //////////////////////////////////////////////// */

const toggleNavigationBar = function () {
  hamburgerLinks.classList.toggle('hidden');

  hamburgerLineOne.classList.toggle('line-1-clicked');
  hamburgerLineTwo.classList.toggle('line-2-clicked');
  hamburgerLineThree.classList.toggle('line-3-clicked');
};

/* //////////////////////////////////////////////// */
// intersectionObserver function
/* //////////////////////////////////////////////// */

function observeElements(elements, callback, threshold) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= threshold) {
          callback(entry.target, true);
        } else {
          callback(entry.target, false);
        }
      });
    },
    { threshold: threshold }
  );

  elements.forEach(element => observer.observe(element));
}

observeElements(
  document.querySelectorAll(
    '.restaurant__content__heading--box__main--heading, .restaurant__content__heading--box__span--emotion, .restaurant__content__heading--box__span--location'
  ),
  (target, visible) => {
    if (visible) {
      target.classList.add(`${target.classList[0]}__animated`);
    }
  },
  0.05
);

observeElements(
  document.querySelectorAll('.menu__content__text--box__main--heading'),
  (target, visible) => {
    if (visible) {
      target.classList.add(`${target.classList[0]}--animation`);
    }
  },
  0.05
);

observeElements(
  document.querySelectorAll('.chef__content__text--box__main--heading'),
  (target, visible) => {
    if (visible) {
      target.classList.add(`${target.classList[0]}--animation`);
    }
  },
  0.05
);

observeElements(
  document.querySelectorAll('.the-restaurant-section'),
  (target, visible) => {
    if (visible) {
      target.classList.add(`${target.classList[0]}--animation`);
    }
  },
  0.05
);

// INITALIZATION OF THE PAGE
const init = function () {
  hamburger.addEventListener('click', toggleNavigationBar);
};

init();
