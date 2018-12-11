---
layout: project
title: this in JavaScript
date: 2018-12-10 10:58 -0700
meta: this refers to a object that set is at the creation of a new execution context.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

This refers to a object that set at the creation of a new execution context. this is the object invoked on. If it is called on the global context it is referred to the global object.

```javascript
function whatIsThis() {
  console.log(this);
}

whatIsThis();
  // will log the window object
```

Everything is invoked on the global object.

Everything that is defined on the global scope is stuck on the global object that is why
this refers to the window / global object.

If the function is called as a method of an object
'this' is bound to the object the method is called on.

```javascript
var person = {
 firstName: 'brian',
 lastName: 'Munoz',
 greet: function () { console.log('hi, ' + this.firstName) }
}

person.greet();
 // will log hi, brian
```

When calling the greet function on person this becomes the person object because it was called on person.

## reassign this

You can reassign what this is by using <span class="highlight__code">bind</span>, <span class="highlight__code">apply()</span> or <span class="highlight__code">call()</span>. They each have subtle differences. You can also use these methods to use a object functions to be called on a different object.

* bind returns a new function with this bound
* call calls the function with this bound and arguments
* apply calls the function with this bound and array of arguments

```javascript
var person = {
 firstName: 'brian',
 lastName: 'Munoz',
 whatIsThis: function() {console.log(this);},
 greet:
  function (whatosay) { console.log(whatosay + ' ' + this.firstName) }
}

person.whatIsThis();
  // will log the person object

person.greet('hi')
  // will log hi brian

var student = {
  firstName: 'Daniel',
}

// returns function with this bounded
var studentGreet = person.greet.bind(student, 'hi');
studentGreet();
  // will log hi Daniel

// call and apply immediate runs the function
person.greet.call(student, 'hi')
  // will log hi Daniel

// use apply when you
// don't know how many parameters
// you will pass into the function
let arr = ['hi']
person.greet.apply(student, arr)
  // will log hi Daniel
```

## ES6 arrow notation

Shorthand for a function.

```javascript
function () {
 console.log('hi');
}

() => console.log('hi');
```

The way this works with arrow function is that it binds this to the lexical scope instead of where it was invoked on.

```javascript
var newPerson = {
  firstName: 'Jane',
  lastName: 'Doe',
  greet: () => console.log('hi, ' + this.firstName)
}

newPerson.greet();
  // will log hi, undefined
```

It console logs 'hi, undefined' because the arrow function is set this to the lexical scope instead of where it was invoked on.

This is the global scope because it is not within another function, it is on the global execution so this points to the global object with the arrow function.

## lexical scoping

explanation on how lexical scoping works.

```javascript
var x = 42;

function setX() {
  var x = 50;
}

function printX() {
 console.log(x);
}

setX();

printX();
  // will log 42
```

<span class="highlight__code">printX()</span> prints 42 because it is on the global scope, <span class="highlight__code">printX()</span> can not see the x in the <span class="highlight__code">setX()</span> function because it is enclosed in a function.

```javascript
var x = 42;

function setX() {
  var x = 50;

 function printX() {
 console.log(x);
 }

 printX();
}

setX();
 // will log 50
```

now <span class="highlight__code">printX()</span> will console log 50 because it is the variable bounded closes to the scope the console log was executed in.

lexical scoping determines how variables are bounded.

happy coding :)

Any question feel free to contact me brianmunozdev@gmail.com