---
layout: project
title: what is array map in JavaScript
date: 2018-10-29 2:00 -0700
updated: 2020-09-04 12:30 -0700
meta: what is array map in JavaScript.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

The array method <span class="highlight__code">map()</span> takes in a function as an argument. It returns a new array and does not change the original array.

The function that is passed in to the map method is executed for every element in the array with the value passed in as an argument. Elements in the array are modified to what is returned from the function.

<p class="highlight__file-desc">JavaScript</p>

```javascript
// original array
const numbers = [1, 2, 3, 4, 10]

// a new array is made with ever number in the original array multiplied by 10
const newNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // [3, 10, 40, 3]

console.log(newNumbers); // [10, 20, 30, 40, 100]
```
In the example above the map method is executed on the numbers array and creates a new array with every number multiplied by 10

## A practical use of map in JavaScript

### convert every element in an array to a number

<p class="highlight__file-desc">JavaScript</p>

```javascript
const stringOfNumbers = ["1", "2", "3", "4", "5"];
const numbers = stringOfNumbers.map(number => Number(number))

console.log(stringOfNumbers); // ["1", "2", "3", "4", "5"]
console.log(numbers); // [1, 2, 3, 4, 5]
```

### convert an array of data into JSX

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = [{ id: 0, name: 'orange', color: 'orange' }, { id: 1, name: 'banana', color: 'yellow' }];

food.map(food => {
    return (
        <div key={ food.id }>
            <div>
                { food.name } - { food.color }
            </div>
        </div>
    );
});
```

## The power of map

<span class="highlight__code">map()</span> is powerful when something needs to be done on every element in an array.

### the basics

A callback function is needed.

* the function passed in is executed on every element in the array
* have access to the current element, the index, and the original array being looped
* creates a new array, doesn't change the original array