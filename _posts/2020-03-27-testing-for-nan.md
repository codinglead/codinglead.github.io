---
layout: project
title: testing for NaN
date: 2020-03-27 6:00 -0700
updated: 2022-07-04 22:10 -0700
meta: NaN, Not a Number, is returned when doing math operations with values that aren't numbers.
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

<code class="highlight__code">NaN</code>, Not a Number, is returned when doing math operations with values that aren't numbers.

NaN's type is a <code class="highlight__code">number</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const division = 1 / 'e';

console.log(division); // NaN
console.log(typeof division); // number
```

When comparing <code class="highlight__code">NaN</code> to itself it will always evaluate to <code class="highlight__code">false</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const division = 1 / 'e';

console.log(division === NaN); // false
console.log(division == NaN); // false
```

This could be used as a way to check if a value is <code class="highlight__code">NaN</code>.

<code class="highlight__code">Number.isNaN()</code> could also be used to check if a value is <code class="highlight__code">NaN</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const division = 1 / 'e';
const string = 'hi';

console.log(Number.isNaN(division)); // true
console.log(Number.isNaN(string)); // false
```

## summary

When checking if a value is <code class="highlight__code">NaN</code> use <code class="highlight__code">Number.isNaN()</code>.
