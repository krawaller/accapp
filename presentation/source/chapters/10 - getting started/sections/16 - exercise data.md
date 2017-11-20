---
title: Exercise - Data migration
tagline:
---

<div class="goal"></div>

Goal: no more hardcoded data in the HTML!

~~~~

list)

Here's the plan to accomplish this:

* migrate data
* make HTML elements referrable
* make renderMovie function
* bootstrap application

~~~

item)

As a first step, let's **move the data** from the HTML to a **data variable**. Create a **new `data.js` file** where we can do our work!

![](resources/images/datafile.png)

Then **include this in `index.html`** via a script element:

```html
<script src="./data.js"></script>
```

~~~

in this file, declare a **`movieData`** variable. This will hold an **object containing the movie data**!

```javascript
let movieData = {
  // movie info will go here
};
```

~~~

Now start **strip out the data** from the template and **move it into the object**!

For each piece of data you'll have to...

* **make up a suitable key**.
* **add the key** and the **corresponding value** to the object
* **remove the data** from the HTML

~~

For instance, the **movie title**...

```html
<h2>Inception</h2>
```

...might end up like this...

```javascript
let movieData = {
  title: "Inception",
  // rest of data will follow here
};
```

...leaving the HTML like this:

```html
<h2></h2>
```

~~~~

Keep adding the other pieces of data to the object until **no data remains in the HTML template**!

~~

The **list of actors** should end up as an **array of strings**...

```javascript
["Leonardo DiCaprio", "Ellen Page", "Tom Hardy"]
```

...and the HTML list should be an **empty `ul`**:

```html
<ul></ul>
```

~~ 

item)

The plan of course is to **programmatically add the data** to the document instead. This requires **getting references to the nodes** to insert the various pieces of data in the correct places!

~~

To make this easier, **add id:s or classes** as you see fit to the now-empty elements in `index.html`. For example:

```html
<h2 id="movietitle"></h2>
```

~~~

Side note; with some clever use of CSS selectors it's possible to get the correct nodes **without classes or id:s**.

So, if you feel up for it, feel free to **skip this step**!

~~

item)

Let's create a **new `code.js` file** to hold the movie rendering logic:

![](resources/images/codefile.png)

Add this too to `index.html` via a **`script` element**.

~~

Inside that file, create a **`renderMovie` function**:

```javascript
function renderMovie(movie){
  // rendering logic will go here
}
```

This function will **receive a movie object** like the one in `data.js`, and **update the document** by mutating the right nodes with the right data!

~~~

For example, dealing with the title:

```javascript
function renderMovie(movie){
  document.getElementById("movietitle").innerText = movie.title;
  // rest of data will be inserted here
}
```

Now **finish the function** so that it renders all movie data!

~~

For the **list of actors** you have a choice; you can...

* **create list nodes individually** and append them to the `ul`
* **build an HTML string** of all actor li:s and use `innerHTML` on the `ul` instead.

~~ 

item)

Finally we need to **bootstrap our application**. In our case this is easy - simply **call `renderMovie` with the data**` at the bottom of `code.js`!

```javascript
renderMovie(movieData); // movieData variable created in data.js
```

~~

<div class="checklist"></div>

You are done when...

* The review looks just like before
* There's no data in the HTML

~~

And of course you'll be a good citizen and **keep doing the git flow** while you work! 
