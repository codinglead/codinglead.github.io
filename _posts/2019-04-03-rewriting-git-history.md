---
layout: project
title: Re-writing Git History
date: 2019-04-03 20:13 -0700
pic: images/git-logo.png
imgAlt: the git text logo
meta: git commit --amend is an easy way to modify the most recent commit, but if we need to modify history going further back then we'll need to use the git rebase -i command.
tags: ["html", "css", "javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /github/:title
---

<code class="highlight__code">git commit --amend</code> is an easy way to modify the most recent commit, but if we need to modify history going further back then we'll need to use the <code class="highlight__code">git rebase -i command</code>.

## Goal

Follow along to learn how to re-write git history using <code class="highlight__code">git rebase -i</code>, specifically, how to rewrite a git commit and combine multiple git commits.

## What does git rebase -i do?

<code class="highlight__code">git rebase -i</code> allows us to change commit messages and combine multiple commits by "squashing" them together. This command permanently deletes all commits from the point you're modifying onward, replacing them with new commits. This allows you to conveniently edit any previous commits, <strong>except for the root commit</strong>. Make sure to have a backup of the git project when attempting to use <code class="highlight__code">git rebase -i</code>.

## Changing old commit messages with git rebase -i

We can check the git history of a git repo with <code class="highlight__code">git log --oneline</code>. It will look something like this:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  f522f55 (HEAD -> master, origin/master, origin/HEAD) add click event listener to animate nav, routes, and components
  370bd39 add react files
  c59872b add start files
  9300b10 Initial commit
```

If the project has a lot of commits, the git log history will be long. If this happens, to exit out of this command you press <code class="highlight__code">q</code>.

Now, let's reword our second-to-last commit's message. If we type <code class="highlight__code">git rebase -i HEAD~2</code> it will launch the system editor, where we'll see a Git rebase file containing the two most recent commits. It will look something like this:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  pick 370bd39 add react files
  pick f522f55 add click event listener to animate nav, routes, and components

  # Rebase c59872b..f522f55 onto c59872b (2 commands)
  #
  # Commands:
  # p, pick = use commit
  # r, reword = use commit, but edit the commit message
  # e, edit = use commit, but stop for amending
  # s, squash = use commit, but meld into previous commit
  # f, fixup = like "squash", but discard this commit's log message
  # x, exec = run command (the rest of the line) using shell
  # d, drop = remove commit
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
```

To reword some of the commit messages, we can change <code class="highlight__code">pick</code> before those lines to <code class="highlight__code">reword</code>, as follows:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  reword 370bd39 add react files
  pick f522f55 add click event listener to animate nav, routes, and components

  # Rebase c59872b..f522f55 onto c59872b (2 commands)
  #
  # Commands:
  # p, pick = use commit
  # r, reword = use commit, but edit the commit message
  # e, edit = use commit, but stop for amending
  # s, squash = use commit, but meld into previous commit
  # f, fixup = like "squash", but discard this commit's log message
  # x, exec = run command (the rest of the line) using shell
  # d, drop = remove commit
  #
  # These lines can be re-ordered; they are executed from top to bottom.
  #
  # If you remove a line here THAT COMMIT WILL BE LOST.
  #
  # However, if you remove everything, the rebase will be aborted.
```

When we save and close that file, we’re immediately presented with a commit message file in the editor, allowing us to update the commit message we marked for rewording:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  add base components and styles

  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # Author:    Daniel Munoz <daniel.munozdev@gmail.com>
  # Date:      Mon Mar 18 23:18:42 2019 -0700
  #
  # interactive rebase in progress; onto c59872b
  # Last command done (1 command done):
  #    reword b7a96a9 add base components and styles
  # Next command to do (1 remaining command):
  #    pick d996970 add click event listener to animate nav, routes, and componen$
  # You are currently editing a commit while rebasing branch 'master' on 'c59872b$
  #
  # Changes to be committed:
  #       modified:   package.json
  #       deleted:    src/App.css
  #       modified:   src/App.js
```

Let’s change the commit message at the top to say 'add base components and styles'. We save and close the file, and now the changes are reflected in the Git history:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  $ git log --oneline
  9b46f95 (HEAD -> master) add click event listener to animate nav, routes, and components
  d520581 add base components and styles
  c59872b add start files
  9300b10 Initial commit
```

Note that the last two commits (the two we rebased) now have new id's, because the old commits were deleted and replaced with new ones.

## Combining Multiple Commits with git rebase -i

Now, let's say we want to combine multiple commits for one feature into a single commit before publishing to Github. We want to combine the "add start files" and "add base components and styles" commits.

We can type <code class="highlight__code">git rebase -i HEAD~3</code> to bring up the three most recent commits in the rebase editor window. To combine a commit with the previous commit, we can change <code class="highlight__code">pick</code> to <code class="highlight__code">squash</code>.

Let’s change <code class="highlight__code">pick</code> to <code class="highlight__code">squash</code> on the "add base components and styles" commit in order to combine that one with the "add start files" commit directly preceding it:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  pick c59872b add start files
  squash d520581 add base components and styles
  pick 9b46f95 add click event listener to animate nav, routes, and components
```

After saving and closing this file, we’re presented with a commit message file. We can write the commit message for the new combined commit in this file:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  # This is a combination of 2 commits.
  # This is the 1st commit message:

  add start files

  # This is the commit message #2:

  add base components and styles

  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # Author:    Daniel Munoz <daniel.munozdev@gmail.com>
  # Date:      Mon Mar 18 22:55:50 2019 -0700
  #
  # interactive rebase in progress; onto 9300b10
  # Last commands done (2 commands done):
  #    pick c59872b add start files
  #    squash d520581 add base components and styles
```

We can update the first commit message to "add start components and styles" and simply delete the "add base components and styles" line, since we’re eliminating the second commit from our project:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  # This is a combination of 2 commits.
  # This is the 1st commit message:

  add start components and styles

  # This is the commit message #2:

  # Please enter the commit message for your changes. Lines starting
  # with '#' will be ignored, and an empty message aborts the commit.
  #
  # Author:    Daniel Munoz <daniel.munozdev@gmail.com>
  # Date:      Mon Mar 18 22:55:50 2019 -0700
  #
  # interactive rebase in progress; onto 9300b10
  # Last commands done (2 commands done):
  #    pick c59872b add start files
  #    squash d520581 add base components and styles
```

After saving and closing that file, the Git history reflects the change:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  $ git log --oneline
  6b3573d (HEAD -> master) add click event listener to animate nav, routes, and components
  26fb702 add start components and styles
  9300b10 Initial commit
```

## Pushing Rewritten History to Github

Be extremely careful when changing history on a public repository. Do not make history changes to a remote repository being worked on by other developers. However, you may push rewritten history to a public repository if you're the only developer working on it.

Normally you'll receive the following error if you push a project to Github, rewrite history, and then attempt to push the project again:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  $ git push origin master
  To https://github.com/planeswalker1/react-navbar.git
  ! [rejected]        master -> master (non-fast-forward)
  error: failed to push some refs to 'https://github.com/planeswalker1/react-navbar.git'
  hint: Updates were rejected because the tip of your current branch is behind
  hint: its remote counterpart. Integrate the remote changes (e.g.
  hint: 'git pull ...') before pushing again.
  hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

This is simply because the local commits and remote commits no longer match. In order to force Github to throw away the old version of the project and replace it with the newly-edited local commit history, you must use the <code class="highlight__code">--force</code> option:

<p class="highlight__file-desc">Command Prompt</p>

```bash
  $ git push origin master --force
```

## Conclusion

<code class="highlight__code">git rebase -i</code> is a cool command to modify and combine previous commits. Make sure to have a backup of the git project when attempting to change git history because it is irreversible.