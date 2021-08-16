---
layout: project
title: what are closures
date:  2019-5-15 4:22 -0700
updated: 2020-08-16 08:08 -0700
meta: A closure is when a inner function remembers its lexical scope even if it is executed outside of it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

## closures definition

A closures is when a inner function can remember its lexical scope even if the function is executed outside of it.

Which means if a function is executed outside where it is declared and is using a variable declared around the function it will remember it.

## closures example

A example of a closure is when a function is used as a callback to another function.

```javascript
function bar () {
var foo = "foo";
function baz () {
  console.log(foo)
}
  bam(baz);
}

function bam (baz) {
  baz();
  // remembers what 'foo' was
}

bar();
// prints 'foo'
```

When executing bam inside bar it passes in baz as a parameter. baz is executed inside a different scope, it still has reference to foo because of a closure that was made.

The JavaScript timer function could be used as a closure.

```javascript
function foo () {
  var bar = "bar";
  setTimeout(function () {
    console.log(bar);
  }, 1000);
}

foo();
// prints 'bar'
```

The setTimeout is called a second later by the time it is called you would think that the function is done executing. Since closures exist bar is still stored in memory until it is not needed anymore. Once foo is executed and a second later passes it will still remember the value of the variable bar and print 'bar'.

The event handler callback is another example of closure because it is enclosed in a function which means it remembers anything declared and defined around it. 

```javascript
function foo () {
var bar = "bar";

document.querySelector(".btn")
  .addEventListener(function () {
    console.log(bar)
  })
}

foo()
// prints 'bar'
// the value of bar is still remembered
```

This is a closure because you never know when the button is going to be clicked and it will always print out 'bar' since it has a reference to it. To remove the closure you would have to unbind the event listener.

Another example would be using a setTimeout inside a for loop. The example below will print 6, 6 times in the console since the for loop is creating and referencing to only one one variable. 

```javascript
for (var i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log("i: " + i);
    // print i: 6, 6 times
  }, i*1000);
}
```

There are a lot of ways to fix this, a way to fix this is use 'let' instead of 'var' in the for loop.

'let' is block scope and doesn't pollute the global scope. This means the variable 'i' will not be on the global scope.

```javascript
for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log("i: " + i);
    // print i: + the current i
  }, i*1000);
}

console.log(i);
// Uncaught ReferenceError: i is not defined
```
variables are still remembered if they are reference even after the function is returned.

```javascript
function makeHelloFunction() {
  let message = 'hello, world';

  function logMessage() {
    console.log(message)
  }

  return logMessage;
}
```

Within <span class="highlight__code">makeHelloFunction()</span> we are creating the <span class="highlight__code">message</span> variable, and using the variable within a new function that is being returned.

in the function <span class="highlight__code">logMessage()</span> no where in it message is defined. It gets it from the parent function.


```javascript
function makeHelloFunction() {
  let message = 'hello, world';

  function logMessage() {
    console.log(message)
  }

  return logMessage;
}

let sayHello = makeHelloFunction();
sayHello();
// 'hello, world'
```

If we run <span class="highlight__code">makeHelloFunction()</span> it will declare the variable <span class="highlight__code">message</span> it will create the function <span class="highlight__code">logMessage()</span> and return it.

It still prints 'hello, world' because a closure was made.

```javascript
function makeFunctionArray() {
  let arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

let arrWithNumbers = makeFunctionArray();
```

We have a function that creates an array. In the for loop the initializer is declared with the <span class="highlight__code">var</span> keyword. A function is pushed into an array that console logs i then the array is returned.

Now lets try calling one of the functions in the array we just created.

```javascript
function makeFunctionArray() {
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
}

  return arr;
}

var arrWithNumbers = makeFunctionArray();

arrWithNumbers[0]();
// 5
```
What ? it prints 5?

It prints 5 because a closure was made to reference the i that was created in the for loop. It does this because the i isn't block scoped. Only 1 variable is created and only 1 variable is referenced.

```javascript
for (var i = 0; i < 5; i++) {
 // do stuff
}
```

the JavaScript compiler will compile the code to look like this.

```javascript
var i;

for (i = 0; i < 5; i++) {
 // do stuff
}
```

The declaration of i is moved to the nearest scope.

To fix this use the variable declarations <span class="highlight__code">let</span> or <span class="highlight__code">const</span> or encapsulate it inside a IIFE.

now what is a IIFE ?

## immediately invoked function expression

* A function expression that get invoked immediately
* It creates a closure
* Doesn't add to or modify the global object


This is how a IIFE looks like

```javascript
(function () {
  // this variable will not exist
  // after console.log is executed
  var x = 42;

  console.log('hi')
})();
// will console log hi
```

Why use IIFE?

Use IIFE so your global scope doesn't get polluted or when you want to create a closure.

Now let's fix the problem we had earlier.

```javascript
function makeFunctionArray() {
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(
      (function (x) {
        return function () {
          console.log(x)
        }
      // pass in i as an argument
      })(i);
    );
  }

  return arr;
}

var arrWithNumbers = makeFunctionArray();

console.log(arrWithNumbers[0]();)
// 0
```

A IIFE is created for every iteration of the for loop, it returns an anonymous function that console logs x. x is the parameter that is passed into the parent function which means the child function will be able to use it because it has reference to the scope of the parent function. a new value is created for every iteration that the IFFE is in because primitives are passed by value and not by reference. A closure is created from the parent to the child.

## conclusion

A closure is a function that refer to variables declared by a parent function even when it is executed outside the scope it was created in.