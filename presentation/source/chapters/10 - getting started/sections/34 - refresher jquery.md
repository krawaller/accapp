---
title: jQuery refresher
tagline:
---

You've likely come across **jQuery**, a library that **makes the DOM easier** to work with.

![](resources/images/jquery.png)

~~

list)

Let's see how some **common tasks** are done with jQuery:

* node references
* node manipulation
* node creation
* event handling
* event delegation

~~

item)

We **get node references** by passing a **CSS selector** to the jQuery function:

```javascript
// returns a jQuery collection of all elements matching that selector
let collection = jQuery(".someClass");
```

~~

You'll rarely see `jQuery` being used though, instead we work with the `$` alias:

```
let collection = $(".someClass");
```
~~

item)

Here's some common **manipulations**:

```javascript
collection.html("<strong>verboten</strong>");
collection.text("unavailable");
collection.addClass("hide");
collection.attr("data-ref","Ek#AfZW2");
collection.empty(); // killing all children
```

~~

Note that unlike the DOM, jQuery **doesn't have different methods** for getting 1 or many nodes.

We can manipulate the resulting collection as if it was one node, and **jQuery will do the changes to all nodes**.

~~~

That means that **this regular JS**...

```javascript
let nodes = document.querySelectorAll(".french");
for(let node in nodes){
  node.innerHTML = "<em>click to translate</em>";
}
```

~~~

...can be done like this in jQuery:

```javascript
let collection = $(".french");
collection.html("<em>click to translate</em>");
```

Commonly we skip the variable and **chain** instead:

```javascript
$(".french").html("<em>click to translate</em>");
```

~~~

item)

Now to see how we **create new elements** with jQuery!

Normally, if you **pass a string** to jQuery, it'll treat it as a **CSS selector** and collect all matching element:

```javascript
let collection = $(".blogpost > p:first-child");
```

~~~~

However, if we pass in a string containing HTML code, jQuery will instead **create the matching element**!

```javascript
let newCollection = $("<span>");
```

~~~~

This HTML code can contain multiple elements as well as attributes:

```javascript
let newCollection = $(`
  <div class="container">
    <h2>Hello world!</h2>
    <p>All this was created in a multiline string sent to jQuery!</p>
  </div>
`);
```

~~~

Then we can **append the new node**:

```javascript
$(selectorForParent).append(newCollection);
```

There's also a reversed syntax:

```
newCollection.appendTo(selectorForParent);
```

~~~

Of course we could have simply used the `.html` method:

```javascript
$(selectorForParent).html(stringWithNewHtml);
```

~~~

item)

**Event listeners** are added using the `on` method:

```javascript
$("#submitbtn").on("click",handleSubmission);
```

Although it's common to use the **event-specific shorthands**:

```javascript
$("#submitbtn").click(handleSubmission);
```

~~~

item)

jQuery also makes it very easy to do **event delegation**.

This is a powerful pattern that lets us **listen to events on many elements** - which **might not even exist yet** - using only a **single event listener**!

~~

We accomplish this by **listening for the event on an ancestor element**, and then letting the event **bubble** up to there from the element we're actually interested in.

~~

Consider an app with **this UI**:

```html
<ui id="options">
  <li data-option-id="gowest">Go west</li>
  <li data-option-id="opendoor">Open the door</li>
  <li data-option-id="turnback">Turn back</li>
</ul>
```

The contents of the `#options" list will change as the user clicks around.

~~~~

Instead of **adding a listener everytime we create an option**, we can have a **single listener on the list** which we **filter to only handle clicks on options**:

In jQuery we do this by **passing a filtering selector** after the event name to `.on`:

```
$("#options).on("click", "li", function(e){
  let opt = $(e.target).attr("data-option-id");
  gameEngine.executeOption(opt);
});
```
