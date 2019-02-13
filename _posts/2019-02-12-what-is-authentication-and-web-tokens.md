---
layout: project
title: What is Authentication and Web Tokens
date: 2019-02-13 14:33 -0700
meta: When requests to a web sever come in you have this process called authentication that lets the server figure out exactly who made that request.
pic: images/javascript.png
imgAlt: the JavaScript text logo
tags: ["javascript"]
author: ["Daniel Munoz", "https://planeswalker1.github.io/", "https://github.com/planeswalker1"]
permalink: /javascript/:title
---

When requests to a web sever come in you have this process called **authentication** that lets the server figure out exactly who made that request.

## Goal

Follow along to learn what is:

* Authentication
* Authorization
* Token Based Authentication

## What is Authentication

It's the process of identifying a user. When requests to a web sever come in you have this process called **authentication** that lets the server figure out exactly who made that request. It is generally followed by **authorization** which is a process by which the server figures out if that user has the correct permissions to do what they want to do.

## Types of Authentication Methods

There are a various number of authentication methods:

HTTP Basic authentication
* username:password in the Authorization header

Cookies
* Users are tagged with a unique identifier (cookie), and their state (previous requests) is stored on the server

Tokens
* Users are given an access token which they send with every request

## Token-Based Authentication

In token based authentication a user recieves a token upon login. With every single request to the server, they send that token just as a reminder 'this is who I am, I am allowed to do this'. The server will compare that token against what they expected the token to look like and authorize the user if they have the correct permissions.

## What are the benefits of using tokens

Some benefits to using tokens are:

* stateless: The server will just make sure that the user has the correct permissions and won't remember any previous requests.
* stores information within the token itself
* can use with web or mobile users

## JWTs

Stands for json web tokens and its the most basic form of a token. What this looks like is there are three parts, each one seperated by a period.

* Header (type of token, hashing algorithm)
* Payload (Information server embeds to the token - could include user info)
* Signature (ensures token is no modified)

Information in the tokens are all base64 encoded which is just some different encoding method.

## Using JWTs

There are three ways to send information (tokens) to a server:

* Body
* URL parameter
* Headers

The preferred way is to use the header. It is preffered because GET requests don't have a Body. It is more secure to not use URL parameters because they get saved to the user's history.

## conclusion

Authentication is the process that lets a server figure out exactly who made a request to it. Authorization is a process by which the server figures out if that user has the correct permissions to do what they want to do. Tokens are a form of authentication in which users send a token, that contains information about them, with every request they make.
