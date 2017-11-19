---
title: Exercise - jQuerify
tagline: Drinking the cool-aid
---

<div class="goal"></div>

Goal: Clean up our code by using jQuery

~~~~

list)

* hook in jQuery in our app
* refactor changeStarRating
* refactor renderMovie
* refactor event listeners

~~~

item)

**Bring jQuery into the project** via a script element in `index.html` referencing the **CDN version**:

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```

~~~

Remember to place that script element **before `code.js`**, otherwise we won't be able to use jQuery in our code!

~~~

item)

With jQuery brought in, time to start using it! Start by **refactoring `changeStarRating`**, using jQuery instead of naked DOM manipulation.

~~~

item)

Next, refactor **`renderMovie`** to use jQuery instead.

~~

item)

Finally, hook up the **event listeners** with jQuery. The star rating is a prime candidate for some **event delegation**!

~~

<div class="checklist"></div>

You are done when...

* The app looks and works the same
* We're using jQuery throughout

