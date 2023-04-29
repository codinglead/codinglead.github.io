---
layout: project
title: 7 Git commands that every developer should know
date: 2018-11-23 5:00 -0700
updated: 2023-04-29 10:31 -0700
meta: Explanation of Git and 7 important Git commands.
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

Git is powerful because you can see the history of your code.

## what is Git

It is a popular version control system.

-   tracks changes between files and creates commits which are checkpoints that you can revert to
-   synchronize code between multiple people
-   create alternate branches to store different versions of code

## 7 Git commands

### git init

creates

-   a git repository in your current directory
-   .git/ folder in your working directory

### git clone [url]

Copies a git repository located at a url into a new directory which includes all files, history and branches.

A "fork" on GitHub will create a copy of a repository and make you the owner.

### git status

Shows the current state of the repository.

It can show changed, added and removed files.

### git add [path]

Tell Git to include all the files at a [path] in the next commit.

If you modify the files after git-adding them, git will remember their initial state when you added them.

### git reset [path]

Undoes <code class="highlight__code">git add</code> and removes files from the index.

#### what is index

Files added with <code class="highlight__code">git add</code> but not committed.

### git reset [--soft | --hard] [commit]

Restores repository to a specific commit.

-   --soft flag will not affect files
-   --hard flag will discard all changes

### git commit -m [message]

creates a new checkpoint in the project with a message. Stores the state of any added files.

Use -m flag to use the message as the commit message.

## conclusion

Git is a powerful tool to maintain a codebase.

-   git init
-   git clone [url]
-   git status
-   git add [path]
-   git reset [path]
-   git reset [--soft / --hard] [commit]
-   git commit -m [message]
