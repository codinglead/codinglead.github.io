---
layout: project
title: using JSON.stringify with values that are not JSON-safe
date: 2020-03-29 9:00 -0700
meta: When using JSON.stringify you will most likely run into the issue of having some properties that are not JSON-safe.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

When using <code class="highlight__code">JSON.stringify()</code> you will most likely run into the issue of having some properties that are not JSON-safe.

When running JSON.stringify on an object you can declare a <code class="highlight__code">.toJSON()</code> method on it that returns a JSON-safe version of the object.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var includesUnsafeJSON = {
  b: undefined,
  c: [1,2,3],
  d: function () { return 'hi' }
};

includesUnsafeJSON.toJSON = function() {
  // only have the 'c' property
  return { c: this.c };
};

JSON.stringify(includeUnsafeJSON);
// "{"c":[1,2,3]}"
```

<code class="highlight__code">JSON.stringify()</code> takes in a optional second argument known as replacer. The passed in argument can be an <code class="highlight__code">Array</code> or <code class="highlight__code">Function</code>. It is used to tell <code class="highlight__code">JSON.stringify()</code> what properties to include.

If an <code class="highlight__code">Array</code> was passed in it will only include the properties with the key values in the array.

If a <code class="highlight__code">Function</code> was passed in it will only include the properties that the value was returned. If you don't want to include a property return undefined.

<p class="highlight__file-desc">JavaScript</p>

```javascript
var obj = {
  a: '32',
  b: 32,
  c: [0, 1, 2]
};

JSON.stringify(obj, ['a', 'b']);
//"{"a":"32","b":32}"

// passed in arguments are key, value
JSON.stringify(obj, function (k, v) {
  if (k !== 'b') {
    return v;
  }
});
// "{"a":"32","c":[0,1,2]}"
```