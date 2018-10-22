---
layout: project
title: What is array sort in JavaScript
date: 2018-10-19 6:00 -0700
meta: What is array sort in JavaScript. really easy way to sort in alphabetical order and numerical order (ascending and descending).
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---


## What is sort on a array


The <span class="highlight__code">sort()</span> method can take in a function to compare value. If no function is given to the <span class="highlight__code">sort()</span> method it turns the values into strings and orders them by string Unicode value. <span class="highlight__code">sort()</span> compares it the values in pairs. <span class="highlight__code">sort()</span> method makes it really easy to make changes to an array. The method is stored in the Array's prototype.

```javascript

let arr = [8, 90]

arr.sort() // [90, 8]

```

In the example above you saw that the order of the array changed from lowest to highest to highest to lowest because what sort does is convert the values into strings and compares them. The value "80" comes before "9" in string Unicode values.

If you wanted to sort by numbers instead of strings you can pass in a function expression to compare numbers instead.

```javascript
// I want to order this by least to greatest
let arr = [10, 9, 8, 3];

arr.sort(function (a, b) {
  return a - b;
})

arr // [3, 8, 9, 10]

```

## what is happening under the roof when passing in a function expression

What <span class="highlight__code">sort()</span> does is look at the value that was returned from the function expression and use that to sort the array. If the returned value was negative, move a before b, if it was positive move b before a, and if it is 0 leave it how it is.

a example

```javascript

// least to greatest
let array = [3, 2];

array.sort(function (a, b) {
  console.log(array); // [3, 2] => [2, 3]
  return a - b;
});

// greatest to least
let array = [2, 3];

array.sort(function (a, b) {
  console.log(array); // [2, 3] => [3, 2]
  return b - a;
});
```

## The power of sort

Sort is powerful when you are trying to organize numbers in a certain way.

the basics

if no callback was given to the sort method as a argument

* makes every element of the array to a string
* It is sorted according to unicode

if a callback was given to the sort method as a argument

* checks what was returned then uses that to sort the array.
  * if the returned value is negative, move a before b
  * if the returned value is positive, move b before a
  * if the returned value is 0, leave it how it is

happy coding :)
