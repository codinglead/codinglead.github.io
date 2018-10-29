---
layout: project
title: what is array map in JavaScript
date: 2018-10-29 2:00 -0700
meta: what is array map in JavaScript.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

## What is map on a array


The <span class="highlight__code">map()</span> method takes in a function expression as a argument. The <span class="highlight__code">map()</span> method calls the function on every element on the array it is called on. It does not change the original array instead it makes a copy and returns a new array.

```javascript

// original array
let arr = [1, 2, 3, 4, 10]

// making a new array that takes in a function that just multiplies every element by 10
let newArr = arr.map(function (number) {
  return number * 10;
});

console.log(arr) // [3, 10, 40, 3]

console.log(newArr) // [10, 20, 30, 40, 100]
```

When the <span class="highlight__code">map()</span> method gets invoked its callback gets 3 arguments

* the value element
* the index of the element
* the original array being looped through

## Practical uses of map in JavaScript

### want to make every element in an array a number

no es6

```javascript
var stringOfNumbers = ["1", "2", "3", "4", "5"];
var numbers = stringOfNumbers.map(function (number) {
  return Number(number)
});

console.log(stringOfNumbers); // ["1", "2", "3", "4", "5"]
console.log(numbers); // [1, 2, 3, 4, 5]
```

with es6 using arrow function and let variable declaration

```javascript
let stringOfNumbers = ["1", "2", "3", "4", "5"];
let numbers = stringOfNumbers.map(number => Number(number))

console.log(stringOfNumbers); // ["1", "2", "3", "4", "5"]
console.log(numbers); // [1, 2, 3, 4, 5]
```
The arrow function allows the function to be shorten by not having to use curly brackets, parentheses for parameters, and no return keyword.

## The power of map

<span class="highlight__code">map()</span> is powerful when you are trying to do something to every element in an array.

the basics

A callback function is needed

* calls the function on every element in the array
* have access to the current element, the index, and the original array being looped.
* makes and returns a new array, doesn't alter the original array.

happy coding :)