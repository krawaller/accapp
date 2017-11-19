---
title: DOM references and manipulations
tagline: node juggling
---

list)

Let's refresh...

* how to get references to DOM nodes
* how to manipulate a DOM node

~~~~

item) 

We can **get a reference to a DOM node** in a bunch of different ways. Some methods return **a single element**:

```javascript
let node = document.body;
let node = document.getElementById("someId");
let node = document.querySelector("div > p:first-child");
```

~~~

..while others give us a **list of matching nodes**:

```javascript
let nodes = document.getElementsByTagName("div");
let nodes = document.getElementsByClassName("someClass");
let nodes = document.querySelectorAll("div > p:first-child");
```

~~~

From a node reference we can access the **element above that element**...

```
node.parent
```

...or the **elements below**:

```
node.children
```

~~

item)

Once we have a node reference there's a **huge number of things** we can do with it! The DOM API is enormous.

But here we'll just show a few useful things!

~~

We can **add a class**...

```javascript
node.classList.add("someClass");
```

...or **remove it**...

```javascript
node.classList.remove("someClass");
```

...or **test if it has a certain class**:

```javascript
node.classList.contains("someClass") // true or false
```

~~~~

We can **change the text content of a node**...

```javascript
node.textContent = "Hello world!";
```

...or **HTML content**:

```javascript
node.textContent = "<strong>Hello world!</strong>";
```

In both cases we **erase eventual previous content**.

~~~

What about **attributes** on elements?

```html
<div data-ref="Ek#AfZW2">
```

We can **query them**...

```javascript
node.getAttribute("data-ref"); // "Ek#AfZW2"
```

...and **set them**:

```javascript
node.setAttribute("data-ref","someNewRef");
```