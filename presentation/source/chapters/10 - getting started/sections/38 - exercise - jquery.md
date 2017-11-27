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

~~

<div class="solution"></div>

If you get stuck, see the [jQuery](https://github.com/krawaller/js-app-solutions/tree/master/jquery) or [jQuery alt](https://github.com/krawaller/js-app-solutions/tree/master/jquery_alt) solutions.
 
~~

As a **stretch task**: Although the performance is rarely an issue, it is considered bad form to **reselect the same element** when we don't really have to.

This can be fixed by **caching selected elements**.

~~

For example, inside `renderMovie`, we probably do something like:

```
$(".movietitle").text(movieData.title);
```

But the `$(".movietitle")` selector will return the same thing each time!

~~

We can therefore **do all selections** in the bootstrapping part...

```
let ui = {
  title: $(".movietitle"),
  // rest here...
}
```

...and instead use that inside the functions:

```
ui.title.text(movieData.title);
```
