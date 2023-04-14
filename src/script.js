'use strict';

// Toggle navigation bar

const hamburger = document.querySelector('.navigation__hamburger');

const toggleNavigationBar = function () {
  document
    .querySelector('.navigation__hamburger--links')
    .classList.toggle('hidden');

  document.querySelector('.line-1').classList.toggle('line-1-clicked');
  document.querySelector('.line-2').classList.toggle('line-2-clicked');
  document.querySelector('.line-3').classList.toggle('line-3-clicked');
};

// Intersecter observer function

let video = document.querySelector('.hero__background--video--playing');

let observerVideo = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio !== 1 && !video.paused) {
        video.pause();
      } else {
        video.play();
      }
    });
  },
  { threshold: 0.1 }
);

let sectionAboutUs = document.querySelector('.section--restaurant');

// TODO: ZAKAJ NE DELA TOGGLE V TEM PRIMERU!!!

let observerSectionAboutUs = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.05) {
        document
          .querySelector('.restaurant__content__heading--box__main--heading')
          .classList.add(
            'restaurant__content__heading--box__main--heading__animated'
          );
        document
          .querySelector('.restaurant__content__heading--box__span--emotion')
          .classList.add(
            'restaurant__content__heading--box__span--emotion__animated'
          );
        document
          .querySelector('.restaurant__content__heading--box__span--location')
          .classList.add(
            'restaurant__content__heading--box__span--location__animated'
          );
      } else {
        document
          .querySelector('.restaurant__content__heading--box__main--heading')
          .classList.remove(
            'restaurant__content__heading--box__main--heading__animated'
          );
        document
          .querySelector('.restaurant__content__heading--box__span--emotion')
          .classList.remove(
            'restaurant__content__heading--box__span--emotion__animated'
          );
        document
          .querySelector('.restaurant__content__heading--box__span--location')
          .classList.remove(
            'restaurant__content__heading--box__span--location__animated'
          );
      }
    });
  },
  { threshold: 0.05 }
);

let menuMainHeading = document.querySelector('.section-menu');

let menuMainHeadingObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.05) {
        document
          .querySelector('.menu__content__text--box__main--heading ')
          .classList.add('menu__content__text--box__main--heading--animation');
      } else {
        document
          .querySelector('.menu__content__text--box__main--heading ')
          .classList.remove(
            'menu__content__text--box__main--heading--animation'
          );
      }
    });
  },
  { threshold: 0.05 }
);

let chefMainHeading = document.querySelector('.chef-section');

let chefMainHeadingObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.05) {
        document
          .querySelector('.chef__content__text--box__main--heading')
          .classList.add('chef__content__text--box__main--heading--animation');
      } else {
        document
          .querySelector('.chef__content__text--box__main--heading')
          .classList.remove(
            'chef__content__text--box__main--heading--animation'
          );
      }
    });
  },
  { threshold: 0.05 }
);

let theRestaurantSection = document.querySelector('.the-restaurant-section');

let theRestaurantSectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.05) {
        document
          .querySelector('.the-restaurant-section')
          .classList.add('the-restaurant-section--animation');
      }
    });
  },
  { threshold: 0.05 }
);

// INITALIZATION OF THE PAGE
const init = function () {
  hamburger.addEventListener('click', toggleNavigationBar);
  observerVideo.observe(video);
  observerSectionAboutUs.observe(sectionAboutUs);
  menuMainHeadingObserver.observe(menuMainHeading);
  chefMainHeadingObserver.observe(chefMainHeading);
  theRestaurantSectionObserver.observe(theRestaurantSection);
};

init();
