---
title: "Exercise - add user rating [TODO - screenshot]"
tagline: Because your opinion matters
---

<div class="goal"></div>

Goal: allow the user to rate the movie!

~~~

list)

Here's the plan:

* add a row of rating stars
* make `changeStarRating` func
* add event listeners to all stars

~~~

item)

Let's add a **ratings row** to the review! Here's what we want:

TODO - screenshot

~~~~

We'll make it easy for us and **use an HTML entity for the star**:

```html
<span>&#9733;</span>
```

Our ratings row should be a `<div>` with 5 such stars.

~~~~

Each **filled star should be black**:

```css
selectorForFilledStars {
  color: black;
}
```

...and the **empty stars grey**:

```css
selectorForEmptyStars {
  color: rgb(180, 180, 180);
}
```

~~~~

...what the **selectors for filled and empty** should be? Up to you! :)

You could for example...

* have grey as default and then apply a **`filled` class** to all filled stars
* apply a **grade class to the ratings row** (`grade1`, `grade2` etc) and find filled stars using `nth-child`

~~~

item)

In our `code.js` file, create a `changeStarRating` func! It should take a grade and manipulate the DOM accordingly:

```
function changeStarRating(grade){
  // Update stars so they appear correctly according to given grade!
}
```

~~~

To test your work, simply add a call to the bottom of `code.js`:

```
changeStarRating(3);
```

~~

item)

Now for the interaction - **allow the user to click on the stars**!

Clicking on the first star should trigger `changeStarRating(1)`, etc.

~~~

<div class="checklist"></div>

You are done when...

* There's a second row of stars
* Clicking a star fills all stars to that point
