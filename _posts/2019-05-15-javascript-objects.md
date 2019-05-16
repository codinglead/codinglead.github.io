---
layout: project
title: JavaScript Objects
date:  2019-5-15 20:57 -0700
meta: Objects are containers that encapsulate data - meaning all of the relevant data and functions for the thing that the variable name represents are kept together in a "capsule", better known as an object that can be created and manipulated in our programs as a single unit.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

Objects are containers that encapsulate data, meaning all of the relevant data and functions for the thing that the variable name represents are kept together in a "capsule", better known as an object that can be created and manipulated in programs as a single unit.

<!-- ======================= -->
<!-- ARE OBJECTS A DATA TYPE -->
<!-- ======================= -->
## Are Objects a data type?

Yes, there are two different kinds of data types: <code class="highlight__code">primitives</code>, and <code class="highlight__code">objects</code>. A <strong>primitive</strong> data type is a single simple data value with no additional properties and methods. They are: numbers, strings, booleans, undefined, null and symbol. <a href="https://planeswalker1.github.io/2018/09/26/JavaScript-primitives/">Here's</a> a good blog about it. Everything that is not a primitive is an object.

<!-- ================ -->
<!-- TYPES OF OBJECTS -->
<!-- ================ -->
## Types of Objects

<!-- ======= -->
<!-- ARRAYS -->
<!-- ======= -->
### Arrays

Sometimes variables hold one piece of information at a time: one number, one string, one element on a page. But often, we need to group things together. For example, what if we wanted to have a list of the months of the year? We'd use an array, which is just a list of things grouped together. An array looks like this:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  // usually like this
  let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'november', 'december'];

  // but you can also indent it like for readability
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
  ];
```

You can put variables and expressions in your arrays, or even other arrays:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let variableString = "I'm a variable!";
  let variables = [variable, "I'm not a variable!"];

  console.log(variables);
  // would log (2) ["I'm a variable!", "I'm not a variable!"]

  let numbers = [62, 62 / 2];

  console.log(numbers);
  // would log (2) [62, 31]

  let randomItems = [
    'Daniel',
    42,
    ['Brian', 456],
    3.14,
    'yet another string'
  ];

  console.log(randomItems);
  // would log (5) ["Daniel", 42, Array(2), 3.14, "yet another string"]
```

<code class="highlight__code">(5)</code> means that the array has that number of elements. <code class="highlight__code">Array(2)</code> just means that that element of the array is itself an array containing that many elements.

Just like numbers and strings, arrays have methods. You can think of a <strong>method</strong> as an action that data can perform or have taken on it. Here are a some examples of array methods:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let fruits = ['bananas', 'dates', 'grapes', 'oranges'];
  fruits.pop();

  console.log(fruits);
  // would log (3) ["bananas", "dates", "grapes"]
```

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let favoriteNumbers = [9, 7, 1];
  favoriteNumbers.reverse();

  console.log(favoriteNumbers);
  // would log (3) [1, 7, 9]
```

Note that both the methods <code class="highlight__code">pop</code> and <code class="highlight__code">reverse</code> <strong>change</strong> the array on which they're called. The <code class="highlight__code">pop</code> method <strong>removes</strong> the last item from the array and returns it. The <code class="highlight__code">reverse</code> method <strong>reverses</strong> the order of items in the array and returns that reversed array.

You can also add elements to an array, or combine two arrays:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let greetings = [];
  greetings.push('hi');
  greetings.push('hello');

  console.log(greetings);
  // would log (2) ["hi", "hello"]

  greetings.concat(['hola', 'buenos dias']);
  // would return (4) ["hi", "hello", "hola", "buenos dias"]

  console.log(greetings);
  // would log (2) ["hi", "hello"]
```

Note that while the <code class="highlight__code">push</code> method <strong>adds</strong> an element to an array, the <code class="highlight__code">concat</code> method <strong>doesn't</strong> actually change the original array. It returns a <strong>new</strong> array that combines the two. The <code class="highlight__code">greetings</code> array still only contains the 2 elements pushed on to it.

A method like <code class="highlight__code">push</code> is called a <strong>mutator</strong> method. These types of methods <strong>modify</strong> the array. A method like <code class="highlight__code">concat</code> is called a <strong>accessor</strong> method. These methods <strong>do not</strong> modify the array and return some representation of the array.

If you want to access an element from an array, the syntax is like selecting a letter from a string:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let names = ['Angel', 'Brian', 'Christian', 'Daniel', 'David']

  console.log(names[0]);
  // would log Angel

  console.log(names[4]);
  // would log David
```

Just like with strings, we count array elements starting with zero. So the zeroth element of the array is 'Angel', and the fourth element is 'David'.

Note that it is conventional for array variable names to be plural, thereby making it clear that the variable refers to a collection of things <strong>rather than</strong> a single thing. Following this convention will help with debugging your own code as well as making your code clearer for others.

Check out the MDN documentation for more <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods">Mutator</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessor_methods">Accessor</a> methods, and experiment using these methods on your own.

<!-- ========= -->
<!-- FUNCTIONS -->
<!-- ========= -->
### Functions

A <strong>function</strong> is something that performs an action.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  function sayHi() {
    alert('Hi!');
  };

  sayHi();
```

Every time we run the <code class="highlight__code">sayHi</code> function it executes all JavaScript code between the opening and closing braces - <code class="highlight__code">{</code> and <code class="highlight__code">}</code>. In this case it pops up a dialog box with the text <code class="highlight__code">Hi!</code>.

Here's another function called <code class="highlight__code">saySomething</code>:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  function saySomething(something) {
    alert(something);
  };

  saySomething('hello');
```

<code class="highlight__code">'hello'</code> is called an <code class="highlight__code">argument</code> to the function <code class="highlight__code">saySomething</code>. In the <code class="highlight__code">saySomething</code> function, that <code class="highlight__code">argument</code> is assigned to the variable <code class="highlight__code">something</code> - we call that variable a <code class="highlight__code">parameter</code>. If you're confused about the difference between <code class="highlight__code">arguments</code> and <code class="highlight__code">parameters</code>, just remember that the <strong>argument</strong> is the information you pass in, and the <strong>parameter</strong> is the variable that receives the argument. In this case, <code class="highlight__code">'hello'</code> is the <code class="highlight__code">argument</code>, and <code class="highlight__code">something</code> is the <code class="highlight__code">parameter</code>. The <code class="highlight__code">parameter</code> can then be used just like any other variable. If this is unclear, reread it and play around with writing your own functions. Be sure you understand how to write a function that uses an <code class="highlight__code">argument</code> passed in.

Heres another function:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  function multiply (number1, number2) {
    return number1 * number2;
  };

  console.log(multiply(8, 9));
  // would log 72
```

The <code class="highlight__code">return</code> keyword tells JavaScript to <strong>return</strong> the result from that line of code. Without a <code class="highlight__code">return</code>, JavaScript will return <code class="highlight__code">undefined</code> from the function, which is JavaScript's way of saying something <strong>does not</strong> have a value.

Let's step through exactly what happens if we call <code class="highlight__code">multiply(8, 9)</code>:

1. We call the <code class="highlight__code">multiply</code> function with the <code class="highlight__code">arguments</code> <code class="highlight__code">(8, 9)</code>.
2. The <code class="highlight__code">multiply</code> function is run. The <code class="highlight__code">parameter</code> <code class="highlight__code">number1</code> is set equal to <code class="highlight__code">8</code>, and the <code class="highlight__code">parameter</code> <code class="highlight__code">number2</code> is set equal to <code class="highlight__code">9</code>.
3. <code class="highlight__code">8 * 9</code> is run.
4. The result of <code class="highlight__code">8 * 9</code> is returned.
5. The <code class="highlight__code">multiply</code> function ends.

Notice our variables names: <code class="highlight__code">number1</code> and <code class="highlight__code">number2</code>. We could have called them <code class="highlight__code">n1</code> and <code class="highlight__code">n2</code>, and it would have taken less typing. But the name <code class="highlight__code">number1</code> very clearly expresses what the variable is for, whereas <code class="highlight__code">n1</code> will require another programmer (or your future self, when you come back to your code in a few months and don't remember exactly how it works) to figure it out from context. In this example, it would be pretty obvious what <code class="highlight__code">n1</code> is for. But if you practice choosing descriptive names now and resisting the temptation to abbreviate, you will be in the habit of doing it when you're writing more complex code where it matters more.

<!-- ================================== -->
<!-- OTHER SYNTAX FOR DECLARING FUNCTIONS -->
<!-- ================================== -->
#### Other Syntax for Declaring Functions

Another syntax for defining the multiply function is:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let multiply = function (number1, number2) {
    return number1 * number2;
  }

  console.log(multiply(8, 9));
  // would log 72
```

These function definitions are called <code class="highlight__code">function literals</code> or <code class="highlight__code">function expressions</code>. The syntax presented higher up on this page:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  function multiply (number1, number2) {
    return number1 * number2;
  };

  console.log(multiply(8, 9));
  // would log 72
```

defines a <code class="highlight__code">function statement</code>. The differences between <code class="highlight__code">function expressions</code> and <code class="highlight__code">function statements</code> are subtle and beyond the scope of this blog. Just know that both are ways of defining a function. If you'd like to read more about the difference, check out this page on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">MDN</a>.

<!-- ======= -->
<!-- Objects -->
<!-- ======= -->
### Objects

What if we want a variable to store more information about the 'thing' the variable represents? For example, if you were a variable and we wanted to store information about you (your name, your age, your known programming languages, if you like lemonade) in the single variable 'you' - we'd need more than a single string or a single array, we'd need an object!

Here is an example of myself as an object:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let daniel = {
    firstName: 'Daniel',
    lastName: 'Munoz',
    age: 22,
    knownProgrammingLanguages: ['HTML', 'CSS', 'JavaScript'],
    likesLemonade: true
  };
```

Let's take a look at how this object is defined. We have our variable <code class="highlight__code">daniel</code>. We assign it the value of an object by using the curly braces, <code class="highlight__code">{</code> <code class="highlight__code">}</code>. This is called <code class="highlight__code">literal notation</code> and we have used it previously to create strings by using quotes, <code class="highlight__code">"</code> <code class="highlight__code">"</code> and arrays by using brackets, <code class="highlight__code">[</code> <code class="highlight__code">]</code>.

Inside the curly braces are five properties for our <code class="highlight__code">daniel</code> object: firstName, lastName, age, knownProgrammingLanguages, and likesLemonade. Every property of a JavaScript object consists of a key-value pair. The <code class="highlight__code">key</code> is the variable that describes the kind of information to be stored. The <code class="highlight__code">value</code> is the specific value of the key. So, in our example, the firstName property has a key called <code class="highlight__code">firstName</code> and a value of <code class="highlight__code">"Daniel"</code>, the lastName property has a key <code class="highlight__code">lastName</code>, with a value of <code class="highlight__code">"Munoz"</code> and so on with the remaining keys: age, knownProgrammingLanguages, and likesLemonade.

Each key-value pair is separated by a colon. And pairs are separated from each other with a comma.

We could write our object like this and it would also work:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let daniel = {firstName: 'Daniel', lastName: 'Munoz', age: 22, knownProgrammingLanguages: ['HTML', 'CSS', 'JavaScript'], likesLemonade: true};
```

However, the formatting of the object with each property indented on a separate line is a convention used when writing JavaScript objects to make it easy to see each property. Imagine an object with hundreds of properties written on the same line. It would be hard of to sort out the details.

Property keys are always a JavaScript string (though quotes are not needed) that starts with a letter. Property values can be any data type: strings, numbers, Booleans, arrays, functions, or even other objects. When the value of a property is a function, we call it a method.

Here is an object with one property and one method. This method when called will make myDog "speak" by logging "Bark!" to the console.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let myDog = {
    name: "Lanky",
    speak: function () {
    console.log("Bark!");
    }
  };
```

To keep it simple, you can think of <strong>properties</strong> as nouns and <strong>methods</strong> as verbs or actions.

To access properties and methods on objects, we can use either <code class="highlight__code">dot notation</code> or <code class="highlight__code">bracket notation</code>.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  console.log(myDog.name);
  // would log "Lanky"

  console.log(myDog['name']);
  // would log "Lanky"

  myDog.speak();
  // would log "Bark!"

  myDog['speak']();
  // would log Bark!
```

Dot notation is easier to write and read but bracket notation will additionally allow us to use properties with special characters, or select properties using variables. A common convention is to use bracket notation when you need the additional functionality, and use dot notation elsewhere.

Let's create an empty new cat object. We use the curly braces to signal JavaScript to create a new object.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  let cat = {};

  console.log(cat);
  // would log {};
```

If we log cat we can see that an empty object has been created for the cat variable.

Now, let's give our cat some properties using dot notation. Here our values are a string and a number

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.name = 'Genter';
  console.log(cat.name);
  // would log "Genter"

  cat.age = 3;
  console.log(cat.age);
  // would log 3
```

Now, let's add an array for a property value:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.colors = ['orange', 'white'];

  console.log(cat.colors);
  // would log (2) ["orange", "white"]
```

The value of a property comes with all of the functionality of its type. For example, we are able to use indexing on the colors array.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  console.log(cat.colors[0]);
  // would log "orange"

  console.log(cat.colors[1]);
  // would log "white"
```

We can use array methods on the colors like <code class="highlight__code">push</code> which returns the new length of the array:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.colors.push("black");
  // would return 3

  console.log(cat.colors);
  // would log (3) ["orange", "white", "black"]
```

we can add to properties, but it doesn't change the value:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.age + 10;
  // would return 13

  console.log(cat.age);
  // would log 3
```

We can also update any property by reassigning its value:

<p class="highlight__file-desc">JavaScript</p>

```javascript
  console.log(cat.name);
  // would log "Genter"

  cat.name = "Growly";
  console.log(cat.name);
  // would log "Growly"
```

Let's add a method to our cat. This will be a property with a function as a value. In this case, we'll give our cat some meow functionality.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.meow = function () {
    console.log('Meow!');
  }

  cat.meow();
  // would log 'Meow!'
```

With objects, we can use properties within other properties. What if we decided we wanted to add a greet functionality? Let's add another method to our cat object.

<p class="highlight__file-desc">JavaScript</p>

```javascript
  cat.greet = function () {
    return "Hello, I'm " + this.name + " the cat.";
  };
```

Notice that the <code class="highlight__code">greet</code> method has a keyword of <code class="highlight__code">this</code>. When <code class="highlight__code">this</code> is used in an object's method, it always refers to the object on which the method is called. So, when we run <code class="highlight__code">cat.greet()</code>, <code class="highlight__code">this</code> will always refer to the object, <code class="highlight__code">cat</code>. (<code class="highlight__code">this</code> can also be used in other places, but it gets tricky depending on its context. <a href="https://codinglead.github.io/javascript/this-in-javascript">Here's</a> a good blog about <code class="highlight__code">this</code>.)

Now when we run <code class="highlight__code">cat.greet</code>, we get <code class="highlight__code">"Hello, I'm Growly the cat."</code>.

### Conclusion

Objects are an important piece to JavaScript data types. These include: arrays, functions, and objects. Without objects, a computer can not safely solve problems.