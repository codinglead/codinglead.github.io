---
layout: project
title: logical operators in javascript
date: 2018-12-18 2:46 -0700
meta: Logical operators are used when doing comparisons of boolean values. if Booleans are being used it will either return true or false. If non-boolean values are used for operands if will return one of the specified operands. The logical operators look like (||) or (&&).
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Logical operators are used when doing comparisons of boolean values. If Booleans are being used as operands it will either return true or false. If non-boolean values are used for operands if will return one of the specified operands. The logical operators look like <code class="highlight__code">(||)</code>, <code class="highlight__code">(&&)</code> and <code class="highlight__code">(!)</code>.

## The OR and AND operators are short circuited

When the logical operators <code class="highlight__code">(||)</code> and <code class="highlight__code">(&&)</code> are being evaluated it tests for a "short circuit" which means as soon as one of the value is true for the OR operator or if one the value evaulate to false for the AND operator it will stop and return the value.

* <span class="highlight__code">false && (anything)</span> is short-circuit evaluated to false.
* <span class="highlight__code">true || (anything)</span> is short-circuit evaluated to true.

**anything** means any value.


## how logical AND works (&&)

The <span class="highlight__code">&&</span> will return the first expression if it converts to false otherwise the second expression will be returned.

```javascript
let ex1 = false && false; // return false
let ex2 = "" && false; // return ""
let ex3 = false && ""; // return false
let ex4 = (1 === 3) && false; // return false
let ex5 = 2 && ""; // return ""
let ex5 = 2 && 3; // return 3
```

<span class="highlight__code">ex1</span> returned false because the first expression evaluated to a falsy value. <span class="highlight__code">ex2</span> returned a empty string because the first expression evaluated to a falsy value. <span class="highlight__code"> ex3</span> and <span class="highlight__code">ex4</span> returned false because the first expression evaluated to a falsy value. <span class="highlight__code">ex5</span> returned a empty string because the first expression evaluated to true so it had to evaulate the second expression and it was false. <span class="highlight__code">ex6</span> returned 3 because the first expression and second expression evaluated to true so it returned the last expression that was evaluated.


## how logical OR works (||)

The <span class="highlight__code">||</span> will return the first expression if it converts to true otherwise the second expression will be returned.

```javascript
let ex1 = false || false; // return false
let ex2 = true || false; // return true
let ex3 = "Lime" || "Lemon"; // return "Lime"
let ex4 = "Lemon" || ""; // return "Lemon"
let ex5 = (1 === 3) || false; // return false
let ex6 = 2 || ""; // return 2
```

<span class="highlight__code">ex1</span> returned false because the first and second expression evaluated to falsy values. <span class="highlight__code">ex2</span> returned true because the first expression evaluated to a truthy value. <span class="highlight__code">ex3</span> returned "Lime" because the first expression evaluated to a truthy value. <span class="highlight__code">ex4</span> returned "Lemon" because the first expression evaluated to a truthy value. <span class="highlight__code">ex5</span> returned false because the first and second expression evaluated to falsy values. <span class="highlight__code">ex6</span> returned 2 because the first expression evaluated to a truthy value.

## how logical NOT works (!)

If will convert the expression into a boolean if it isn't already a boolean. It will convert the value into the boolean value.

```javascript
let ex1 = !true; // false
let ex2 = !false; // true
let ex3 = !'dragon'; // false
```

## conclusion

Now you know how the AND, OR and NOT logical operators work. You are 1 step closer to being a javascript master. These are tools that will enhance your ability to write complex code.