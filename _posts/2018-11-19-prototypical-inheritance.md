---
layout: project
title: prototypical inheritance
date: 2018-11-19 4:00 -0700
updated: 2021-09-19 11:21 -0700
meta: prototypical inheritance in JavaScript is an object with methods and properties that are given to non-primitive types.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

In JavaScript there are <span class="highlight__code">non-primitive</span> types that have methods and properties that can be called on them.

<span class="highlight__code">non-primitive</span> types are <span class="highlight__code">functions</span>, <span class="highlight__code">objects</span> and <span class="highlight__code">arrays</span>

## example of methods stored on the prototype

* Array.prototype.push();
* String.prototype.toUpperCase();

## properties and methods can be shadowed

This means that properties or methods defined closest to the instance have priority of being called then properties defined in the prototype.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let array = [2];
array.test = function () { console.log('hi') }
Array.prototype.test = function () { console.log('hi somewhere else') }

array.test(); // hi
```

"hi" was console logged instead of "hi somewhere else" because it was defined closer to the instance of the array that was created.

### how to call methods on the prototype

The prototype can be accessed by the <span class="highlight__code">__proto__</span> property.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let array = [2];
array.test = function () { console.log('hi') }
Array.prototype.test = function () { console.log('hi somewhere else') }

array.__proto__.test(); // hi somewhere else
```


## prototype chain

Every object stores a reference to its prototype.

In the previous example the test function was stored on the array and in the <span class="highlight__code">Array</span> prototype.

When executing the test method on the array, JavaScript looks for method on the prototype chain starting from the variable instance. When the method is found JavaScript stops looking for it in the prototype chain and uses it.

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

let x = 42;
x.toString() // "42"
x._proto__ // access to proto
x instanceof Number // false
```

When declaring a variable to a primitive type it will wrap the primitive object wrapper.

In this case we declare the variable to be equal to 42 which then gets wrapped by the Number() object wrapper. This will give us access to the Number prototype.