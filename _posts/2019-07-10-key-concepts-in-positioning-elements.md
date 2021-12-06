---
layout: project
title: Key Concepts In Positioning Elements with CSS
date: 2019-07-10 22:59 -0700
meta: CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box. It has the following positioning types that allow you to control the layout of a page <strong>normal</strong> flow, <strong>relative</strong> positioning, and <strong>absolute</strong> positioning.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---

CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box. It has the following positioning types that allow you to control the layout of a page <strong>normal</strong> flow, <strong>relative</strong> positioning, and <strong>absolute</strong> positioning.

## Goal

Follow along to learn:

* How HTML is laid out on a website
* How to control HTML layout with the <strong>position</strong> property

## Building Blocks

CSS treats each HTML element as if it is in its own box. This box will either be a block or an inline box.

<strong>Block-level</strong> boxes start on a new line and act as the main building blocks of any layout, while <strong>inline boxes</strong> flow between surrounding text. You can control how much space each box takes up by setting the width of the boxes (and sometimes the height, too). To separate boxes, you can use borders, margins, padding, and background colors.

### Block Level Elements

#### Start On A New Line

Examples include:

<code class="highlight__code">&lt;h1&gt;</code>, <code class="highlight__code">&lt;p&gt;</code>, <code class="highlight__code">&lt;ul&gt;</code>, <code class="highlight__code">&lt;li&gt;</code>

<p class="highlight__file-desc">Example of Block Level Elements:</p>

<style>
  .block__heading {
    color: unset !important;
    font-size: unset !important;
    text-align: unset !important;
    width: 50% !important;
  }

  .block__text {
    color: unset !important;
    font-size: unset !important;
  }

  .block__item {
    margin-bottom: unset !important;
    padding-bottom: unset !important;
    font-size: unset !important;
    border-bottom: unset !important;
  }

  .block__item a:hover {
    color: #05070e;
  }
</style>
<body>
  <div class="block">
    <h1 class="block__heading">Cool programmers: </h1>
    <p class="block__text">Donec tristique dignissim ipsum, vel egestas erat dignissim sit amet. Etiam ante mauris, elementum et sapien in, feugiat fringilla elit. Sed est dolor, condimentum vitae velit iaculis, pharetra sollicitudin nulla. Donec nec augue metus. Proin eleifend felis vitae mauris aliquam, in pretium eros lobortis. Nulla sapien quam, porta ac sollicitudin sed, facilisis sit amet ex. Nullam suscipit eu sapien eget volutpat. Donec imperdiet lectus vitae ipsum imperdiet lacinia. Aliquam id mattis justo. Vivamus nisi lacus, posuere non nunc in, aliquam porta mauris. Duis nisl tellus, tristique quis enim ac, lobortis consequat dolor. Phasellus at dictum velit. In hac habitasse platea dictumst. Praesent porttitor tellus sed velit semper sodales. Vestibulum a sapien gravida ipsum mattis scelerisque ut sagittis metus.</p>
    <ul>
      <li class="block__item"><a class="css-pseudo-link" href="http://colorlessenergy.github.io/">Brian</a></li>
      <li class="block__item"><a class="css-pseudo-link" href="https://planeswalker1.github.io/">Daniel</a></li>
    </ul>
  </div>
</body>

### Inline Elements

#### Flow In Between Surrounding Text

Examples include:

<code class="highlight__code">&lt;em&gt;</code>, <code class="highlight__code">&lt;strong&gt;</code>, <code class="highlight__code">&lt;img&gt;</code>

<p class="highlight__file-desc">Example of Inline Level Elements:</p>

<style>
  .inline__heading {
    color: unset !important;
    font-size: unset !important;
    text-align: unset !important;
    width: 50% !important;
  }

  .inline__text {
    color: unset !important;
    font-size: unset !important;
  }

  .inline__item {
    border-bottom: unset !important;
    font-size: unset !important;
    margin-bottom: unset !important;
    padding-bottom: unset !important;
  }

  .inline__image {
    height: 50px !important;
    width: 50px !important;
  }
</style>
<body>
  <div class="inline">
    <p class="inline__text">
      <em>This is text wrapped by an em tag</em>, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. <strong>This is text wrapped by a strong tag</strong>, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
    </p>

    <p class="inline__text">
      <img class="inline__image" src="{{ site.baseurl }}/images/html-logo.svg" alt="HTML5 logo">Some text wrapping an image. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
    </p>
  </div>
</body>

## Containing Elements

If one block-level element sits inside another block-level element then the outer box is known as the containing or parent element.

It is common to group a number of elements together inside a <code class="highlight__code">&lt;div&gt;</code> (or other block-level) element. For example, you might group together all of the elements that form the header of a site (such as the logo and the main navigation). The <code class="highlight__code">&lt;div&gt;</code> element that contains this group of elements is then referred to as the containing element.

<p class="highlight__file-desc">Example of Containing Elements:</p>

<style>
  .contain,
  .contain__header,
  .contain__main,
  .contain__footer {
    border: 2px solid black;
    margin: 3px 0;
    padding: 5px;
  }

  .contain {
    border: 2px solid #ccc;
  }

  .header__heading {
    color: unset !important;
    font-size: unset !important;
    text-align: unset !important;
    width: 50% !important;
  }

  .header__item {
    border-bottom: unset !important;
    font-size: unset !important;
    margin-bottom: unset !important;
    padding-bottom: unset !important;
  }

  .contain__text {
    color: unset !important;
    font-size: unset !important;
  }

  .contain__image {
    height: 50px !important;
    width: 50px !important;
  }

  .contain__footer {
    text-align: center;
  }
</style>
<body>
  <div class="contain">
    <div class="contain__header">
      <h1 class="header__heading">Lorem Ipsum</h1>
      <ul>
        <li class="header__item">Lorem</li>
        <li class="header__item">Ipsum</li>
        <li class="header__item">Dolor</li>
      </ul>
    </div>
    <div class="contain__main">
      <p class="contain__text">
        <em>This is text wrapped by an em tag</em>, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. <strong>This is text wrapped by a strong tag</strong>, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
      </p>

      <p class="contain__text">
        <img class="inline__image" src="{{ site.baseurl }}/images/html-logo.svg" alt="HTML5 logo">Some text wrapping an image. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
      </p>
    </div>
    <div class="contain__footer">
      <p class="contain__text">&copy; Lorem 2019</p>
    </div>
  </div>
</body>

The black lines in this diagram represent <code class="highlight__code">&lt;div&gt;</code> elements. The <strong>header</strong> (containing the logo and navigation) are in one <code class="highlight__code">&lt;div&gt;</code> element, the <strong>main</strong> content of the page is in another, and the <strong>footer</strong> is in a third. The <code class="highlight__code">&lt;body&gt;</code> element is the containing element for these three <code class="highlight__code">&lt;div&gt;</code> elements. The second <code class="highlight__code">&lt;div&gt;</code> element is the containing element for two paragraphs of lorem ipsum text and an image of the HTML5 logo.

A box may be nested inside several other block-level elements. The containing element is always the direct parent of that element.

## Controlling the Position of Elements

CSS has the following positioning types that allow you to control the layout of a page: <strong>normal</strong> flow, <strong>relative</strong> positioning, and <strong>absolute</strong> positioning. You specify the positioning type using the <code class="highlight__code">position</code> property in CSS.

To indicate where a box should be positioned, you may also need to use <strong>box offset</strong> properties to tell the browser how far from the top or bottom and left or right it should be placed.

### Normal flow

#### <span class="highlight__code">position: static</span>

 In <code class="highlight__code">normal</code> flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not need a CSS property to indicate that elements should appear in normal flow, but the syntax would be: <span class="highlight__code">position: static</span>.

<p class="highlight__file-desc">HTML: </p>

```html
<body>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
</body>
```

<p class="highlight__file-desc">CSS: </p>

```css
body {
  color: #333;
  font-family: sans-serif;
}

h1 {
  background-color: #efefef;
  padding: 10px;
}

p {
  width: 300px;
}
```

<p class="highlight__file-desc">Result: </p>

<style>
  .normal {
    color: #333 !important;
    font-family: sans-serif !important;
  }

  .normal__heading {
    background-color: #efefef !important;
    padding: 10px !important;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
    text-align: unset !important;
  }

  .normal__text {
    width: 300px !important;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
  }
</style>
<body>
  <div class="normal">
  <h1 class="normal__heading">Lorem Ipsum</h1>
  <p class="normal__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="normal__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
  </div>
</body>

I have not specified a width property for the heading element, so you can see how it stretches the width of the entire browser window by default. The paragraphs are restricted to 300 pixels wide. This shows how the elements in normal flow start on a new line even if they do not take up the full width of the browser window.

The paragraphs appear one after the other, vertically down the page.

### Relative Positioning

#### <span class="highlight__code">position: relative</span>

<code class="highlight__code">Relative</code> positioning moves an element in relation to where it would have been in normal flow. For example, you can move it 10 pixels lower than it would have been in normal flow or 10% to the right. You can indicate that an element should be relatively positioned using the <code class="highlight__code">position</code> property with a value of <code class="highlight__code">relative</code>. You then use the offset properties (<code class="highlight__code">top</code> or <code class="highlight__code">bottom</code> and <code class="highlight__code">left</code> or <code class="highlight__code">right</code>) to indicate how far to move the element from where it would have been in normal flow. To move the box up or down, you can use either the <code class="highlight__code">top</code> or <code class="highlight__code">bottom</code> properties. To move the box horizontally, you can use either the <code class="highlight__code">left</code> or <code class="highlight__code">right</code> properties. The values of the box offset properties are usually given in pixels, percentages or ems. <strong>This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.</strong>

<p class="highlight__file-desc">HTML: </p>

```html
<body>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="example">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
</body>
```

<p class="highlight__file-desc">CSS: </p>

```css
  body {
    color: #333;
    font-family: sans-serif;
  }

  h1 {
    background-color: #efefef;
    padding: 10px;
  }

  .example {
    position: relative;
    top: 10px;
    left: 100px;
  }
```

<p class="highlight__file-desc">Result: </p>

<style>
  .relative {
    color: #333 !important;
    font-family: sans-serif !important;
    overflow: hidden;
  }

  .relative__heading {
    background-color: #efefef !important;
    padding: 10px !important;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
    text-align: unset !important;
  }

  .relative__text,
  .relative__example {
    /* reset */
    color: #333 !important;
    font-size: unset !important;
  }

  .relative__example {
    position: relative;
    top: 10px;
    left: 100px;
  }
</style>
<body>
  <div class="relative">
  <h1 class="relative__heading">Lorem Ipsum</h1>
  <p class="relative__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="relative__text relative__example">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
  </div>
</body>

The second paragraph has been pushed down and right from where it would otherwise have been in normal flow.

### Absolute positioning

#### <span class="highlight__code">position: absolute</span>

When the position property is given a value of <code class="highlight__code">absolute</code>, the box is taken out of normal flow and no longer affects the position of other elements on the page. (They act like it is not there.) The box offset properties (<code class="highlight__code">top</code> or <code class="highlight__code">bottom</code> and <code class="highlight__code">left</code> or <code class="highlight__code">right</code>) specify where the element should appear in relation to its containing element.


<p class="highlight__file-desc">HTML: </p>

```html
<body>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
</body>
```

<p class="highlight__file-desc">CSS: </p>

```css
  body {
    color: #333;
    font-family: sans-serif;
  }

  h1 {
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
```

<p class="highlight__file-desc">Result: </p>

<style>
  .absolute {
    color: #333 !important;
    font-family: sans-serif !important;
    position: relative;
  }

  .absolute__heading {
    background-color: #efefef;
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
    text-align: unset !important;
  }

  .absolute__text {
    /* reset */
    color: #333 !important;
    font-size: unset !important;
  }
</style>
<body>
  <div class="absolute">
  <h1 class="absolute__heading">Lorem Ipsum</h1>
  <p class="absolute__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="absolute__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
  </div>
</body>

The heading is positioned to the top left, and the paragraphs start at the top of the screen (as if the heading were not there).

### Fixed positioning

#### <span class="highlight__code">position: fixed</span>

This is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. Elements with <code class="highlight__code">fixed</code> positioning do not affect the position of surrounding elements and they move when the user scrolls up or down the page.

<p class="highlight__file-desc">HTML: </p>

```html
<body>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
</body>
```

<p class="highlight__file-desc">CSS: </p>

```css
  body {
    color: #333;
    font-family: sans-serif;
  }

  h1 {
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .p--first {
    margin-top: 100px;
  }
```

<p class="highlight__file-desc">Result: </p>

<style>
  .fixed {
    color: #333 !important;
    font-family: sans-serif !important;
    position: relative;
    overflow: auto;
  }

  .fixed__heading {
    background-color: #efefef;
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
    text-align: unset !important;
  }

  .fixed__text {
    /* reset */
    color: #333 !important;
    font-size: unset !important;
  }

  .p--first {
    margin-top: 60px;
  }
</style>
<body>
  <div class="fixed">
  <h1 class="fixed__heading">Lorem Ipsum</h1>
  <p class="fixed__text p--first">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="fixed__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
  </div>
</body>

In this example, the heading has been positioned to the top left hand corner of the browser window. When the user scrolls down the page, the paragraphs disappear behind the heading. The <p> elements are in normal flow and ignore the space that the <code class="highlight__code">&lt;h1&gt;</code> element would have taken up. Therefore, the <code>margin-top</code> property has been used to push the first <code class="highlight__code">&lt;p&gt;</code> element below where the fixed position <code class="highlight__code">&lt;h1&gt;</code> element is sitting.

## Overlapping Elements

#### <span class="highlight__code">z-index</span>

When you use <code class="highlight__code">relative</code>, <code class="highlight__code">fixed</code>, or <code class="highlight__code">absolute</code> positioning, boxes can overlap. If boxes do overlap, the elements that appear later in the HTML code sit on top of those that are earlier in the page. If you want to control which element sits on top, you can use the <code class="highlight__code">z-index</code> property. Its value is a number, and the higher the number the closer that element is to the front. For example, an element with a z-index of 10 will appear over the top of one with a z-index of 5.

<p class="highlight__file-desc">HTML: </p>

```html
<body>
  <h1>Lorem Ipsum</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
</body>
```

<p class="highlight__file-desc">CSS: </p>

```css
  h1 {
    background-color: #efefef;
    margin: 0;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  p {
    position: relative;
    top: 70px;
    left: 70px;
  }
```

<p class="highlight__file-desc">Result: </p>

<style>
  .index {
    color: #333 !important;
    font-family: sans-serif !important;
    position: relative;
    overflow: hidden;
  }

  .index__heading {
    background-color: #efefef;
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
    text-align: unset !important;
  }

  .index__text {
    position: relative;
    top: 70px;
    left: 70px;
    /* reset */
    color: #333 !important;
    font-size: unset !important;
  }
</style>
<body>
  <div class="index">
  <h1 class="index__heading">Lorem Ipsum</h1>
  <p class="index__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>

  <p class="index__text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis pharetra quam. In at convallis arcu, et semper tellus. Pellentesque feugiat mi libero, eget faucibus lacus ultricies sit amet. Vestibulum sagittis nec est a tincidunt. Sed at tellus lacinia, efficitur elit sed, ornare justo. Aliquam nec pretium quam. Sed sit amet nibh et urna elementum feugiat. Fusce a turpis eget tortor malesuada luctus eget sit amet sapien. Fusce quis posuere sem, sit amet imperdiet eros. Cras consequat fringilla consequat.
  </p>
  </div>
</body>

To ensure that the <code class="highlight__code">&lt;h1&gt;</code> element stays on top, we use the z-index property on the rule for the <code class="highlight__code">&lt;h1&gt;</code> element.
## Conclusion

the position property is really useful if you want to layout parts of your website offset from where they should appear since they do not affect how other elements are laid out.
