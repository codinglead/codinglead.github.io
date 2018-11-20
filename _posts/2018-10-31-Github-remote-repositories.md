---
layout: project
title: Github Remote Repositories · Daniel Munoz
date: 2018-10-31 3:30 -0700
meta: When we want to publish our code online (save it on the cloud so we can access it from any device), we want to store it in a remote repository.
pic: images/git-logo.png
imgAlt: the git text logo
tags: ["html", "css", "javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /github/:title
---

When we want to publish our code online (save it on the cloud so we can access it from any device), we want to store it in a remote repository. In this blog, we'll dive in to using GitHub to store our code remotely.

<!-- ==== -->
<!-- GOAL -->
<!-- ==== -->

## Goal

Follow along to see how we can publish code being tracked by git online. This blog is a continuation of the last one. <a href="https://codinglead.github.io/2018/10/24/tracking-changes-with-git/">If you haven’t read the last blog here’s a link to it</a>. In this blog we will practice uploading the changes of our <em>friends</em> project directory. The steps we follow will reflect the daily workflow you might see when publishing on GitHub.

<!-- ============================= -->
<!-- REMOTE AND LOCAL REPOSITORIES -->
<!-- ============================= -->

## Remote and Local Repositories

First, let's talk about the difference between local and remote. When we talk about a <strong>local</strong> repository, we mean one that is accessible only when using the device where it is saved. For example, the friends-list website project that we built has a local .git repository. If you want to see your code on another device, you will not be able to access it. A <strong>remote</strong> repository is one that is saved in a location outside of your device, but still accessible by it. We will be saving our code remotely to a repository on GitHub.

Let's copy our local <code class="highlight__code">.git</code> repository to a remote repository on GitHub now.

<!-- ============================ -->
<!-- CREATING A GITHUB REPOSITORY -->
<!-- ============================ -->

## Creating a GitHub repository

First, we need to create the remote repository on GitHub. Make sure you have a github account. If you don't, you can <a href="https://github.com/join">sign up for a free GitHub account here</a>.

![Photo of my GitHub profile's repositories page]({{ site.baseurl }}/images/repo.png "My GitHub profile's repositories page")

Once logged in, we'll select the <em>New Repository</em> or <em>New</em> button to go to the <em>Create a new repository screen</em>:

![Photo of GitHub's Create a new repository screen]({{ site.baseurl }}/images/repo-create.png "Create a new GitHub repository screen")

Let's walk through the options we need to complete for our new repository.

First, we enter the repository name that matches the name of our project directory. For this project, we'll enter "friends". Though the description is optional, it can be helpful to our future selves and anyone else looking at our repository to see a quick description of its content.

Since we are using free GitHub accounts, Public is the only option for our repositories. As it notes, everyone can see the contents of the repository but as the owner of it, you will be the only person who can determine what code can be committed to it.

The last option asks whether or not to initialize the repository with a <strong>README</strong>. A README file is a detailed description of the repository including information like authors, usage instructions and licensing. Let's keep it unchecked for now.

<!-- ================= -->
<!-- PUSHING TO GITHUB -->
<!-- ================= -->

## Pushing to GitHub

With an empty repository awaiting our code, we can now follow the steps to <strong>push</strong> our code from our local repository to the remote repository.

In our project directory, we will make sure our code is working. In this case, we open it in the browser and it looks good. We also ensure that there aren't any changes that we need to commit:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git status
```

Now we need to tell Git where our remote repository is by providing the web address. We'll use the <code class="highlight__code">git remote</code> command.

<p class="highlight__file-desc">command prompt</p>

```bash
$ git remote add dm https://github.com/planeswalker1/friends
```

This command tells Git to store information about a remote repository that we gave the nickname, <em>dm</em> (my initials) located at <em>https://github.com/planeswalker1/friends</em>. We could use any nickname for the remote, but I've chosen <em>dm</em> for simplicity.

Note that <em>your</em> command should contain the URL location for your GitHub repo, and your initials for the nickname. Mine is https://github.com/planeswalker1/friends and <em>dm</em> in the example above, but yours will likely differ.

To see that Git has done this successfully, we can run this command:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git remote -v
dm	https://github.com/planeswalker1/friends (fetch)
dm	https://github.com/planeswalker1/friends (push)
```

This shows us all the remotes stored in Git for this project. In this case, we only have one, with the nickname <em>dm</em>.

To push our code, which means we are copying it from the local to the remote, we run this command:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git push dm master
```

This indicates that we should push code to the remote with the nickname <em>dm</em> from the master. We haven't used the word, "master", before but this is the name Git uses for the main Git repository on our local machine. In the future, we'll see that we can have many copies of a repository on our local machine all in different stages of development. The <strong>master</strong> is always considered the master copy.

For security reasons, only the owner of the remote GitHub repository is able to push code to it. This means that we need to enter our login information to confirm our ownership. Once entered, the code is copied to the GitHub repository and we can see it online if we go to our GitHub repository URL <em>https://github.com/planeswalker1/friends</em>. We can see the file structure and the commits in GUI form that we saw in our terminal.

<!-- =================== -->
<!-- CLONING FROM GITHUB -->
<!-- =================== -->

## Cloning from GitHub

So, how do we get our code back to our local from the remote? What if we push our code up to GitHub on a desktop and want to work on it on a different device? To do this, we'll need to clone our GitHub repository on our local machine.

To practice this, let's delete our friends project directory and clone it again from GitHub. To delete a whole directory, we can't be in it, in the terminal, so we'll go up a directory level and then remove it:

<p class="highlight__file-desc">command prompt</p>

```bash
$ cd ..
$ rm -rf friends
```

Now, if we want to copy it in the exact same location from GitHub, we get the URL for the remote repository and run:

<p class="highlight__file-desc">command prompt</p>

```bash
$ git clone https://github.com/planeswalker1/friends
```

Now, an <code class="highlight__code">ls</code> shows us our directory is there with our code file in it. Let's go into the project directory:

<p class="highlight__file-desc">command prompt</p>

```bash
$ cd friends
```

If we do a <code class="highlight__code">git log</code>, we see that our commit history arrived with our directory and code.

If we run <code class="highlight__code">git remote -v</code>, we also see that our newly created local <code class="highlight__code">.git</code> repository is automatically linked - with the nickname <strong>origin</strong> - to the remote repository from which we cloned.

<p class="highlight__file-desc">command prompt</p>

```bash
$ git remote -v
origin  https://github.com/planeswalker1/friends (fetch)
origin  https://github.com/planeswalker1/friends (push)
```

If we make changes to the code and want to push again, we would be able to use the <em>origin</em> nickname that came with the repository from GitHub (e.g. <code class="highlight__code">git push origin master</code>).

Note: only one location can be designated with the nickname "origin". So, if we clone one project but want to push to two different repositories, they cannot both be nicknamed "origin". That is another good reason to use your initials as the nickname of the remote repository.

<!-- ========== -->
<!-- CONCLUSION -->
<!-- ========== -->

## conclusion
This has been a mountain of Git concepts and terminology to explore. Use these blogs for reference to walk through set up and usage in your projects to come. Before you know it, it'll become ingrained in your daily workflow.

<strong>Be sure that you are not cloning a project inside of an existing local repository. In other words, you should not be inside of a project directory when you run the git clone command. Otherwise you'll end up with one git repository inside of another.</strong>