---
layout: project
title: Labels in HTML
date: 2019-03-27 20:24 -0700
meta: Labels are great for describing what a form input is for. Learn how and why to use labels.
pic: images/html-logo.svg
imgAlt: the html5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

Labels are great for describing what a form input is for. Learn how and why to use labels.

## What are labels

The <code class="highlight__code">&lt;label&gt;</code> element represents a caption for an item in a form.

```html
  <label for="email">Email</label>
  <input type="email" id="email" />
```

## Why labels are useful

Associating a <code class="highlight__code">&lt;label&gt;</code> with an <code class="highlight__code">&lt;input&gt;</code> element offers some major advantages:

* The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means that a screenreader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.

* You can click the associated label to focus/activate the input, as well as the input itself. This increased hit area provides an advantage to anyone trying to activate the input, including those using a touch-screen device.

## How to associate a label with an input

To associate the <code class="highlight__code">&lt;label&gt;</code> with an <code class="highlight__code">&lt;input&gt;</code> element, you need to give the <code class="highlight__code">&lt;input&gt;</code> an <code>id</code> attribute. The <code class="highlight__code">&lt;label&gt;</code> then needs a <code>for</code> attribute whose value is the same as the input's <code>id</code>.

```html
  <label for="email">Email</label>
  <input type="email" id="email" />
```

Alternatively, you can nest the <code class="highlight__code">&lt;input&gt;</code> directly inside the <code class="highlight__code">&lt;label&gt;</code>, in which case the <code>for</code> and <code>id</code> attributes are not needed because the association is implicit:

```html
  <label for="email">Email
    <input type="email" id="email" />
  </label>
```
## Conclusion

Labels are great for giving the user more information about what data should be entered.