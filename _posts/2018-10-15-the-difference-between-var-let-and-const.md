---
layout: project
title: the difference between var, let, and const
date:  2018-10-15 3:19 -0700
updated: 2021-10-16 11:13 -0700
meta: an explanation of var, let, and const variable declarations in JavaScript.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<span class="highlight__code">var</span>, <span class="highlight__code">let</span>, and <span class="highlight__code">const</span> are ways to declare variables.

It is important to use these declarations the right way because they were made to benefit the developer and make code easier to understand.

### they are declared and defined like this

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
// it is block scoped
// should only be used for stuff that is constant
// can not be reassign
const name = "Brian";

// it is block scoped
// can be assign and reassign
let age = 18;

// it is function scoped
// can be assign and reassign
var state = "California"
```

## first let's talk about scope in JavaScript

Scope is the way JavaScript finds declarations.

There are <span class="highlight__code">Block scope</span> and <span class="highlight__code">Function scope</span>.

### what is Block scope

A <span class="highlight__code">Block scope</span> is defined with curly braces.

Using <code class="highlight__code">var</code> in a <span class="highlight__code">Block scope</span> doesn't prevent the variables from being accessible outside it. 

Using <code class="highlight__code">const</code> or <code class="highlight__code">let</code> in a <span class="highlight__code">Block scope</span> prevents the variables from being accessible outside it.

<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
{
  var varDeclaration = "I am a var in a block scope";
  console.log(varDeclaration); // I am a var in a block scope
}
// varDeclaration is accessible outside the block scope
console.log(varDeclaration); // I am a var in a block scope

{
  let letDeclaration = "I am let in a block scoped";
  console.log(letDeclaration); // I am let in a block scoped
}
console.log(letDeclaration);
// Uncaught ReferenceError: letDeclaration is not defined

{
  const constDeclaration = "I am a const in a block scoped";
  console.log(constDeclaration); // I am a const in a block scoped
}
console.log(constDeclaration);
// Uncaught ReferenceError: constDeclaration is not defined
```

Anything with a opening curly braces and closing curly brace creates a <span class="highlight__code">Block scopes</span>.

Examples of <span class="highlight__code">Block scopes</span> are if else statements and for loops.

### What is Function Scope

<span class="highlight__code">Function scope</span> is anything inside a function. Everything declared inside a function isn't accessible outside it. 


<p class="highlight__file-desc">
  JavaScript
</p>

```javascript
const sayApples = "Apples from global scope";

function sayFruit () {
  let sayApples = "Apples from sayFruit()";
  const sayBananas = "Bananas from sayFruit()";
  var sayOranges = "Oranges from sayFruit()";
  console.log(sayApples);
}

sayFruit(); // Apples from sayFruit()

console.log(sayApples); // Apples from global scope

console.log(sayBananas);
// Uncaught ReferenceError: sayBananas is not defined

console.log(sayOranges);
// Uncaught ReferenceError: sayOranges is not defined
```

When executing <code class="highlight__code">sayFruit()</code> "Apples from sayFruit()" is printed instead of "Apples from global scope" because the variable <code class="highlight__code">sayApples</code> in the function is defined in the same scope as where <code class="highlight__code">console.log()</code> is executed.

When looking for variables it starts at where the variable is referenced and it goes up scope until it reaches the global scope.

## The significance of var

<code class="highlight__code">var</code> can be redeclared and reassigned.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var fruit = "Orange";
fruit = "Apple";
var fruit = "Banana";

console.log(fruit); // Banana
```

<span class="highlight__code">var</span> is hoisted and initialized to undefined.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted); // undefined
var hoisted = "hi";
```

<span class="highlight__code">var</span> doesn't care about block scope. 

If there is no <span class="highlight__code">var</span> declaration JavaScript assumes you meant to make it a variable and puts it in the global scope.

<p class="highlight__file-desc">JavaScript</p>

```javascript
if (true) {
  var fruit = "Orange";
}

if (true) {
  vegetable = "Carrot";
}

console.log(fruit); // Orange
console.log(vegetable) // Carrot
```

### why var sucks

it pollutes the global scope.

<p class="highlight__file-desc">
JavaScript
</p>

```javascript
for (var i = 0; i < 10; i++) {
  // code
}

// i is on the global scope even though we don't need it
console.log(i); // 10
```

Allows variables to be redeclared.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var task = "be cool.";
if (true) {
  var task = "be awesome.";
}

console.log(task) // be awesome.
```

The global scope version of the variable is changed.

## The significance of let

<span class="highlight__code">let</span> is usually the variable declaration that is used over <span class="highlight__code">var</span> because it has better features than <span class="highlight__code">var</span> does.

It can not be redeclared but can be redefined.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let favoriteJuice = "Orange juice";

favoriteJuice = "Apple juice";

console.log(favoriteJuice); // Apple juice

let favoriteJuice = "Cranberry juice";
// Uncaught SyntaxError: Identifier 'favoriteJuice' has already been declared
```

<span class="highlight__code">let</span> is hoisted but not initialized.

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(hoisted);
// Uncaught ReferenceError: hoisted is not defined

let hoisted = "Hi I am hoisted but not initialized";
```
<span class="highlight__code">let</span> uses block scope which means it can only be access in the scope it was defined in.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let favoriteFruit = "Oranges";
if (true) {
  let favoriteFruit = "Bananas";
  console.log(favoriteFruit); // Bananas
}

console.log(favoriteFruit); // Oranges
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

<span class="highlight__code">let</span> is <span class="highlight__code">Block scope</span> which means the problems we had with <span class="highlight__code">var</span> doesn't apply to <span class="highlight__code">let</span>.


## The significance of const

variables declared with <span class="highlight__code">const</span> should hold values that are constant.

<span class="highlight__code">const</span> cannot be redeclared or reassigned.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const isJavaScriptCool = true;
isJavaScriptCool = false;
// Uncaught TypeError: Assignment to constant variable.

const isJavaScriptCool = "maybe";
// Uncaught SyntaxError: Identifier 'isJavaScriptCool' has already been declared
```
<span class="highlight__code">const</span> must be initialized when declared.

Just like <span class="highlight__code">let</span> <span class="highlight__code">const</span> is hoisted but not initialized.

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
  const areYouAwesome = true;
  console.log(areYouAwesome); // true
}

console.log(areYouAwesome);
// Uncaught ReferenceError: areYouAwesome is not defined
```

### const isn't really constant

Some values can be changed with a <span class="highlight__code">const</span> variable declaration.

values can be changed in <code class="highlight__code">objects</code>.

```javascript
const beanBurritoRecipe = {
  tortilla: "flour",
  bean: "pinto beans"
}

beanBurritoRecipe.tortilla = "corn";

console.log(beanBurritoRecipe)
// { "tortilla": "corn", "bean": "pinto beans" }
```

Add, modify, and remove elements from an <code class="highlight__code">array</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3];

numbers.pop();
console.log(numbers); // [1, 2]

numbers.push(5);
console.log(numbers); // [1, 2, 5]

numbers[1] = 10;
console.log(numbers); // [1, 10, 5]
```

## summary of the differences

Most if not all the time use <span class="highlight__code">let</span> and <span class="highlight__code">const</span>. 

1. <span class="highlight__code">let</span> and <span class="highlight__code">var</span> don't have to be initialized when declared. <span class="highlight__code">const</span> has to be initialized when declared.

2. <span class="highlight__code">var</span> can be redefined and redeclared, <span class="highlight__code">let</span> can be redefined but not redeclared, <span class="highlight__code">const</span> can't be redefined or redeclared.

3. <span class="highlight__code">var</span> declarations are globally or function scoped while <span class="highlight__code">let</span> and <span class="highlight__code">const</span> are block scoped.

4. use <span class="highlight__code">const</span> when wanting to declare a variable that shouldn't change.