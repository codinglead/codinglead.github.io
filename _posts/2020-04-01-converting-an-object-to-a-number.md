---
layout: project
title: converting an object to a number
date: 2020-04-01 8:22 -0700
meta: Converting an object to a number has basic steps that are easy to reason with.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Converting an object to a number has basic steps that are easy to reason with.

When coercing an object to a number it will first check if it has a <code class="highlight__code">valueOf()</code>
method if it does and returns a primitive value that value will be used for coercion. If <code class="highlight__code">valueOf()</code> doesn't exist or doesn't return a primitive value it will check if it has a <code class="highlight__code">toString()</code> method and use the value that was returned for coercion.

If none of the operations can find a primitive value, a TypeError will be thrown.

If the converted primitive value isn't a number it will coerce it to a number.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var a = {
  valueOf: function () {
    return '12';
  }
};

Number(a); // 12

var b = {
  toString: function () {
    return 20;
  }
};

Number(b); // 20

var c = {
  valueOf: function () {
    return ['a', 'b', 'c'];
  }
};

Number(c); // NaN

var d = Object.create(null);

Number(d); // Uncaught TypeError: Cannot convert object to primitive value

var e = {
  valueOf: function () {
    return function s() {};
  },

  toString: function () {
    return '2';
  }
};

Number(e); // 2
```
