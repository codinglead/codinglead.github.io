---
layout: project
title: function declarations in JavaScript
date: 2020-03-16 6:20 -0700
meta: JavaScript has 3 ways to declare functions. function statement, anonymous function, and arrow function.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---


JavaScript has 3 ways to declare functions function statement, an anonymous function, and an arrow function.

They all accomplish the same thing by allowing you to put code in one place so you will not have to repeat the same code everywhere you want to use it.


## function statement

The function statement starts with the keyword <span class="highlight__code">function</span> then a name for the function. It can take arguments inside parentheses.

```javascript
function greet (name) {
  console.log('hello, ' + name);
}

greet('brian');
  // print hello, brian
```

Function statements are hoisted so you can execute the function before it was declared.

```javascript
greet('brian');
  // print hello, brian

function greet (name) {
  console.log('hello, ' + name);
}
```

This is could be a way to organize your code to show what is happening before showing how it is happening.

## anonymous function

The anonymous function is used a lot in JavaScript when passing them in as callbacks to a function. It has the same syntax as a regular function statement but you don't have to add a name for it.

```javascript
let arr = [10, 5, 4, 3];

let multiplyBy2 = arr.map(function (x) {
  return x * 2;
});

console.log(multiplyBy2);
 // [20, 10, 8, 6]
```

Anonymous functions are a shorthand way to declare functions. You can still add a name to the function and it will work the same.

```javascript
let arr = [10, 5, 4, 3];

let doubleArr = arr.map(function double(x) {
  return x * 2;
});

console.log(doubleArr);
 // [20, 10, 8, 6]
```

It is recommended to put a name when using functions as callbacks because if there is an error it will show up on the stacktrace.

## arrow function

Arrow functions is the shortest way you can delcare a function. The only difference the arrow functions is how <a href='/javascript/this-in-javascript' class="highlight__code">this</a> is defined.

When using arrow function the <code class="highlight__code">this</code> is defined by where the arrow function is declared instead of where it is being executed.

```javascript
// regular way
function () {
 console.log('hi');
}

// with arrow notation
() => console.log('hi');
```

## Conclusion

Everyone should declare <span class="highlight__code">functions</span> with a name because the code inside that function is doing a task.