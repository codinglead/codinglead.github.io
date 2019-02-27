---
layout: project
title: Divs and spans in HTML
date: 2019-02-27 11:04 -0700
meta: Classes are great for selectively applying styles to certain parts of your web pages. But sometimes you'll have entire sections of your pages that you want to style a certain way, and adding a style to every tag gets annoying. Divs and spans can help.
pic: images/html-logo.svg
imgAlt: the html5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

Classes are great for selectively applying styles to certain parts of your web pages. But sometimes you'll have entire sections of your pages that you want to style a certain way, and adding a style to every tag gets annoying. Divs and spans can help.

<!-- ==== -->
<!-- GOAL -->
<!-- ==== -->

## Goal

Follow along to learn what divs and spans are and how they are used

<!-- ==== -->
<!-- DIVS -->
<!-- ==== -->

## Divs

Here's a new page I made about dogs. Notice how several elements in a row all have the same class:

<p class="highlight__file-desc">dogs.html</p>

``` html
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet" type="text/css" media="all">
    <title>Everything about dogs</title>
  </head>
  <body>
    <h1>Everything about dogs</h1>

    <p>Here is everything you need to know about dogs. First, the important stuff:</p>

    <h2 class="important">Types of dogs</h2>

    <p class="important">There are many types of dogs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <p class="important">Here are some types of dogs:</p>

    <ul class="important">
      <li>German Shepherd</li>
      <li>Chihuahua</li>
      <li>And lots, lots more!</li>
    </uL>

    <h2 class="important">Other important stuff</h2>

    <p class="important">Here is some other really important stuff about dogs. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

    <p>Now, for some less important stuff about dogs.</p>

    <h2 class="unimportant">dogs like to play fetch</h2>

    <p class="unimportant">Little-known fact: dogs like to play hide and seek. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

    <h2 class="unimportant">dogs are not bad</h2>

    <p class="unimportant">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
  </body>
</html>
```

Let's learn a new tag that will simplify all of this: the <span class="highlight__code">div</span> tag.

<p class="highlight__file-desc">dogs.html</p>

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="styles.css" rel="stylesheet" type="text/css">
    <title>Everything about dogs</title>
  </head>
  <body>
    <h1>Everything about dogs</h1>

    <p>Here is everything you need to know about dogs. First, the important stuff:</p>

    <div class="important">
      <h2>Types of dogs</h2>

      <p>There are many types of dogs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <p>Here are some types of dogs:</p>

      <ul>
        <li>German Shepherd</li>
        <li>Chihuahua</li>
        <li>And lots, lots more!</li>
      </uL>

      <h2>Other important stuff</h2>

      <p>Here is some other really important stuff about dogs. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>

    <p>Now, for some less important stuff about dogs.</p>

    <div class="unimportant">
      <h2>dogs like to play fetch</h2>

      <p>Little-known fact: dogs like to play hide and seek. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <h2>dogs are not bad</h2>

      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </body>
</html>
```

Then, we can style entire sections of the page using selectors for <span class="highlight__code">important</span>. and <span class="highlight__code">.unimportant</span>, for example:

<p class="highlight__file-desc">styles.css</p>

```css
.important {
  color: red;
}

.unimportant {
  color: blue;
}
```

The <span class="highlight__code">div</span> tag does nothing on its own. It's just a place to add a class with styles, and then those styles are applied to everything that is nested within it because of css inheritance. It's very common to apply styles and separate the content of your pages by using <span class="highlight__code">div</span> tags.

A bonus to using divs is that We just made our code easier to change. If we want to change the class name, we only have to change one <span class="highlight__code">div</span> instead of all of the elements that are now nested inside of it.

<!-- ===== -->
<!-- SPANS -->
<!-- ===== -->

## Spans

What if you wanted to select and style only a part of element? For inline elements, there's a similar tag called <span>:

<p class="highlight__file-desc">cats.html</p>

```html
<p>There are many types of <span class="highlight">cats</span>. For example, there are <span class="highlight--cat">black</span> cats, <span class="highlight--cat">gold</span> cats, <span class="highlight--cat">long</span> cats, and <span class="highlight--cat">small</span> cats. There are also <span class="highlight">more types of cats than you could possibly imagine</span>.</p>
```

And we can style these inline elements with <span class="highlight__code">.highlight</span> and <span class="highlight__code">.highlight--cat</span>.

## Conclusion

Divs are useful for styling sections of an html page because all the elements inside it inherit most of the styles of the containing div. There is a similiar tag for styling inline elements called span. Spans are useful for styling specific parts of inline elements. Both Divs and spans can be thought of as container elements that don't mean anything on its own and its just a tag to help select and style parts of an html page.