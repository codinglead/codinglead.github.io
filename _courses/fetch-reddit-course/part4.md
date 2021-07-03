---
title: javascript fetch reddit api part 4
layout: project
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
---

What we are trying to do is take user input from the form and create a AJAX request to search in different subreddits.

[starter files for part 4](https://github.com/colorlessenergy/fetch-reddit/tree/part3)

We first are going get access to the form and the input tags. We will give the form an event listener of submit so if the user is focus on the input and presses enter or if the user presses the submit button it will submit the form and we will use JavaScript to handle it. This will be at the top of the file after the <span class="highlight__code">post</span> variable.

<p class="highlight__file-desc">main.js</p>

```javascript
// get the form and input from the HTML
let form = document.querySelector('.form');
let input = document.querySelector('input');


// have javascript listen to the submit event listener on the form
form.addEventListener('submit', function (event) {

  // this will stop the form from actually submitting
  event.preventDefault();
});
```

Now we need to get the user input value and pass into the search function we made in the previous part.

```javascript
form.addEventListener('submit', function (event) {
  // this will stop the form from actually submitting
  event.preventDefault();

  // clear all the posts after every search
  posts.innerHTML = "";

  // checking if the input value
  // isn't empty
  if (input.value) {
    search(input.value);
  }

  // reset the input field
  input.value = "";

});
```

Now the user can input any subreddit and our program will look up the subreddit and return data. It still doesn't look nice we will add css in the next part. [part 5](../part5)