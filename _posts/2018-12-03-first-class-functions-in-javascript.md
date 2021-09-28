---
layout: project
title: first class functions in JavaScript
date: 2018-12-03 3:35 -0700
updated: 2021-09-27 22:02 -0700
meta: Functions are first class citizens which mean they are treated like any other variable.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Functions are first class citizens which mean they are treated like any other variable.

## allows for the creation of higher-order functions

A higher-order function either takes one or more function as arguments or returns a function.

higher-order functions are awesome because it makes JavaScript easier to read.

As an example lets remove all shirts from an array of clothes.

using <code class="highlight__code">filter()</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
const clothes = ['shirt', 'sweater', 'pants', 'pants', 'sweater', 'shirt'];
const filteredClothes = clothes.filter(item => item !== 'shirt');

console.log(filteredClothes);
// (4) ["sweater", "pants", "pants", "sweater"]
```

without <code class="highlight__code">filter()</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
const clothes = ['shirt', 'sweater', 'pants', 'pants', 'sweater', 'shirt'];

const filteredClothes = [];
for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] !== 'shirt') {
        filteredClothes.push(clothes[i]);
    }
}

console.log(filteredClothes);
// (4) ["sweater", "pants", "pants", "sweater"]
```

Some examples of other higher order functions are map(), find() and reduce().