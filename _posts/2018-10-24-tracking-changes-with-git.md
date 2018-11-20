---
layout: project
title: Tracking changes with Git · Daniel Munoz
date: 2018-10-24 3:38 -0700
meta: Now that we know how to setup Git, lets see how we can track changes.
pic: images/git-logo.png
imgAlt: the git text logo
tags: ["html", "css", "javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /github/:title
---

Now that we know how to setup Git, lets see how we can track changes.

## Goal

Follow along to see how changes are tracked using Git.This blog is a continuation of the last one. <a href="{{ site.baseurl }}/2018/10/17/initializing-Git">If you haven't read the last blog here's a link to it</a>. In this blog we will practice tracking changes in our <em>friends</em> project directory. We will create a one-page website that will list our friends. The steps we follow will reflect the daily workflow you might see when using Git.

## Create Files
We have our project directory created and our Git repository initialized. Now, we can create the HTML file that will list our friends. Let's make an empty file in the command prompt in our project directory:

<p class="highlight__file-desc">command prompt</p>

```bash
$ touch index.html
```

Now, let's open our project directory in your code editor of choice so that we can add some content to our empty HTML file. I like to use <a href="https://code.visualstudio.com/">Visual Studio code</a>.

Here is our project directory in Code with the empty file open.

![Photo of a file open with Visual Studio Code]({{ site.baseurl }}/images/init.png "Visual Studio Code file")

Let's add some starter html. Copy and paste this text into your index.html file:

<p class="highlight__file-desc">friends/index.html</p>

```html
<h1> Hello World </h1>
<h2> A program to list our friends. </h2>

<p>This page is an attempt to list our friends.  We're interested to see how long our list can become.</p>

<p>We'll start with a few friends.</p>

<ul>
  <li>Angel</li>
  <li>Brian</li>
  <li>Christian</li>
  <li>David</li>
  <li>Ricardo</li>
</ul>
```

We can view our HTML in the web browser by double-clicking on index.html.

![Photo of the friends list website]({{ site.baseurl }}/images/index.png "friends list website")

## Git tracking

Now, let's see what Git has done with our changes by running the command <code class="code">git status</code>:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	index.html

nothing added to commit but untracked files present (use "git add" to track)

```

When we ask for the status, Git lets us know that there has been a new file added to our project directory but it is not being tracked because we haven't yet added it to the files for Git to track. Let's do this now using the command Git tells us to use: <code class="code">git add</code>.

<p class="highlight__file-desc">command prompt</p>
```bash
$ git add index.html
```

Now when we run <code class="code">git status</code>, we see that adding our new file told Git that these are changes to start tracking. Git lets us know we have a new file that exists, but has not been committed.

<p class="highlight__file-desc">command prompt</p>

```bash
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   index.html
```

## Making Git commits

A commit in Git is a way of saving changes to the permanent history of our project. Right now, our file is saved on our hard drive but it has not been committed to the historical log of the friends list website. When we make a commit, it is a snapshot of our work exactly as it exists at that moment. Let's commit our work now to the project history

The command is <code class="code">git commit</code>:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git commit -m "add HTML file with a list of 5 friends"
```

We use the <code class="code">git commit</code> command, followed by a short, but descriptive message in <code class="code code--red">" "</code> after the <code class="code code--blue">-m</code>. For consistency, the message should complete the sentence, <code class="code code--red">"This commit will…"</code>. So, when looking at our commit we know that this commit will <code class="code code--red">"add HTML file with a list of 5 friends"</code>.

Let's look at our Git history now using the <code class="code">git log</code> command:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git log
commit c4bf9959bf7269d01be2c4aadb6b15fe951647d3 (HEAD -> master)
Author: Daniel Munoz <daniel.munozdev@gmail.com>
Date:   Fri Oct 19 14:20:34 2018 -0700

    add HTML file with a list of 5 friends
```

Our initial commit has been assigned a unique identifier of numbers and letters, <code class="code code--blue">c4bf9959bf7269d01be2c4aadb6b15fe951647d3</code>. If we want to see our HTML file as it exists right now, we can return to this unique commit.

Let's add more friends to our HTML file:

<p class="highlight__file-desc">friends/index.html</p>

```html
<h1> Hello World </h1>
<h2> A program to list our friends. </h2>

<p>This page is an attempt to list our friends. We're interested to see how long our list can become.</p>

<ul>
  <li>Angel</li>
  <li>Brian</li>
  <li>Christian</li>
  <li>David</li>
  <li>Jimmy</li>
  <li>Kite</li>
  <li>Ricardo</li>
</ul>
```

After we save our updates, let's look at what our <code class="code">git status</code> displays:

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

It shows us that the <code class="code">index.html</code> file has been modified. If we would like to commit these changes to our project history, we can add and commit them now.

So, how do we know when we should make a commit? The phrase that many developers use to describe a good commit is a "logically separate change set".

As you practice using Git, your own sense of when to commit will evolve as your coding becomes more and more advanced.

Since we added a couple of additional lines to our HTML and are going to stop working on this code for a while, let's go ahead and add our file and commit our changes.

```bash
$ git add index.html
$ git commit -m "add 2 friends"
```

Here is our project's history now:

```bash
$ git log
commit c8000c41131f64f56611c9cee9b09046d363f162 (HEAD -> master)
Author: Daniel Munoz <daniel.munozdev@gmail.com>
Date:   Fri Oct 19 15:24:25 2018 -0700

    add 2 friends

commit c4bf9959bf7269d01be2c4aadb6b15fe951647d3
Author: Daniel Munoz <daniel.munozdev@gmail.com>
Date:   Fri Oct 19 14:20:34 2018 -0700

    add HTML file with a list of 5 friends

```

## Conclusion

As your project grows, we will be able to run <code class="code">git log</code> to see how it has evolved from the beginning to its current state by reading each of our commit messages. The log also tells us the dates and authors of the code that was committed.

This may seem like more details than we want for a simple friends list website, but as we go you will see how using Git will make working on more complex tasks or in collaboration with a bigger team incredibly powerful for keeping the code organized with each other and over time.

Let's take a final look at our website to see our changes.

![Photo of the friends list website]({{ site.baseurl }}/images/index-complete.png "friends list website complete")

Good job!



