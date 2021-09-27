---
layout: project
title: what is a factorial
date: 2019-09-16 8:00 -0700
meta: Factorial can be used to find out how many ways to order a set of things. it looks like this 7!.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---
 
Factorial can be used to find out how many ways to order a set of things.

It looks like this <code class="highlight__code">n!</code>.
 
## how to find a factorial
 
The formula to find a factorial is n! = n * (n - 1) * (n - 2) until n is zero.

You can also think of it as the product of all whole numbers of one through n.
 
Find 7! which is read as seven factorial.
 
```javascript
1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040 // 7!
```
 
## an implementation using JavaScript
 
a way to implement finding a factorial is to use recursion. 

Every time the function call itself it will multiply the current number passed in by what is returned from the additional function calls.

The additional function calls will have the current number subtracted by one passed in.

The function will stop calling repeatedly once the number passed in is one or zero.

<p class="highlight__file-desc">JavaScript</p>

```javascript
function factorial (number) {
  // How the function will exit out of the
  // recursion
  if (number === 1 || number === 0) {
    return 1;
  }
 
  // This will endlessly call the function
  // until the condition is met
  return number * factorial(number-1);
}
```

passing in 4 as an argument to the factorial function.
 
<p class="highlight__file-desc">JavaScript</p>

```javascript
// 4 * (4 - 1) * (3 - 1) * (2 - 1) * (1)
// 4 * 3 * 2 * 1 
factorial(4); // 24
```
 
## conclusion
 
<code class="highlight__code">Factorial</code> can be useful when wanting to know how many different ways something can be ordered or organized. 