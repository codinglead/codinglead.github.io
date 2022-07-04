---
layout: project
title: what is array filter() in JavaScript
date: 2018-10-22 5:00 -0700
updated: 2022-07-04 08:47 -0700
meta: filter() filters out elements in an array.
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

<span class="highlight__code">filter()</span> run a function on every element in an array and keeps the element if the function returned a truthy value otherwise remove them. The original array isn't modified.

The function passed into <span class="highlight__code">filter()</span> takes in these parameters:

-   current element
-   current element index
-   array that <span class="highlight__code">filter()</span> is being called on

An example could be removing duplicates.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const arrayWithDuplicates = [1, 1, 2, 2, 3, 3, 4, 4];

const arrayWithoutDuplicates = arrayWithDuplicates.filter(
    (number, index, array) => {
        return index !== array.indexOf(number);
    }
);

console.log(arrayWithDuplicates); // [1, 1, 2, 2, 3, 3, 4, 4]
console.log(arrayWithoutDuplicates); // [1, 2, 3, 4];
```

What is happening??

-   <span class="highlight__code">filter()</span> keeps or remove elements if the value returned from the callback is true or false
-   <span class="highlight__code">indexOf()</span> tells us where the element was first seen in the array it was called on

The logic is checking if the index of the current element is not the same as the index where it was first seen.

## summary of filter()

<span class="highlight__code">filter()</span> is used to filter out element in an array.
