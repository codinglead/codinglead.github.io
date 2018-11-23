---
layout: project
title: 7 git commands that every developer should know.
date: 2018-11-23 5:00 -0700
meta: An explanation on what is git and git commands everyone should know to be a sucessful developer.
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---

Everyone should know how to use a version control because it is important to be able to see your history of code you been working on.

Git is a very powerful and a common version control system.

## what is git

It is a popular version control system

* tracks changes between files, and creates commits which are checkpoints that you can revert to
* synchronize code between multiple people
* create alternate branches to store different versions of code

## relevant commands

There is a lot of commands. Here are a few important commands that everyone should know.

### git init

* creates a git repository in your current directory
* creates .git/ folder in your working directory

This is where everything is stored.

### git clone [url]

Copies a git repository located at url into a new directory in your working directory. Includes all files, history and branches.

A "fork" on Github will create your own copy of a repository. (makes you the owner of a new copy)

### git status

Shows current state of the repository. Displays changed files, added files, and removed files.

In simple terms it shows you the status of everything.

### git add [path]

Tell Git to include all the files at a [path] in the next commit. If you modify the files after git-adding them, git will remember their initial state when you added them.

To cancel the git add use the git reset. which just undos git add.

### git reset [path]

* undoes a git add
* remove files from the index

#### what is index
Index is tracking the difference between the working directory and any commits you make. Index are things that are staged for next commit.

### git reset [--soft | --hard] [commit]

restores state to a specific commit

-- soft flag will not affect  files
-- hard files will discard all changes

### git commit [-a] [-m [message]]

creates a new checkpoint in the project status along with a message. Stores the state of any added files.

Use the -a flag to automatically add all tracked files (files already know to git from previous git add commands)

Use -m flag to use the message as the commit message

## conclusion

Git is a very powerful tool to help you keep your files safe.

The commands every should know are...

* git init
* git clone [url]
* git status
* git add [path]
* git reset [path]
* git reset [soft | hard ] [commit]
* git commit [-a] [-m [message]]

happy coding
