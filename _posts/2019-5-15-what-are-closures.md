---
layout: project
title: what are closures
date:  2019-5-15 4:22 -0700
updated: 2021-12-24 06:43 -0700
meta: A closure is when a function can access its scope even if the function is executed outside of it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

A closure is when a function can access its scope even if the function is executed outside of it.

## examples of closures

The JavaScript timer function could be used as an example of closure.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function addSnackbar (text) {
  // createSnackbar() show a Snackbar on the screen
  const Snackbar = createSnackbar(text);
  setTimeout(function () {
    Snackbar.remove();

    console.log(`Snackbar '${ text }' was removed`);
  }, 1000);
}

addSnackbar('a new todo was added');
// Snackbar 'a new todo was added' was removed
```

Once <span class="highlight__code">addSnackbar()</span> is executed and a second later passes it will still remember the variables <span className="highlight__code">text</span> and <span className="highlight__code">Snackbar</span> because of closures.

Another exampe of a closure could be the <span class="highlight__code">addEventListener()</span> method because it takes in a function that can be executed later.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function addEventListenerToButton () {
    const addedAt = new Date();

    document.querySelector('.button')
        .addEventListener('click', function () {
            console.log(addedAt);
        });
}

addEventListenerToButton();
// the date the event listener was added at when the button is clicked
```

This is a closure because you never know when the button is going to be clicked and it will always print in the console the <span class="highlight__code">addedAt</span> date.

Another example of a closure is wrapping a <code class="highlight__code">setTimeout()</code> method in an <code class="highlight__code">IIFE</code> inside a for loop. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (var i = 1; i <= 5; i++) {
  (function (currentI) {
    setTimeout(function () {
      // currentI can still be access even though it is executed later
      console.log("i: " + currentI);
      // i: 1, i: 2, i: 3, i: 4, i: 5
    }, currentI * 1000);
  })(i);
}
```

This is a closure because <span class="highlight__code">currentI</span> is stored in the scope of the <code class="highlight__code">IIFE</code> and <span class="highlight__code">currentI</span> is referenced inside the <code class="highlight__code">setTimeout()</code> call.

If you don't understand what <code class="highlight__code">IIFEs</code> are there is an explanation later on.

Another example of closure is returning a inner function from an outer function while the inner function references a variable from the outer function.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function add (x) {
  return function (y) {
      return x + y;
  }
}
```

In the <span class="highlight__code">add()</span>function the <span class="highlight__code">x</span> parameter is passed in and it is use within a new function that is being returned.

In the returned function no where in it <span class="highlight__code">x</span> is defined.

Variables are remembered if they are reference even after the function is returned.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function add (x) {
  return function (y) {
      return x + y;
  }
}

const add10 = add(10);
// returns a function with x set to 10

console.log(add10(5));
// 15

console.log(add10(20));
// 30
```

When the <span class="highlight__code">add()</span> function is executed with 10 passed in it will set x to 10 and return a function that takes in a <span class="highlight__code">y</span> parameter that returns x + y.

Now we can add 10 to any number by calling <span class="highlight__code">add10</span> with any number passed in.

<span class="highlight__code">x</span> is remembered because of closures.

## what is a immediately invoked function expression

**note: also known as IIFE**

* a function expression that get invoked immediately
* doesn't add to or modify the global object

This is how a <code class="highlight__code">IIFE</code> looks like

<p class="highlight__file-desc">JavaScript</p>

```javascript
(function () {
  // these variable will not exist
  // after console.log is executed
  let number = 42;
  const fruit = 'oranges';

  console.log('hi');
})();
// console log hi
```

### Why use IIFE

* global scope doesn't get polluted 
* when you want to utilize a closure

## conclusion

A closure is a function that can use variables declared around it even when it is executed outside the scope it was created in.