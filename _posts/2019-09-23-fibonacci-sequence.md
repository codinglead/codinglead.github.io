---
layout: project
title: what is the Fibonacci Sequence
date: 2019-09-16 8:00 -0700
updated: 2020-10-01 09:32 -0700
meta: The Fibonacci Sequence is a series of numbers that starts at 0 and 1. The next number in the series is the sum of the last two numbers.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

The <code class="highlight__code">Fibonacci Sequence</code> is a series of numbers. 

The sequence looks like this

0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

To find the next number in the <code class="highlight__code">Fibonacci Sequence</code> you will have to find the sum of the two numbers before it.

To get the 4th number you will have to add 1 and 2 because 1 is the second number and 2 is the third number.

0, 1, 1, 2, <span class="highlight__code">3</span>

## a way to to implement using JavaScript
 
A way to implement the <code class="highlight__code">Fibonacci Sequence</code> is using a for loop that loops to the position you want to find.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function fibonacciSequence (position) {
  // starting point
  let array = [0, 1];

  for (let i = 2; i <= position; i++){
    // add the previous two value of the fibonacci sequence and push it into the array
    array.push(arr[i - 2] + arr[i -1]);
  }

  // return the number in the array at the position passed into the function
  return array[position];
}
```

The function takes in a number and returns the number in the Fibonacci Sequence in that position.

The function creates an array that holds the Fibonacci Sequence by repeatedly adding the last two numbers in the array.

It will repeat until the array includes the index of, position, which is passed to the function as an argument.

The position passed into the function is used to return a element from the array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
fibonacciSequence(4); // 3
```
 
## conclusion
 
This spiral can be made with the <code class="highlight__code">Fibonacci Sequence</code>.

<div class="center background-color-white">
  <img src="{{ site.baseurl }}/images/fibonacci-sequence/fibonacci.png" alt="fibonacci sequence spiral" title="fibonacci sequence spiral">
</div>