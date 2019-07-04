---
layout: project
title: Rest Operator In JavaScript
date: 2019-07-03 21:00 -0700
meta: The rest operator actually uses the same syntax as the spread operator. It's usage determines whether you're using it as the spread or rest operator.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

The rest operator actually uses the same syntax as the spread operator: <code class="highlight__code">...</code>. It's usage determines whether you're using it as the spread or rest operator.

## Refresher on the Spread operator

The spread operator allows you to pull elements out of an array (split the array into a list of its elements) or pull the properties and values out of an object.

<p class="highlight__file-desc">Here's the spread operator used on an array:</p>

```javascript
  const oldArray = [1, 2, 3];
  const newArray = [...oldArray, 4, 5]; // [1, 2, 3, 4, 5]; 
```

<p class="highlight__file-desc">Here's the spread operator used on an object:</p>

```javascript
  const oldObject = {name: 'Daniel'};
  const newObject = {...oldObject, age: 22}; // {name: 'Daniel', age: 22} 
```

The spread operator is useful for cloning arrays and objects. Since both are stored by reference (a reference is created to the object/array in memory), copying them safely (i.e. not making another reference) can be tricky. With the spread operator you have an easy way of creating a clone of the object or array.

## Using the Rest Operator

The Rest operator allows you to have an almost unlimited amount of arguments as an array.

<p class="highlight__file-desc">Here's the rest operator used to turn arguments into an array:</p>

```javascript
function addAllNumbers(...numbers) {
  return numbers.reduce(function (previousNumber, currentNumber) {
    return previousNumber + currentNumber;
  });
}

console.log(addAllNumbers(1, 2, 3, 4, 5)); // 15
```

## Conclusion

Some might argure that the rest operator is not as useful as the spread operator, but it provides a nice way to turn arguments of a function into an array.
