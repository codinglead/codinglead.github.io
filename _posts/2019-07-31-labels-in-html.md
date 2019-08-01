---
layout: project
title: Labels in HTML
date: 2019-07-31 18:00 -0700
meta: Labels are great for describing what a input is for. Learn how and why to use labels.
pic: images/html-logo.svg
imgAlt: the html5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

Labels are great for describing what a <code>input</code> is for. Learn how and why to use labels.

## What are labels

The <code>label</code> element represents a description for an <code>input</code> element.

```html
  <label for="email">Email</label>
  <input id="email" type="email" />
```

## Why labels are useful

Associating a <code class="highlight__code">&lt;label&gt;</code> with an <code class="highlight__code">&lt;input&gt;</code> element is useful because:

* The <code>label</code> text is visually and programmatically associated with its corresponding <code>input</code>. 'Programmatically' means that a screen reader will read out the <code>label</code> when the user is focused on the <code>input</code>, making it clearer for them to know what data should be entered.

* You can click a <code>label</code> and its associated <code>input</code> will be focused. This makes it easier for anyone trying to click a <code>input</code>, especially those using a phone.

## How to associate a label with an input

To associate a <code class="highlight__code">&lt;label&gt;</code> with an <code class="highlight__code">&lt;input&gt;</code> element, you need to give the <code class="highlight__code">&lt;input&gt;</code> an <code class="highlight__code">id</code> attribute. The <code class="highlight__code">&lt;label&gt;</code> then needs a <code class="highlight__code">for</code> attribute whose value is the same as the input's <code class="highlight__code">id</code>.

```html
  <label for="email">Email</label>
  <input id="email" type="email" />
```

Alternatively, you can add the <code class="highlight__code">&lt;input&gt;</code> directly inside the <code class="highlight__code">&lt;label&gt;</code>, in which case the <code class="highlight__code">for</code> and <code class="highlight__code">id</code> attributes are not needed because the association is implicit:

```html
  <label>
    Email
    <input type="email" />
  </label>
```
## Conclusion

Labels are great for giving the user more information, visually, and programmatically, about what data should be entered in an <code>input</code>.