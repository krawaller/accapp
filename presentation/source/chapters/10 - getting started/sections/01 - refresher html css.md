---
title: "CSS refresher [TODO: layout]"
tagline: Some useful patterns
---

**CSS** is really made up of **two different things**:

* **selectors** which describes a **subset of elements** in the document.
* **style rules** which says something about what those elements should **look like**.

~~~

Selectors and style rules **go together in pairs**:

```
selector {
  stylerules
}

anotherSelector {
  moreStylerules
}
```

~~

list)

Let's repeat a few **useful CSS patterns**:

* packing the box
* centering a block horisontally
* creating a column layout
* limiting an image width

~~~

item)

The **box model** looks like this:

![](resources/diagrams/boxmodel.svg)

~~~

TODO show

~~

item)

We can **center a block horisontally** in many different ways. Here's a common solution:

```css
.contentBlock {
  margin: 0 auto;
}
```

~~

Note that this **only works if the block has a set width**, otherwise it'll take up the full width and we won't see any centering!

~~~

item)

Having a **column layout** used to be difficult, but with **Flexbox** it is suddenly easy!

Let's say we have this HTML...

```
<div id="container">
  <div id="greenblock">...</div>
  <div id="blueblock">...</div>
  <div id="redblock">...</div>
</div>
```