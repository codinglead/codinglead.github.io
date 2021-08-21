---
layout: project
title: add dark mode to your website
date: 2021-06-18 21:30 -0700
meta: how to add dark mode to your website 
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://brianmunoz.co/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

We will be using [localStorage](/javascript/what-is-localstorage) to persist what theme was selected and add a dark class to the body to create a dark theme with CSS.

## HTML

A button element is needed to add a click event listener to swap between dark and light mode.

<p class="highlight__file-desc">
HTML
</p>

```html
<button id="themeSelector"></button>
```

## JavaScript

We first want to make sure the page has finished loading before doing any operations to the DOM. 

To do this we will use the <span class="highlight__code">load</span> event listener.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
window.addEventListener('load', () => {
    // code
});
```

Once it is loaded we will check if a theme doesn't exists in localStorage if it doesn't we will set it to "light".

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
window.addEventListener('load', () => {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }
});
```

Currently, the button text content is empty we will now use the <span class="highlight__code">theme</span> value in localStorage to assign an emoji to it.

Also if the current theme is "dark" we will add a dark class to the <span class="highlight__code">body</span>. This class will be used to override CSS properties with dark theme styles. 

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
window.addEventListener('load', () => {
   // previous code
   
    let themeSelector = document.querySelector('#themeSelector');
    let body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        // this class will be used to override styles
        body.classList.add('dark');
        themeSelector.textContent = '☀️';
    } else {
        themeSelector.textContent = '🌙️';
    }
});
```

Now we have to create the functionality to:

* add a click event listener to the theme selector button
* add conditions to check if the theme value is "dark" or "light" 
* if the value of the theme is "light"
    * set the theme value in localStorage to be "dark"
    * set the text content of the button to be a sun emoji
* otherwise
    * set the theme value in localStorage to be "light"
    * set the text content of the button to be a moon emoji
* toggle the "dark" class on the body element

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
window.addEventListener('load', () => {
    // previous code

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
});
```

If dark mode is enabled the <span class="highlight__code">body</span> tag will have a dark class. We can use this class to target elements in <span class="highlight__code">CSS</span> to apply a dark theme.

<p class="highlight__file-desc">
CSS
</p>

```css
.dark {
    background-color: #1a1d24; 
    color: #efefef;
}
```

The full <span class="highlight__code">JavaScript</span> code.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
window.addEventListener('load', () => {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
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
});
```

## conclusion

We can toggle dark mode by clicking on the button, persist the theme chosen with localStorage and add dark theme styles by targeting the dark class given to the <span class="highlight__code">body</span> element.