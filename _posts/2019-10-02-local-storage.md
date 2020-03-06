---
layout: project
title: what is localStorage
date: 2019-10-02 8:00 -0700
meta: localStorage allows you to access a Storage object that allows you to store key-value pairs that are a string in your browser. localStorage does not have an expiration date.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<code class="highlight__code">localStorage</code> allows you to access an object that lets you store strings with key-value pairs the browser. If you store data that isn't a string it will convert it into a string. <code class="highlight__code">localStorage</code> does not have an expiration date.

## how to access local storage

localStorage uses built in methods to access and modify it. It gets them from the <code class="highlight__code">Storage</code> object.

### add items

The <code class="highlight__code">localStorage.setItem()</code> method allows you to add an item to localStorage.

```javascript
localStorage.setItem('isBrianCool', 'yes');
localStorage.isBrianCool // "yes"

localStorage.setItem('isBrianCool', true);
localStorage.isBrianCool // "true"

localStorage.setItem('isBrianCool', 42);
localStorage.isBrianCool // "42"

localStorage.setItem('brian', { 'cool': 'true' });
// huh ?
localStorage.brian // "[object Object]"
```

When storing an object into localStorage the browser will try to convert it into a string that is why we get "[object Object]" instead of the actual object. 

To fix this you will have to use <code class="highlight__code">JSON.stringify(object)</code> and when you want to access it later you would have to use <code class="highlight__code">JSON.parse(object)</code>.


```javascript
let brian = {
  age: 18,
  cool: 'maybe'
}

localStorage.setItem('brian', JSON.stringify(brian));

localStorage.brian
  // "{\"age\":18,\"cool\":\"maybe\"}"
```

Now we can store objects and access them later by using <code class="highlight__code">JSON.parse(object)</code>

```javascript

let brianObj = JSON.parse(brian);

console.log(brianObj);
  // Object { age: 18, cool: "maybe" }
```

### get items

There are two ways to get items you can either use <code class="highlight__code">localStorage.getItem(item)</code> method or access it how you would normally access an object with a key.

```javascript
// storing the value yes inside the property brianIsCool
localStorage.setItem('brianIsCool', 'yes');

// reading the value of brianIsCool
localStorage.brianIsCool;
  // "yes"

localStorage.getItem('brianIsCool');
  // "yes"
```

### remove items

Items are removed by using the method <code class="highlight__code">localStorage.removeItem(item)</code>.

```javascript
// storing the value yes inside the property youAreCool
localStorage.setItem('youAreCool', 'yes');

// removing the value of youAreCool from localStorage
localStorage.removeItem('youAreCool');

localStorage
  // Storage { length: 0 }
```

### remove all items

If you want to clear localStorage you can use <code class="highlight__code">localStorage.clear()</code> method.

```javascript

// storing items into localStorage
localStorage.setItem('niceDay', true);
localStorage.setItem('age', 18);
localStorage.setItem('youAreCool', 'yes');

localStorage
  // Storage { niceDay: "true", age: "18", youAreCool: "yes", length: 3 }

localStorage.clear();

localStorage
  // Storage { length: 0 }
```

## conclusion

The localStorage allows you store data that will never disappear from the browser unless the user does it manually or you do it. 

It can be used for dark/light mode and to create an offline experience.