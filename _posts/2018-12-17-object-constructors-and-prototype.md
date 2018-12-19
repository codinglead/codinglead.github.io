---
layout: project
title: Constructors and Prototypes
date: 2018-12-18 2:46 -0700
meta: In this blog, we're going to explore how JavaScript uses constructors as blueprints for the creation of many new objects, and prototypes for adding methods to objects.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

In this blog, we're going to explore how JavaScript uses constructors as blueprints for the creation of many new objects, and prototypes for adding methods to objects.

Let's start by taking a look at how some of the built-in JavaScript objects work.

## Goal

Follow along to learn:

* What Constructors and prototypes are and how they work
* How Constructors use prototypes to have access to methods

## Constructors

If we look at the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">MDN documentation for String</a>, we see that <code class="highlight__code">String</code> is a constructor for creating string objects. A **constructor** is a function that can be invoked using the <code class="highlight__code">new</code> keyword to create new objects. To visually identify constructor functions vs. regular functions, they are conventionally named with a capital first letter.

You might have created string variables by adding <code>""</code> around the characters we want to identify as strings. This is called **literal notation**. It triggers JavaScript to 'box' (wrap) primitive values so you have access to String methods. But we could also use the String constructor function directly:

```javascript
  let testGreeting = new String;
  console.log(testGreeting);
  // String {"", length: 0}
  // length: 0
  // __proto__: String
  // [[PrimitiveValue]]: ""
```

Or this:

```javascript
  let testGreeting2 = new String("Hello!");
  console.log(testGreeting2);
  // String {"Hello!"}
  // 0: "H"
  // 1: "e"
  // 2: "l"
  // 3: "l"
  // 4: "o"
  // 5: "!"
  // length: 6
  // __proto__: String
  // [[PrimitiveValue]]: "Hello!"
```

In these two examples, we see the String constructor is called with the <code class="highlight__code">new</code> keyword. The String constructor function added 2 properties to both objects - <code class="highlight__code">length</code> and <code class="highlight__code">[[PrimitiveValue]]</code>. For <code class="highlight__code">testGreeting2</code>, where we provided a value as the argument, the constructor also added properties for the index positions of each character.

In the case of creating a <code class="highlight__code">new String</code>, it was actually easier to use the literal notation. But with more complex objects it will often be easier to use constructors when creating new objects that all have the same blueprint.

Let's make a constructor of our own. We'll imagine that we need to create many cats from a cat blueprint since we know that all cats will have the same properties. The difference from cat to cat will be in the values for those properties. Rather than repeating all of the code for each cat, we'll make a constructor function that we can use over and over again.

Here is a constructor function for <span class="highlight__code">Cat</span> that will initialize a new cat object with its properties assigned to the values passed in to the constructor function.

```javascript
  function Cat (name, colors, age) {
    this.name = name;
    this.colors = colors;
    this.age = age;
  }
```

Then to create a new cat we can do the following:

```javascript
  let myCat = new Cat('Lanky', ['white','black', 'gold'], 1);
```

We can access the name of the new cat:

```javascript
  console.log(myCat.name);
  // "Lanky"
```

The colors of the new cat:

```javascript
  console.log(myCat.colors);
  // ["white","black", "gold"]
```

And its age:

```javascript
  console.log(myCat.age);
  // 1
```

The <code class="highlight__code">myCat</code> object here is considered an **instance** of the <span class="highlight__code">Cat</span> type. A constructor is the blueprint that specifies how to create an object. You can think of the <span class="highlight__code">Cat</span> constructor here as a factory that can be used repeatedly to build a bunch of cat objects, using the constructor as a blueprint. Each cat object is an _instance_ of the <span class="highlight__code">Cat</span> type, so you have one <span class="highlight__code">Cat</span> type, defined by a constructor, with potentially many instances of that type.

```javascript
  function Cat (name, colors, age) {
    this.name = name;
    this.colors = colors;
    this.age = age;
  }

  let growly = new Dog("Growly", ["gray"], 2);
  let genter = new Dog("Genter", ["white", "black"], 5);
  let duck = new Dog("Duck", ["orange"], 3);
```

To recap, the <span class="highlight__code">Cat</span> constructor above is used as a kind of factory or blueprint by each of the three lines below in order construct the three cat objects. The growly, genter and duck objects are three instances of the <span class="highlight__code">Cat</span> type. Each object that is an instance of <span class="highlight__code">Cat</span> has a name property, a colors property and an age property. For example:

```javascript
  console.log(growly.name);
  // "Growly"
  console.log(genter.name);
  // "Genter"
  console.log(genter.age);
  // 5
  console.log(duck.colors);
  // ["orange"]
```

Now, we know how to create new objects with properties, but what about an object's methods? Let's take a look at methods for String and Cat next.

## Prototypes

We know that JavaScript also has a number of built-in string methods for each new String created. When we show our <code class="highlight__code">testGreeting2</code>, those methods are not listed in the curly braces. This is because the constructor function is only used to create a new object's properties.

To define methods, JavaScript uses prototypes. If we look at the methods for <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String on MDN</a> again, we see that they are all listed with the notation, String.prototype. A **prototype** is just an object from which other objects inherit methods. So, all instances of the String constructor inherit from the String.prototype (just as all instances of Cat will inherit from Cat.prototype). When you call a method, JavaScript first looks at the methods on the object, and if it doesn't find them there, it looks to the prototype.

Let's take a look at how this works with our <code class="highlight__code">testGreeting2</code> string object.

We can run any of the <code class="highlight__code">String.prototype</code> methods on the string <code class="">testGreeting2</code> which currently has a value of <code class="highlight__code">"Hello!"</code>. Let's try <code class="highlight__code">toUpperCase</code>.

```javascript
> testGreeting2.toUpperCase();
// HELLO!
```

When we execute this, JavaScript first searches the properties of the <code class="highlight__code">testGreeting2</code> object. It doesn't find it. It then goes to the <code class="highlight__code">String.prototype</code> object, finds the <code class="highlight__code">toUpperCase</code> method there, and processes the function as requested.

Let's add a custom method to <code class="highlight__code">String.prototype</code>:

```javascript
  String.prototype.addExclamations = function () {
    return this + "!!!!!"
  };
  testGreeting2.addExclamations();
  console.log(testGreeting2);
  // Hello!!!!!!
```

As soon as the new method is added, all current and future instances of String will have access to it. Now I can run <code class="highlight__code">testGreeting2.addExclamations()</code> and get <code class="highlight__code">Hello!!!!!!</code>.

If I create a new string, it, too, will have access to the prototype's <code class="highlight__code">addExclamations</code> method:

```javascript
  let newGreeting = "Hola";
  newGreeting.addExclamations();
  console.log(newGreeting);
  // Hola!!!!!
```

We might think, why wouldn't methods just be added to the constructor instead of having a separate prototype object? If all methods were added to the constructor, EVERY new instance of an object would create additional functions for EVERY method. By adding them to a shared prototype, the functions are created once and shared by all of the instances, which is more efficient.

Let's look at our <code class="highlight__code">Cat</code> again. We can add our original methods to the <code class="highlight__code">Cat.prototype</code> so that all cats have these behaviors available to them.

```javascript
Cat.prototype.speak = function () {
  console.log("Meow!");
}
```

<code class="highlight__code">myCat</code> can now speak:

```javascript
  myCat.speak();
  // Meow!
```

Every new cat will also have these methods.

```javascript
  let kitty = new Cat("Kitty", ["grey, white"], 2);
  kitty.speak();
  // Meow!
```

## Conclusion

Every time we create a new cat using the <code class="highlight__code">new</code> keyword, it calls the <span class="highlight__code">Cat</span> constructor, which provides the blueprint for creating an instance of the Cat type, giving it certain properties. The new instance of the Cat type also automatically gains access to all methods defined on the shared Cat prototype.