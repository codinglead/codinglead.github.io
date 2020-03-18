---
layout: project
title: filter an array with another array
date: 2020-03-16 6:20 -0700
meta: Filtering an array with another array is useful when you have many elements you want to remove from an array.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---


Filtering an array with another array is useful when you have many elements you want to remove from an array.

For this scenario, we have an array of clothes and we want to filter it to only have shirts and sweaters.

```javascript
let array1 = ['shirt', 'sweater', 'sweater', 'shirt', 'pants', 'pants', 'underwear'];

let elementsToFilter = ['shirt', 'sweater'];

// filter removes an element if the returned conditon is false
// otherwise it will keep it
array1.filter(function (ele) {
  // includes checks if the element exist on the array it was called on
  return elementsToFilter.includes(ele);
});

array1; // ["shirt", "sweater", "sweater", "shirt"]
```

When using the array method <code class="highlight__code">filter()</code> it loops through every element and what is returned determines if that value is kept or removed. If a truthy value such as a number is returned it will keep the element otherwise if a falsy value such as an empty string it would remove it. 

We use the array method <code class="highlight__code">includes()</code> to check if the element exists in the <code class="highlight__code">elementsToFilter</code> array.