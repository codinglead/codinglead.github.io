---
layout: project
title: what is array find() in JavaScript
date: 2018-12-17 6:00 -0700
updated: 2020-09-04 13:10 -0700
meta: Array find() method executes a function for every element in an array with the element passed in as an argument and returns the first element it finds that made the function return a truthy value.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Array <span class="highlight__code">find()</span> method executes a function for every element in an array with the element passed in as an argument and returns the first element it finds that made the function return a truthy value. If there are no more elements <span class="highlight__code">undefined</span> will be returned.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [8, 90, 100];
const numberGreaterThanOrEqualToFifty = numbers.find(number => {
    return number >= 50;
});
console.log(numberGreaterThanOrEqualToFifty);
// 90

const numberLessThanThree = numbers.find(number => {
    return number < 3;
});
console.log(numberLessThanThree);
// undefined
```

In the example above the array method <span class="highlight__code">find()</span> is executed on numbers array. The functions that were passed in return a condition to find the first value that is greater than or equal to 50 and less than 3. 

## A practical use of find() in JavaScript

### find object by ID

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = [{ id: 0, name: 'orange', color: 'orange' }, { id: 1, name: 'banana', color: 'yellow' }];
const orangeID = 0;
const orange = food.find(food => {
    return food.id === orangeID;
});

console.log(orange);
// {id: 0, name: "orange", color: "orange"}
```

## The power of find

<span class="highlight__code">find()</span> is powerful when trying to find an element or check if it exists.

### the basics

A callback function is needed.

* the function passed in is executed on every element in the array
  * if the returned value is truthy, return that value
  * if the returned value is falsy, keep moving until it gets to the end or finds a truthy value
  * if it gets to the end without finding one element that returns true it will return undefined
* have access to the current element, the index and the array
