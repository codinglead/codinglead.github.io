---
layout: project
title: Re-writing A Git Commit
date: 2019-03-12 22:04 -0700
pic: images/git-logo.png
imgAlt: the git text logo
meta: We always want to include clear and detailed messages with our commits. However, even the most careful developers can make mistakes. Git has several options to re-write git history, including a git commit.
tags: ["html", "css", "javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /github/:title
---

We always want to include clear and detailed messages with our commits. However, even the most careful developers can make mistakes. Git has several options to re-write git history, including a git commit.

## Goal

Follow along to learn about <code class="highlight__code">git log --oneline</code> and how to re-write a git commit using <code class="highlight__code">git commit --ammend</code>.

## When you shouldn't rewrite git history

If you modify an existing commit, it actually removes the old commit from the project and makes a new one in its place. If others are working on the same branch they will still have your old commits when they pull down any changes, and will be asked to merge your rewritten commits with your new commits. This can get confusing. For that reason, you should not modify commit history on a branch others are also working on.

However, sometimes it is necessary to modify your local commit history (commits that exist locally on your machine, but have not been pushed to Github yet) before pushing your repository.

## Useful Git Commands

### $ git log --oneline

We can see a project's commit history with the <code class="highlight__code">git log</code> command. And we can add the <code class="highlight__code">--oneline</code> flag to display the history in an easier to read format:

```bash
$ git log --oneline
ad11d0f add README
3565681 add component styles
ec90a3b add component routing
a96a416 add core components
8f50a63 add initial files
```

### $ git commit --amend

Let's say we committed the right files, but we messed up the commit message. In this case we can use <code class="highlight__code">git commit --amend</code> to simply update the commit message:

```bash
$ git commit --amend -m "update README"
```

This changes the commit message on the most recent commit from "add README" (as seen in the git log above) to "update README". Note that it also assigns that commit a new id, since it deleted the old commit and created a new one in its place. A git id is just an identifier for git to keep track of git commits. The Git history reflects the change:

```bash
$ git log --oneline

2313b71 update README
3565681 add component styles
ec90a3b add component routing
a96a416 add core components
8f50a63 add initial files
```

If we accidentally forgot to include a file in the previous commit, we could also use <code class="highlight__code">git commit --amend</code> to add a file to the previous commit:

```bash
$ git add .gitignore
$ git commit --amend -m "update README and gitignore"
```

We just add the files we want to commit. Then run the <code class="highlight__code">git commit --ammend</code> command with our new commit message to update the latest commit to include the added files.

## Conclusion

Rewriting Git history can sometimes be a bad idea, but modifying a local commit before pushing to GitHub is fine. <code class="highlight__code">git commit --ammend</code> and <code class="highlight__code">git log --oneline</code> are two useful git commands to update the latest commit before pushing and logging previous commit messages in a easy to read format. There are many more ways to update git history, but I think these two are the most practical.