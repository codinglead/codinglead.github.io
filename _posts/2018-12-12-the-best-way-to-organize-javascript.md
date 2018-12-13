---
layout: project
title: The best way to organize JavaScript
date: 2018-12-12 5:30 -0700
meta: Well-organized code is easier to debug, it appears more professional, and is easier to revisit later. Let's make sure we understand how to organize our code using the best, most professional practices.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

Well-organized code is easier to debug, it appears more professional, and is easier to revisit later. Writing organized code is a highly-valued skill in the programming field. When working on a team, you'll often collaborate with other developers. Clean code is easier for others to understand and contribute to. Let's make sure we understand how to organize our code using the best, most professional practices.

One of the most important organizational rules to follow is keeping what is known as your user interface and business logic separate. In this blog we'll explore what user interface and business logics are, and what each handles.

## User Interface and Business Logic

Consider a calculator application. Its code falls into two categories:

* code that performs calculations
* code responsible for interacting with the user.

The code that handles math is the **back-end**, or **business logic**. It's the 'inner workings' of the application that performs calculations and returns a value. It's what takes the numbers <span class="highlight__code">8</span> and <span class="highlight__code">2</span>, adds them together, and get <span class="highlight__code">10</span>.

The code that handles interacting with a user is the **front-end** or **user interface logic**. It retrieves information from the user and provides it to the business logic to calculate. While buttons on a calculator may be labeled with numbers, they're just visual buttons. User interface logic is what translates clicking on this area of the page:

![screenshot of a calculator outputting 8 + 2]({{ site.baseurl }}/images/calculator-1.png "screenshot of a calculator outputting 8 + 2")

... into the number <span class="highlight__code">8</span>. The user interface logic registers that the user has pushed the button labeled "8". It then provides the number <span class="highlight__code">8</span> to the back-end logic where we may perform calculations with it.

Let's say we also press the buttons labeled "+" and "2". The user interface logic also translates these interactions into the number 2 and recognizes it will need a function for addition. The back-end logic then adds the numbers <span class="highlight__code">8</span> and <span class="highlight__code">2</span> together, and returns <span class="highlight__code">10</span>. The front-end/user interface logic can then display this result to the user:

![screenshot of a calculator outputting 10]({{ site.baseurl }}/images/calculator-2.png "screenshot of a calculator outputting 10")

User interface/front-end logic handles interacting with the user; including displaying or gathering information. The business/back-end logic handles calculating or manipulation information 'behind the scenes'.

## Separation of Logic

Remember, we want to write clean, well-organized code. Because user interface and business logics have separate purposes, their code should always be separate.

## conclusion

The code that handles math is the back-end, or business logic. It’s the ‘inner workings’ of the application that performs calculations and return a value. The code that handles interacting with a user is the front-end or user interface logic. It retrieves information from the user and provides it to the business logic to calculate. Understanding the basic differences between these two logics, and knowing that they should be separate, you'll know the most professional practices to organize JavaScript.
