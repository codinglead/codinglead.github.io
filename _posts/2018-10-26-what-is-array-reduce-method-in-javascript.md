---
layout: project
title: what is array reduce method in JavaScript
date: 2018-10-26 5:07 -0700
meta: Array reduce in javascript. Reduce is a javascript method.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

## What is reduce array method


The <span class="highlight__code">reduce()</span> method takes in a callback function. <span class="highlight__code">reduce()</span> returns the last function call value, it does not change the original array it is called on.

```javascript

let arr = [1, 2, 3, 4, 5];

let addAll = arr.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});

console.log(addAll) // 15
console.log(arr) // [1, 2, 3, 4, 5]
```

<span class="highlight__code">reduce()</span> executes the callback for every element in the array.

* the accumulator can either be the first element in the array or can be a value that was passed in.
* the current value is the first element only if a value was passed in for the accumulator otherwise it is the second element in the array.
* the index of the element
* the original array being looped through

## Practical uses of reduce in JavaScript


#### Math operation to simplify to one element

```javascript
let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});

let multiply = arr.reduce(function (accumulator, currentValue) {
	return accumulator * currentValue;
});

let subtract = arr.reduce(function (accumulator, currentValue) {
	return accumulator - currentValue;
});

let divide = arr.reduce(function (accumulator, currentValue) {
	return accumulator / currentValue;
});

// finding average / mean

let mean = arr.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue;
});

mean = mean / arr.length;

console.log(sum) // 15
console.log(multiply) // 120
console.log(subtract) // -13
console.log(divide) // 0.008333333333333333
console.log(mean) // 3

```

## The power of reduce

<span class="highlight__code">reduce()</span> is powerful when you are trying to shrink a array to one value.

the basics

A callback is needed

* accumulates a array to 1 element.
* takes a function to know how to accumulate the values.
* does it in pairs ex: accumulate + currentvalue
* have access to the currentValue, the accumulated value, the index, and the original array being looped.
* returns the final function call return value


happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com