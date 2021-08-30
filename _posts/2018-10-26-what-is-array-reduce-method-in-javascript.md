---
layout: project
title: what is array reduce in JavaScript
date: 2018-10-26 5:07 -0700
updated: 2020-08-30 08:02 -0700
meta: reduce method accumulates an array to one value. 
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

The <span class="highlight__code">reduce()</span> method takes in a function as an argument and does not change the original array it is called on. 

It executes a function on every element in the array. The function takes in four parameters the accumulator which is the value of the previous return function, the current element, the index of the current element, and the array that is being looped through. The initial value for the accumulator can be set by passing in a value or if no initial value is passed in the accumulator will be the first element in the array. The current value is the first element in the array if a initial value is passed in otherwise it will be the second element in the array. The last function call value is returned.


<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 5];

const addAllNumbers = numbers.reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    // 1 2
    // 3 3
    // 6 4
    // 10 5
    return accumulator + currentValue;
});

console.log(addAllNumbers); // 15
console.log(numbers); // [1, 2, 3, 4, 5]
```

In the example above all the numbers in the array are added up into one value.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 5];

const addAllNumbers = numbers.reduce(function (accumulator, currentValue) {
    console.log(accumulator, currentValue);
    // 10 1
    // 11 2
    // 13 3
    // 16 4
    // 20 5
    return accumulator + currentValue;
}, 10);

console.log(addAllNumbers); // 25
console.log(numbers); // [1, 2, 3, 4, 5]
```

In the example above all the numbers in the array are added up into one value with an initial value set to 10.

## Practical uses of reduce 

### Math operation to simplify to one element

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

const multiply = numbers.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
});

const subtract = numbers.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue;
});

const divide = numbers.reduce(function (accumulator, currentValue) {
    return accumulator / currentValue;
});

// finding average / mean
let mean = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
mean = mean / numbers.length;

console.log(sum) // 15
console.log(multiply) // 120
console.log(subtract) // -13
console.log(divide) // 0.008333333333333333
console.log(mean) // 3
```

## The power of reduce

<span class="highlight__code">reduce()</span> is powerful when shrinking an array to one value.

the basics

A callback is needed

* accumulates an array to 1 element.
* takes in a function to know how to accumulate the values.
* does it in pairs ex: accumulator + currentValue
* have access to the accumulated value, the currentValue, the current element index, and the original array being looped.
* the final function call value is returned