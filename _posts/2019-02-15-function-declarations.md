---
layout: project
title: function declarations
date: 2019-02-15 4:50 -0700
meta: JavaScript has 3 ways to declare functions. They are the normal function declaration, anonymous function, and arrow function.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---


JavaScript has 3 ways to declare functions, the function statement, anonymous function, and arrow function. We will see how the three types of function declarations are used.


## function statement

The function statement starts off with the keyword <span class="highlight__code">function</span> then a name for the function. It can take arguments inside parentheses.

```javascript
function greet (name) {
  console.log('hello, ' + name);
}

greet('brian');
  // print hello, brian
```

Function statement are hoisted so you can execute the function before it was declared.

```javascript
greet('brian');
  // print hello, brian

function greet (name) {
  console.log('hello, ' + name);
}
```

This is a powerful way of organizing your code by putting all function delcarations at the bottom and all function calls at the top.

## anonymous function

The anonymous function is used a lot in JavaScript when passing them in as callbacks to a function. It has the same syntax as a regular function statement but you don't have to add an name for it.

```javascript
let arr = [10, 5, 4, 3];

let multiplyBy2 = arr.map(function (x) {
  return x * 2;
});

console.log(multiplyBy2);
 // [20, 10, 8, 6]
```

Anonymous functions is just a shorthand way to declare functions. You can still add a name to the function and it will work the same.

```javascript
let arr = [10, 5, 4, 3];

let doubleArr = arr.map(function double(x) {
  return x * 2;
});

console.log(doubleArr);
 // [20, 10, 8, 6]
```

## arrow function

Arrow functions is the shortest way you can delcare a function. The only difference the arrow functions is how <a href='/javascript/this-in-javascript' class="highlight__code">this</a> is defined.

```javascript
// regular way
function () {
 console.log('hi');
}

// with arrow notation
() => console.log('hi');
```

## Conclusion

Everyone should declare <span class="highlight__code">functions</span> with a name if it is on the global scope. Only use anonymous or arrow functions if it is being used as a callback.