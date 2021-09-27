---
layout: project
title: this in JavaScript
date: 2018-12-10 10:58 -0700
updated: 2020-09-27 08:37 -0700
meta: this refers to a object that set is at the creation of a new execution context.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<code class="highlight__code">this</code> refers to a object that set at the creation of a new execution context.

The value of <code class="highlight__code">this</code> is the object it is invoked on. 

<p class="highlight__file-desc">JavaScript</p>

```javascript
function whatIsThis() {
    console.log(this);
}

whatIsThis();
// Window {}
```

Everything is invoked on the global object.

Everything that is defined on the global scope is stuck on the global object that is why
this refers to the window / global object.

If the function is called as a method of an object <code class="highlight__code">this</code> is bounded to the object the method is called on.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const person = {
    firstName: 'Brian',
    lastName: 'Munoz',
    greet: function () {
        console.log('hi, ' + this.firstName);
    }
}

person.greet();
// hi, Brian
```

The greet function is called on the person object so this is bounded to the person object.

<code class="highlight__code">this</code> only cares about where it is executed.

**note: *this* works differently in arrow functions we will check it out later**

<p class="highlight__file-desc">JavaScript</p>

```javascript
const person = {
    firstName: 'Brian',
    lastName: 'Munoz',
    greet: function () { 
        console.log(this);
        console.log('hi, ' + this.firstName);
    }
}

const greetFunction = person.greet;
greetFunction();
// Window {}
// hi, undefined
```

The greet function is now being called on the global scope <code class="highlight__code">this</code> is set to the window object.

## reassign this

You can reassign <code class="highlight__code">this</code> by using <span class="highlight__code">bind()</span>, <span class="highlight__code">apply()</span> or <span class="highlight__code">call()</span>. These methods can be used to called a object functions on a different object.

* bind() returns a new function with this bounded
* call() calls the function with this bounded and arguments
* apply() calls the function with this bounded and array of arguments

<p class="highlight__file-desc">JavaScript</p>

```javascript
const person = {
    firstName: 'Brian',
    lastName: 'Munoz',
    whatIsThis: function() {
        console.log(this); 
    },
    greet: function (greeting) {
        console.log(greeting + ' ' + this.firstName);
    }
}

person.whatIsThis();
// person object

person.greet('hi')
// hi Brian

const student = {
    firstName: 'Daniel'
}

// returns function with this bounded and arguments set
const greetStudent = person.greet.bind(student, 'hi');
greetStudent();
// hi Daniel

// call and apply immediate runs the function
person.greet.call(student, 'hi')
// hi Daniel

// use apply when you
// don't know how many parameters
// you will pass into the function
let argumentsArray = ['hi']
person.greet.apply(student, argumentsArray)
// hi Daniel
```

## arrow function

a quicker way to write a function.


<p class="highlight__file-desc">JavaScript</p>

```javascript
// regular way to define a function
function () {
    console.log('hi');
}

// arrow function
() => {
    console.log('hi')
}

// the shortest way to define an arrow function
// it returns the value
const name = () => 'Brian';
console.log(name());
// Brian
```

### this in arrow functions

<code class="highlight__code">this</code> is bounded to the lexical scope instead of where it is invoked on.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    greet: () => {
        console.log(this);
        console.log('hi, ' + this.firstName);
    }
}

person.greet();
// Window {}
// hi, undefined
```
The <code class="highlight__code">greet</code> function is created in the person object which is defined on the global scope.

<code class="highlight__code">this</code> is the window object because it is not within another function. It is defined in the global execution.

### how to fix this


A way to make <code class="highlight__code">this</code> bounded to the person object is to defined it inside a function.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    greet: function () {
        return () => {
            console.log(this);
            console.log('hi, ' + this.firstName);
        }
    }
}

let greetPerson = person.greet();
greetPerson();
// person object
// hi, Jane
```

## lexical scoping

An explanation of lexical scoping.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let favoriteFruit = 'orange';

function danielFavoriteFruit () {
    let favoriteFruit = 'apple';
}

danielFavoriteFruit();

console.log(favoriteFruit);
// orange
```

orange is logged because it is on the global scope. 

we do not have access to the <code class="highlight__code">favoriteFruit</code> variable defined in <code class="highlight__code">danielFavoriteFruit()</code> because it is inside a function.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let favoriteFruit = 'orange';

function danielFavoriteFruit () {
    let favoriteFruit = 'apple';

    console.log(favoriteFruit);
}

danielFavoriteFruit();
// apple
```

apple was logged because it is the variable closes to where <code class="highlight__code">console.log</code> was executed.

lexical scoping determines how variables are found.