---
layout: project
title: changing the type of a value - coercion in javascript
date: 2020-03-23 8:00 -0700
updated: 2021-09-04 14:17 -0700
meta: Changing the type of a value can sometimes be confusing because JavaScript tries to be helpful and implicitly change the type for you.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Changing the type of a value can sometimes be confusing because JavaScript tries to be helpful and implicitly change the type for you.

You can change the type of a value implicitly and explicitly. Implicit coercion plays a huge role when using double equals in comparisons.

## explicit vs implicit coercion

Explicit coercion is telling JavaScript to change the type.

Implicit coercion is not telling JavaScript to change the type directly.

```javascript
var x = 42;
var explicit = String(x) // "42"
var implicit = x + ""; // "42"
```

The <span class="highlight__code">String()</span> object wrapper was used to change 42 type explicitly to a string.

To change 42 type implicitly to a string we added a double quote to the number. 

## == vs ===

Values can be compared using the double equals or triple equals.

* == coerces the type
* === requires equivalent types

The problem with double equal is what you expect to happen might not happen. 

A good understanding of type coercion is needed to fully utilize double equal and everyone else reading your code will as well need to have a good understanding. 

Here is a table showing equalities. [link to source](https://dorey.github.io/JavaScript-Equality-Table/unified/)

![equality in javascript]({{ site.baseurl }}/images/equality-in-javascript.png "equality in javascript")