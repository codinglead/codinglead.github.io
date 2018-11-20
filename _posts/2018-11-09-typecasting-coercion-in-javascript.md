---
layout: project
title: typecasting.. coercion in javascript
date: 2018-11-09 1:00 -0700
meta: typecasting.. coercion in javascript. type coercion explained in javascript.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

## explicit vs implicit coercion

explicit coercion is telling JavaScript to change the type. Implicit coercion is not telling JavaScript to change the type directly.

```javascript
var x = 42;
var explicit = String(x) // "42"
var implicit = x + ""; // "42"
```

When changing 42 explicitly to a string we used one of the object wrappers to do it. When changing 42 implicitly we add a double quote to the number and JavaScript figures out that you want to change the type to a string.

## == vs ===

In JavaScript you can compare values using the double equals or triple equals.

* == coerces the type
* === requires equivalent types

the problem with double equal is what you expect to happen might not happen. You have to be a master at coercion to fully utilize the double equal and everyone else reading your code as well needs to have a good understanding on coercion. if you know what the types will be, use double equals when in doubt use triple equals.


![equality in javascript]({{ site.baseurl }}/images/equality-in-javascript.png "equality in javascript")

[link to source](  https://dorey.github.io/JavaScript-Equality-Table/unified/)

## what values are falsy

A Falsy value is when doing a comparison what values will be translated to false

* false
* +0, -0, NaN
* ""
* undefined
* null

## what values are truthy

what is a truthy values?

A Truthy value is when doing a comparison which values will be translated to true

* {}
* []
* everything else

happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com



