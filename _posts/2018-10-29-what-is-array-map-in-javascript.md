---
layout: project
title: what is array map() in JavaScript
date: 2018-10-29 2:00 -0700
updated: 2022-06-16 20:30 -0700
meta: map() allows you to make changes to every element in an array without modifying the original array.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ['javascript']
author:
    [
        'Brian Munoz',
        'https://colorlessenergy.github.io/',
        'https://github.com/colorlessenergy'
    ]
permalink: /javascript/:title
---

<span class="highlight__code">map()</span> allows you to make changes to every element in an array without modifying the original array.

A function that is executed for every element in the array is passed into <span class="highlight__code">map()</span> which has these parameters:

-   current element
-   the index of the current element
-   array that <span class="highlight__code">map()</span> is being called on

An example of using <span class="highlight__code">map()</span> would be to multiply every element in an array by 10.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const numbers = [1, 2, 3, 4, 10];

// a new array is made with ever number in the original array multiplied by 10
const numbersMultipliedBy10 = numbers.map(number => {
    return number * 10;
});

console.log(numbers); // [3, 10, 40, 3]
console.log(numbersMultipliedBy10); // [10, 20, 30, 40, 100]
```

Another example is converting an array of data into JSX.

<p class="highlight__file-desc">JavaScript</p>

```javascript
const food = [
    { id: 0, name: 'orange', color: 'orange' },
    { id: 1, name: 'banana', color: 'yellow' }
];

food.map(food => {
    return (
        <div key={food.id}>
            <div>
                {food.name} - {food.color}
            </div>
        </div>
    );
});
```

## summary of map()

Use <span class="highlight__code">map()</span> when something needs to be done on every element in an array.
