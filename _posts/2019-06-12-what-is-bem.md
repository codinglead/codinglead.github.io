---
layout: project
title: What is BEM
date: 2019-06-12 21:13 -0700
meta: Keeping track of every single HTML element might become difficult. There's this CSS naming convention called block element modifier, also known as BEM. What it means is there are three different CSS classes of tags.
pic: images/css-logo.svg
imgAlt: the CSS3 text logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---

Keeping track of every single HTML element might become difficult. There's this CSS naming convention called block element modifier, also known as BEM. What it means is there are three different CSS classes of tags.

<!-- ==== -->
<!-- GOAL -->
<!-- ==== -->

## Goal

Follow along to learn what BEM is and how to use it

<!-- === -->
<!-- CSS -->
<!-- === -->

## CSS

A Quick refresher on what css is:

<p class="highlight__file-desc">CSS Explanation</p>

* Cascading Style Sheet
* Determines how HTML elements will be displayed
* Three ways to declare:
  * Inline
  * Internal (within HEAD)
  * External (within linked stylesheet)

The preferred way to write CSS is external because it's cleaner. Meaning that it allows you to use the same stylesheet for every singe page in your application. That way you don't have to cut and paste into every head of every page or even add css into every single tag that is created, which would be very messy and unmaintainable.

<!-- =========== -->
<!-- WHAT IS BEM -->
<!-- =========== -->

## What is BEM?

BEM is a CSS naming convention, short for block element modifier. What it means is there are three different CSS classes of tags.

<p class="highlight__file-desc">BEM Explanation</p>

* Block, Element, Modifier naming convention (BEM)
    * Block (parent level) elements get normal names (ex: button)
    * Modifier elements get double dashes (ex: button--red, button--inline)
    * Element (child level) elements get double underscores (ex: button__text)

There is **Block** (parent level) elements that get normal class names. Something like <code class="highlight__code">button</code>. You might have a dedicated CSS block to a button. But what if you wanted to change what that button looks like? You'd have **modifier** elements which get double dashes. Some examples are <code class="highlight__code">button--red</code>, <code class="highlight__code">button--inline</code>, <code class="highlight__code">button--wide</code>. It builds off the <code class="highlight__code">button</code> class. <code class="highlight__code">Button</code> define how it looks like and maybe the modifier only changes a property like: <code>color</code>, <code>width</code>, or <code>height</code>. Then you have **element** (child level) elements which are within block level elements. Something like <code class="highlight__code">button__text</code> or something within that button. With BEM it is very easy to see what you need to change and what that would change on the final HTML page. For example, if you change a block level like a <code class="highlight__code">button</code> it would change every single button on the page. If you wanted to change only one button you would create a modifier for that button, if it didn't exist. This way you stay organized and you dont accidentally change a line of css and it affects more than you want it to affect. This is just one design scheme of naming classes.

<!-- ====================== -->
<!-- DO YOU HAVE TO USE BEM -->
<!-- ====================== -->

## Do you have to use BEM?

No, you don't. Its a scheme that is very popular among front end developers. But you should have some sort of system of organization, otherwise code starts to become unmaintainable. You might change one line of css which will change some other tag on a different page that you forgot that you assigned to this tag. Definitely have some sort of system of organization so you can better maintain your page and so other people who start working can better maintain your page.

<!-- ========== -->
<!-- CONCLUSION -->
<!-- ========== -->

## Conclusion

BEM is a popular CSS naming convention. There are three different CSS classes of tags. There are: **Block** (parent level) elements that get normal names (ex: button), **Modifier** elements that get double dashes (ex: button--red, button--inline), and **Element** (child level) elements that get double underscores (ex: button__text). This is one design scheme and you don't have to use it, but make sure to have a system of organization or else code starts to become unmaintainable.