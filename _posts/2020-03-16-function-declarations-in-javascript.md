---
layout: project
title: function declarations in JavaScript
date: 2020-03-16 6:20 -0700
updated: 2021-10-06 08:57 -0700
meta: In JavaScript functions can be declared with function statements, anonymous functions and arrow functions.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

In JavaScript functions can be declared with function statements, anonymous functions and arrow functions.

They all accomplish the same thing by allowing you to put code in one place to prevent the same logic from being repeated.

## function statement

The function statement starts with the keyword <span class="highlight__code">function</span> with a name after it.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function greet (name) {
  console.log('hello, ' + name);
}

greet('brian');
// hello, brian
```

Function statements are hoisted so it can be executed before it was declared.

<p class="highlight__file-desc">JavaScript</p>

```javascript
greet('brian');
// hello, brian

function greet (name) {
  console.log('hello, ' + name);
}
```

## anonymous function

It has the same syntax as a regular function statement but a name isn't needed.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [10, 5, 4, 3];

const doubleArr = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleArr);
// [20, 10, 8, 6]
```

Anonymous functions is a shorter way to declare functions. 

A name can be added to the function and it will work the same.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [10, 5, 4, 3];

const doubleArr = numbers.map(function double(number) {
  return number * 2;
});

console.log(doubleArr);
// [20, 10, 8, 6]
```

Adding a name to a function in a callback could be useful because if there is an error it will show up on the stack trace.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [10, 5, 4, 3];

const doubleArr = numbers.map(function doubleNumber (number) {
  throw 'error: something went wrong';
  return number * 2;
});

console.log(doubleArr);
// [20, 10, 8, 6]
```

<div class="center">
  <img src="{{ site.baseurl }}/images/stack-trace-error.png" alt="stack trace error example" title="stack trace error example">
</div>


## arrow function

Arrow functions is the shortest way a function can be declared. 

<a href='/javascript/this-in-javascript' class="highlight__code">this</a> is defined by where the arrow function is declared instead of where it is being executed. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
const arrowFunction1 = (greeting) => {
  return `${ greeting } Brian`;
}

// shortest way to declare arrow function
// the expression is automatically returned
// if there is only one argument the parenthesis are not required
const arrowFunction2 = greeting => `${ greeting } Brian`;

arrowFunction1('hello');
// 'hello Brian'

arrowFunction2('hi');
// 'hi Brian'
```

## Conclusion

There are three ways to declare <span class="highlight__code">functions</span> function statement, anonymous function and arrow function.

<span class="highlight__code">anonymous</span> functions and <span class="highlight__code">arrow</span> functions are often used as callback to a function.