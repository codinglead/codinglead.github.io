---
layout: project
title: presizing an array in JavaScript
date: 2020-03-29 9:00 -0700
published: false
meta: Presizing an array in JavaScript
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Presizing an array in JavaScript

You could use the native constructor <code class="highlight__code">Array</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
let a = new Array(3);

console.log(a); // [empty x3]
```

This works because when passing in a single value into the <code class="highlight__code">Array</code> constructor it will take the length to presize the array with values of empty instead of making an array with the value that was passed in.

This creates an array with empty slots. These types of arrays are called <code class="highlight__code">sparse arrays</code>

What it is doing is making an empty array and setting the .length property to the value passed in.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let a = new Array(3);

let b = [];
b.length = 3;

console.log(a); // [empty x3]
console.log(b); // [empty x3]
```

Note: this is what is logged in the console on chrome. The log statement might not be the same on different browsers.

There is no difference in using the <code class="highlight__code">Array constructor</code> over making an empty array and setting the .length property on it to a number.

Some methods will not work as expected with an array with empty slots such as <code class="highlight__code">.map()</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let a = new Array(3);

let b = [undefined, undefined, undefined];

a.map(function (e, i) {
  return i;
}); // [empty x3]

b.map(function (e, i) {
  return i;
}); // [0, 1, 2]
```

If you want to create an array with undefined values and not empty slots.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let a = Array.apply(null, { length: 3 });

console.log(a); // [undefined, undefined, undefined]
```

What ends up happening is calling <code class="highlight__code">new Array()</code> as <code class="highlight__code">new Array(undefined, undefined, undefined)</code>, which fills up the array with undefined values instead of empty slots.

You could also just use a for loop to fill the array with any value.

```javascript
let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push(undefined);
}

console.log(arr); // [undefined, undefined, undefined]
```

It is not a good idea to create empty slots because it can lead to unexpected behavior.

