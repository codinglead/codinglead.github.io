---
layout: project
title: What is the CSS Box Model
date: 2019-05-01 8:47 -0700
meta: Each element on a web page takes up space, and the box model describes the space around the element.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---


All <code class="highlight__code">HTML</code> elements can be visualized as boxes. The term "box model" is used when talking about design and layout.

The box model is a box that wraps around every <code class="highlight__code">HTML</code> element. It consists of: the actual content, padding, borders, and margins. This can be set by using the <span class="highlight__code">box-sizing</span> property in CSS.The <span class="highlight__code">box-sizing</span> property defines how the width and height of an element are calculated: should they include padding and borders, or not. The image below illustrates the box model:

![Illustration of the CSS box model]({{ site.baseurl }}/images/box-model.png "CSS box model")

<!-- ================================== -->
<!-- Explanation Of the Different Parts -->
<!-- ================================== -->

## Explanation of the different parts

* Content - The content of the box, where text and/or images appear
* Padding - The area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - The area outside the border. The margin is transparent

The box model allows us to add a border around elements, and to define space between elements.

We can control how the total width and height of an element is calculated with the <span class="highlight__code">box-sizing</span> property. It can be set to:

* <span class="highlight__code">content-box</span>: Default. The <span class="code">width</span> and <span class="code">height</span> properties (and min/max properties) includes only the content. Border and padding are not included.

* <span class="highlight__code">border-box</span>: The <span class="code">width</span> and <span class="code">height</span> properties (and min/max properties) includes content, padding and border.

* <span class="highlight__code">initial</span>: Sets this property to its default value.

* <span class="highlight__code">inherit</span>: Inherits this property from its parent element.

<!-- ================== -->
<!-- Box Model Practice -->
<!-- ================== -->

## Box Model Practice

what do you think the width of the <code class="highlight__code">div</code> below will be?

<p class="title--file">HTML</p>
```html
  <div>
    woo a div
  </div>
```
<p class="title--file">CSS</p>
```css
  div {
    border: 4px solid black;
    padding: 10px;
    width: 200px;
  }
```

The width is going to be <code>228px</code>.

Here is the calculation:
<br><code>200px</code> (width)
<br>+ <code>20px</code> (left + right padding)
<br>+ <code>8px</code> (left + right border)
<br>+ <code>0px</code> (left + right margin)
<br>= <code>228px</code>

This is because The <span class="highlight__code">box-sizing</span> property defines how the width and height of an element are calculated Since we did not declare a <span class="highlight__code">box-sizing</span>, it will default to <span class="highlight__code">content-box</span>. The width and height of an element's border or padding will be added to the final rendered width and height.

The total width of an element will be calculated like this:

Total element width = width + left padding + right padding + left border + right border + left margin + right margin

The total height of an element will be calculated like this:

Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added.

<!-- ======================= -->
<!-- More Box Model Practice -->
<!-- ======================= -->

## More Box Model Practice

what do you think the width of the <code class="highlight__code">div</code> below will be?

<p class="title--file">HTML</p>

```html
  <div>
    woo another div
  </div>
```

<p class="title--file">CSS</p>
```css
  div {
    border: 3px solid red;
    box-sizing: border-box;
    padding: 40px;
    width: 200px;
  }
```

The width is going to be <code>200px</code>.

This time, Since we declare the <span class="highlight__code">box-sizing</span> to <span class="highlight__code">border-box</span>, it's width and height will include any border or padding you added, and the content box will shrink to absorb that extra width.

This usually makes it much easier to size elements.

<!-- ========== -->
<!-- Conclusion -->
<!-- ========== -->

## Conclusion

Styling <code class="highlight__code">HTML</code> can be tricky sometimes. Understanding the CSS box model and knowing how the width and height of elements are calculated can help. The <code class="highlight__code">box-sizing</code> property controls how the width and height of an element are calculated: should they include padding and borders, or not. I think it is a good idea to set the <span class="highlight__code">box-sizing</span> property to <span class="highlight__code">border-box</span> on all elements so you don't have to worry about the padding and border adding to the rendered width and height.