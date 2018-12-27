---
layout: project
title: Indenting and Spacing in HTML
date: 2018-12-26 4:00 -0700
meta: When you are writing HTML (or any other programming language), well-written code follows consistent indentation and spacing patterns.
pic: images/html-logo.svg
imgAlt: the html5 logo
tags: ["html"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /html/:title
---

When you are writing HTML (or any other programming language), well-written code follows consistent indentation and spacing patterns. In some languages, indentation and spacing are required for the code to function properly. In HTML, inconsistent indentation and spacing will not impact the functionality of a website, but will cause your code to be difficult to read and understand.

## Goal

Follow along to learn:

* Best practices for spacing HTML

## Why Indenting and Spacing Matter

Here is an example of some HTML with inconsistent indentation and spacing:

```html
<!DOCTYPE html>
<html>
<head>
    <title>  Cool title</title>
</head>
<body>
    <header><h1>
    Wow header
    </h1></header>
  <main>
  <p>  A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated. A sentence that is repeated.  </p>
  <p>       Aliquam efficitur nulla in ante fringilla vulputate. Vivamus a malesuada neque. Etiam at nibh non tortor vestibulum hendrerit sit amet in leo. Integer mollis quam mauris, euismod rhoncus elit pulvinar ac. Integer rhoncus nisl ac augue auctor lacinia. In gravida justo nec justo lobortis, ut faucibus lorem volutpat. In tempus tortor in orci tempor egestas. Fusce lectus magna, hendrerit quis egestas et, sagittis ac lorem. Suspendisse potenti. Quisque ullamcorper pellentesque tortor, quis condimentum odio malesuada ac. Duis sodales lacinia augue, at luctus nisl convallis vitae. Nam id libero eget sapien fermentum gravida ut nec massa. Aliquam ullamcorper, tortor faucibus vestibulum sodales, orci magna rutrum felis, sit amet bibendum lorem ante vel sapien.</p>
  </main>
  <footer><p>&copy; 2025 some guy</p></footer>
         </body>
  </html>
```


It is difficult to see where elements begin and end and which elements are nested within other elements.

Here is the same code with standard indentation and spacing:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Cool title</title>
</head>
<body>
  <div>
    <header>
      <h1>Wow header</h1>
    </header>
    <main>
      <p>
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
        A sentence that is repeated.
      </p>
      <p>
        Aliquam efficitur nulla in ante fringilla vulputate. Vivamus a malesuada neque. Etiam at nibh non tortor vestibulum hendrerit sit amet in leo. Integer mollis quam mauris, euismod rhoncus elit pulvinar ac. Integer rhoncus nisl ac augue auctor lacinia. In gravida justo nec justo lobortis, ut faucibus lorem volutpat. In tempus tortor in orci tempor egestas. Fusce lectus magna, hendrerit quis egestas et, sagittis ac lorem. Suspendisse potenti. Quisque ullamcorper pellentesque tortor, quis condimentum odio malesuada ac. Duis sodales lacinia augue, at luctus nisl convallis vitae. Nam id libero eget sapien fermentum gravida ut nec massa. Aliquam ullamcorper, tortor faucibus vestibulum sodales, orci magna rutrum felis, sit amet bibendum lorem ante vel sapien.
      </p>
    </main>
    <footer>
      <p>&copy; 2025 some guy</p>
    </footer>
  </div>
</body>
</html>
```

## How to Properly Indent and Space HTML

In HTML, the beginning and ending tags of an element on multiple lines should always be left-aligned. For example, when you see <div>, you should be able to visually scan the page straight down to find its closing tag (the same for <code><header></code>, <code><main></code> and <code><footer></code>). One way to implement this is to create opening and closing tags at the same time and then add the contents.

When elements are nested within another element, they should be indented two or four spaces from the opening tag. For example, I chose to indent my HTML with two spaces. <code><header></code> is indented two spaces from <code><div></code> and <code><h1></code> is indented two spaces from <code><header></code>. Make sure that your HTML indenting is consistent throughout the page.

You might be wondering why I chose to not indent <code><head></code> and <code><body></code> in the <code><html></code> tag. I like to keep it unindented because there should only be 2 nested elements in <code><html></code> and I think its unnessecary to have it indented. You could indent it if you want.

If you use the tab key to space over, make sure it is set to your chosen spacing. Also, notice that there is no space between the text content of an element and its tags, <strong>if</strong> it takes a single line. For example, <code><h1>Wow header</h1></code> has no spaces between <code><h1></code> and the word 'Wow'. If a tag has multi line text you could choose to indent it with a new line so it is spaced nicely, but it is not neccessary if it isn't possible (ie: it's pasted content). A fix to this is having the pasted text indented two spaces from the opening tag like with <code><div></code> and <code><header></code>.

## Conclusion

Regardless of the language you use to write code, learn the indentation and spacing standards for it.

In HTML:

* the beginning and ending tags of an element on multiple lines should always be left-aligned.
* When elements are nested within another element, they should be indented two or four spaces from the opening tag.
* If you use the tab key to space over, make sure it is set to your chosen spacing.
* If a tag takes a single line of text there should be no space between the text content of an element and its tags.
* If a tag has multi line text you could choose to indent it with a new line so it is spaced nicely, but it is not neccessary if it isn't possible (ie: it's pasted content). A fix to this is having the pasted text indented two spaces from the opening tag like with <code><div></code> and <code><header></code>.

Practice consistency so that your code is easily readable to other coders as well as your future self.