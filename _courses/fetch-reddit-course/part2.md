---
title: javascript fetch reddit api part 2
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

This is part2 of the javascript fetch reddit api we will be using the fetch function to make request to the programmerhumor subreddit reddit api.

[starter files for part 2](https://github.com/colorlessenergy/fetch-reddit/tree/part1)

We will be using fetch to:

* hit the reddit subreddit api endpoint
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
  })
```

This returns a object which looks like this.

![json returned]({{ site.baseurl }}/courses-images/returned-json.png)

when we fetch the json from the endpoint it gives us a nested object. we will be indexing object properties.  We will have to go into data then into children to get the data we need.

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

Now we have access to all the data about every post under the programmerhumor subreddit. You can choose any subreddit of choice just change the 'programmerhumor' with your subreddit of choice.

![json returned]({{ site.baseurl }}/courses-images/array-with-data-from-reddit.png)

Now we have an array of objects with data we want.

in [part3](../part3) we will use the data to display it on the browser.