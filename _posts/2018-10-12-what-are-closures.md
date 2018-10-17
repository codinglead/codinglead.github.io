---
layout: project
title: what are closures
date:  2018-10-12 4:22 -0700
meta: A explanation on what closures are in javascript. A closure is a function that refer to variables declared by a parent function. This is only possible because of lexical scoping.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

## closures definition

A closures is when a function can remember its lexical scope even if the function is executed outside its lexical scope.
which means if a function is executed outside where it is declared and is using a variable declared around the function,
this is a closure. If you have been using JavaScript for a week you have already used a closure. I encourage you guys to run the code snippets in the console!

In more simpler terms a closure is a function that refers to a variables declared by a parent function. If you still don't understand look at the examples then come back to this!

## closures example

A example of a closure is when a function is called as a callback to another function see the example below.
which means that the function is called through another function because it is passed through as a parameter and remembers what foo is even though it is in another scope.

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
 // prints 'foo'
}
```

The JavaScript timer function could be used as a closure. The setTimeout is called a second later by the time it is called you would think that the function is done executing and removed. Since closures exist bar is still stored in memory until it is not needed anymore.


```javascript
function foo () {
 var bar = "bar";

 setTimeout(function () {
   console.log(bar);
 }, 1000)
};

foo();
 // prints 'bar'
```

After executing foo then after the setTimeout is done running it will still remember the value of the variable bar.

The event handler callback is enclosed in a function which means it remembers anything declared and defined around it. this is a closure because you never know when the button is going to be clicked and it will always print out 'bar' since it has a reference to it. To remove the closure you would have to unbind the event listener.

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

Another example would be using for loops. the example below will print 6, 6 times in the console since it is only using one
variable. There are a lot of ways to fix this but, in my opinion the best way to fix this is use 'let' instead of 'var' in the for loop. This is the easiest way to fix it.

```javascript
for (var i = 0; i <= 5; i++) {
 setTimeout(function () {
   console.log("i: " + i);
   // print i: 6, 6 times
 }, i*1000);
}
```

Best solution is using let. I would even say
to just use 'let' instead of 'var' in every for loop!

```javascript
for (let i = 0; i <=5; i++) {
 setTimeout(function () {
   console.log("i: " + i);
     // print i: + the current i
 }, i*1000);
}
```
```javascript
function makeHelloFunction() {
 let message = 'hello, world';

 function logMessage() {
   console.log(message)
 }

 return logMessage;
}
```

Within <span class="highlight__code">makeHelloFunction()</span> we are creating the message variable, and using the variable within a new function and returning that function.

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
// hello, world
```

If we run <span class="highlight__code">makeHelloFunction()</span> it will declare the variable message it will create the function <span class="highlight__code">logMessage()</span> and return the <span class="highlight__code">logMessage()</span>.

What will happen if we ran <span class="highlight__code">sayHello()</span> ?

It will log hello, world. this is possible because of lexical scoping.



```javascript
function makeFunctionArray() {
 let arr = [];

 for (var i = 0; i < 5; i++) {
   arr.push(function () {
     console.log(i)
   })
 }

 return arr;
}

let arrWithNumbers = makeFunctionArray();
```

We have a function that creates a array. In the for loop the initializer is declared with the <span class="highlight__code">var</span> keyword. pushed a function that console logs i to the array 5 times returns the array then we store the array in a variable.

now lets try calling one of the functions.

```javascript
function makeFunctionArray() {
 var arr = [];

 for (var i = 0; i < 5; i++) {
   arr.push(function () {
     console.log(i)
   })
 }

 return arr;
}

var arrWithNumbers = makeFunctionArray();

arrWithNumbers[0]();
 // 5
```
It is 5 because of closures. to fix this use the variable declaration <span class="highlight__code">let</span> or <span class="highlight__code">const</span> or encapsulate it into a IIFE.

now what is a iife ?

## immediately invoked function expression

* A function expression that get invoked immediately
* It creates a closure.
* Doesn't add to or modify the global object


this is how a iife looks like
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

use this so it doesn't poluate the global scope or you want to create a closure.

now let's fix the problem we had earlier
```javascript
function makeFunctionArray() {
 var arr = [];

 for (var i = 0; i < 5; i++) {
   arr.push(
     (function (x) {
       return function () {
         console.log(x)
      }
     })(i)
   );
 }

 return arr;
}

var arrWithNumbers = makeFunctionArray();

console.log(arrWithNumbers[0]();)
 // 0
```

we have a function that returns another anonymous function that console logs x. x is the parameter that is taken from the parent function. the child still has reference to the scope of the parent. primitives are passed by value and not by reference it actually creates a new value for every iteration of the function and creates a closure from the parent to the child.

## conclusion

Closures aren't anything new and you probably have been using this without even realizing. Now these aren't happy accidents
anymore you should be able to recognize and use them to your advantage.

A closure is a function that refer to variables declared by a parent function.
This is only possible because of lexical scoping.

happy coding!


