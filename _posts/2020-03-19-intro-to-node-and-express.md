---
layout: project
title: intro to node and express
date: 2020-03-19 8:30 -0700
meta: intro to node and express
pic: images/node.svg
imgAlt: the node logo
tags: ["backend"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /backend/:title
---

Node and Express is a easy way to get started with using the backend.

Node is an asynchronous event driven JavaScript runtime. 

Express is a minimalist web application framework. 

## exporting an node script

To use anything from other libaries or from own code export code from node module.

use <span class="highlight__code">module.exports</span> and <span class="highlight__code">exports</span>.

exports is an alias to module export.

<p class="highlight__file-desc">
  node
</p>

```javascript
module.exports = {
  message: "hi there"
}
```

## import into node script
To import a node module you will have to use the require method to fetch the script.

If you pass in a path, it will run the script. if you pass in a string, it will look in node module folder. Everything you exported from the module will be put into the variable.

<p class="highlight__file-desc">
  node
</p>

```javascript
// will look in the node module folder
var message = require("message");

// will look in the same directory and run it
var message = require("./message");
```


## Node Modules

Similar to libaries in c or python. 

There are more than 350k modules in NPM.

### NPM - Node Package Manager

Automates installing, upgrading, removing modules.

Install packages with <span class="highlight__code">npm install [-g] package_name</span>

<span class="highlight__code">-g</span>: Installs the package globally instead of a certain directory.

### Package.json

Defines configuration for application

Some tags defined metadata:
* manadatory name
* version

Define scripts in "scripts" object which are commands that you can store and just call simply by running <span class="highlight__code">npm run [script-name]</span>

### how to add to package.json

use <span class="highlight__code">npm install --save [package name]</span> to add a dependency in the package.json file. This will also allow you to use the node module.

### why have a package.json file?

A package.json file is included because if you were release the code people that are going to download your code wouldn't have to download all the node packages. They will only need to download your code and run <span class="highlight__code">npm install</span> to get all the node packages needed for your code.

## NPM commands

<span class="highlight__code">npm install</span> installs all dependencies in your directory in the node modules folder.
<span class="highlight__code">npm install --save [package]</span> installs a node package into the directory you are in. It also adds it to the package.json file.

<span class="highlight__code">npm run [script_name]</span> this runs the scripts you have defined from the scripts object in the package.json file.



## express routing

It is very powerful very quick to setup routes.

```javascript
app.http-method(path, callback)
```

Most common http methods.
* get - read data
* post - send data
* put - update data
* delete - delete data

A http method is a lowercase HTTP request method. path is the visited path usually made by a user. Callback is a function that takes 2 - 3 parameters.

In the callback function it has 3 parameters that are passed in.

* req - request object
* res - response object
* next - optional callback function

