---
layout: project
title: data types in javascript
date: 2018-11-26 7:18 -0700
meta: what are the different data types in javascript. All of them but objects are primitives which includes undefined, null, boolean, number, symbol and object. difference between data types.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

All data types are primitives except for objects. The data types includes undefined, null, boolean, number, symbol and object. Variables in JavaScript can contain any type and can be changed to a different type later.

## dynamic typing

The JavaScript interpreter figures out the typing of declarations in your code. If you put the number 42 and run it JavaScript will know that it is a number.

## primitive types

* undefined
* null
* boolean
* number
* string
* (symbol) don't worry about this.

## non primitive type

* object

## undefined

When something is undefined it means it was declared but not initialized.

For example when you console.log a variable before it was initialized.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hello); // undefined

var hello = "hello";
```

It prints out undefined instead of throwing a reference error because of hoisting in JavaScript.

## what is hoisting

Hoisting means that all function definition and variable declarations are put to the top of the nearest scope.

Function definition are hoisted, variable initialization are not.

Which means that function can be used anywhere in your code even before it is defined. Only the variable declaration is hoisted not the value this is why we get undefined when trying to run <span class="higlight__code">console.log(hello)</span>.

Here is how it looks like before JavaScript hoists your code.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(x);
greet();

var x = 42;

function greet() {
 console.log('hello')
}
```

Here is how it looks like after hoisting.

<p class="highlight__file-desc">JavaScript</p>

```javascript

// x is declared but not assigned
var x;

// greet function moves to the top
function greet() {
 console.log('hello')
}

// x is console log
console.log(x);
  // undefined

greet();
// calls greet

x = 42;
// now x is assigned 42
```

## null

It exists but has no value explicitly set, JavaScript sets the value.

## number

Is just a number. You do not have to put int, float, double. everything is a double. There is floating point imprecision because there is no designated type for accurate decimals. but everything is a double so it's ok. Only have 64 bit to store numbers. Includes exponent notation.

<p class="highlight__file-desc">JavaScript</p>

```javascript
// don't have to put the type
// just use a variable declaration
var x = 42;

console.log(10e3) // 10000
```

## strings

Is just a string.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var string = "string"

console.log(string) // "string"
```

## objects

It is a way to store related things. It can store all the types in key value pairs. there is 2 ways to initialize a object.

* object literal
* object constructor

<p class="highlight__file-desc">JavaScript</p>

```javascript
var obj = new Object();
obj.age = 18;
obj.greet = function () { console.log('hi')}
obj.javascriptIsCool = true;
obj.firstName = "Brian";

console.log(obj); // {age: 22, greet: ƒ, javascriptIsCool: true, firstName: "Brian"}

// you can initialize it like this and repeat the same from before

var obj2 = {}

obj.age = 18;
obj.greet = function () { console.log('hi')}
obj.javascriptIsCool = true;
obj.firstName = "Brian";

console.log(obj2); // {age: 22, greet: ƒ, javascriptIsCool: true, firstName: "Brian"}

// you can also just add key value pairs when initializing it

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

