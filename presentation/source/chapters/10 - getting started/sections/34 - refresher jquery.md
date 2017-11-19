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
* event handling

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

```
let collection = $(".french");
collection.html("<em>click to translate</em>");
```

Commonly we skip the variable and **chain** instead:

```
$(".french").html("<em>click to translate</em>");
```

~~~

item)

Events are added using the `on` method:

```javascript
$("#submitbtn").on("click",handleSubmission);
```

Although it's common to use the **event-specific shorthands**:

```javascript
$("#submitbtn").click(handleSubmission);
```

~~~

TODO event delegation
