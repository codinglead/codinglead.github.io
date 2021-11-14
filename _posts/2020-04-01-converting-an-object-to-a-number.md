---
layout: project
title: converting an object to a number
date: 2020-04-01 8:22 -0700
updated: 2021-11-13 17:28 -0700
meta: What happens when trying to convert an object to a number.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

When converting an object to a number it will first check if the <code class="highlight__code">valueOf()</code> method exists if it does and returns a primitive that will will be used.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const a = {
  valueOf: function () {
    return '12';
  }
};

Number(a); // 12
```


If <code class="highlight__code">valueOf()</code> method doesn't exist or doesn't return a primitive value it will check if it has a <code class="highlight__code">toString()</code> method and use the returned value.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const b = {
  toString: function () {
    return 20;
  }
};

Number(b); // 20

const c = {
  valueOf: function () {
    return function s() {};
  },

  toString: function () {
    return '2';
  }
};

Number(c); // 2
```

If none of the attempts to convert an object to a number can find a primitive value, a TypeError will be thrown.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const d = Object.create(null);

Number(d); // Uncaught TypeError: Cannot convert object to primitive value
```
