---
layout: project
title: the good parts of float and clear
date: 2018-11-14 6:30 -0700
meta: floats and clear is still important to know because you never know when you are going to be working on legacy code.
pic: images/css-logo.png
imgAlt: the CSS3 logo
tags: ["html", "css"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

<span class="highlight__code">flexbox</span> and <span class="highlight__code">css grid</span> are the new boys in the block but you will never know when you are going to need to know how <span class="highlight__code">float</span> and <span class="highlight__code">clear</span> works.

<span class="highlight__code">float</span> and <span class="highlight__code">clear</span> is not that difficult once you understand what is happening. It is Important to know because you never know when you are going to be working on legacy code.

## basic understanding

It looks like when you float an element, all other elements that are not floated wrap around the floated element.

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__basic-understanding.png" alt="box floated to the left">
</p>

the code for the image above.

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

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__basic-understanding2.png" alt="box floated to the left">
</p>

You can think of float as a element that is floating in the air and everything but text goes underneath it.

How would we fix it that the red box doesn't go underneath the blue box.

The answer is <span class="higlight__code">clear</span>.

<p class="highlight__file-desc">CSS</p>

```css
.red {
  clear: both;
}
```

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__fix-float.png" alt="box floated to the left">
</p>

When we add <span class="highlight__code">clear: both</span> it moves the element out of where the floating elements are.

*note: we could use clear: left; or clear: right but its always better to use clear: both;*


## practical example of float and clear

Float will be most likely used when trying to make columns.

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__practical-example.png" alt="box floated to the left">
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

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__practical-example2.png" alt="box floated to the left">
</p>

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

<p class="text-center">
  <img width="400" src="{{site.baseurl}}/images/float-and-clear__practical-example3.png" alt="box floated to the left">
</p>

Once we add <span class="highlight__code">clear: both</span> it moves the element out of where the floating elements are.

## why you shouldn't use float and clear

There is no practical reason to use float and clear. use flexbox when trying to achieve the layouts you could get from float and clear.

## conclusion

Float and clears are outdated css and should never be used. It is important to know how they work because you will see a lot of it in old legacy code. Use flex when trying to achieve layouts float gives you.
