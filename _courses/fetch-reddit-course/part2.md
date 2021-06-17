---
title: javascript fetch Reddit API part 2
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

This is part 2 of the javascript fetch Reddit API we will be using the fetch function to make a <span class="highlight__code">GET</span> request to the programmerhumor subreddit Reddit API.

[starter files for part 2](https://github.com/colorlessenergy/fetch-reddit/tree/part1)

We will be using fetch to:

* hit the Reddit subreddit API endpoint
* get the JSON

<p class="highlight__file-desc">main.js</p>

```javascript

// the fetch function takes in a endpoint and returns
// a promise
fetch("https://www.reddit.com/r/programmerhumor.json")
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    return json;
  });
```

This returns a object which looks like this.

<span class="blog-image-container">
![Reddit API JSON]({{ site.baseurl }}/courses-images/returned-json.png "Reddit API JSON")
<span>

When we fetch the JSON from the endpoint it gives us a nested object. We will have to go into data then into children to get the data we need.

Since the data we want is nested we will have to

* index to the children property in the Object

```javascript
// The fetch function takes in a endpoint
// and returns a promise
fetch("https://www.reddit.com/r/programmerhumor.json")
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    // change json => json.data.children
    return json.data.children;
  })
```

Now we have access to all the data about every post in the programmerhumor subreddit. You can choose any subreddit of choice just change 'programmerhumor' with your subreddit of choice.

in [part 3](../part3) we will use the data to display it on the browser.