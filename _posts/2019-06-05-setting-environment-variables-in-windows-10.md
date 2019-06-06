---
layout: project
title: How to add mongod to the command prompt in windows 10
date:  2019-06-05 20:49 -0700
meta: Sometimes when installing software, it might not give you an option to set an environment variable. Learn how to set environment variables in windows 10
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

Sometimes when installing software, it might not give you an option to set an environment variable. This happened to me with mongodb.

## What are Environment Variables

An environment variable can be thought of as a path to an executable program. Having this set is useful if you want to run programs through the command prompt instead of having to open them in a file explorer.

## How to add mongod to the environment Variables

Here are the steps to add mongod to the environment variables in Windows 10, <strong>after</strong> installing mongodb.

* Find the path to the mongodb folder in your program files.
* Then go to the bin folder
If you’re not sure where it is, it’s probably in <code class="highlight__code">C:\Program Files\MongoDB\Server\4.0\</code>. It should look like this:

![Windows 10 MongoDB bin folder in File Explorer]({{ site.baseurl }}/images/mongodb-bin-path.png "Windows 10 File Explorer showing MongoDB bin folder")

* Copy the path of the bin folder, this should be <code class="highlight__code">C:\Program Files\MongoDB\Server\4.0\bin</code>
* Press the Windows key and then type "env". (If you dont have a Windows key you can press <kbd>ctrl</kbd> and <kbd>esc</kbd> or 
navigate to the start window.) Windows will suggest "Edit the system <strong>env</strong>ironment variables", click it.
* In the Advanced tab, click "Environment Variables".

![Windows 10 MongoDB bin folder in File Explorer]({{ site.baseurl }}/images/system-properties.png "Windows 10 System Properties Advanced tab")

* With the <code class="highlight__code">Path</code> variable highlighted in "System Variables", click "Edit":

![Windows 10 MongoDB bin folder in File Explorer]({{ site.baseurl }}/images/environment-variables.png "Windows 10 Environment Variables tab")

* Click "New"
* Paste your path of the copied bin folder from earlier. Make sure it ends with a <code class="highlight__code">\</code> like so:

![Windows 10 MongoDB bin folder in File Explorer]({{ site.baseurl }}/images/edit-environment-variables.png "Windows 10 Edit Environment Variables tab")

* click "OK" until you are out of the system properties

## Conclusion

Now you should be able to run <code class="highlight__code">mongod</code> and <code class="highlight__code">mongo</code> from anywhere in the command prompt.
