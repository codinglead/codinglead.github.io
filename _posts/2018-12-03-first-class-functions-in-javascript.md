---
layout: project
title: first class functions in JavaScript
date: 2018-12-03 3:35 -0700
updated: 2023-03-23 14:24 -0700
meta: First class functions are functions that are treated like any other variable.
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

First class functions are functions that are treated like any other variable. This allows higher-order functions to be created.

## higher-order functions

A higher-order function can take in multiple functions and/or return a function.

An example that takes in a function could be <code class="highlight__code">filter()</code> to remove all shirts from an array of clothes.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const clothes = ['shirt', 'sweater', 'pants', 'pants', 'sweater', 'shirt'];
const filteredClothes = clothes.filter(item => item !== 'shirt');

console.log(filteredClothes);
// (4) ["sweater", "pants", "pants", "sweater"]
```

An example of a function being returned could be one that takes in a number and returns a function that also takes in a number and adds both of them.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function add(a) {
    return function (b) {
        return a + b;
    };
}

const add10 = add(10);

console.log(add10(20)); // 30
```
