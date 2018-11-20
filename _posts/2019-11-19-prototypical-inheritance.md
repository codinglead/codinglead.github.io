---
layout: project
title: prototypical inheritance
date: 2018-11-19 4:00 -0700
meta: What is prototype inheritance in javascript. Also known as prototypical inheritance. It is just a object with methods and properties that is given to non-primitive types.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

In JavaScript non primitive types have methods that you can use on them.

Prototypical inheritance is a object with methods and properties that is given to non-primitive types.

## non-primitive types have a few properties or methods associated with them

some examples of methods store on the array prototype are

* Array.prototype.push();
* string.prototype.toUpperCase();

Almost everything is a object in JavaScript.

Each object stores a reference to its prototype.

Properties or methods defined most tightly to the instance have priority of being called.

```javascript
let arr = [2];
arr.test = function () { console.log('hi') }
Array.prototype.test = function () { console.log('hi somewhere else') }

arr.test() // hi
```

"hi" was console logged instead of "hi somewhere else" because it was defined closer to the array that was created.

## prototype chain

Every object stores a reference to its prototype.

In the example above the array stored a test method and in the Array prototype also stored a test method.

When calling the test method on the array, JavaScript looks for method on the prototype chain starting from the variable instances in this case it is the array. When the first method is found JavaScript stops looking in the prototype chain.

```javascript
arr.test() // hi
```

The prototype chain will look like this for the example above. JavaScript starts looking from the bottom and looks upwards.

* null
* object
* array
* instance of variable

instance of variable => array => object => null

You can think of the prototype chain as the way JavaScript looks for a method when it is being called on a object.

note: almost everything in JavaScript is a object.

This is way the test method on the array was called and executed instead of the test methond on the array prototype because it found the test method on the array instance first so it stopped looking for it.

## primitive types have object wrappers

* String()
* Number()
* Boolean()
* Object()
* (Symbol())

JavaScript have object wrappers that you can declare so you have access to methods.

JS will automatically "box" wrap primitives values so you have access to methods

```javascript
42.toString() // Error

var x = 42;
x.toString() // "42"
x._proto__ // access to proto
x.instanceof Number // false
```

When declaring a variable to be a primitive type it will wrap the primitive object wrapper.

In this case we declare the variable to be equal to 42 which then gets wrapped by the Number() object wrapper. This will give us access to the Number prototype.

## why use reference to prototype

it saves spaces.

The alternative is storing it at the instance instead on the prototype.

## the danger of using reference to the prototype

Change something on one prototype changes it in every single instance.

happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com