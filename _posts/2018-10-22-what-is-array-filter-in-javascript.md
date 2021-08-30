---
layout: project
title: what is array filter in JavaScript
date: 2018-10-22 5:00 -0700
updated: 2020-08-29 21:51 -0700
meta: the array method filter() takes in a callback to filter out elements in a array. 
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

The <span class="highlight__code">filter()</span> method takes in a function expression as an argument. a new array is created and returned, it does not change the original array it is called on.

The function that is passed in is executed for every element in the array with the value passed in as an argument. Elements in the array are added or not added into the new array depending on the value returned from the function.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [3, 10, 40, 3];

const newNumbers = numbers.filter(function (number) {
  return number >= 10;
});

console.log(numbers); // [3, 10, 40, 3]

console.log(newNumbers); // [10, 40]
```

In the example above we are filtering out numbers that are greater than 10.

## practical uses of filter in JavaScript


### makes it really easy to remove duplicates in an array.

```javascript
// array with duplicates we want to remove them.
let arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4, 4];

// we have access to the current element of the array,
// the current index of the array, and the original array that is being looped through
const arrayWithoutDuplicates = arrayWithDuplicates.filter(function (element, index, arr) {
	return index !== arr.indexOf(element);
});

console.log(arrayWithoutDuplicates); // [1, 2, 3, 4];
```
What is happening??

* <span class="highlight__code">filter()</span> keeps or remove elements if the value returned from the callback is true or false
* <span class="highlight__code">indexOf()</span> tells us where the element was first seen in the array it was called on

The logic is checking if the index of the current element is not the same as the index where it was first seen.

### keep elements that have a specific class

Let say you are making a todo app and want to show todos that are finish. We also decided a finished todo has the class of done.

```javascript
// returns an array of elements that have the class of todo
const arr = todosToArray();

// remove all elements that does not have the className of done
const removeCheckedElements = arr.filter(function (element) {
  return element.className.includes('done');
});
```

<span class="highlight__code">filter()</span> is passed a function that checks if the element has the class of done. if It doesn't have the class of done it isn't passed into the new array.

<span class="highlight__code">includes()</span> checks if whatever is passed in as a argument is included in a string.


## The power of filter

<span class="highlight__code">filter()</span> is powerful when you are trying to filter a array to only have certain items.

the basics

A callback is needed

* loops through every element in the array and keeps or removes the element from the new array depending on the value returned from the function.
* access to the element, the index and the original array being looped.
* makes and returns a new array, doesn't alter the original array.
