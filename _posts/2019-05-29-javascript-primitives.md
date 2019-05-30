---
layout: project
title: JavaScript Primitives
date:  2019-05-29 17:17 -0700
meta: Numbers, strings, booleans, undefined, null are 5 out of the 6 primitives, or basic data types. The other one is symbol, which represents an identifier for object properties.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

<span class="highlight__code">Numbers</span>, <span class="highlight__code">strings</span>, <span class="highlight__code">booleans</span>, <span class="highlight__code">undefined</span>, and <span class="highlight__code">null</span> are 5 out of the 6 primitives, or basic data types. The other one is <span class="highlight__code">symbol</span>, which represents an identifier for object properties. Don't worry about <span class="highlight__code">symbol</span> for now. A <strong>primitive</strong> data value is a single simple data value with no additional properties and methods.

<!-- ========================= -->
<!-- The Concept of Data Types -->
<!-- ========================= -->

## The Concept of Data Types
In programming, data types is an important concept. To be able to operate on variables, it is important to know something about the type. Without primitives, a computer can not safely solve this:

```javascript
  let y = 22 + ' Daniel';
  console.log(y);  // '22 Daniel'
```

### JavaScript Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```javascript
  let x;  // x is undefined
  x = 5;  // x is now a number
  x = 'Dan';  // x is now a string
```

<!-- ========== -->
<!-- Data Types -->
<!-- ========== -->

## Data Types

<!-- ====== -->
<!-- Number -->
<!-- ====== -->

### Number

the <span class="highlight__code">number</span> type represents numbers.

* <span class="highlight__code">21</span>
* <span class="highlight__code">4.25</span>
* <span class="highlight__code">0</span>
* <span class="highlight__code">-100</span>
* <span class="highlight__code">NaN</span> (means 'not a number', but is considered a number.)
* <span class="highlight__code">Infinity</span>
* <span class="highlight__code">-Infinity</span>
* <span class="highlight__code">let favoriteNumber = 9;</span>

You can use certain methods on numbers. A <strong>method</strong> is a function which is a property of an object.

```javascript
  console.log(3.14159265359.toFixed(2));  // 3.14
```

<!-- ====== -->
<!-- String -->
<!-- ====== -->

### String

the <span class="highlight__code">string</span> type represents text. It is contained in 'single' or "double" quotes. You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

* <span class="highlight__code">'Hello, world!'</span>
* <span class="highlight__code">'Brian said, "Hello There!"'</span>
* <span class="highlight__code">"42"</span>
* <span class="highlight__code">let greeting = 'How are you doing?';</span>

You can use certain methods on strings.

```javascript
  console.log('Daniel'.toUpperCase());  // 'DANIEL'

  console.log('Daniel'.charAt(2));  // 'n'

  console.log('Daniel'.toUpperCase().charAt(2));  // 'N'
  
```

<!-- ======= -->
<!-- Boolean -->
<!-- ======= -->

### Boolean

The <span class="highlight__code">Boolean</span> data type can only hold 2 possible values:

* <span class="highlight__code">true</span>
* <span class="highlight__code">false</span>

```javascript
  console.log(10 > 1);  // true

  console.log(1 > 10);  // false

  console.log('Daniel'.charAt(2) === 'a');  // false

  let isNiceDay = true;
  console.log(isNiceDay);  // true
```

<!-- ========= -->
<!-- Undefined -->
<!-- ========= -->

### Undefined

When declaring a variable without giving it a value (<code class="highlight__code">let number;</code>), JavaScript creates the variable without a value, hence <code class="highlight__code">undefined</code>. Even when declaring a variable and assigning it a value at the same time (<code class="highlight__code">let favoriteNumber = 9;</code>), JavaScript actually creates the variable initially without a value, temporarily giving it a value of <code class="highlight__code">undefined</code>, before then assigning it the value to the right of the equals sign.

Additionally, there are some functions and methods that do not return any value, in which case the return value is actually <code class="highlight__code">undefined</code>.

<!-- ==== -->
<!-- Null -->
<!-- ==== -->

### Null

The <code class="highlight__code">null</code> data type is supposed to represent something that doesn't exist. It's data type is actually an object. You can consider it a bug, since it should be <code class="highlight__code">null</code>.

You can empty a variable by setting it to null:

```javascript
  let number = 22;

  number = null  // number is now null

  console.log(number);  // null

  let person = {
    firstName: 'Daniel',
    age: 22,
    eyeColor: 'black'
    };

  person = null;  // person is now null
  console.log(person);  // null
```

<!-- =================== -->
<!-- Data Type Detection -->
<!-- =================== -->

## Data Type Detection

It's important to understand the difference between the number <span class="highlight__code">5</span> and the string <span class="highlight__code">"5"</span>. To a computer, they are two entirely different things, as shown in this example:

```javascript
  let number = 56;
  let otherNumber = 2;

  let string = '56';
  let otherString = '2';

  console.log(number + otherNumber);  // 58

  console.log(string + otherString);  // '562'
```

When we added <code class="highlight__code">56</code> to <code class="highlight__code">2</code> we got <code class="highlight__code">58</code>, but when we added <code class="highlight__code">'56'</code> to <code class="highlight__code">'2'</code> it concatenated, link (things) together in a chain or series, the two strings together.

Likewise, the boolean <code class="highlight__code">true</code> is not the same as the string <code class="highlight__code">'true'</code>.

In the example above, the <code class="highlight__code">+</code> operator works on both numbers and strings, just differently. Usually methods will only work on a specific data type. For example, <code class="highlight__code">3.14159.toFixed(2);</code> works just fine, but trying to do <code class="highlight__code">'3.14159'.toFixed(2);</code> results in an <span class="highlight__code">error</span> because the <code class="highlight__code">toFixed</code> method doesn't work on a <span class="highlight__code">string</span>. Likewise, <code class="highlight__code">'Hello'.charAt(2);</code> works, but <code class="highlight__code">314159.charAt(2);</code> does not.

We can check the data type of a variable or value using <code class="highlight__code">typeof</code> as follows:

```javascript
  console.log(typeof 5);  // 'number'

  console.log(typeof '5');  // 'string'

  console.log(typeof true);  // 'boolean'

  console.log(typeof 'true');  // 'string'

  let greeting = 'How are you doing?';
  console.log(typeof greeting);  // 'string'
```

<!-- ==================== -->
<!-- Data Type Conversion -->
<!-- ==================== -->

## Data Type Conversion

Often input from a web browser will come in as a <span class="highlight__code">string</span> and we will need to convert it to a <span class="highlight__code">number</span> before working with it.

We can convert a string to a number by passing it to the <code class="highlight__code">Number()</code> function:

```javascript
  let inputAge = '22';  // inputAge is now a string
  console.log(inputAge);  // '22'
  console.log(typeof inputAge);  // 'string'

  let myAge = Number(inputAge); // myAge is now a number
  console.log(myAge);  // 22
  console.log(typeof myAge);  // 'number'
```

Note that if you try to use the <code class="highlight__code">Number</code> function to convert a string not actually containing a number, the result is the number <code class="highlight__code">NaN</code>.

```javascript
  let name = 'Daniel';
  let nameNumber = Number(name);

  console.log(nameNumber);  // NaN
```

If you need to go the other way around, you can convert a number to a string by calling the <code class="highlight__code">String</code> function on the number:

```javascript
  let number = 22;
  console.log(number);  // 22
  console.log(typeof number);  // 'number'

  let stringNumber = String(number);
  console.log(stringNumber);  // '22'
  console.log(typeof stringNumber);  // 'string'
```

<!-- ========== -->
<!-- Conclusion -->
<!-- ========== -->

## Conclusion

<span class="highlight__code">Numbers</span>, <span class="highlight__code">strings</span>, <span class="highlight__code">booleans</span>, <span class="highlight__code">undefined</span>, <span class="highlight__code">null</span>, and <span class="highlight__code">symbol</span> are the primitives, or basic data types. Without primitives, a computer can not safely solve problems.