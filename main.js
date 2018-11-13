let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.responsive-nav');

menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('responsive-nav__open')
});

let searchBox = document.getElementById('search-input');
let searchBoxResultContainer = document.getElementsByClassName('search')[0];

searchBox.addEventListener('keyup', function () {

  if (!(searchBoxResultContainer.classList[1] === 'hide') && searchBox.value === '') {
    console.log('called addded')
    searchBoxResultContainer.classList = 'search hide';
  } else if (searchBox.value !== '') {
    searchBoxResultContainer.classList = 'search';
  }
})