'use strict';

const burgerMenu = document.querySelector('.burger-menu-button');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  document.body.classList.toggle('page__body__with-burger-menu');

  window.addEventListener('hashchange', () => {
    if (window.location.hash.length !== 0) {
      burgerMenu.classList.remove('open');
      document.body.classList.remove('page__body__with-burger-menu');
    }
  });
});
