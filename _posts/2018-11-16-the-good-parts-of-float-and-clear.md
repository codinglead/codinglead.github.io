---
layout: project
title: the good parts of float and clear
date: 2018-11-14 6:30 -0700
updated: 2020-08-12 11:19 -0700
meta: floats and clear are important to know because you never know when you are going to be working on legacy code.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["html", "css"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /css/:title
---

<span class="highlight__code">flexbox</span> and <span class="highlight__code">css grid</span> are the new boys in the block but you will never know when you are going to need to know how <span class="highlight__code">float</span> and <span class="highlight__code">clear</span> work.

<span class="highlight__code">float</span> and <span class="highlight__code">clear</span> are not difficult once you understand what is happening.

## basic understanding

It looks like when you <span class="highlight__code">float</span> an element, all other elements that are not floated wrap around the floated element.

<div class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__basic-understanding.png" alt="box floated to the left">
</div>

The code for the image above.

<p class="highlight__file-desc">HTML</p>

```html
<div class="blue"></div>
<div class="red">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat atque sapiente explicabo dicta, vitae minima neque error necessitatibus quibusdam. Quasi possimus voluptatum culpa repudiandae nam dolor ipsum, eaque asperiores.
</div>
```
<p class="highlight__file-desc">CSS</p>

```css
.blue {
  background-color: blue;
  float: left;
  width: 100px;
  height: 100px;
}

.red {
  background-color: red;
  width: 200px;
}
```

It is a good assumption that everything wraps around floated element but really only text wraps around the floated element and everything else goes underneath it.

When giving the blue box opacity you can see the red box is underneath the blue one. Only the text is wrapped around the floated element.

*Note: using the same code from the previous one just adding a opacity to the blue box.*

<p class="highlight__file-desc">CSS</p>

```css
.blue {
  background-color: rgba(0, 0, 255, 0.5);
}
```

<div class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__basic-understanding2.png" alt="box floated to the left">
</div>

You can think of float as a element that is floating in the air and everything but text goes underneath it.

How would we fix it so that the red box doesn't go underneath the blue box?

The answer is <span class="highlight__code">clear</span>.

<p class="highlight__file-desc">CSS</p>

```css
.red {
  clear: both;
}
```

<div class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__fix-float.png" alt="box floated to the left">
</div>

When we add <span class="highlight__code">clear: both</span> it moves the element out of where the floating elements are.

*note: we could use clear: left; or clear: right but its always better to use clear: both;*


## practical example of float and clear

Float will be most likely used when trying to make columns.

<p class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__practical-example-1.png" alt="two boxes one floated to the left and right">
</p>

The code for above picture. This is the most common case you will find people using float.

<p class="highlight__file-desc">HTML</p>

```html
<div class="blue">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat atque sapiente explicabo dicta, vitae minima neque error necessitatibus quibusdam. Quasi possimus voluptatum culpa repudiandae nam dolor ipsum, eaque asperiores.
</div>

<div class="red">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex placeat atque sapiente explicabo dicta, vitae minima neque error necessitatibus quibusdam. Quasi possimus voluptatum culpa repudiandae nam dolor ipsum, eaque asperiores.
</div>
```

<p class="highlight__file-desc">CSS</p>

```css
div {
  width: 300px;
}

.blue {
  background-color: blue;
  float: left;
}

.red {
  background-color: red;
  float: right;
}
```

You might be wondering what if we put another element that isn't floated what will happen?

<p class="highlight__file-desc">HTML</p>

```html
<section>
  <p>some other text goes here..</p>
</section>
```

<div class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__practical-example-2.png" alt="text between two floated elements">
</div>

The section we add just goes in the middle how would we fix this ?

The answer is to use <span class="highlight__code">clear</span>

<p class="highlight__file-desc">CSS</p>

```css
section {
  /* for visual */
  background-color: orange;
  /* when we add clear: both it moves the element out of where the floating elements are. */
  clear: both;
}
```

Once we add <span class="highlight__code">clear: both</span> it moves the element away from the floating elements.

<div class="text-center">
  <img src="{{site.baseurl}}/images/float-and-clear__practical-example-3.png" alt="element moved away from the floating elements">
</div>

## why you shouldn't use float and clear

There is no practical reason to use float and clear. use flexbox when trying to achieve the layouts you could get from float and clear.

## conclusion

Use flex instead of float and clear because they are outdated. It is important to know how they work because you will see a lot of it in old legacy code. 