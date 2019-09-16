---
layout: project
title: what is a factorial
date: 2019-09-16 8:00 -0700
meta: Factorial is used to find out how many ways you can order a set of things. It has an exclamation point right after a number. looks like this n!.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---
 
Factorials is used to find out how many ways you can order a set of things. It has an exclamation point right after a number. looks like this <code class="highlight__code">n!</code>.
 
## how to find a factorial
 
The formula to find a factorial is n! = n * (n - 1) * (n-2)... until n is zero. You can also think of it as the product of all whole numbers of 1 through n.
 
## example of a factorial
 
How to find 4! which is read as "four factorial".
 
```javascript
1 x 2 X 3 X 4 = 24 // 4!
```
 
## how to implement using JavaScript
 
To implement a factorial I will be using recursion. Recursion is when a function call itself.
 
```javascript
function factorial (n) {
  // How the function will exit out of the
  // recursion
  if (n === 1 && n === 0) {
    return 1;
  }
 
  // This will endlessly call the function
  // until the condition is met
  return n * factorial(n-1);
}
```
 
When using recursion you need to have an exit condition because it will run forever and break your program.
 
## example using the factorial function
 
Finding the <code class="highlight__code">factorial</code> using the function.

When the JavaScript is executed It will get the current number (which is given by passing it into the function) and  multiply it to itself minus 1. 

It will keep repeating until the current number is one or zero. If the current number is one or zero it will multiply by 1.
 
```javascript
// 4 * (4 - 1) * (3 - 1) * (2 - 1) * (1)
// 4 * 3 * 2 * 1 
factorial(4) // 24
```
 
## conclusion
 
<code class="highlight__code">Factorials</code> can be useful when wanting to know how many different ways something can be ordered or organized. It is also found in many areas of mathematics.