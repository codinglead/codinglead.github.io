---
layout: project
title: what is array find() in JavaScript
date: 2018-12-17 6:00 -0700
updated: 2020-09-04 13:10 -0700
meta: find() finds an element in an array.
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

<span class="highlight__code">find()</span> runs a function on every element in an array to find a element that returns a truthy value. If a truthy value isn't returned undefined is returned.

The function passed into <span class="highlight__code">find()</span> takes in these parameters:

-   current element
-   current element index
-   array that <span class="highlight__code">find()</span> is being called on

An example of <span class="highlight__code">find()</span> would be to find 'orange' in an array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const fruits = ['apple', 'orange', 'banana'];
const findOrange = fruits.find((fruit, index, array) => {
    // apple, 0, ['apple', 'orange', 'banana']
    // orange, 1, ['apple', 'orange', 'banana']
    return fruit === 'orange';
});
console.log(findOrange);
// orange
```

## summary of find()

<span class="highlight__code">find()</span> is used to find an element in an array.
