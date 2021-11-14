---
layout: project
title: using JSON.stringify() with values that are not JSON-safe
date: 2020-03-29 9:00 -0700
updated: 2021-11-13 18:16 -0700
meta: When using JSON.stringify() you will most likely run into the issue of having some properties that are not JSON-safe.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

When using <code class="highlight__code">JSON.stringify()</code> you will most likely run into the issue of having some properties that are not JSON-safe.

When running <code class="highlight__code">JSON.stringify()</code> on an object a <code class="highlight__code">.toJSON()</code> method can be defined to return a JSON-safe version of the object.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const includesUnsafeJSON = {
  favoriteWater: undefined,
  favoriteColors: ['red', 'green', 'blue'],
  multiplyByTwo (number) {
    return number * 2
  }
};

includesUnsafeJSON.toJSON = function() {
  return {
    ...this
  };
};

JSON.stringify(includesUnsafeJSON);
// '{"favoriteColors":["red","green","blue"]}'
```

<code class="highlight__code">JSON.stringify()</code> takes in a optional second argument known as replacer which can be an <code class="highlight__code">Array</code> or a <code class="highlight__code">Function</code>.

It is used to tell <code class="highlight__code">JSON.stringify()</code> what properties to keep.

If an <code class="highlight__code">Array</code> is passed in

* it will only include the properties with the key values in the array

If a <code class="highlight__code">Function</code> is passed in

* it will only include the properties that the value was returned
* If you don't want to include a property return <code class="highlight__code">undefined</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = {
  fruits: ['apples', 'oranges'],
  vegetables: ['carrots', 'potatoes'],
  getFruits () {
    return this.fruits;
  },
  getVegetables () {
    return this.vegetables;
  },
};

JSON.stringify(food, ['fruits', 'vegetables']);
// '{"fruits":["apples","oranges"],"vegetables":["carrots","potatoes"]}'

JSON.stringify(food, (key, value) => {
  if (key !== 'getFruits' && key !== 'getVegetables') {
    return value;
  }
});
// '{"fruits":["apples","oranges"],"vegetables":["carrots","potatoes"]}'
```