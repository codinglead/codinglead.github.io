---
layout: project
title: filter an array with another array
date: 2020-03-16 6:20 -0700
updated: 2021-08-21 14:40 -0700
meta: Filtering an array with another array is useful when you have many elements you want to remove from an array.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Filtering an array with another array is useful when you have many elements you want to remove from an array.

For this scenario, we have an array of clothes that we want to filter so it only has shirts and sweaters.

```javascript
let clothes = ['shirt', 'sweater', 'sweater', 'shirt', 'pants', 'pants', 'underwear'];
const clothesFilters = ['shirt', 'sweater'];

// filter removes an element if the returned conditon is false
// otherwise it will keep it
clothes = clothes.filter(function (element) {
  // includes checks if the element exist on the array it was called on
  return clothesFilters.includes(element);
});

console.log(clothes); // ["shirt", "sweater", "sweater", "shirt"]
```

The array method <code class="highlight__code">filter()</code> calls a function for every element in the array what is returned from the function determines if that value is kept or removed. If a truthy value such as a non zero number is returned it will keep the element otherwise if a falsy value such as an empty string it will remove it. 

The array method <code class="highlight__code">includes()</code> is used to check if the element exists in <code class="highlight__code">clothesFilters</code> array.