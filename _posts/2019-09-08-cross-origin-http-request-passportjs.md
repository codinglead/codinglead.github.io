---
layout: project
title: cross origin HTTP request using cookies and Passportjs
date: 2019-09-08 7:00 -0700
meta: When making a request to your backend that uses Passport you need to be able to pass cookies from your frontend to your backend to be able to allow the request to pass through
pic: images/javascript.png
imgAlt: the javascript logo
tags: ["javascript"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /javascript/:title
---
 
## what is the problem
 
When making a request to your backend that uses Passport you need to be able to pass cookies from a frontend server to a backend server because passport creates a session that requires cookies to be sent and received.
 
Many packages like create-react-app and Vue CLI creates a server that loads your frontend. This could cause some issue when making cross origin HTTP request using Passport for authentication.
 
The problem usually lies in the configuration for your HTTP request.
 
## solution
 
### using fetch
 
When using fetch it takes in a [init object](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) where you can control different settings.
 
The setting that is going to be used is the <code class="highlight__code">credentials</code> settings because it will allow the fetch method to send and receive cookies from a server.
 
We will need to set the credentials setting to 'includes' this allow you receive and send cookies or any other credentials with every request made to a different server.
 
Here is an example of how it would look like.
 
```javascript
fetch(BACKEND_URL + '/note', {
  credentials: 'include'
});
```
 
This is a real example where I am fetching all notes a user has created.
 
## conclusion
 
If you are having trouble fetching data from your backend that is being authenticated by cookies or passport.js make sure you have the correct configuration with fetch or any other method you are using to make the HTTP request.
 

