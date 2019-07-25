---
layout: project
title: What is DRY Code
date: 2019-07-24 21:15 -0700
meta: There's a principle in programming called DRY, or Don't Repeat Yourself. It usually means refactoring code by taking something done several times and turning it into a loop or a function
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

There's a principle in programming called DRY, or Don't Repeat Yourself. It usually means refactoring code by taking something done several times and turning it into a loop or a function. DRY code is easy to change, because you only have to make any change in one place.

## Examples of Non-DRY and Dry Code

We can use a loop to execute repeated code

```javascript
  let chips = ['corn', 'pita', 'potato', 'tortilla'];

  // non DRY code
  console.log(chips[0]);
  console.log(chips[1]);
  console.log(chips[2]);

  // DRY code
  for (let i = 0; i < chips.length; i++) {
    console.log(chips[i]);
  }
```

Another example is by taking repetitive bits of code and extracting them into a function. 

```javascript
  let drinks = ['lemonade', 'soda', 'tea', 'water'];
  let food = ['beans', 'chicken', 'rice'];
  //non DRY code
  console.log(drinks[0]);
  console.log(drinks[1]);
  console.log(drinks[2]);
  console.log(drinks[3]);

  console.log(food[0]);
  console.log(food[1]);
  console.log(food[2]);

  // DRY code
  function logItems (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  logItems(drinks);
  logItems(food);
```

"Easy to change" doesn't just mean clean code, if you can't figure out what a variable is for or what a function does based on its name, then it's harder to change it later, when you might not remember exactly how your code works (or when somebody else is trying to change your code).

```javascript
  // non DRY code
  let f = ['bananas', 'dates', 'dried figs', 'oranges'];

  function hi (banana) {
    for (let i = 0; i < banana.length; i++) {
      console.log(banana[i]);
    }
  }

  hi(f);

  // DRY code
  let fruits = ['bananas', 'dates', 'dried figs', 'oranges'];

  function logItems (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  logItems(fruits);
```

Using descriptive variable names make it easier to understand what the variable contains and in turn make it easier to use or change later on.

A good starting naming convention for your variables and functions would be:

* singluar words for variables containing values. i.e: fruit, firstName, favoriteColor
* plural words for variables containing objects or arrays. i.e: fruits, names, myColors
* a description for variables containing functions. ie: logFruits, findPerson, getFavoriteColor

## Conclusion

Whenever you finish writing some code, you should always look back to see if there is any way you can DRY it up, including: using descriptive variable names, taking repetitive bits of code and extracting them into a function or loop.