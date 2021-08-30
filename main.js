let menuHamburger = document.querySelector('#menu-hamburger');
let responsiveNav = document.querySelector('.responsive-nav');

menuHamburger.addEventListener('click', function () {
  menuHamburger.classList.toggle('animate');
  responsiveNav.classList.toggle('responsive-nav__open')
});

let searchBox = document.getElementById('search-input');
if (searchBox) {
    let searchBoxResultContainer = document.getElementsByClassName('search')[0];
    let mainContent = document.querySelector('.container .posts')
    searchBox.addEventListener('keyup', function () {
        // if on the search box and the value is empty string
        // hide the search results
        // show all the post on the page
        // otherwise show the results
        // hide the post on the page
        if (!(searchBoxResultContainer.classList[1] === 'hide') && searchBox.value === '') {
            searchBoxResultContainer.classList.add('hide');
            mainContent.classList = 'posts';
        } else if (searchBox.value !== '') {
            searchBoxResultContainer.classList.remove('hide');
            mainContent.classList = 'posts hide';
        }
    });
}

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}

let themeSelector = document.querySelector('#themeSelector');
let body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSelector.textContent = '☀️';
} else {
    themeSelector.textContent = '🌙️';
}

themeSelector.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark');
        themeSelector.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeSelector.textContent = '🌙️';
    }

    body.classList.toggle('dark');
});