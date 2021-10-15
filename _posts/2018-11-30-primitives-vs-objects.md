---
layout: project
title: primitives vs objects
date: 2018-11-30 4:21 -0700
updated: 2021-10-15 08:38 -0700
meta: Primitives are immutable and passed by value. Objects are mutable and stored by reference.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Primitives are immutable and passed by value.

Objects are mutable and stored by reference. 

## primitives

Primitives can not be changed after being set.

A variable can be reset to a new primitive but it doesn't change the primitive that was created.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let number1 = 42;
let number2 = number1;
number2 = number2 / 2;

console.log('number 1: ' + number1); // 42
console.log('number 2: ' + number2); // 21
```

The primitives are

* string
* number
* boolean
* null
* undefined
* symbol

## objects

Objects are mutable and stored by reference. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
let object1 = {};
let object2 = object1;

object2.test = 'test';

console.log(object1); // {test: 'test'}
console.log(object2); // {test: 'test'}
```

<code class="highlight__code">object1</code> has the <code class="highlight__code">test</code> property we gave to <code class="highlight__code">object2</code> because the variable <code class="highlight__code">object2</code> is pointing to <code class="highlight__code">object1</code>. 

A new object isn't created when assigning <code class="highlight__code">object1</code> to <code class="highlight__code">object2</code> they both reference the same object in memory.


<span class="highlight__code">functions</span>, <span class="highlight__code">arrays</span> and <span class="highlight__code">objects</span> are stored by reference.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let object1 = {};
let object2 = object1;

object2.test = 'test';

console.log(object1); // {test: 'test'}
console.log(object2); // {test: 'test'} 

let array1 = [];
let array2 = array1;

array2.push(1);

console.log(array1); // [1]
console.log(array2); // [1]


let functionOne = () => {}
let functionTwo = functionOne;

functionTwo.test = 'test';

console.log(functionOne.test); // test
console.log(functionTwo.test); // test
```

## passing by reference vs passing by value

Passing by value is when a new instance is made.

Passing by reference is when a new instance isn't made.