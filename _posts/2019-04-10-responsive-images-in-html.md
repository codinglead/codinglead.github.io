---
layout: project
title: Responsive Images in HTML
date: 2019-04-10 12:20 -0700
meta: In this blog I'll introduce the concept of responsive images, images that work well on devices with widely differing screen sizes, and resolutions, and how to implement them on the web using the picture element and srcset attribute.
pic: images/html-logo.svg
imgAlt: the html5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

In this blog I'll introduce the concept of responsive images, images that work well on devices with widely differing screen sizes, and resolutions, and how to implement them on the web using the picture element and srcset attribute.

## objective

To learn:
* why responsive images are important
* What the art direction problem is and show a solution
* What the resolution switching problem is and show a solution

## Why responsive images matter

When adding images on a website it is sometimes a bad idea to display a large image on a screen smaller than the size it was meant for. Doing so can waste a user's data. Also, some mobile users don't want to waste bandwidth by downloading a large image intended for a desktop, when a smaller image would do for their device. An ideal solution would be to have multiple images available and serve the appropriate size depending upon the devices accessing the data on the website. This is known as the art direction problem.

To make this more complicated, some devices have high resolution screens that need larger images than you might expect them to need, to display nicely. This is essentially the same problem as art direction, but in a slightly different way. This is known as the resolution switching problem.

You might think that vector images would solve these problems, and they do sometimes. They are both small in file size and scale well, and you should use them wherever possible. while they are great for logos and patterns, it's almost impossible to make a vector-based image with the detail that you'd find in a photo.

## What is the art direction problem

The art direction problem is when you want to change an image displayed to fit different display sizes. For example, if a large landscape shot with a person in the middle is shown on a website when viewed on a desktop browser, then shrunk down when the website is viewed on a mobile browser, it will look bad as the person will be hard to see and the height will be too tall. It would probably be better to show a smaller image on mobile, which shows the person zoomed in.

## A solution to the art direction problem

It would be nice if we can serve the appropriate image size depending upon the devices accessing the data on the website. The <code class="highlight__code">&lt;picture&gt;</code> element allows us to implement just this kind of solution. Like <code class="highlight__code">&lt;video&gt;</code> and <code class="highlight__code">&lt;audio&gt;</code>, The <code class="highlight__code">&lt;picture&gt;</code> element is a wrapper containing several <code class="highlight__code">&lt;source&gt;</code> elements that provide several different images for the browser to choose between, followed by an <code class="highlight__code">&lt;img&gt;</code> element to act like a fallback.

<p class="highlight__file-desc">Example of using the picture element to display different images for different display sizes</p>

```html
<picture>
  <source media="(max-width: 799px)" srcset="lucas-640w.png">
  <source media="(min-width: 800px)" srcset="lucas-1280w.png">
  <img src="lucas-1280w.png" alt="Lucas posing for a smash intro">
</picture>
```

What this means:

* The <code>&lt;source&gt;</code> elements include a <code class="highlight__code">media</code> attribute that contains a <strong>media condition</strong> (describes a possible size that the screen can be in.), these conditions are tests that decide which image is shown. The first one that returns true will be displayed. In this case, If the display width is <code>799px</code> wide or less, the first <code class="highlight__code">&lt;source&gt;</code> element's image will be displayed. If the viewport width is <code>800px</code> or more, it'll be the second one.
* The <code class="highlight__code">srcset</code> attributes contain the path to the image to display.
* In all cases, you must provide an <code class="highlight__code">&lt;img&gt;</code> element, with <code class="highlight__code">src</code> and <code class="highlight__code">alt</code> attributes, right before <code class="highlight__code">&lt;/picture&gt;</code>, otherwise no images will appear. This provides a default case that will apply when none of the media conditions return true, and a fallback for browsers that don't support the <code class="highlight__code">&lt;picture&gt;</code> element. In this example you could actually remove the second <code class="highlight__code">&lt;source&gt;</code> element since its the same as the fallback option.

The <code class="highlight__code">lucas-640w.png</code> image is <code class="highlight__code">93KB</code>, whereas the <code class="highlight__code">lucas-1280w.png</code> image is <code class="highlight__code">324KB</code>. If this was a page that had many pictures on it, using this technique could save users a lot of data.

## What is the resolution switching problem

In the resolution switching problem we want to display identical images, just larger or smaller depending on the device resolution.

## A solution to resolution switching problem

We can use the <code class="highlight__code">srcset</code> attribute on <code class="highlight__code">&lt;img&gt;</code> to add additional source images along with a resolution display size to help the browser pick the right one.

<p class="highlight__file-desc">Example of using the srcset attribute to display different images for different display resolutions</p>

```html
<img srcset="lucas-640w.png 1x,
             lucas-1280w.png 2x,
             lucas-1920w.png 3x"
     src="lucas-640w.png" alt="Lucas posing for a smash intro">
```

What this means:

* The <code class="highlight__code">srcset</code> attribute contains the path to the image to display and a resolution display size.

The browser finds out what resolution the display is, and serves the most appropriate image referenced in the <code class="highlight__code">srcset</code>. So if the device accessing the page has a standard/low resolution display, the <code>lucas-640w.png</code> image will be loaded (you can omit the <code>1x</code>, since it is implied). If the device has a high resolution of two device pixels per CSS pixel, the <code>lucas-1280w.png</code> image will be loaded and so on.

## conclusion

Responsive images are important because it can save a user some data and display an image optimally. There are two main problems when implementing responsive images: art direction and resolution switching. <strong>Art direction</strong> is when you want to change an image displayed to fit different display sizes. A solution to the art direction problem is to use the <code class="highlight__code">&lt;photo&gt;</code> element containing <code class="highlight__code">&lt;source&gt;</code> elements for different display sizes. This allows us to display the optimal image on both wide screen and narrow screen displays. In <strong>resolution switching</strong>, we want to display identical images, just larger or smaller depending on the device resolution. A solution to this is to make use of the <code class="highlight__code">srcset</code> attribute on <code class="highlight__code">&lt;img&gt;</code> elements. This lets us provide several additional source images along with hints to help the browser pick the right one depending on the user's device resolution.