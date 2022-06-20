---
layout: project
title: using JSON.stringify() with values that are not JSON safe
date: 2020-03-29 9:00 -0700
updated: 2022-06-20 12:19 -0700
meta: Some JavaScript values are not JSON safe
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

The <code class="highlight__code">.toJSON()</code> method can be defined on an object to be use to transform the object when running <code class="highlight__code">JSON.stringify()</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const includesUnsafeJSON = {
    favoriteWater: undefined,
    favoriteColors: ['red', 'green', 'blue'],
    multiplyByTwo(number) {
        return number * 2;
    }
};

includesUnsafeJSON.toJSON = function () {
    return {
        ...this
    };
};

JSON.stringify(includesUnsafeJSON);
// '{"favoriteColors":["red","green","blue"]}'
```

An optional second argument can be passed in to tell <code class="highlight__code">JSON.stringify()</code> what properties to keep.

If an array is passed in it will only include the properties with the key values in the array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = {
    fruits: ['apples', 'oranges'],
    vegetables: ['carrots', 'potatoes'],
    colors: ['red', 'green', 'blue']
};

JSON.stringify(food, ['fruits', 'vegetables']);
// '{"fruits":["apples","oranges"],"vegetables":["carrots","potatoes"]}'
```

If a function is passed in

-   it will only include the properties that the function returned
-   If you don't want to include a property return <code class="highlight__code">undefined</code>, <code class="highlight__code">function</code> or <code class="highlight__code">symbol</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = {
    fruits: ['apples', 'oranges'],
    vegetables: ['carrots', 'potatoes'],
    colors: ['red', 'green', 'blue'],
    numbers: [1, 2, 3, 4]
};

JSON.stringify(food, (key, value) => {
    if (key === 'numbers') {
        return undefined;
    }

    if (key !== 'colors') {
        return value;
    }
});
// '{"fruits":["apples","oranges"],"vegetables":["carrots","potatoes"]}'
```
