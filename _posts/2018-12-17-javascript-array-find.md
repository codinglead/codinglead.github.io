---
layout: project
title: JavaScript array find
date: 2018-12-17 6:00 -0700
meta: Javascript array find. Functional way of finding the first element of an array.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Javascript array find. Functional way of finding the the first element that passes the testing function.

## What is Array.prototype.find()

The <span class="highlight__code">find()</span> method is executed on an array and takes in a function expression that has to return a truthy or falsy value. <span class="highlight__code">find()</span> takes in a function as a callback and checks the value that was returned. If is returned true it will return that value and if is falsed it keeps looking until the returned value is true. If it gets to the end and no value was returned it will return undefined <span class="highlight__code">find()</span> method makes it really easy to find the first element that passes a condition. The method is stored in the Array's prototype.

```javascript

let arr = [8, 90]

let firstBiggestNumber = arr.find(function (num) {
  return num >= 50;
});

console.log(firstBiggestNumber);
  // 90

```

In the example above the array method<span class="highlight__code">find()</span> is executed on the array. we passed in a function expression thats returns a condition to find the first value that is greater than or equal to 50. we stored it into a variable.


## The power of find

Find is powerful when you are trying to find the first position of an element or check if it exists.

the basics

* checks what was returned from the function expression then uses that to sort the array.
  * if the returned value is truthy, return that value
  * if the returned value is falsy, keep moving until it gets to the end or find a truthy value
  * if it gets to the end without finding one element that returns true with the comparsion it will return undefined

happy coding :)
