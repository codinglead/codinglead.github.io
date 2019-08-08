---
layout: project
title: What is Destructuring Assignment?
date: 2019-08-07 17:00 -0700
meta: Destructuring assignment is a special JavaScript syntax that makes it possible to assign multiple variables to elements of an array or properties of an object. It is very useful when you are trying to assign multiple variables or get values of an array and/or object.
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

<code class="highlight__code">Destructuring assignment</code> is a special JavaScript syntax that makes it possible to assign multiple variables to elements of an array or properties of an object. It is very useful when you are trying to assign multiple variables or get values of an array and/or object.

## Syntax

Destructuring assignment syntax is very similar to how you would define an array. The main difference is that on the left side you define variable names for values you want to 'unpack' (take out) from an array or object.

<p class="highlight__file-desc">Comparison of Array literal assignment and Destructuring syntax</p>
```javascript
  // Array literal assignment
  let numbers = [0, 2, 3, 4];

  // destructuring syntax
  let [firstNumber, secondNumber, thirdNumber, fourthNumber] = numbers;


  console.log(firstNumber, secondNumber, thirdNumber, fourthNumber);
 // 0 2 3 4
```

<p class="highlight__file-desc">Destructuring for arrays: </p>
```javascript
  let numbers = [0, 2, 3, 4];

  let [firstNumber, secondNumber, thirdNumber, fourthNumber] = numbers;
  console.log(firstNumber, secondNumber, thirdNumber, fourthNumber);
  // 0 2 3 4
```

<p class="highlight__file-desc">Destructuring for objects: </p>
```javascript
  let myDog = {
    name: 'Lanky',
    color: "orange"
  }

  let {name, color} = myDog;
  console.log(name, color);
  // Lanky orange
```

**Note**: The reason why the variable names are set to the property name in objects is because destructuring retrieves the property names and expects to set them to that variable name. You can change the variable name to what you want and there is an example below on how to do that.

<p class="highlight__file-desc">Assigning new variable names to destructuring for objects: </p>
```javascript
  let myDog = {
    name: 'Lanky',
    color: "orange"
  }

  let {name: myDogName, color: myDogColor} = myDog;
  console.log(myDogName, myDogColor);
  // Lanky orange
```

You can use destructuring with a variables declared with <code class="highlight__code">var</code>, <code class="highlight__code">let</code> or <code class="highlight__code">const</code>, I just decided to use <code class="highlight__code">let</code>.

## Limitations

Destructuring is not supported in some browsers.

A solution to have a wider browser support would be to use a transpiler like [babel](https://babeljs.io/) on your javascript files.

## Examples

### Array Destructuring



<p class="highlight__file-desc">Assign variables seperate from variable declaration: </p>
```javascript
  let name, anotherName;
  let names = ['Daniel', 'Brian'];
  ​
  [name, anotherName] = names;
  ​
  console.log(name, anotherName);
 // Daniel Brian
```

<p class="highlight__file-desc">Having default values in case the value 'unpacked' from an array is undefined: </p>
```javascript
  let names = ['Daniel'];

  let [name = 'Daniel', anotherName = 'Brian'] = names;
  console.log(name, anotherName);
  // Daniel Brian
```

<p class="highlight__file-desc">Swapping two variable values: </p>
```javascript
  let favoriteNumber = 42;
  let leastFavoriteNumber = 3;

  console.log(favoriteNumber, leastFavoriteNumber);
  // 42 3
  [favoriteNumber, leastFavoriteNumber] = [leastFavoriteNumber, favoriteNumber];

  console.log(favoriteNumber, leastFavoriteNumber);
  // 3 42
```

<p class="highlight__file-desc">Using what a function returns if it's an array: </p>
```javascript
  function getMeSomeNumbers () {
    return [7, 42];
  }
  let [firstNumber, secondNumber] = getMeSomeNumbers();
  console.log(firstNumber, secondNumber);
  // 7 42
```

<p class="highlight__file-desc">Ignore values of arrays or return array values of a function if you dont want to assign them to variables using <span class="highlight__code">,</span>: </p>
```javascript
  let names = ['Brian', 'Daniel'];
  let [,myName] = names
  console.log(myName);
  // Daniel
  function getMeSomeNumbers () {
    return [7, 42];
  }
  let [,favoriteNumber] = getMeSomeNumbers();
  console.log(favoriteNumber);
  // 42
```

<p class="highlight__file-desc">Assign the rest of an array to a variable using <span class="highlight__code">...yourVariableName</span>: </p>
```javascript
  function getMeSomeNumbers () {
    return [7, 42, 100, 1, 12];
  }
  let [,favoriteNumber, anotherNumber, ...newNumbers] = getMeSomeNumbers();
  console.log(favoriteNumber, anotherNumber, newNumbers);
  // 42, 100, [1, 12]
```

### Object Destructuring

<p class="highlight__file-desc">Assign variables seperate from variable declaration: </p>
```javascript
  let name, age;

  ({name, age} = {name: 'Daniel', age: 23});
  console.log(name, age);
  // Daniel 23
```

**Note**: When you want to assign variables seperate from variable declarations, You have to have the parenthesis around the assignment or else it won't work.


<p class="highlight__file-desc">Providing default values in case the value unpacked from an object is undefined: </p>
```javascript
  let me = {age: 23};
  let {name='Daniel', age} = me;
  console.log(name, age);
  // Daniel 23
```

<p class="highlight__file-desc">Assign new variable names and provide default values in one line: </p>
```javascript
  let me = {age: 23};
  let {name: myName = 'Daniel', age: myAge = 23} = me;
  console.log(myName, myAge);
  // Daniel 23
```

<p class="highlight__file-desc">Assign the rest of an objects properties to a variable using <span class="highlight__code">...yourVariableName</span>: </p>
```javascript
  let {name, age, ...bio} = {name: 'Daniel', age: 23, favoriteColor: 'blue', coolNumber: 5, github: 'planeswalker1'};
  console.log(name, age, bio);
// Daniel 23 {favoriteColor: 'blue', coolNumber: 5, github: 'planeswalker1'}
```

<p class="highlight__file-desc">Combine both array and object destructuring to set nested values to variables: </p>
```javascript
  let people = [
    { id: 1, name: 'Daniel'},
    { id: 2, name: 'Brian'},
    { id: 3, name: 'Angel'},
    { id: 4, name: 'David'}
  ];

  const [,, { name: friend }] = people;
  console.log(friend);
  // Angel
```


## Conclusion

<span class="highlight__code">Destructuring assignment</span> is very useful when you are trying to pass the elements of an array or properties of an obect to variables, and set nested values to variables.
