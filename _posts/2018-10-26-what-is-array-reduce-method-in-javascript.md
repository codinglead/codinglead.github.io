---
layout: project
title: what is array reduce() in JavaScript
date: 2018-10-26 5:07 -0700
updated: 2022-07-04 08:55 -0700
meta: reduce() method combines an array into one value
pic: images/javascript.png
imgAlt: the javascript logo
tags: ['javascript']
author:
    [
        'Brian Munoz',
        'https://colorlessenergy.github.io/',
        'https://github.com/colorlessenergy'
    ]
permalink: /javascript/:title
---

When using <span class="highlight__code">reduce()</span> it goes through every element in an array and allows you to combine them into a single value.

<span class="highlight__code">reduce()</span> takes in a function that runs on every element has these parameters:

-   the value the last function returned
-   current element
-   current element index
-   array that <span class="highlight__code">reduce()</span> is being called on

An example of using <span class="highlight__code">reduce()</span> would be to add up all elements in an array to one value.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 5];
const addAllNumbers = numbers.reduce(
    (previousValue, currentValue, currentIndex, array) => {
        console.log(previousValue, currentValue, currentIndex, array);
        // 1, 2, 1, [1, 2, 3, 4, 5]
        // 3, 3, 2, [1, 2, 3, 4, 5]
        // 6, 4, 3, [1, 2, 3, 4, 5]
        // 10, 5, 4, [1, 2, 3, 4, 5]
        return previousValue + currentValue;
    }
);

console.log(addAllNumbers); // 15
console.log(numbers); // [1, 2, 3, 4, 5]
```

The previous value can be set by passing in another argument.

When the first <span class="highlight__code">reduce()</span> function call is made the current value and current index will be the first element instead of the second element in the array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 5];
const addAllNumbers = numbers.reduce(
    (previousValue, currentValue, currentIndex) => {
        console.log(previousValue, currentValue, currentIndex);
        // 10 1 0
        // 11 2 1
        // 13 3 2
        // 16 4 3
        // 20 5 4
        return previousValue + currentValue;
    },
    10
);

console.log(addAllNumbers); // 15
console.log(numbers); // [1, 2, 3, 4, 5]
```

## summary of reduce()

Runs a function on every element in an array and allows you to turn the array into a single value. The initial value can be set by passing in another argument.

In the end the final function call returned value is used.
