---
layout: project
title: CSS Pseudo Selectors
date: 2018-11-14 6:30 -0700
meta: CSS introduces both pseudo-elements and pseudo-classes. A pseudo-element acts like an extra element is in the code. A pseudo-class acts like an extra value for a class attribute.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---

CSS introduces both pseudo-elements and pseudo-classes. A pseudo-element acts like an extra element is in the code. A pseudo-class acts like an extra value for a class attribute.

## Goal

Follow along to see how we can use CSS pseudo-elements and classes to style certain HTML elements.

## Pseudo-Elements

### First Letter or Line

#### <span class="highlight__code">:first-letter, :first-line</span>

You can specify different values for the first letter or first line of text inside an element using <span class="highlight__code">:first-letter</span> and
<span class="highlight__code">:first-line.

<p class="highlight__file-desc">HTML</p>

```html
<h1>What is a closure?</h1>

<p class="intro">
A closures is when a function can remember its lexical scope even if the function is executed outside its lexical scope.
Which means if a function is executed outside where it is declared and is using a variable declared around the function, this is a closure.
If you have been using JavaScript for a week you may have already used a closure.
</p>

<p>
Essentially what it means is that functions can refer to variables that were declared by their parent function even after that parent function returns.
This is possible because of lexical scoping.
</p>
```

<p class="highlight__file-desc">CSS</p>

```css
p.intro:first-letter {
  font-size: 200%;
}

p.intro:first-line {
  font-weight: bold;
}
```

<p class="highlight__file-desc">RESULT</p>

<style>
p.intro:first-letter {
  font-size: 200%;
}

p.intro:first-line {
  font-weight: bold;
}
</style>

<body>
<h1 class="reset-header">What is a closure?</h1>

<p class="intro">
A closures is when a function can remember its lexical scope even if the function is executed outside its lexical scope.
Which means if a function is executed outside where it is declared and is using a variable declared around the function, this is a closure.
If you have been using JavaScript for a week you may have already used a closure.
</p>

<p>
Essentially what it means is that functions can refer to variables that were declared by their parent function even after that parent function returns.
This is possible because of lexical scoping.
</p>
</body>

Technically these are not properties. They are known as pseudo-elements.

A pseudo-element acts like an extra element is in the code. In the case of the <span class="highlight__code">:first-letter</span> and <span class="highlight__code">:first-line</span> pseudo-elements, it is as if there is an extra element around the first letter or the first line which can have its own styles applied.

You specify the pseudo-element at the end of the selector, and then specify the declarations as you would normally for any other element. <strong>Selectors</strong> indicate which element the css rules applies to. <strong>Declarations</strong> indicate how the elements referred to in the selector should be styled. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">Here is a list of all the CSS pseudo-elements</a>.

## Pseudo-Classes

### Styling Links

#### <span class="highlight__code">:link, :visited</span>

<p class="highlight__file-desc">HTML</p>

```html
<h1>Long Beach Programmers: </h1>
<ul>
  <li><a href="https://colorlessenergy.github.io/growlypw/">Angel</a></li>
  <li><a href="http://colorlessenergy.github.io/">Brian</a></li>
  <li><a href="https://christianprado.com/">Christian</a></li>
  <li><a href="https://planeswalker1.github.io/">Daniel</a></li>
  <li><a href="https://genterpw.github.io/">David</a></li>
</ul>
```

<p class="highlight__file-desc">CSS</p>

```css
a:link {
  color: fuchsia;
  text-decoration: none;
}

a:visited {
  color: black;
}

a:hover {
  color: fuchsia;
  text-decoration: underline;
}

a:active {
  color: purple;
}
```

<p class="highlight__file-desc">RESULT</p>

<style>
a.css-pseudo-link:link {
  color: fuchsia;
  text-decoration: none;
}

a.css-pseudo-link:visited {
  color: black;
}

a.css-pseudo-link:hover {
  color: fuchsia;
  text-decoration: underline;
}

a.css-pseudo-link:active {
  color: purple;
}

ul li.reset-border {
  border: none;
}

h1.reset-header {
  color: #000;
  text-align: left;
  font-size: 24px;
}
</style>
<body>
<h1 class="reset-header">Long Beach Programmers: </h1>
<ul>
  <li class="reset-border"><a class="css-pseudo-link" href="https://colorlessenergy.github.io/growlypw/">Angel</a></li>
  <li class="reset-border"><a class="css-pseudo-link" href="http://colorlessenergy.github.io/">Brian</a></li>
  <li class="reset-border"><a class="css-pseudo-link" href="https://christianprado.com/">Christian</a></li>
  <li class="reset-border"><a class="css-pseudo-link" href="https://planeswalker1.github.io/">Daniel</a></li>
  <li class="reset-border"><a class="css-pseudo-link"
   href="https://genterpw.github.io/">David</a></li>
</ul>
</body>

A pseudo-class acts like an extra value for a class attribute. In the case of the :visited pseudo-class, which you see above, it allows you to have different styles for links that have been visited. Similarly, the :hover pseudo-class allows you to style elements differently when a user hovers over them.

Browsers show links in blue with an underline by default, and they will change the color of links that have been visited to help users know which pages they have been to. In CSS, there are two pseudo-classes that allow you to set different styles for links that have and have not yet been visited.

<span class="highlight__code">:link</span>

This allows you to set styles for links that have not yet been visited.

<span class="highlight__code">:visited</span>

This allows you to set styles for links that have been clicked on. They are commonly used to control colors of the links and also whether they are to appear underlined or not. In the example above, you can see that visited links are shown in a different color to help visitors know what they have already seen.

### Responding to Users

#### <span class="highlight__code">:hover, :active, :focus</span>

<p class="highlight__file-desc">HTML</p>

```html
<input placeholder="enter an email address...">
<button>Submit</button>
```

<p class="highlight__file-desc">CSS</p>

```css
input,
button {
border: 1px solid #665544;
color: #ffffff;
padding: 6px 12px 6px 12px;
}

input {
color: #cccccc;
}

input:focus {
color: #665544;
}

button:hover {
background-color: #665544;
}

button:active {
background-color: chocolate;
}
```

<p class="highlight__file-desc">RESULT</p>
<style>
input,
button {
border: 1px solid #665544;
color: #ffffff;
padding: 6px 12px 6px 12px;
}

input {
color: #cccccc;
}

input:focus {
color: #665544;
}

button:hover {
background-color: #665544;
}

button:active {
background-color: chocolate;
}
</style>
<body>
<input placeholder="enter an email address...">
<button>Submit</button>
</body>

There are three pseudo-classes that allow you to change the appearance of elements when a user is interacting with them.

<span class="highlight__code">:hover</span>

This is applied when a user hovers over an element with a pointing device such as a mouse. This has commonly been used to change the appearance of links and buttons when a user places their cursor over them. It is worth noting that such events do not work on devices that use touch screens (such as a phone) because the screen is not able to tell when someone is hovering their finger over an element.

<span class="highlight__code">:active</span>

This is applied when an element is being activated by a user. For example, when a button is being pressed or a link being clicked. Sometimes this is used to make a button or link feel more like it is being pressed by changing the style or position of the element slightly.

<span class="highlight__code">:focus</span>

This is applied when an element has focus. Any element that you can interact with, such as a link you can click on or any form control can have focus.

Focus occurs when a browser discovers that you are ready to interact with an element on the page. For example, when your cursor is in a form input ready to accept typing, that element is said to have focus. It is also possible to use the tab key on your keyboard to move through the interactive items on a page. When pseudo-classes are used, they should appear in this order: :link, :visited, :hover, :focus, :active. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">Here is a list of all the CSS pseudo-classes</a>.


## conclusion
Pseudo-elements and classes are a neat way of selecting certain HTML elements. A pseudo-element acts like an extra element is in the code. It is as if there is an extra element around said element which can have its own styles applied. A pseudo-class acts like an extra value for a class attribute. In the case of the :visited pseudo-class, which you saw earlier, it allows you to have different styles for links that have been visited. Similarly, the :hover pseudo-class allows you to style elements differently when a user hovers over them. Always remember that you do not have to memorize these pseudo selectors, just be aware that they exist.