---
layout: project
title: filter an array with another array
date: 2020-03-16 6:20 -0700
updated: 2022-04-17 7:09 -0700
meta: Filtering an array with another array is useful when you have many elements you want to remove from an array.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Filtering an array with another array is useful when there are many elements that need to be removed.

In the code example below, we want to keep clothes that are shirts or sweaters.

```javascript
let clothes = ['shirt', 'sweater', 'sweater', 'shirt', 'pants', 'pants', 'underwear'];
const clothesFilters = ['shirt', 'sweater'];

// filter removes an element if the returned value is false
// otherwise it will keep it
clothes = clothes.filter(function (element) {
  // includes checks if the element exist on the array it was called on
  return clothesFilters.includes(element);
});

console.log(clothes); // ["shirt", "sweater", "sweater", "shirt"]
```