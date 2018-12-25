---
layout: project
title: mongoose .save() doesn't update objects in an array MongoDB
date: 2018-12-24 4:00 -0700
meta: mongoose save() doesn't update the document in MongoDB. We have to tell mongoose that we have changed the objects in the array. we use markModified(path)
pic: images/node.svg
imgAlt: the nodejs backend logo
tags: ["backend"]
author: ["Brian Munoz", "https://colorlessenergy.github.io/", "https://github.com/colorlessenergy"]
permalink: /backend/:title
---

When trying to update an array of objects, using mongoose, you will have to tell MongoDB that there are pending changes by using the <span class="highlight__code">markModified(path)</span> method. after this you will have to call the <span class="highlight__code">save()</span> method.


## example

We have the <span class="highlight__code">passwordsArr</span> part of the schema as an array of objects.

```javascript

// passwordsArr modified

// mark the path as having changes to write to the DB
user.markModified('passwordsArr');

// now saves the document
user.save(function (err, user) {
  if (err) return next(err);

  return res.status(200).send('sucessfully changed password');
});
```

This will sucessfully update the document into the database

## conclusion

Use <span class="highlight__code">markModified(path)</span> if the document isn't updating in the MongoDB. Then use <span class="highlight__code">save()</span>.