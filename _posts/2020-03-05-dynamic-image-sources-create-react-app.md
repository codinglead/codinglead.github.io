---
layout: project
title: dynamic image source create-react-app
date: 2020-03-06 7:00 -0700
updated: 2021-10-16 10:19 -0700
meta: how to load images with different sources / url with create react app
pic: images/react.jpeg
imgAlt: the react logo
tags: ["react"]
author: ["Brian Munoz", "https://brianmunoz.co/", "https://github.com/colorlessenergy"]
permalink: /react/:title
---

Recently I had to load many images with part of the URL coming from an API and display them on the home page. I loaded them in using <code class="highlight__code">require()</code>, you can also use <code class="highlight__code">import</code>, this will tell <code class="highlight__code">webpack</code> to include those files when it is built and bundled.

## loading in the images and displaying them

I will be showing you the code inside the <code class="highlight__code">render()</code> method.

<p class="highlight__file-desc">React</p>

```javascript
render() {
  return (
    <div>
      {/* looping through all the post that were retrieve from an API */}
      { this.props.posts.map(post => {
        // here we are dynamically creating a path to the image
        // require() returns a string to the path of the image
        const image = require('../../assets/' + post.character + '.png');

        return (
          // we put the image variable we made earlier into the src attribute
          <img key={ post.id } src={ image } alt={ post.character } />
        );
      }) }
    </div>
  );
}
```

We used <code class="highlight__code">require()</code> instead of an <code class="highlight__code">import</code> statement because they are only allowed at the top of the file.
