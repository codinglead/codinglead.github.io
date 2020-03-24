---
layout: project
title: changing the type of a value - coercion in javascript
date: 2020-03-23 8:00 -0700
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

Explicit coercion is telling JavaScript to change the type. Implicit coercion is not telling JavaScript to change the type directly.

```javascript
var x = 42;
var explicit = String(x) // "42"
var implicit = x + ""; // "42"
```

When changing 42 explicitly to a string we used one of the object wrappers to do it. When changing 42 implicitly we added a double quote to the number and JavaScript figured out that you want to change the type to a string.

## == vs ===

In JavaScript, you can compare values using the double equals or triple equals.

* == coerces the type
* === requires equivalent types

The problem with double equal is what you expect to happen might not happen. You have to be a master at coercion to fully utilize the double equal and everyone else reading your code as well needs to have a good understanding of type coercion. If you know what the types will be, use double equals when in doubt use triple equals.


![equality in javascript]({{ site.baseurl }}/images/equality-in-javascript.png "equality in javascript")

[link to source](  https://dorey.github.io/JavaScript-Equality-Table/unified/)

## what values are falsy

When doing a comparison and the value evaluates to false it is a falsy value.

* false
* +0, -0, NaN
* ""
* undefined
* null

## what values are truthy

When doing a comparison and the value evaluates to true it is a truthy value.

* {}
* []
* everything else


