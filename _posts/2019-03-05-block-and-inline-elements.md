---
layout: project
title: Block and inline elements in HTML
date: 2019-03-04 10:39 -0700
meta: HTML Block elements are elements that when displayed start on a line of their own, in effect making a block on the page. Inline elements do not appear on their own line but share a line with other inline elements.
pic: images/html-logo.svg
imgAlt: the HTML5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

HTML Block elements are elements that when displayed start on a line of their own, in effect making a block on the page. Inline elements do not appear on their own line, but share a line with other inline elements.

<!-- ==== -->
<!-- GOAL -->
<!-- ==== -->

## Goal

Follow along to learn about:

* HTML tags
* HTML elements
* Block elements
* Inline elements

<!-- ==== -->
<!-- DIVS -->
<!-- ==== -->

## Tags vs Elements

Sometimes people use the words HTML tags and HTML elements interchangeably. HTML <strong>tags</strong> are just the opening or closing mark up. For example <code class="highlight__code"><p></code> and <code class="highlight__code"></p></code> are called HTML tags. HTML <strong>elements<strong> contain opening and closing tags, and content if there is any. For self-closing tags they are considered both.

## Block elements

Block elements HTML elements that when displayed start on a line of their own, in effect making a block on the page.

<p class="highlight__file-desc">block.html</p>

```html
<p>
  Sometimes a paragraph can be one sentence.
</p>
```

<p class="highlight__file-desc">ouput of block.html</p>

<p>
 Sometimes a paragraph can be one sentence.
</p>

The <code class="highlight__code"><p></code> tag indicates a paragraph of text. By default, browsers automatically add some space (margin) before and after each <code class="highlight__code"><p></code> element.

HTML ignores empty spaces and blank lines, which is called <strong>whitespace</strong>. That's why the extra line we might add between our p tag doesn't do anything when it is displayed. We could take it out, or make it two spaces, and it would look exactly the same in the browser.

## Inline elements

Inline elements do not appear on their own line, but share a line with other inline elements.

<p class="highlight__file-desc">inline.html</p>

```html
<p>
  Inline Elements <strong>can</strong> be nested inside a block or inline element.
</p>
```

<p class="highlight__file-desc">ouput of inline.html</p>

<p>
  Inline Elements <strong>can</strong> be nested inside a block or inline element.
</p>

The <code class="highlight__code"><strong></code> tag indicates that something is important. By default, it will make the text inside it bold. Something to note is that you <strong>can not</strong> set a width or height to an inline element. If you do, it won't apply the applied style.

## Conclusion

HTML Block elements are elements that when displayed start on a line of their own, in effect making a block on the page. Inline elements do not appear on their own line, but share a line with other inline elements.