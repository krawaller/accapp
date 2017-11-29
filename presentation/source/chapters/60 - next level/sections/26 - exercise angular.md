---
title: Exercise - AngularJS Controller
tagline: Wrestling the beast
---


<div class="goal"></div>

Goal: Simplify our code with AngularJS


~~

Time to finally **start using AngularJS for real**!

~~~

list)

Here's the plan:

* Kick out jQuery
* Let AngularJS render the data
* Handle the star clicks with AngularJS

~~~

item)

First point of business - we **won't need jQuery anymore**, so...

* **remove all jQuery code** from `code.js`. Yes, this means all of `renderMovie`, `changeStarRating` and the event handler setup!
* **remove all jQuery references** elsewhere in the app (package.json, tsconfig.json, etc)

~~~

item)

Now we have to **make AngularJS show the data** instead!

Begin with **exposing the movie data in the controller** by **attaching it to `$scope`** (or `this` if you use that syntax).

You could expose the 4 keys one by one, but it is probably easier to expose the entire object:

```javascript
$scope.movie = movieData;
```

~~~

Having done that, go back to the template and **interpolate the data** one piece at a time!

* The **title** and **description** will just be **straightforward interpolation**.
* The **image url** will require you to use the **`ng-src`** directive.
* The **actor list** will need the **`ng-repeat`** directive.

~~~

item)

Time to **handle the rating selection**! Because AngularJS templates are **data-driven**, we need to stop cheating and actually start **track the current rating**.

```javascript
$scope.rating = 0;
```

~~~~

Now, with the `rating` in place, we can **dynamically give `filled` classes to the stars** depending on the rating value, using `ng-class`.

For example, the **third star** could look like this:

```html
<span ng-class="{filled: rating>=3}">&#9733;</span>
```

~~~

Next we **expose a handler** in which we update that rating:

```javascript
$scope.changeStarRating = function(newRating){
  $scope.rating = newRating;
}
```

~~

question)

Wait - after we update the rating, don't we have to **tell AngularJS to rerender**?

~~~

answer)

That's the beauty of framework magic - **no**, we don't! AngularJS takes over the responsibility of "triggering `renderMovie`", so to speak.

~~~

Anyhow - with the handler exposed, now **use it in `ng-click` directives on the star elements** in the HTML!

~~~

<div class="checklist"></div>

You are done when...

* The app works exactly like before
* No `{{ .. }}` ever flash by and there are no silly image 404 errors
* jQuery has been thrown out

~~

<div class="solution"></div>

If you get stuck, see the [Angular Next](https://github.com/krawaller/js-app-solutions/tree/master/angular_next) solution.
