---
layout: project
title: spread syntax
date: 2019-02-15 5:43 -0700
meta: JavaScript has the Spread Syntax that allows you to expand arrays or other iterable objects. It is very useful when you are trying to pass the elements of an array as single arguments to a function
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---


JavaScript has <span class="highlight__code">Spread Syntax</span> which allows you to expand arrays or other iterable objects. It is very useful when you are trying to pass elements of an array as separate arguments to a function.


## Syntax

for array literals

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arrOfNumbers = [0, 2, 3, 4];

let newArray = ["five", ...arrOfNumbers, 10]

console.log(newArray);
 // ["five", 0, 2, 3, 4, 10]
```

for function calls

<p class="highlight__file-desc">JavaScript</p>

```javascript
let Arr = [3, "five"];

myFunction(...Arr)
```

## Examples

When using the <span class="highlight__code">Spread Syntax</span> you will no longer need to use apply when you have an array of values that you want as arguments for a function call.

with apply

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arrOfNumbers = [0, 2, 3, 4];

const biggestNumber = Math.max.apply(null, arrOfNumbers);
console.log(biggestNumber);
```

with Spread Syntax

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arrOfNumbers = [0, 2, 3, 4];
​
const biggestNumber = Math.max(...arrOfNumbers);
​
console.log(biggestNumber);
 // 4
```

JavaScript <span class="highlight__code">Spread Syntax</span> goes only 1 level when making a copy which means that when objects in a clone array are changed it will alter the objects in the original arr.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arr1 = [{ "name": "brian" }];
let arr2 = [...arr1];

arr2[0].name = "Joe";

console.log(arr1[0])
 // {name: "Joe"}
console.log(arr2[0])
 // {name: "Joe"}
```

JavaScript <span class="highlight__code">Spread Syntax</span> allows you to concat arrays.


without Spread Syntax
<p class="highlight__file-desc">JavaScript</p>

```javascript
let arr1 = [0, [1, 2],"apple"];
let arr2 = ["three", 4, "string"];

arr1 = arr1.concat(arr2);

console.log(arr1);
// [0, [1, 2], "apple", "three", 4, "string"]
```

with spread syntax

<p class="highlight__file-desc">JavaScript</p>

```javascript
let arr1 = [0, [1, 2],"apple"];
let arr2 = ["three", 4, "string"];

arr1 = [...arr1, ...arr2];

console.log(arr1);
// [0, [1, 2], "apple", "three", 4, "string"]
```

## Conclusion

The <span class="highlight__code">Spread Syntax</span> is very useful when you are trying to pass the elements of an array as single arguments to a function. It ultimately replaces apply and replaces multiple function on the Array.prototype.


