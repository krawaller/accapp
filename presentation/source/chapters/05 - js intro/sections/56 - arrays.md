---
title: Arrays
tagline: Ordered lists
---

This section is **an overview of arrays**, in case you need a refresher!

~~~

A special kind of objects are **arrays**, which are an **ordered list of values**.

You could say that they are **objects where the keys are always named 0, 1, 2...**.

~~~

We can **create arrays** using the **array literal notation**:

```javascript
let list = ["tomatoes",42,false];
```

~~~


Since **arrays are objects** we **access elements as before**:

```javascript
let firstItem = list[0]; // "tomatoes"
```

~~~

An array **has a length property** that tells us how many elements it contains:

```javascript
list.length // 3
```

~~~

Which means I can **pick the last item** by doing this:

```
let lastItem = list[list.length-1]; // false
```

~~~

We can **add a new value** by calling the `push` method:

```javascript
list.push("foobar");
list.length // 4
```

~~~

It is common to **iterate using a regular for loop**:

```javascript
for(let i=0; i < list.length; i = i+1){
  console.log("Item "+i+" is "+list[i]);
}
```

~~~

There are a **whole bunch of array methods** - see the MDN reference for a full list:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

~~~

**Question**: The `length` property was rather convenient - is there something **similar on regular objects**?

~~~

**Answer**: Not directly, but we can get an **array of all keys for an object** using the `keys` method of the global `Object` object:

```
let keys = Object.keys(myObject); // ["someProp","anotherProp"]
```