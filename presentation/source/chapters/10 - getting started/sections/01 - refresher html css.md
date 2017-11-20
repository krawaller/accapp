---
title: "CSS refresher"
tagline: Some useful patterns
---

list)

Let's repeat a few **useful CSS patterns**:

* packing the box
* centering a block horisontally
* selecting via attributes
* limiting an image width
* preventing text selection
* column layout

~~~

item)

The **box model** used to represent a node looks like this:

![](resources/diagrams/boxmodel.svg)

~~~

This means that if you apply **padding** it goes inside an eventual border, and will be coloured by the background.

While **margin** won't be, since it is in essence *outside* the element.

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

There is a distinct possibility you might soon need to **select element via attributes**. This is done using **square brackets**:

```css
[data-class=skeleton] {
  /* spooky styles go here */
}
```

See the [MDN rating docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) for the full available syntax.

~~

item)

We can **limit an image's width** using the `max-` prefixed dimensions:

```
.myImage {
  max-width: 300px;
  max-height: 400px;
}
```

~~~

item)

When we **use text elements for interaction** we often want to...

* prevent selection
* make pointer indicate clickability

```
.myElem {
  user-select: none;
  cursor: pointer;
}
```

~~

item)

To lay out children of an element as columns we use **flexbox**:

```css
.container {
  display: flex;
  flex-direction: row;
}
```

~~~

By default the columns will get equal width. If you have **fixed-width** columns you can make the other columns share the leftover space by giving them:

```
.columnThatShouldGrow {
  flex-grow: 1;
}
```

~~~

Note that **sized images can behave weirdly** when used as flexbox children.

Prevent this by **wrapping them in a div**!
