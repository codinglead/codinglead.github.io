---
layout: project
title: what is localStorage
date: 2019-10-02 8:00 -0700
updated: 2021-10-12 09:49 -0700
meta: localStorage allows you to store and access strings in your browser.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

<code class="highlight__code">localStorage</code> allows you to store and access strings in your browser. If data that isn't a string is stored it will convert it into a string. 

<code class="highlight__code">localStorage</code> does not have an expiration date.

### get and set items

There are two ways to get items 

* <code class="highlight__code">localStorage.getItem(item)</code>
* <code class="highlight__code">localStorage.item</code>

<code class="highlight__code">localStorage.setItem(name, item)</code> method allows you to set an item in <code class="highlight__code">localStorage</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
localStorage.setItem('theme', 'dark');
localStorage.getItem('theme') // "dark"

localStorage.setItem('theme', 'light');
localStorage.theme // "light"

localStorage.setItem('favoriteFruit', 'oranges');
localStorage.favoriteFruit // "oranges"

localStorage.setItem('brian', { cool: true });
localStorage.brian // "[object Object]"
// huh ?
```

When storing an object into localStorage the browser will try to convert it into a string that is why we get <code class="highlight__code">"[object Object]"</code>.

To fix this you will have to use <code class="highlight__code">JSON.stringify(object)</code> before storing into <code class="highlight__code">localStorage</code>.

To access it later you would have to use <code class="highlight__code">JSON.parse(object)</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const brian = {
  age: 18,
  cool: 'maybe'
}

localStorage.setItem('brian', JSON.stringify(brian));
JSON.parse(localStorage.brian);
// { age: 18, cool: "maybe" }
```

### remove items

Items are removed by using <code class="highlight__code">localStorage.removeItem(item)</code> method.


<p class="highlight__file-desc">JavaScript</p>

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

<p class="highlight__file-desc">JavaScript</p>

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

<code class="highlight__code">localStorage</code> allows you store data in a browser. 

It can be used to persist a theme and to create an offline experience.