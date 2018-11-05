---
title: javascript fetch reddit api part 1
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

[starting files for part 1](https://github.com/colorlessenergy/fetch-reddit/tree/starter-files)

First step is creating the HTML form.

The form will:

* have a label to tell the user what to input
* take user input
* have a button to submit the data

<p class="highlight__file-desc">
HTML
</p>
```html
<form class="form">
    <p class="title">
      <label for="entry">search reddit</label>
    </p>
    <div>
      <input type="text" name="entry" id="entry" placeholder="search....">
      <button>submit</button>
    </div>
</form>
```

This form will be used to take user input.

In [part2](../part2) we will use the function <span class="highlight__code">fetch()</span> to hit a endpoint and receive json data from the reddit api.