---
title: javascript fetch Reddit API part 3
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

What we want to do now is display the title and a picture of the post if it has one.

[starter files for part 3](https://github.com/colorlessenergy/fetch-reddit/tree/part2)

go the main.js file it will look like this

<p class="highlight__file-desc">main.js</p>

```javascript
fetch("https://www.reddit.com/r/programmerhumor.json")
  .then(function (response) {
    return response.json();
  }).then(function (json) {
    return json.data.children;
  });
```

Now we will make a function that takes in data as a parameter and displays it on the browser. We will pass in the array with objects with the data we got from the <span class="highlight__code">fetch()</span> call.

We will store the data we want to display in an array then pass the array and the link to the post to another function which will display it on the browser. The data we want is the title of the post and the image if it exist.

```javascript
function dataToDom(arr) {
  // we will put all the data
  // we want from the object here
  let data = [];

  // looping through the array of objects
  // that we got from the Reddit API
  arr.forEach(function (obj) {
    // pass in a object with the data
    // we want and the element to append
    // the data with
    data.push({
      data: obj.data.title,
      element: 'h1'
    });

    // checking if an image exist
    if (obj.data.url.includes('jpg')) {
      data.push({
        data: obj.data.preview.images[0].source.url,
        element: 'img'
      });
    } else {
      data.push({
        data: 'no image',
        element: 'div'
      })
    }

    // we will pass in the data array
    // and the link to the post to another function
    createElementsAndAppendElements(data, obj.data.permalink);

    // need to reset the data array
    // because we only want to pass
    // the title and image of individual post
    data = [];
  });
}
```

We will need to add a div to the html so we can populate it with data from the reddit post.

<p class="highlight__file-desc">
 html
</p>
```html
<!-- populated by javascript -->
<div id="posts"></div>
```

now we need to create the <span class="highlight__code">createElementsAndAppendElements()</span> function. You may be wondering why I passed in the url for the post as a single argument instead of in the data array, I did this because we needed it to be the container of the other elements.

First we need to get the div to populate data with. We also have to create the a element and give it the link to the post.

<p class="highlight__file-desc">
 JavaScript
</p>

```javascript
// get the container to populate
// data with. Put this at the top of the file
// we are going to be using this somewhere else
let posts = document.querySelector('#posts');

function createElementsAndAppendElements(arr, url) {
  // have the a tag be the container, so the whole content
  // is clickable to the reddit post
  let createA = document.createElement('a');
  createA.href = 'https://www.reddit.com/' + url;
};
```

Now we have to loop through the array of objects we will pass into the <span class="highlight__code">createElementsAndAppendElements()</span> function. For every element in the array we will create a <span class="highlight__code">DOM Element</span> with the element specified in the object. We will check the <span class="highlight__code">obj.element</span> property of the object to see if it has a img or not. If it does pass in the data to the source if not pass the data as text. Then we will append the elements we created into the <span class="highlight__code">a</span> tag we created earlier. After the <span class="highlight__code">a</span> tag is populated with data it will be appended to the <span class="highlight__code">div with id of post</span>.

<p class="highlight__file-desc">
 JavaScript
</p>

```javascript
function createElementsAndAppendElements(arr, url) {
  arr.forEach((obj) => {
    let createElement = document.createElement(obj.element);
    // if it is an image add a source to the image otherwise give it text
    if (obj.element == 'img') {
      createElement.src = obj.data;
    } else {
      createElement.textContent = obj.data;
    }

    createA.appendChild(createElement);

    // populate the posts div with post
    posts.appendChild(createA)
  });
};
```
the whole code togther looks like this

<p class="highlight__file-desc">
 JavaScript
</p>

```javascript
// get the div with the post id from the dom
// this is at the very top of the file..
let posts = document.querySelector('#posts');

function createElementsAndAppendElements(arr, url) {
  // have the a tag be the container, so the whole content
  // is clickable to the reddit post
  let createA = document.createElement('a');
  createA.href = 'https://www.reddit.com/' + url;

  arr.forEach((obj) => {
    let createElement = document.createElement(obj.element);
    // if it is an image add a
    // source to the image otherwise give it text
    if (obj.element == 'img') {
      createElement.src = obj.data;
    } else {
      createElement.textContent = obj.data;
    }

    createA.appendChild(createElement);

    // populate the posts div with post
    posts.appendChild(createA)
  });
};
```

now lets call the <span class="highlight__code">dataToDom()</span> inside the fetch function.

```javascript
fetch("https://www.reddit.com/r/programmerhumor.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // an array of objects with data about posts
      let postFromFrontPage = json.data.children;

      dataToDom(postFromFrontPage);
    });
```

We will now throw the whole fetch function into another function. We will do this so it is easier to search for different subreddits by passing in a argument and concatenating it into the search query.

```javascript
// pass in a string of the subreddit
function search(subreddit) {

  // concat the subreddit with the url
  fetch("https://www.reddit.com/r/"+ subreddit +".json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      // an array of objects with data about posts
      let postFromFrontPage = json.data.children;

      dataToDom(postFromFrontPage);
    });
}
```

Now we can use the <span class="highlight__code">search()</span> function to get data from any subreddit and have it show up on the page.

```javascript
search('programmerhumor');
```

now we need to make the input function to let the user put a subreddit in and they will get the post from that subreddit. in [part 4](../part4) we will make the input work with any subreddit that the user puts in.