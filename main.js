const searchBox = document.getElementById('search-input');
const posts = document.getElementById('posts');
if (searchBox) {
    const searchResultContainer = document.getElementById('search-results-container');
    searchBox.addEventListener('keyup', function () {
        if (searchBox.value !== '') {
            searchResultContainer.classList.remove('d-none');
            posts.classList.add('d-none');
        } else {
            searchResultContainer.classList.add('d-none');
            posts.classList.remove('d-none');
        }
    });
}

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}

const lightModeImage = document.querySelector('#light-mode');
const darkModeImage = document.querySelector('#dark-mode');
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    lightModeImage.classList.toggle('d-none');
    darkModeImage.classList.toggle('d-none');
}

const themeSelector = document.querySelector('#theme-selector');
themeSelector.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }

    lightModeImage.classList.toggle('d-none');
    darkModeImage.classList.toggle('d-none');
});