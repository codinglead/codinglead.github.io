---
layout: project
title: shadowing objects properties in javascript
date: 2020-03-14 3:00 -0700
meta: when creating a property on a object that has the same property name on its prototype it will shadow it.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://brianmunoz.co/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

When creating a property on an object that has the same property name on its prototype chain it will <code class="highlight__code">shadow</code> the property on its prototype. This means that the property defined on the object will always be found first instead of looking through the prototype looking for the property.

<p class="highlight__file-desc">JavaScript</p>

```javascript
let myName = {
  name: 'Brian'
}

// make the 'myName' object be in the prototype of
// 'yourName'

let yourName = Object.create(myName);

yourName.name; // Brian

yourName.name = 'Daniel';

yourName.name; // Daniel
```

When creating the new property 'name' on the <code class="highlight__code">yourName</code> object it <code class="highlight__code">shadows</code> the 'name' property on the prototype.