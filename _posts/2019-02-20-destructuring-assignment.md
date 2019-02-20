---
layout: project
title: Destructuring assignment
date: 2019-02-20 13:35 -0700
meta: JavaScript has destructuringd asssignment that makes it possible to assign multiple variables to elements of an array or properties of an object. It is very useful when you are trying to assign multiple variables to values of an array or object
pic: images/javascript.png
imgAlt: the JavaScript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

JavaScript has <span class="highlight__code">destructuringd asssignment</span> that makes it possible to assign multiple variables to elements of an array or properties of an object. It is very useful when you are trying to assign multiple variables to values of an array or object.

## Syntax

Destructuring assignment syntax is very similar to how you would define an array literal. The main difference is that on the left side you define variable names for values you want to unpack from an array or object.

<p class="highlight__file-desc">JavaScript</p>
```javascript
  // Array literal assignment
  let numbers = [0, 2, 3, 4];

  // destructuring syntax
  let [firstNumber, secondNumber, thirdNumber, fourthNumber] = numbers;


  console.log(firstNumber, secondNumber, thirdNumber, fourthNumber);
 // 0 2 3 4
```

Destructuring for arrays

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let numbers = [0, 2, 3, 4];

  let [firstNumber, secondNumber, thirdNumber, fourthNumber] = numbers;
  console.log(firstNumber, secondNumber, thirdNumber, fourthNumber);
  // 0 2 3 4
```

Destructuring for objects

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let myDog = {
    name: 'Lanky',
    color: "orange"
  }

  let {name, color} = myDog;
  console.log(name, color);
  // Lanky orange
```

**note** The reason why the variable names are set to the property name is because destructuring retrieves the property names and expects to set them to that variable name. You can change the variable name to what you want and there is an example below on how to do that.

Assigning new variable names to destructuring for objects

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let myDog = {
    name: 'Lanky',
    color: "orange"
  }

  let {name: myDogName, color: myDogColor} = myDog;
  console.log(myDogName, myDogColor);
  // Lanky orange
```

You can use destructuring with a variable declared with var, let or const, I just decided to use let.

## Limitations

Destructuring is not supported for some browsers.

A solution to have a wider browser support would be to use a transpiler like [babel](https://babeljs.io/) on your javascript files.

## Examples

### Array Destructuring

Assign variables seperate from variable declaration

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let name, anotherName;
  let names = ['Daniel', 'Brian'];
  ​
  [name, anotherName] = names;
  ​
  console.log(name, anotherName);
 // Daniel Brian
```

Having default values in case the value unpacked from an array is undefined.

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let names = ['Daniel'];

  let [name = 'Daniel', anotherName = 'Brian'] = names;
  console.log(name, anotherName);
  // Daniel Brian
```

Swapping two variable values

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let favoriteNumber = 42;
  let leastFavoriteNumber = 3;

  console.log(favoriteNumber, leastFavoriteNumber);
  // 42 3
  [favoriteNumber, leastFavoriteNumber] = [leastFavoriteNumber, favoriteNumber];

  console.log(favoriteNumber, leastFavoriteNumber);
  // 3 42
```

Using what a function returns if its an array.

<p class="highlight__file-desc">JavaScript</p>
```javascript
  function getMeSomeNumbers () {
    return [7, 42];
  }
  let [firstNumber, secondNumber] = getMeSomeNumbers();
  console.log(firstNumber, secondNumber);
  // 7 42
```

Ignore values of arrays or return array values of a function if you dont want to assign them to variables using <span class="highlight__code">,</span>

<p class="highlight__file-desc">JavaScript</p>
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

Assign the rest of an array to a variable using <span class="highlight__code">...yourVariableName</span>

<p class="highlight__file-desc">JavaScript</p>
```javascript
  function getMeSomeNumbers () {
    return [7, 42, 100, 1, 12];
  }
  let [,favoriteNumber, anotherNumber, ...newNumbers] = getMeSomeNumbers();
  console.log(favoriteNumber, anotherNumber, newNumbers);
  // 42, 100, [1, 12]
```

### Object Destructuring

Assign variables seperate from variable declaration

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let name, age;

  ({name, age} = {name: 'Daniel', age: 22});
  console.log(name, age);
  // Daniel 22
```

**Note** When you want to assign variables seperate from variable declarations, You have to have the parenthesis in the assignment or else it won't work.

Providing default values in case the value unpacked from an object is undefined.

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let me = {age: 22};
  let {name='Daniel', age} = me;
  console.log(name, age);
  // Daniel 22
```

Assign new variable names and provide default values in one line

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let me = {age: 22};
  let {name: myName = 'Daniel', age: myAge = 23} = me;
  console.log(myName, myAge);
  // Daniel 22
```

Assign the rest of an objects properties to a variable using <span class="highlight__code">...yourVariableName</span>

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let {name, age, ...bio} = {name: 'Daniel', age: 22, favoriteColor: 'blue', coolNumber: 5, github: 'planeswalker1'};
  console.log(name, age, bio);

```
Combine both array and object destructuring to set nested values to variables.

<p class="highlight__file-desc">JavaScript</p>
```javascript
  let people = [
    { id: 1, name: 'Daniel'},
    { id: 2, name: 'Brian'},
    { id: 3, name: 'Angel'},
    { id: 4, name: 'David'}
  ];

  const [,, { name:friend }] = people;
  console.log(friend)
  // Angel
```


## Conclusion

<span class="highlight__code">Destructuring assignment</span> is very useful when you are trying to pass the elements of an array or properties of an obect to variables, and set nested values to variables.
