---
layout: project
title: concatenate string javascript
date: 2019-04-19 1:00 -0700
published: false
meta: concatenating strings are really useful when you are trying to embed a variable inbetween two strings.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

concatenate strings in JavaScript is useful because it puts together two different strings.

## how to concatenate strings

You can do it by using the add operator in JavaScript.

```javascript
let string1 = 'hello, ';
let string2 = 'I am Brian.';

console.log(string1 + string2);
  // "hello, I am Brian"
```

This is a very basic example, you would most likely be embedding a variable with the concatenation.

```javascript
function greet(name) {
  return 'Hello, ' + name + ' how are you ?';
}

let sayHi = greet('Brian');

console.log(sayHi);
  // "Hello, Brian how are you ?"
```

You could also use the built in function <span class="highlight__code">str1.concat(str2)</span> to put two strings together.

```javascript
let string1 = 'Javascript is ';
let string2 = 'awesome!!';

let concatStrings = string1.concat(string2);
  // "Javascript is awesome!!"
```
concatenating strings this way is better in a way that your are explicitly telling the reader that you putting two strings together while the other way gives you more freedom by allowing you to add variables into a string but sacrificing the readability.

## conclusion

If you are planning to put a variable into the concatenation of strings use the operator <span class="highlight__code">+</span> otherwise use the <span class="highlight__code">str1.concat(str2)</span> method to put two strings together.