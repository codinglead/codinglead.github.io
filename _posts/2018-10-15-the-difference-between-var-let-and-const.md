---
layout: project
title: the difference between var, let, and const
date:  2018-10-15 3:19 -0700
updated: 2020-06-12 18:11 -0700
meta: a explanation of why and how to use const, let, and var variable declarations in javascript.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

## what is var, let, and const

<span class="highlight__code">var</span>, <span class="highlight__code">let</span>, and <span class="highlight__code">const</span> are ways to declare variables. Each way has a slight difference on how they work. It is important to use these declarations the right way because they were made to benefit the developer and make code easier to understand.

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
// they are declared like this

// it is block scoped
// should only be used on stuff that is constant
// can not be reassign
const name = "Brian";

// it is block scoped
// can be assign a new value
let age = 18;

// the usual way to declare var before es6 syntax
var state = "California"
```

## first let's talk about scope

Scope is the way JavaScript finds and locates declarations. Block scope and function scope are really similar looking but have small differences.


### what is block scope

a block scope is defined with curly braces. when using var in a block scope it doesn't conceal the variables from the outside. When using const or let inside curly braces it keeps the variables hidden from the outside.

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
// this is normal javascript
{
  var a = 10
  console.log(a) // 10
}
console.log(a) // 10

{
  let b = "I am let in a block scoped"
  console.log(b) // I am let in a block scoped
}
console.log(b) // Uncaught ReferenceError: b is not defined

{
  const c = "I am a const in a block scoped"
  console.log(c) // I am a const in a block scoped
}
console.log(c) // Uncaught ReferenceError: c is not defined
```

Anything with a opening curly braces and closing curly brace creates a block scope. Other examples are if else statements and for loops.

### What is Function Scope

function scope is anything inside a function. It has the same rules as block scope just the way it is declared is different.


<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
let greet = "hi how are you";

function greetPerson() {
  let greet = "the function is saying hi";
  console.log(greet);
}

greetPerson();
  // print 'the function is saying hi'
```

when calling <span class="highlight__code">greetPerson()</span> JavaScript finds the function and walks into the scope. It first checks the scope where <span class="highlight__code">console.log()</span> was executed, which is the function scope, then looks for the the variable greet it keeps going outwards until it reaches the global scope. This is why greet declared inside the function is printed in the console instead of the greet declared in the global scope.

## The significance of var

<span class="highlight__code">var</span> was the way to declare variables before ES6.

It can be redeclared and reassigned.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
var greet = "hello";
greet = "hi";
var greet = "cheers";

console.log(greet);
  // print cheers
```

<span class="highlight__code">var</span> is hoisted and initialized to undefined.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
console.log(hoisted) // undefined
var hoisted = "hi"

```

<span class="highlight__code">var</span> doesn't care about block scope. If there is no <span class="highlight__code">var</span> declaration JavaScript assumes you meant to make it a variable and puts it in the global scope.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
if (true) {
  var hello = "hello"
}

if (true) {
  // never do this
  hi = "hi"
}

console.log(hello) // hello
console.log(hi) // hi
```

### why var sucks

it pollutes the global scope.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
for (var i = 0; i < 10; i++) {
  // code
};

// i is on the global scope even though we don't need it
console.log(i); // 10
```

let's say you have thousands of lines of code and don't realize you used the same variable twice. Now you have a hard to find bug.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
var greet = "hi";
if (true) {
  var greet = "say this instead";
}

console.log(greet)
  // print say this instead
```

Since <span class="highlight__code">var</span> gets redefined it messes with the global scope version of the variable.

## The significance of let

<span class="highlight__code">let</span> is usually the variable declaration that is used over <span class="highlight__code">var</span> because it has better features than <span class="highlight__code">var</span> does.

It can not be redeclared but can be redefined. This fixes the problem with var that we might accidentally redeclare a variable we didn't want too.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let greet = "hello there"

greet = "say this"

console.log(greet)
  // print say this

let greet = "hello there again";
// Uncaught SyntaxError: Identifier 'greet' has already been declared
```

<span class="highlight__code">let</span> is hoisted but not initialized.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

let hoisted = "Hi I am hoisted but not initialized";
```

<span class="highlight__code">let</span> uses block scope which means it can only be referenced in the same scope it was defined. This fixes the problem we had with <span class="highlight__code">var</span>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  let greet = "hello";
  console.log(greet);
}

console.log(greet);
// Uncaught ReferenceError: greet is not defined
```


### why use let over var

<span class="highlight__code">let</span> doesn't pollute the global scope.

<p class="highlight__file-desc">JavaScript</p>

```javascript
for (let i = 0; i < 10; i++) {
  // code
}

console.log(i)
// Uncaught ReferenceError: i is not defined
```

<span class="highlight__code">let</span> is block scope which means the problem we had with <span class="highlight__code">var</span> doesn't apply to <span class="highlight__code">let</span>.


## The significance of const

variables declared with <span class="highlight__code">const</span> values should be constants.

<span class="highlight__code">const</span> cannot be redeclared or reassigned

<p class="highlight__file-desc">JavaScript</p>

```javascript
const greeting = "hello";
greeting = "hi";
// Uncaught TypeError: Assignment to constant variable

const greeting = "hi";
// Uncaught SyntaxError: Identifier 'greeting' has already been declared
```
<span class="highlight__code">const</span> must be initialized when declared

just like <span class="highlight__code">let</span> <span class="highlight__code">const</span> is hoisted but not initialized

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

const hoisted = "Hi I am hoisted but not initialized";
```

<span class="highlight__code">const</span> variable declarations are block scoped like <span class="highlight__code">let</span>

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  const greet = "hello";
  console.log(greet);
}

console.log(greet);
// Uncaught ReferenceError: greet is not defined
```
### const isn't really constant

you can still change some value with a <span class="highlight__code">const</span> variable declaration.

In objects you can still change values.

```javascript
const Brian = {
  name: 'Brian',
  language: 'JavaScript'
}

Brian.language = "HTML"

console.log(Brian)
// {name: "Brian", language: "HTML"}
```

Add and remove elements from arrays.

```javascript
const arr = [1,2,3];
​
arr.pop();
​
console.log(arr) // [1, 2]
​
arr.push(5)
​
console.log(arr) // [1,2,5]
```

## summary of the differences

Most of the time use <span class="highlight__code">let</span> and <span class="highlight__code">const</span>. Only should use <span class="highlight__code">var</span> when you are trying to use it as a stylistic choice.

1. <span class="highlight__code">let</span> and <span class="highlight__code">var</span> don't have to be initialized when declared. <span class="highlight__code">const</span> has to be initialized when declared.

2. <span class="highlight__code">var</span> can be redefined and redeclared; <span class="highlight__code">let</span> can be redefined but not redeclared; <span class="highlight__code">const</span> can't be redefined or redeclared.

3. <span class="highlight__code">var</span> declarations are globally or function scoped while <span class="highlight__code">let</span> and <span class="highlight__code">const</span> are block scoped.

4. use <span class="highlight__code">const</span> when wanting to declare a variable that shouldn't change.