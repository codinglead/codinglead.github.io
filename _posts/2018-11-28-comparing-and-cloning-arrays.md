---
layout: project
title: comparing and cloning arrays
date: 2018-11-28 3:31 -0700
meta: Unlike other data types you might have seen so far, it is not possible to compare two arrays by using the === comparison operator. In JavaScript, two <strong>primitive</strong> data type values can be equal, but no two arrays are the same, even if they have the same elements inside.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---


Unlike other data types you might have seen so far, it is not possible to compare two arrays by using the <code class="highlight__code">===</code> comparison operator. In JavaScript, two <strong>primitive</strong> data type values can be equal. A primitive is a data type that is not an object and has no methods. For example, <code class="highlight__code">'abc'</code> is the same as any other <code class="highlight__code">'abc'</code>, but no two arrays are the same, even if they have the same <strong>elements</strong> inside. An element is a value in an array.

## Goal

Follow along to learn how to:

* compare arrays.
* clone arrays.
* how JavaScript references arrays in memory

## Comparing arrays

If you need to compare the <em>elements</em> of two arrays, one way to accomplish this is to transform the arrays into strings using the <code class="highlight__code">.toString()</code> method on each and comparing the return values. This will work when the elements are the following data types: strings, numbers, and booleans.

Try this in the web developer tools console:

<p class="highlight__file-desc">JavaScript</p>

```javascript
> let a = [1,2,3]
> let b = [1,2,3]
> a === b
false
> a.toString();
"1,2,3"
> a.toString() === b.toString();
true
```

## Cloning Arrays

Here is another scenario where arrays may operate differently than we expect.

Suppose we have an array, and we want to keep it in its original form, but we also need to change it. We might have one variable hold the original array and another variable with a copy of the same array that we can change.

Try this in the console:

<p class="highlight__file-desc">JavaScript</p>

```javascript
>let originalArray = [1,2,3,4,5]
>originalArray
[1, 2, 3, 4, 5]
>let cloneArray = originalArray
>cloneArray
[1, 2, 3, 4, 5]
>cloneArray.push(6)
6
>cloneArray
[1, 2, 3, 4, 5, 6]
```

What does <code class="highlight__code">originalArray</code> look like now? We haven't changed it, so we may assume it would have its original value of <code class="highlight__code">[1,2,3,4,5]</code>. But if we check it again in the console, we see:

<p class="highlight__file-desc">JavaScript</p>

```javascript
>originalArray
[1, 2, 3, 4, 5, 6]
```

In JavaScript, the array is stored in memory, and the two variables <span class="highlight__code">originalArray</span> and <span class="highlight__code">cloneArray</span> are called <strong>pointers</strong>. A pointer references an object in memory but is not the object itself. Therefore, as the array is changed, the new value is reflected in all of the variables that point to it.

The way to clone an array without simply making another pointer is to create a new variable set to a new array:

<p class="highlight__file-desc">JavaScript</p>

```javascript
let cloneArray = originalArray.slice();
```

This ensures that the new array really is an entirely separate entity, instead of simply a pointer to the original array. For more details on how the <span class="highlight__code">.slice()</span> method works, check out <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">MDN's Javascript documentation</a> on the Array.prototype.slice method.

## Conclusion

Even though it is not possible to compare two arrays by using the <code class="highlight__code">===</code> comparison operator, there are work arounds to compare values. One way to accomplish this is to transform the arrays into strings using the <code class="highlight__code">.toString()</code> method on each and comparing the return values. Note, this will work when the elements are the following data types: strings, numbers, and booleans. Also, remember that JavaScript stores arrays by reference. This means that when a variable is set to an array, a pointer is created that references that object in memory, but is not the object itself. Therefore, as the array is changed, any new value is reflected in all of the variables that point to it. The way to clone an array without simply making another pointer is to create a new variable set to a new array using the <code class="highlight__code">.slice()</code> method. This ensures that the new array really is an entirely separate entity, instead of simply a pointer to the original array.