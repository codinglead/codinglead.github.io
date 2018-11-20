---
layout: project
title: types in javascript
date: 2018-11-02 3:00 -0700
meta: what are the different types in javascript. All of them but objects are primitives which includes undefined, null, boolean, number, (symbol) and object. Difference between types.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

what are the different types in javascript ? All of them but objects are primitives which includes undefined, null, boolean, number, (symbol), and of course object.

## dynamic typing

The JavaScript interpreter figures out the typing of declarations in your code. If you put the number 42 and run it javascript will know that it is a number.

## primitive types

* undefined
* null
* boolean
* number
* string
* (symbol) don't worry about this.

## undefined

When something is undefined it means it was declared but not initialized.

For example when you console.log a variable before it was initialized.


```javascript

console.log(hello) // undefined

var hello = "hello"
```

It prints out undefined instead of throwing a reference error because of hoisting in javascript.

## what is hoisting

Hoisting means that all function definition and variable declarations are put to the top of the nearest scope.

Function definition are hoisted, variable initialization are not.

which means that function can be used anywhere in your code even before it is defined. only the variable declaration is hoisted not the value.

How it looks like before javascript hoist your code.

```javascript
console.log(x);
greet();

var x = 42;

function greet() {
 console.log('hello')
}
```

How it looks like after hoisting.

```javascript
var x;

function greet() {
 console.log('hello')
}

console.log(x);

greet();

x = 42;
```

This is a very simplified version on what actually is happening in the background but it is a good way of showing how it works.

## null

It exists but has no value explicitly set, javascript sets the value

## number

Is just a number. You do not have to put int, float, double. everything is a double. There is floating point imprecision because there is no designated type for accurate decimals. but everything is a double so it's ok. only have 64 bit to store numbers. includes exponent notation.

```javascript
// don't have to put the type
// just use a variable declaration
var x = 42;

console.log(10e3) // 10000
```

## strings

Is just a string.

```javascript
var string = "string"

console.log(string) // "string"
```

## objects

It is a way to store related things. It can store all the types in key value pairs. there is 2 ways to initialize a object.

* object literal
* object constructor


```javascript

// object constructor
var obj = new Object();
obj.age = 18;
obj.greet = function () { console.log('hi')}
obj.javascriptIsCool = true;
obj.firstName = "Brian";

console.log(obj); // {age: 22, greet: ƒ, javascriptIsCool: true, firstName: "Brian"}

// you can initialize it like this and repeat the same from before
// object literal
var obj2 = {}
obj.age = 18;
obj.greet = function () { console.log('hi')}
obj.javascriptIsCool = true;
obj.firstName = "Brian";

console.log(obj2); // {age: 22, greet: ƒ, javascriptIsCool: true, firstName: "Brian"}

// you can also just add key value pairs when initializing it
// object literal
var obj3 = {
 age: 18,
 greet: function () {
   console.log('hi')
 },
 javascriptIsCool: true,
 firstName: "Brian"
}

console.log(obj3); // {age: 22, greet: ƒ, javascriptIsCool: true, firstName: "Brian"}
```

happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com

