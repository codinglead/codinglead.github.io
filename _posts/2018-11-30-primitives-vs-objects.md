---
layout: project
title: primitives vs objects
date: 2018-11-30 4:21 -0700
meta: primitives are immutable. objects are mutable and stored by reference
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

In JavaScript all data types but objects are primitives. Objects are mutable and stored by reference. Primitives are immutable and passed by value.


## primitives

Primitives are immutable. This means that it can not be changed after being set. You can reset a variable pointing to a primitive to a new primitive but doesn't change the primitive that was declared in the beginning.

```javascript
let int1 = 42;
let int2 = int1;
int2 = 50;

console.log('int1: ' + int1); // 42
console.log('int2: ' + int2); // 50
```
primitives are immutable.

## objects

Objects are mutable and stored by reference. Everything but primitives are objects. Everything that stores a object is stored by reference.

```javascript
var obj1 = {};
var obj2 = obj1;

obj2.test = 'test';

console.log(obj1)
  // {test: "test"}
```
When console logging obj1 it has the test key we gave to obj2 because the variable obj2 is pointing to obj1. All objects are passed by reference so both objects are pointing to the same placed it was saved in memory.

```javascript
var obj1 = {};
var obj2 = obj1;

obj2.test = 'test';
console.log(obj1) // {test: "test"}

obj2.arr = [];
var x = obj2.arr;

x.push(1);

console.log(obj1) // {test: "test", arr: Array(1)}
```
what was added

* obj2 stores an array
* set a variable to the array stored on the obj2 which is also stored on obj1 because they are both pointing to the same place in memory
* push 1 to the array stored the variable x

obj1 and obj2 both have a 1 in the array. Objects are passed by reference which means they both are reference in the same place in memory.

Everything but primitives are stored by reference, this means functions, array and objects are stored by reference.

## passing by reference vs passing by value

Passing by value is when you make a new instance then you pass that value. Reference is a pointer or reference to the original variable or object.

happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com