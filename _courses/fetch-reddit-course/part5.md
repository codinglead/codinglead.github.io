---
title: javascript fetch reddit api part 5
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

What we are trying to do is add styling so it looks nice.

[starter files for part 5](https://github.com/colorlessenergy/fetch-reddit/tree/part4)

open the main.css file

First we are going to add some styles to reset the body and give the body and html tags a height of 100% so it fits the whole page.

```css
body, html {
  margin: 0;
  height: 100%;
}
```

We want to style the button and give it a hover effect so it looks like a button

```css
button {
  background-color: #26a69a;
  border: none;
  color: #fff;
  outline: none;
  height: 36px;
  font-size: 15px;
  letter-spacing: .5px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  cursor: pointer;
  transition: all .3s ease-out;
}

button:hover {
  background-color: #2bbbad;
}
```

We will style the input.

```css
input {
  color: rgba(0, 0, 0, 0.8);
  border: 1px solid #b9b9b9;
  padding: 0px 8px;
  font-size: 15px;
  border-radius: 2px;
  height: 36px;
  outline: none;
}
```

we will add styles to the form and add a state style to move the form to the top after a search went off. We will give the form this class with JavaScript after a search is done.

```css
.form {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form--searched {
  height: initial;
  flex-direction: row;
  justify-content: flex-start;
}
```
to add the <span class="highlight__code">form--searched</span> class to the javascript open the main.js file and add this code into the <span class="highlight__code">searchReddit()</span> function right before the <span class="highlight__code">post.innerHTML</span>

<p class="highlight__file-desc">main.js</p>

```javascript
// add class to the form to move it to top after searching
// this was added into searchReddit();
form.classList.add('form--searched');
```


We will style the title which is on top of the input and button.

```css
.title {
  font-size: 30px;
  margin: 30px 10px;
}
```

We will now style the the div containing the post and the post content itself as well.

```css
#posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  /* center it on bigger screens */
  max-width: 1360px;
  margin: 0 auto;
}

#posts img {
  width: 100%;
}

#posts a {
  display: block;
  margin: 50px 0;
  width: 26%;
}
```

We will add a media query to make the form responsive and set the post content to be 90% of the browser width.
```css
@media screen and (max-width: 961px) {
  .form {
    flex-direction: column;
  }

  #posts a {
    width: 90%;
  }
}
```

Now we have a nice looking app that allows us to search on reddit. You can see the complete app [here](https://github.com/colorlessenergy/fetch-reddit)
