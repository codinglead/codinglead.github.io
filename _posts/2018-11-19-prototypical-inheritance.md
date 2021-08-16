---
layout: project
title: prototypical inheritance
date: 2018-11-19 4:00 -0700
updated: 2020-08-15 18:33 -0700
meta: What is prototype inheritance in javascript. It is an object with methods and properties that are given to non-primitive types.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

In JavaScript there are <span class="highlight__code">non-primitive</span> types that have methods and properties that can be called on them.

<span class="highlight__code">non-primitive</span> values are functions, objects and arrays.

Prototypical inheritance It is an object with methods and properties that are given to non-primitive types..

## non-primitive types have a few properties or methods associated with them

Some examples of methods stored on the prototype are.

* Array.prototype.push();
* string.prototype.toUpperCase();

Almost everything is a object in JavaScript. Each object stores a reference to its prototype. Properties or methods defined most tightly to the instance have priority of being called.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arr = [2];
arr.test = function () { console.log('hi') }
Array.prototype.test = function () { console.log('hi somewhere else') }

arr.test() // hi
```

"hi" was console logged instead of "hi somewhere else" because it was defined closer to the instance of the array that was created.

## prototype chain

Every object stores a reference to its prototype.

In the previous example the test function was stored on the array and in the <span class="highlight__code">Array</span> prototype.

When executing the test method on the array, JavaScript looks for method on the prototype chain starting from the variable instance. When the method we are looking for is found JavaScript stops looking for it in the prototype chain and uses it.

<p class="highlight__file-desc">JavaScript</p>

```javascript
arr.test() // hi
```

The prototype chain will look like this for the example above. 

instance of variable => array => object => null

You can think of the prototype chain as the way JavaScript looks for a method when it is being called on a object.

JavaScript found the test method on the array instance first, this is why the test method on the array was executed instead of the test method on the <span class="highlight__code">Array</span> prototype.

## primitive types have object wrappers

* String()
* Number()
* Boolean()
* Object()
* (Symbol())

JavaScript has object wrappers that you can declare so you have access to methods on the prototype.

JavaScript will automatically "box" wrap primitives values so you have access to methods.

<p class="highlight__file-desc">JavaScript</p>

```javascript
42.toString() // Error

var x = 42;
x.toString() // "42"
x._proto__ // access to proto
x instanceof Number // false
```

When declaring a variable to be a primitive type it will wrap the primitive object wrapper.

In this case we declare the variable to be equal to 42 which then gets wrapped by the Number() object wrapper. This will give us access to the Number prototype.

## why use reference to prototype

it saves spaces.

The alternative is storing it at the instance instead on the prototype.

## the danger of using reference to the prototype

Change something on one prototype changes it in every single instance.