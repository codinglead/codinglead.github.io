---
layout: project
title: what is array filter in JavaScript
date: 2018-10-22 5:00 -0700
meta: what is array filter in JavaScript. filter Takes in a callback to filter out elements in a array. filter is a method on array's prototype. It is a javascript array method.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

## What is the filter method on a array

The <span class="highlight__code">filter()</span> method takes in a function expression as a argument. the function that is passed in has to return a value that evaluate either true or false so the <span class="highlight__code">filter()</span> method knows to keep the element or remove it from the array. <span class="highlight__code">filter()</span> creates a new array and returns the new array, it does not change the original array it is called on.

```javascript

let numbers = [3, 10, 40, 3]

let newNumbers = arr.filter(function (number) {
  return number >= 10;
});

console.log(numbers) // [3, 10, 40, 3]

conosle.log(newNumbers) // [10, 40]
```

When the <span class="highlight__code">filter()</span> method gets invoked its callback gets 3 arguments

* the value of the element
* the index of the element
* the original array being looped through

## practical uses of filter in JavaScript


### makes it really easy to remove duplicates in a array.

```javascript
// array with duplicates we want to remove them.
let arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4, 4];


// we have access to the current element of the array,
// the current index of the array, and the original array that is being looped through
let arrayWithoutDuplicates = arrayWithDuplicates.filter(function (element, index, arr) {
	return index !== arr.indexOf(element);
});

console.log(arrayWithoutDuplicates) // [1, 2, 3, 4];

```
What is happening ??

* <span class="highlight__code">filter()</span> keeps or remove elements if the value returned from the callback is true or false
* <span class="highlight__code">indexOf()</span> tells us where the element was first seen in the array it was called on

the logic is checking if the index of the current element is not the same as the index where it was first seen.

### keep elements that have a specific class

Let say you are making a todo app and want to show todos that are finish. We also decided that to tell if it is finish or not by seeing if it has the class of done.

```javascript
// returns a array of elements with a class of todo
var arr = todosToArray();

// remove all elements that does not have the className of done
var removeCheckedElements = arr.filter(function (element) {
  return element.className.includes('done');
})
```

<span class="highlight__code">filter()</span> is removng all elements in the array that doesn't include done as a class.
<span class="highlight__code">includes()</span> just checks if whatever is passed in as a argument is included in a string.


## The power of filter

<span class="highlight__code">filter()</span> is powerful when you are trying to filter a array to only have certain items.

the basics

A callback is needed

* checks every element in the array and checks that to a condition to know if it should be kept or removed from the array.
* have access to the element, the index, and the original array being looped.
* makes and returns a new array, doesn't alter the original array.



happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com
