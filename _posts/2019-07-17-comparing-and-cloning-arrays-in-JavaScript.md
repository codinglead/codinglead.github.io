---
layout: project
title: comparing and cloning arrays in JavaScript
date: 2019-07-17 23:00 -0700
meta: Unlike other data types you might have seen so far, it is not possible to correctly compare two arrays by using the === or == comparison operator. Two primitive data type values can be equal, but no two arrays are the same, even if they have the same elements inside.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---


Unlike other data types you might have seen so far, it is not possible to correctly compare two arrays by using the <code class="highlight__code">===</code> or <code class="highlight__code">==</code> comparison operator. Two primitive data type values can be equal, but no two arrays are the same, even if they have the same elements inside. A <strong>primitive</strong> is a data type that is not an object and has no methods and an <strong>element</strong> is a value in an array. For example, <code class="highlight__code">'abc'</code> is the same as any other <code class="highlight__code">'abc'</code>, but <code class="highlight__code">['a','b','c']</code> is not the same as <code class="highlight__code">['a','b','c']</code> using the <code class="highlight__code">===</code> or <code class="highlight__code">==</code> comparison operator.

## Goal

Follow along to learn:

* How to compare arrays and why comparing arrays don't work as expected
* How to clone arrays with <code class="highlight__code">.slice()</code>
* How JavaScript stores arrays

## Comparing arrays

If you need to compare the elements of two arrays, one way to accomplish this is to transform the arrays into strings using the <code class="highlight__code">.toString()</code> method on each and comparing the return values. This will work when the elements are the following data types: strings, numbers, and booleans.

Try this in the web developer tools console:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let a = ['a','b','c'];
  let b = ['a','b','c'];
  a.toString() === b.toString(); // true
```

The reason why we can't normally compare arrays is because of how the equality comparison check works with arrays(and also objects). Normally with primitive data types you can just compare the values. Since arrays are not primitives, the equality check compares the reference of the array(what the array is pointing to). Two arrays would only be equal if they have the same reference.

We can test this in the console:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let a = ['a','b','c'];
  let b = a;
  a === b; // true
  
  let names = ['Angel', 'Brian', 'Daniel'];
  let fruits = ['apples', 'bananas', 'carrots'];
  names === fruits; // false
```

## Cloning Arrays

Here is another example where arrays may work differently than we expect.

Suppose we have an array, and we want to keep it in its original form, but we also need to change it. We might have one variable hold the original array and another variable with a copy of the same array that we can change.

Let's try this in the console:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let originalArray = [1,2,3,4,5];
  let cloneArray = originalArray;
  cloneArray.push(6);
  cloneArray; // [1, 2, 3, 4, 5, 6]
```

What does <code class="highlight__code">originalArray</code> look like now? We haven't changed it, so we may assume it would have its original value of <code class="highlight__code">[1,2,3,4,5]</code>. But if we check it again in the console, we see:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  originalArray; // [1, 2, 3, 4, 5, 6]
```

The array is stored in memory, and the two variables <span class="highlight__code">originalArray</span> and <span class="highlight__code">cloneArray</span> hold a reference to that array and can be thought of as a pointer. A <strong>pointer</strong> references an object in memory but is not the object itself. Therefore, as the array is changed, the new value is reflected in all of the variables that reference it.

One way to clone an array without making another reference is to create a new variable set to a new array. One way to do this is by using the <code class="highlight__code">.slice()</code> method:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let cloneArray = originalArray.slice();
```

This ensures that the new array really is an entirely separate array, instead of another reference to the original array. For more details on how the <span class="highlight__code">.slice()</span> method works, check out <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">MDN's Javascript documentation</a> on the Array.prototype.slice method.

## Conclusion

Even though it is not possible to correctly compare two arrays by using the <code class="highlight__code">===</code> or <code class="highlight__code">==</code> comparison operator, there are work arounds to compare values. One way to accomplish this is to transform the arrays into strings using the <code class="highlight__code">.toString()</code> method on each and comparing the return values. Note, this will work when the elements are the following data types: strings, numbers, and booleans. Also, remember that JavaScript stores arrays by reference. This means that when a variable is set to an array, a reference is created to that array in memory, but is <strong>not</strong> the array itself. Therefore, as the array is changed, any new value is reflected in all of the variables that reference it. One way to clone an array without making another reference is to create a new variable set to a new array using the <code class="highlight__code">.slice()</code> method. This ensures that the new array really is an entirely separate array, instead of another reference to the original array.