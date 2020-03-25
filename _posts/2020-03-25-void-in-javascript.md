---
layout: project
title: void in JavaScript
date: 2020-03-25 11:00 -0700
meta:  When putting the void operator in front of a expression it makes the value returned undefined.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

When using the <code class="highlight__code">void</code> operator in front of a expression it makes the value returned undefined.

```javascript
let javaScriptIsCool = true;

console.log(void javaScriptIsCool, javaScriptIsCool); // undefined true
```

<code class="highlight__code">void</code> operator can be useful when you want a value that exists to be undefined.