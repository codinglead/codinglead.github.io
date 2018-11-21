---
layout: project
title: why JavaScript methods are useful
date: 2018-11-21 8:25 -0700
meta: You can think of a method as an action that a number, string or object can perform or have taken on it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

## Goal

Follow along to learn what methods are and how they are used.

## Methods

You can think of a method as an action that a number, string or object can perform or have taken on it. There is an important difference between a method and a function. A function is a named block of code that can be invoked from anywhere within the code, but a method can't be invoked unless it's on a number, string or object.

## Methods on numbers

Let's change a number into <span class="highlight__code">exponential notation</span>. Exponential notation is essentially just a way of shortening really long numbers, or really small numbers by removing their zeros. If you're not familiar with exponential notation, here's how it works. Take the number 42.5. In exponential notation, we write it 4.25 * 10. Or take 396.87, in exponential notation, that's 3.9687 * 10<sup>2</sup>. You can also write it as 3.9687e+2.
Exponential notation makes it easy to write very large or very small numbers. For example, 1,000,000,000 becomes 1e+9, and 0.00000005 becomes 5e-8.

We can use JavaScript to easily change numbers into exponential notation by using the <code class="highlight__code">toExponential()</code> method:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(31415.92.toExponential());
"3.141592e+4"
```

You can also go in the other direction, and convert out of exponential notation by using the <code class="highlight__code">toFixed()</code> method:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(3.141e2.toFixed());
"314"
```

(Note here that 3.141e2 means the same thing as 3.141e+2). The <code class="highlight__code">toFixed()</code> method will round to the nearest whole number. Here's how we can tell it how many decimal places to use:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(31.4.toFixed(2));
"31.40"
```

The 2 in the parentheses is an <span class="highlight__code">argument</span> to the <code class="highlight__code">toFixed()</code> method. Arguments provide a bit more information to methods to help them know what they're supposed to do. In this case, the argument is optional. When a method doesn't take an argument, or when the argument is optional and you aren't using it, you still need the parentheses on the end - so you have to write <code class="highlight__code">31.4.toFixed(2)</code>, not <code class="highlight__code">31.4.toFixed</code>.

Here's another method that takes an argument:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log(5.12345.toPrecision(4));
"5.123"
```

You can also call a method on a variable, since the variable is just standing in for the number it represents:

<p class="highlight__file-desc">JavaScript</p>

```javascript
let myNumber = 5.12345;
console.log(myNumber.toPrecision(4));
"5.123"
```

## Methods on strings

You can call methods on strings, just like you can with numbers:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log("bar".toUpperCase());
"BAR"
```

Or even call the method on a variable assigned to a string:

<p class="highlight__file-desc">JavaScript</p>

```javascript
let word = "foo";
console.log(word.concat("bar"));
"foobar"
```

Methods can be chained like this:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log("foo".concat("bar").toUpperCase());
"FOOBAR"
```

The <code class="highlight__code">concat()</code> method (which concatenates, or combines, two strings) returns a string, which then has <code class="highlight__code">toUpperCase()</code> called on it. Then, <code class="highlight__code">toUpperCase()</code> returns the final result.

By the way, here's a nice shortcut for the concat() method:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log("I like " + "coding");
"I like coding"
```

Or with variables:

<p class="highlight__file-desc">JavaScript</p>

```javascript
let sentiment = "I love ";
let animal1 = "dogs";
let animal2 = "cats";

console.log(sentiment + animal1);
"I love dogs"
console.log(sentiment + animal2);
"I love cats"
```

String methods can take numbers as arguments, too:

<p class="highlight__file-desc">JavaScript</p>

```javascript
console.log("Daniel".charAt(4));
"e"
```

Normally the fourth character in the word 'Daniel' would be 'i', but its 'e' here. That's because computers start counting at zero. So "D" is the zeroth letter, and "i" is the third.

## Conclusion

Methods are useful for manipulating strings or numbers. You can think of a method as an action that a number, string or object can perform or have taken on it. There is an important difference between a method and a function. A function is a named block of code that can be invoked from anywhere within the code, but a method can't be invoked unless it's on a number, string or object.