'use strict';

// Toggle navigation bar

const hamburger = document.querySelector('.navigation__hamburger');

const toggleNavigationBar = function () {
  console.log('Clicked');
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

// INITALIZATION OF THE PAGE
const init = function () {
  hamburger.addEventListener('click', toggleNavigationBar);
  observerVideo.observe(video);
  observerSectionAboutUs.observe(sectionAboutUs);
};

init();
