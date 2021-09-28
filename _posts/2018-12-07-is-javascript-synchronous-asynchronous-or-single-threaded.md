---
layout: project
title: is JavaScript synchronous, asynchronous or single-threaded
date: 2018-12-07 10:58 -0700
updated: 2021-09-28 08:50 -0700
meta: JavaScript is synchronous and single-threaded with capability to do asynchronous calls.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

JavaScript is a single-threaded and synchronous language. There are functions that are asynchronous such as <span class="highlight__code">fetch</span>.

It is single-threaded which means it doesn't have any other processes going on at a single time. It is also synchronous which means it can't move on until something is done.

<p class="highlight__file-desc">JavaScript</p>

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

The execution stack run synchronously and it is whatever JavaScript is running. 

If you have a bunch of functions on the stack it pops them off one by one then runs them.

### browser APIs

A bunch of functions that is provided by the browser.

![window object]({{ site.baseurl }}/images/window-object.png)

If we call one of the browser APIs it is ran separately.

Some browser APIs are <span class="highlight__code">setTimeout()</span> and <span class="highlight__code">setInterval()</span>.

### function queue

Queues up functions that are ready to be ran. These functions are pulled from the browser API.

### event loop

When the execution stack is cleared it says I need to do something else then the event loop tells the execution stack that there is a function waiting on the function queue then puts one on the stack.

## how it works all together

<p class="highlight__file-desc">JavaScript</p>

```javascript
setTimeout(function () {
    console.log('hello');
}, 1000);
```

After the JavaScript is executed it console logs 'hello' after 1 second of waiting. 

what happens when it is executed

* <span class="highlight__code">setTimeout()</span> function is sent to the browser API to run the function
* it will wait the time that was given in this case it is 1 second
* the function will get sent to the function queue
* the event loop will send it back to the execution stack to be ran


<p class="highlight__file-desc">JavaScript</p>

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

the values console logged are 3 2 1 because <span class="highlight__code">setTimeout()</span> is asynchronous.

The first <span class="highlight__code">setTimeout()</span> ran is sent to the browser API and waits 1000 seconds.

Then it runs the second <span class="highlight__code">setTimeout()</span> which it is sent to the browser API and waits 0 seconds.

<span class="highlight__code">printThree()</span> is ran and console logs 3. 

After the 0 seconds passes the <span class="highlight__code">printTwo()</span> is sent to the function queue then the event loop waits for the execution stack to be empty then sends the <span class="highlight__code">printTwo()</span> function from the function queue to the execution stack.

After 1 second passes <span class="highlight__code">printOne()</span> is sent to the function queue then the event loop waits for the execution stack to be empty then sends the <span class="highlight__code">printOne()</span> function from the function queue to the execution stack.


## how to control the flow of asynchronous calls

callbacks can be used to control the flow of asynchronous calls.

<p class="highlight__file-desc">JavaScript</p>

```javascript
// simulate fetching data from a database
function getFruitFromDatabase (callback) {
    setTimeout(function () {
        callback(
            null,
            { name: 'orange', color: 'orange' }
        );
    }, 1000);
}

getFruitFromDatabase((error, fruit) => {
    if (error) return console.error(error);

    console.log(`the fruit name is ${ fruit.name } and the color is ${ fruit.color }.`);
});
```

promises can also be used.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const getFruitFromDatabase = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ name: 'orange', color: 'orange' });
    }, 1000);
});

getFruitFromDatabase
    .then(fruit => {
        console.log(`the fruit name is ${ fruit.name } and the color is ${ fruit.color }.`);
    })
    .catch(error => {
        console.error(error);
    });
```

## reasons to use promises

* it keeps your asynchronous code clean and prevents 'callback hell'
* only needs a single error handler

## conclusion

JavaScript is synchronous and single-threaded with capability to do asynchronous calls.