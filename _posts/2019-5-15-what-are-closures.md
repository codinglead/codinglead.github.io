---
layout: project
title: what are closures
date:  2019-5-15 4:22 -0700
updated: 2020-09-22 08:45 -0700
meta: A closure is when a inner function remembers its lexical scope even if it is executed outside of it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

A closures is when a inner function can remember its lexical scope even if the function is executed outside of it.

Which means if a function is executed outside where it is declared and is using a variable declared around the function it will remember it.

## examples of closures

The JavaScript timer function could be used as an example of closure.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function addSnackbar (text) {
  // createSnackbar() show a snackbar on the screen
  let snackbar = createSnackbar(text);
  setTimeout(function () {
    // removes snackbar from the screen
    snackbar.remove();

    console.log(text)
  }, 1000);
}

addSnackbar('a new todo was added');
// prints 'a new todo was added'
```

Once addSnackbar is executed and a second later passes it will still remember the value of the variable text and console log it because of closures.

The <span class="highlight__code">addEventListener()</span> method could be used as another example of closure because it takes in a function.

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
// prints the date the event listener was added at when the button is clicked
```

This is a closure because you never know when the button is going to be clicked and it will always print out the added at date.

Another example of a closure is warpping a setTimeout method in an IFFE inside a for loop. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (var i = 1; i <= 5; i++) {
  (function (currentI) {
    setTimeout(function () {
        console.log("i: " + currentI);
        // i: 1, i: 2, i: 3, i: 4, i: 5
    }, currentI*1000);
  })(i);
}
```

This is a closure because the currentI is stored into the scope of the IFFE and the currentI is referenced inside the setTimeout.

If you don't understand what IFFEs are there is an explanation later on.

Another example of closure is returning a inner function from an outer function while referencing a variable from the outer function.

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

Variables are still remembered if they are reference even after the function is returned.

**note: parameters are variables**

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

when the <span class="highlight__code">add()</span> function is executed with 10 passed in it will set x to 10 and return a function that takes in a <span class="highlight__code">y</span> parameter that returns x + y.

now we can add 10 to any number by calling <span class="highlight__code">add10</span> with any number passed in.

x is remembered because of closures.

In the next example we have a function that creates an array of functions and returns that array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function makeArrayOfFunctions() {
  let array = [];

  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }

  return array;
}

let arrayOfFunctions = makeArrayOfFunctions();
```

The for loop initializer is declared with the <span class="highlight__code">var</span> keyword. 

A function is pushed into an array that console log i. 

The array with the functions are returned.

Now lets try calling one of the functions in the array we just created.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function makeArrayOfFunctions () {
  let array = [];

  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }

  return array;
}

let arrayOfFunctions = makeArrayOfFunctions();

arrayOfFunctions[0]();
// 5
```
What? it prints 5?

It prints 5 because a closure was made to reference the i that was created in the for loop. 

It does this because the variable i is created with <span class="highlight__code">var</span> which isn't block scoped. Only one variable is created and only one variable is referenced through out the for loop.

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (var i = 0; i < 5; i++) {
 // do stuff
}
```

The JavaScript compiler will compile the code to look like this.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var i;

for (i = 0; i < 5; i++) {
 // do stuff
}
```

The declaration of i is moved to the nearest scope.

Some ways to fix this is use the variable declarations <span class="highlight__code">let</span> or <span class="highlight__code">const</span> or encapsulate it inside a IIFE.

now what is a IIFE?

## immediately invoked function expression

* A function expression that get invoked immediately
* Doesn't add to or modify the global object


This is how a IIFE looks like

<p class="highlight__file-desc">JavaScript</p>

```javascript
(function () {
  // this variable will not exist
  // after console.log is executed
  let x = 42;

  console.log('hi')
})();
// will console log hi
```

Why use IIFE?

Use IIFE so your global scope doesn't get polluted or when you want to create a closure.

Now let's fix the problem we had earlier.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function makeArrayOfFunctions () {
  var array = [];

  for (var i = 0; i < 5; i++) {
    array.push(
      (function (x) {
        return function () {
          console.log(x);
        }
      // pass in i as an argument
      })(i)
    );
  }

  return array;
}

let arrayOfFunctions = makeArrayOfFunctions();

console.log(arrayOfFunctions[0]());
// 0
```

A IIFE is created for every iteration of the for loop, it returns an anonymous function that console logs x. x is the parameter that is passed into the parent function which means the child function will be able to use it because it has reference to the scope of the parent function. a new value is created for every iteration that the IFFE is in because primitives are passed by value and not by reference. A closure is created from the parent to the child.

## conclusion

A closure is a function that refer to variables declared by a parent function even when it is executed outside the scope it was created in.