---
layout: project
title: logical operators in JavaScript
date: 2018-12-21 4:00 -0700
updated: 2022-09-19 09:30 -0700
meta: Logical operators are used when doing comparisons of boolean values. if Booleans are being used it will either return true or false. If non-boolean values are used for operands if will return one of the specified operands. The logical operators look like (||), (&&) and (!).
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Logical operators are used when doing comparisons of boolean values. If Booleans are being used as operands it will either return true or false. If non-boolean values are used for operands if will return one of the specified operands. The logical operators look like <code class="highlight__code">(||)</code>, <code class="highlight__code">(&&)</code> and <code class="highlight__code">(!)</code>.

## The OR and AND operators are short circuited

When logical operators <code class="highlight__code">(||)</code> and <code class="highlight__code">(&&)</code> are being evaluated it tests for a "short circuit" which means as soon as one of the values is true for the OR operator or if one the values is false for the AND operator it will stop and return the value.

* <code class="highlight__code">false && (anything)</code> is short-circuit evaluated to false.
* <code class="highlight__code">true || (anything)</code> is short-circuit evaluated to true.

**anything** means any value.

## how logical AND works (&&)

<code class="highlight__code">(&&)</code> will return the first expression if it is a falsy value otherwise the second expression will be returned.

<div class="highlight__file-desc">JavaScript</div>

```javascript
false && false; // false
"" && false; // ""
false && ""; // false
(1 === 3) && false; // false
// first expression evaluated to a falsy value
```

<code class="highlight__code">2 && ""; // ""</code>

First expression evaluated to true so it had to evaulate the second expression and it was false.

<code class="highlight__code">2 && 3; // 3</code>

First expression and second expression evaluated to true so it returned the last expression that was evaluated.

## how logical OR works (||)

<code class="highlight__code">(||)</code> will return the first expression if its a truthy value otherwise the second expression will be returned.

<div class="highlight__file-desc">JavaScript</div>

```javascript
(1 === 3) || false; // false
// first and second expression are falsy values

false || undefined; // undefined
// first and second expression are falsy values

true || false; // true
// first expression evaluated to a truthy value

"Lime" || "Lemon"; // "Lime"
// first expression evaluated to a truthy value

false || 1000; // 1000
// second expression evaluated to a truthy value
```

## how logical NOT works (!)

Logical <code class="highlight__code">NOT</code> converts the expression into a boolean and inverts the boolean.

<div class="highlight__file-desc">JavaScript</div>

```javascript
!true; // false
!false; // true
!'dragon'; // false
```

## conclusion

<code class="highlight__code">(&&)</code> and <code class="highlight__code">(||)</code> operators are used in conditions.