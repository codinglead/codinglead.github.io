---
layout: project
title: When to use let and const
date:  2019-05-22 21:05 -0700
meta: To understand why let and const were added, it’s probably best to look at an example of when using var can get tricky.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

There are two "new" ways to declare variables in JavaScript: let and const.

## var vs. let and const

To understand why let and const were added, it’s probably best to look at an example of when using var can get tricky.

Before running this code what do you think <code class="highlight__code">cold</code> would return.
<p class="highlight__file-desc">JavaScript</p>

```javascript
function getJacket (isCold) {
  if (isCold) {
    var cold = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log('cold is: ', cold);
  }
}

getJacket(false);
```

(when this code is executed <code class="highlight__code">cold</code> will be <code>undefined</code>)

## Hoisting

Hoisting is a result of how JavaScript is read by your browser. Before any JavaScript code is executed, all variables are "hoisted", which means they're raised to the top of the function scope. So at run-time, the <code class="highlight__code">getJacket</code> function actually looks more like this…

<p class="highlight__file-desc">JavaScript</p>

```javascript
function getJacket (isCold) {
  var cold, hot;
  if (isCold) {
    cold = 'Grab a hoodie!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log('cold is: ', cold);
  }
}

getJacket(false);
```

(when this code is executed <code class="highlight__code">cold</code> will be <code>undefined</code>)

## let and const

Variables declared with <code class="highlight__code">let</code> and <code class="highlight__code">const</code> stop this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used <code class="highlight__code">var</code>, variables were either scoped globally or locally to an entire function scope.

If a variable is declared using let or const inside a block of code (inside this <code class="highlight__code">{ }</code>), then the variable is stuck in what is known as the 'temporal dead zone' until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

Before running this code with let declarations, what do you think <code class="highlight__code">cold</code> would return.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function getJacket (isCold) {
  if (isCold) {
    let cold = 'Grab a jacket!';
  } else {
    let hot = 'It’s a shorts kind of day.';
    console.log('cold is: ', cold);
  }
}

getJacket(false);
```

(when this code is executed <code class="highlight__code">cold</code> would throw a reference error)

## Rules for using let and const

* Variables declared with <code class="highlight__code">let</code> can be reassigned, but can’t be redeclared in the same scope.

* Variables declared with <code class="highlight__code">const</code> must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

## Use cases

The big question is when should you use let and const? The general rule of thumb is as follows:

* use <code class="highlight__code">let</code> when you plan to reassign new values to a variable
* use <code class="highlight__code">const</code> when you don’t plan on reassigning new values to a variable.

I think you should declare variables that won't change with const because it'll make your code easier to read since you know the variable won't change throughout your program. If you need to update a variable or change it, then use let.

## What about var?

Is there any reason to use var anymore? Maybe.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. I suggest using let and const in place of var, but its up to you.