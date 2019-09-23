---
layout: project
title: what is the Fibonacci Sequence
date: 2019-09-16 8:00 -0700
meta: The Fibonacci Sequence is a series of numbers. To find the next number in the series you will have to find the sum of the last two numbers before it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

If you make the width of the boxes the Fibonacci Sequence you will get this spiral.

<div class="center">
  <img src="{{ site.baseurl }}/images/fibonacci-sequence/fibonacci.png" alt="fibonacci sequence spiral" title="fibonacci sequence spiral">
</div>

The <code class="highlight__code">Fibonacci Sequence</code> can be found in nature.

## what is the Fibonacci Sequence

The <code class="highlight__code">Fibonacci Sequence</code> is a series of numbers. 

The sequence goes like this

0, 1, 1, 2, 3, 5, 8, 13, 21, 34...


To find the next number in the <code class="highlight__code">Fibonacci Sequence</code> you will have to find the sum of the two numbers before it.


## example
 
How to find the 4th number in the <code class="highlight__code">Fibonacci Sequence</code>. When looking for a number it starts from 0 instead of 1 so the 0th number is 0 and the 4th number is 3. 

0, 1, 1, 2, 3

```javascript
1 + 2 // 3
```
The 4th number is equal to three because two numbers before it are 1 and 2.


## how to implement using JavaScript
 
To implement the <code class="highlight__code">Fibonacci Sequence</code> I will be using an iterative solution with a for loop.

```javascript
function fib(n){
  // starting point of the
  // Fibonacci Sequence
  let arr = [0, 1];

  for (let i = 2; i <= n; i++){
    // push a number to the array
    arr.push(arr[i - 2] + arr[i -1]);
  }

  // return the number in the array at the index given
 return arr[n]
}
```
The function takes in a number and returns the number in the Fibonacci Sequence in that position.

The function creates an array that holds the Fibonacci Sequence by repeatedly adding the last two numbers in the array and pushing that to the array.

It will repeat until the array includes the index of, n, which is passed to the function as an argument.

The function will return the nth position of the array. 

```javascript
fib(4); // 3
```
 
## conclusion
 
<code class="highlight__code">Fibonacci Sequence</code> can be found in nature.