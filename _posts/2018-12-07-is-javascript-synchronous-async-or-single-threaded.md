---
layout: project
title: is JavaScript synchronous, async, or single threaded
date: 2018-12-07 10:58 -0700
meta: JavaScript has synchronous, async, and a single thread but it is a singled threaded synchronous language with capability to do asynchronous calls.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Javascript is a single-threaded, synchronous language. A function that takes a long time to run will cause the page to become unresponsive. Javascript does have functions that act asynchronously such as <span class="highlight__code">fetch</span>.

It is single threaded which means it doesn't have any other processes going on at a single time. It is also Synchronous which means it can't move on until something is done.

<p class="highlight__file-desc">
 JavaScript
</p>

```javascript
function hang(seconds) {
    // gets the current time in ms
    const now = new Date().getTime();

    while(new Date().getTime() < now + (seconds * 1000)) {
        /* do nothing */ 
    }
}
```

The while loop in the hang function makes the page unresponsive because it is taking up the only thread JavaScript has.

This is terrible because if you have a lot of functions that take more then a second to run the page will be really slow and bad.

This problem is the reason that JavaScript has asynchronous functions.

## asynchronous JavaScript

Some terms you may have heard of.

* execution stack
* browser apis
* function queue
* event loop

### execution stack

The execution stack run synchronously and it is whatever JavaScript is running. It determines what order things are ran. If you have a bunch of functions on the stack it pops them off one by one then runs them.

### browser APIs

A bunch of functions that is provided by the browser .

![window object]({{ site.baseurl }}/images/window-object.png)

If we call one of the browser APIs it is ran separately.

Some browser APIs are <span class="highlight__code">setTimeout()</span>, <span class="highlight__code">setInterval()</span>.

### function queue

Queues up functions that are ready to be ran. These functions are pulled from the browser API.

### event loop

When the execution stack is cleared it says I need to do something else then the event loop tells the execution stack that there is a function waiting on the function queue then puts one on the stack.

## how it works all together

<p class="highlight__file-desc">
    JavaScript
</p>

```javascript
setTimeout(function () {
    console.log('ran after 1 second');
}, 1000);
```

After the JavaScript is executed it console logs something after 1 second of waiting. once it is executed the <span class="highlight__code">setTimeout</span> function is sent to the browser API to run the function then it will wait for the time that was given in this case it is 1 second then the function will get to sent to the function queue then the event loop will send it back to the execution stack to be ran.


```javascript
function printOne() {
 console.log('1');
}

function printTwo() {
 console.log('2');
}

function printThree() {
 console.log('3');
}

setTimeout(printOne, 1000);
setTimeout(printTwo, 0);
printThree();

// 3 2 1
```

It prints 3 2 1 because it has asynchronous functions. It run the <span class="highlight__code">setTimeout()</span> then it is sent to the browser api and waits 1000 seconds. Then it runs the second <span class="highlight__code">setTimeout()</span> which it is sent to the browser api and waits 0 seconds. Then <span class="highlight__code">printThree()</span> which just runs and prints 3 first. after the 0 seconds passes by the <span class="highlight__code">setTimeout()</span> for <span class="highlight__code">printTwo()</span> gets sent to the function queue then it waits for the execution stack to be empty then event loop sends the first function in the queue to the execution stack to be runned and prints two after three. after <span class="highlight__code">printOne()</span> <span class="highlight__code">setTimeout()</span> waits 1 second it gets sent to the function queue then the event loop waits for the execution stack to be empty then sends the <span class="highlight__code">printOne()</span> function to the execution stack and prints 1 after 2.


## how to control the flow of asynchronous calls

callbacks.

controls flow with asynchronous calls

executes a function once asynchronous call returns a value.

```javascript
// simulate fetching data from db
function getUserFromDataBase(callback) {
 setTimeout(function () {
   callback(
     {firstName: 'Brian', lastName: 'Munoz'})
 }, 1000);
}

// query database for user and greet
// the user
function greetUser() {
 // how we do it synchronous
 // this might never return a value..
 let user = getUserSync();
 console.log('hi, ' + user.firstName);

 // async

 getUserFromDataBase(function (userObject) {
   console.log('hi, ' + userObject.firstName)
 });
}

greetUser();

```

## reasons to use promises

* alleviates 'callback hell'
* allows you to write code that assumes a value is returned within a success function
* only needs a single error handler

## conclusion

JavaScript is a singled threaded synchronous language with capability to do asynchronous calls.