---
title: map, filter and reduce
tagline: the cornerstones
---

list)

For applied functional programming, there are **three list-operating tools** that have a very central position:

* The **`map`** method
* The **`filter`** method
* The **`reduce`** method

Let's **take a look at these**!

~~~

item)

First, **`map`**. It takes a **list and an iterator function** as arguments, and **returns a new list**.

![](resources/diagrams/map.svg)

~~~

The **iterator function** that we pass in is **called with each element and the index of that element**, and it should **return a new element** to be used instead:

![](resources/diagrams/mapiterator.svg)

~~~

question)

Here's an example. What will this call return?

```javascript
let list = ["David", "Carl", "Eric"];
let newList = list.map(function(elem){
  return elem+"y Mc"+elem+"face";
});
```

~~~

answer)

Yup, `newList` will now equal this:

```javascript
["Davidy McDavidface","Carly McCarlFace","Ericy McEricface"]
```

~~~

In essence, `.map` will **create a new list of the same length**, where **each element is individually transformed** by the iterator.

~~~

item) 

Next up is **`.filter`**, which is probably the easiest to understand. It has the exact **same signature as `.map`**:

![](resources/diagrams/filter.svg)

~~~

The **iterator** is similar too, except it **returns a boolean** saying whether or not the element should go into the new array.

![](resources/diagrams/filteriterator.svg)

~~~

item) 

Now for **.reduce**! It is more powerful, but also harder to grasp.

~~

Similar to `.map` it **takes a list and an iterator**, but also a **seed value**. Unlike `.map` it doesn't necessarily return a list, instead it can **return any value**.

![](resources/diagrams/reduce.svg)

~~~

The **iterator function** is called with **each element** and the **`current value`** (sometimes called `memory` or `accumulator`), and **returns a new value**.

![](resources/diagrams/reduceiterator.svg)

~~~

The **`seed`** that we passed in to `.reduce` is **used as the `current value` for the first iterator call**.

The **result of the `.reduce` call** is whatever is **returned from the last iterator call**.

~~~

In other words, it looks like this (for a 3-item list):

![](resources/diagrams/reducesteps.svg)

~~~

question)

Here's a code example. What does it return?

```javascript
let list = ["David", "Carl", "Eric"];
let something = list.reduce(function(mem, elem){
  mem[elem.length] = mem[elem.length] || 0;
  mem[elem.length]++;
  return mem;
}, {})

```

~~

answer)

it returns an object which counts how many words of each length the list contains:

```javascript
{
  4: 2,
  5: 1 
}
```

~~~

As previously stated, `.reduce` is **hard to grasp** but **immensely powerful**.

A quick proof of that is that it can be used to **implement both `.map` and `.filter`**. So 
**`.reduce` is really all we need**!

~~~

If you slept through the section, here's a **popular tweet recap**:

<div style="display: inline-block; width: 300px;">
![](resources/images/functweet.png)
</div>

~~~~

Since ES5.1, these methods are **available on the array prototype**, which somewhat **diminishes the need for Underscore/Lodash**.

This is a general trend, very **similar to the situation with jQuery and the DOM**.
