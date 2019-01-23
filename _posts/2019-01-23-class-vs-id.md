---
layout: project
title: Class vs Id
date: 2019-01-23 10:46 -0700
meta: Let's briefly note the difference between assigning a class to an HTML tag and assigning an id to an HTML tag.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---

Both classes and ids can be targeted by CSS rules (classes with a <span class="highlight__code">.</span> and id's with a <span class="highlight__code">#</span> symbol). For example, both paragraph tags below are styled the same, though one is referenced by class and the other by id.

<p class="highlight__file-desc">HTML</p>

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Some Exciting Blue Text</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <p class="blue">This text will appear blue.</p>
  <p id="line2">This text will also be blue. </p>
</body>
</html>
```

<p class="highlight__file-desc">CSS</p>

``` css
/* main.css */
.blue {
  color: blue;
}

#line2 {
  color: blue;
}
```

<p class="highlight__file-desc">This will output:</p>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Some Exciting Blue Text</title>
  <style>
    .blue {
      color: blue !important;
    }

    #line2 {
      color: blue;
    }
  </style>
</head>
<body>
  <p class="blue">This text will appear blue.</p>
  <p id="line2">This text will also be blue. </p>
</body>
</html>

The important difference is that <strong>ids are unique</strong>, while <strong>classes are not unique</strong>. We can use the same class on multiple elements, while id's must be unique to a single element on the page. Id's may appear to work even when duplicated on the same page, but duplicate id's will lead to inconsistent behavior and difficult-to-find bugs.

If in doubt, use a class.