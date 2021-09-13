---
layout: project
title: primitives vs objects
date: 2018-11-30 4:21 -0700
updated: 2020-09-12 18:03 -0700
meta: Primitives are immutable. Objects are mutable and stored by reference.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Objects are mutable and stored by reference. 

Primitives are immutable and passed by value.

## primitives

Primitives can not be changed after being set. You can reset a variable pointing to a primitive to a new primitive but it doesn't change the primitive that was created.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let int1 = 42;
let int2 = int1;
int2 = 50;

console.log('int1: ' + int1); // 42
console.log('int2: ' + int2); // 50
```

## objects

Objects are mutable and stored by reference. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
let object1 = {};
let object2 = object1;

object2.test = 'test';

console.log(object1);
// {test: "test"}

console.log(object2);
// {test: "test"}
```
When console logging object1 it has the test property we gave to object2 because the variable object2 is pointing to object1. A new object isn't created when assigning object1 to object2 they both reference the same object in memory.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let object1 = {};
let object2 = object1;

object2.test = 'test';
console.log(object1);
// {test: "test"}

object2.array = [];
let x = object2.array;

x.push(1);

console.log(object1);
// {test: "test", array: Array(1)}

console.log(object2);
// {test: "test", array: Array(1)}
```
what was added

* object2 stores an array
* set a variable to the array stored on the object2 which is also stored on object1 because they are both pointing to the same place in memory
* push 1 to the array stored in variable x

object1 and object2 both have an array with a 1 in it.

Everything but primitives are stored by reference, this means functions, array and objects are stored by reference.

## passing by reference vs passing by value

Passing by value is when you make a new instance then you pass that value. Reference is a pointer or reference to the original variable or object.