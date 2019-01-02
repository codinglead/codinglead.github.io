---
layout: project
title: What is the CSS Box Model
date: 2019-01-01 4:00 -0700
meta: Each element on a web page takes up space, and the box moFdel describes the space around the element.
pic: images/css-logo.svg
imgAlt: the CSS3 logo
tags: ["css"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /css/:title
---


All HTML elements can be visualized as boxes. The term "box model" is used when talking about design and layout.

The box model is a box that wraps around every HTML element. It consists of: the actual content, padding, borders, and margins. This can be set by using the <span class="highlight__code">box-sizing</span> property in CSS.The <span class="highlight__code">box-sizing</span> property defines how the width and height of an element are calculated: should they include padding and borders, or not. The image below illustrates the box model:

![Illustration of the CSS box model]({{ site.baseurl }}/images/box-model.png "CSS box model")

<!-- ================================== -->
<!-- Explanation Of the Different Parts -->
<!-- ================================== -->

## Explanation of the different parts

* Content - The content of the box, where text and images appear
* Padding - Clears an area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - Clears an area outside the border. The margin is transparent

The box model allows us to add a border around elements, and to define space between elements.

The <span class="highlight__code">box-sizing</span> property can be set as:

* <span class="highlight__code">content-box</span>: Default. The <span class="code">width</span> and <span class="code">height</span> properties (and min/max properties) includes only the content. Border and padding are not included.

* <span class="highlight__code">border-box</span>: The <span class="code">width</span> and <span class="code">height</span> properties (and min/max properties) includes content, padding and border.

* <span class="highlight__code">initial</span>: Sets this property to its default value.

* <span class="highlight__code">inherit</span>: Inherits this property from its parent element.

<!-- ================== -->
<!-- Box Model Practice -->
<!-- ================== -->

## Box Model Practice
what do you think this div's width will be?
<p class="title--file">html</p>
```html
<div>
  woo a div
</div>
```
<p class="title--file">css</p>
```css
div {
  border: 4px solid black;
  padding: 10px;
  width: 200px;
}
```

The width is going to be 228px.

Here is the calculation:
<br>200px (width)
<br>+ 20px (left + right padding)
<br>+ 8px (left + right border)
<br>+ 0px (left + right margin)
<br>= 228px

This is because The <span class="highlight__code">box-sizing</span> property defines how the width and height of an element are calculated: should they include padding and borders, or not. Since we did not declare a <span class="highlight__code">box-sizing</span>, it will default to <span class="highlight__code">content-box</span>. The width and height of an element's border or padding will be added to the final rendered width and height.

The total width of an element will be calculated like this:

Total element width = width + left padding + right padding + left border + right border + left margin + right margin

The total height of an element will be calculated like this:

Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added.

<!-- ======================= -->
<!-- More Box Model Practice -->
<!-- ======================= -->

## More Box Model Practice
what do you think this div's width will be?
<p class="title--file">html</p>
```html
<div>
  woo another div
</div>
```
<p class="title--file">css</p>
```css
div {
  border: 3px solid red;
  box-sizing: border-box;
  padding: 40px;
  width: 200px;
}
```

The width is going to be 200px.

Since we declared the <span class="highlight__code">box-sizing</span> to <span class="highlight__code">border-box</span>, it's width and height will include any border or padding you added, and the content box will shrink to absorb that extra width.

This usually makes it much easier to size elements.

<!-- ========== -->
<!-- Conclusion -->
<!-- ========== -->

## Conclusion

I think that everyone should declare the <span class="highlight__code">box-sizing</span> property to <span class="highlight__code">border-box</span> on all elements so they don't have to worry about the padding and border adding to the rendered width and height.