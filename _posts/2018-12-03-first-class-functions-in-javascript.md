---
layout: project
title: first class functions in JavaScript
date: 2018-12-03 3:35 -0700
updated: 2023-03-23 13:30 -0700
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

First class functions are functions that are treated like any other variable.

## allows for the creation of higher-order functions

A higher-order function can take in multiple functions or return a function.

An example could be to use <code class="highlight__code">filter()</code> to remove all shirts from an array of clothes.

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
