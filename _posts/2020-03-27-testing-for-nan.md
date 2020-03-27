---
layout: project
title: testing for NaN
date: 2020-03-27 6:00 -0700
meta: NaN, Not a Number, is a value that happens when doing math operations with types that are not numbers.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<code class="highlight__code">NaN</code>, Not a Number, is returned when doing math operations with values that aren't numbers. NaN's type is a <code class="highlight__code">number</code> even though the name makes it sound like it isn't.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let division = 1 / 'e';

typeof division; // number
```

When comparing <code class="highlight__code">NaN</code> to itself it will always evaluate to <code class="highlight__code">false</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let division = 1 / 'e';

division === NaN; // false
division == NaN; // false
```

We could use <code class="highlight__code">isNaN()</code> to check if the value is NaN.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let division = 1 / 'e';

isNaN(division);
```

<code class="highlight__code">isNaN()</code> does more than you think.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let division = 1 / 'e';
let string = 'Brian';

isNaN(division); // true
isNaN(string); // true
```

If given any value that isn't a number or the value <code class="highlight__code">NaN</code> it will return true.

### Number.isNaN()

There is <code class="highlight__code">Number.isNaN()</code> which works as expected.


<p class="highlight__file-desc">JavaScript</p>

```javascript
let division = 1 / 'e';
let string = 'Brian';

Number.isNaN(division); // true
Number.isNaN(string); // false
```

There is an easy polyfill for <code class="highlight__code">Number.isNaN()</code> for pre ES6 browsers.

<code class="highlight__code">NaN</code> is the only value that doesn't equal itself so we can compare it to itself to check if it is <code class="highlight__code">NaN</code>

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return n !== n;
  }
}
```

When checking if a value is <code class="highlight__code">NaN</code> use <code class="highlight__code">Number.isNaN()</code>.