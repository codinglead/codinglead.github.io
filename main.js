let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.responsive-nav');

menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('responsive-nav__open')
});