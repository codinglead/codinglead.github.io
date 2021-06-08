---
layout: project
title: introduction to node and express
date: 2020-03-19 8:30 -0700
meta: introduction to node and express
pic: images/node.svg
imgAlt: the node logo
tags: ["backend"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /backend/:title
---

using Node with Express makes it easy to create an API.

## exporting a node script

To export code that will be used in a different file use <span class="highlight__code">module.exports</span> and <span class="highlight__code">exports</span>.

<p class="highlight__file-desc">
  node
</p>

```javascript
module.exports = {
  message: "Hi 😎️"
}

exports.message = "Hello 😀️";
```

## how to import node modules

To import a node module you will have to use the <span class="highlight__code">require</span> method to fetch the script.

If you want to use code that you created pass in a path to the file, it will look for it relatively and run the file.

If you want to use a code from NPM pass in the name of the package, it will look for it in the node modules folder and run the file. 

Everything you exported from the module will be put into the variable.

<p class="highlight__file-desc">
  node
</p>

```javascript
// will look in the node modules folder and run it
var message = require("message");

// will look in the same directory and run it
var message = require("./message");
```


## information about Node Modules

There are more than 1.3 million modules in NPM.

### NPM - Node Package Manager

Automates installing, upgrading, and removing modules.

Install packages with <span class="highlight__code">npm install [-g] package_name</span>

<span class="highlight__code">-g</span>: Installs the package globally instead of a certain directory.

### package.json

Defines configuration for application

Some configuration:
* manadatory name
* version

Define scripts in "scripts" object which are commands that you can store and call by running <span class="highlight__code">npm run [script-name]</span>

### how to add to package.json

use <span class="highlight__code">npm install --save [package name]</span> to add a dependency in the package.json file. This will also allow you to use the node module.

### why have a package.json file?

A package.json file is included because people who install your node package wouldn't have to download all node packages. They will only need to download your code and run <span class="highlight__code">npm install</span> to get all the node packages needed for your code.

## NPM commands

<span class="highlight__code">npm install</span> installs all dependencies in your directory in the node modules folder.
<span class="highlight__code">npm install --save [package]</span> installs a node package into the directory you are in. It also adds it to the package.json file.

<span class="highlight__code">npm run [script_name]</span> this runs the scripts you have defined from the scripts object in the package.json file.



## express routing

Express is powerful and quick to setup routes.


Here is an example of setting up routes.


<p class="highlight__file-desc">
  node
</p>

```javascript
app.http-method(path, callback)
```

Most common http methods
* <span class="highlight__code">get</span> - read data
* <span class="highlight__code">post</span> - send data
* <span class="highlight__code">put</span> - update data
* <span class="highlight__code">delete</span> - delete data

A http method is a lowercase HTTP request method. 
* <span class="highlight__code">path</span> is the visited path usually made by a user. 
* <span class="highlight__code">callback</span> is a function that takes 2 - 3 parameters.

In the callback function it has 3 parameters that are passed in.

* <span class="highlight__code">req</span> - request object
* <span class="highlight__code">res</span> - response object
* <span class="highlight__code">next</span> - optional callback function

