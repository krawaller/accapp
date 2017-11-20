---
title: Objects
tagline: bags of data
---

This section is **an overview of objects**, in case you need a refresher!

~~~

JavaScript has two **composite data types**, namely **objects** and **arrays**!

Althought technically **arrays are a special kind of objects**, but, never mind.

~~~

An object in JavaScript is a **collection of key-value pairs**, often called a **dictionary** in other languages. 

The **property names (keys) are always strings**, and the **property values can be anything**.

~~~

We can **create an object literal** like this:

```javascript
let myObject = {
  someProp: 42,
  anotherProp: "hello!"
};
```

~~~

There are **two different ways to access a value**.

We can use **dot notation**:

```javascript
let x = myObject.someProp; // 42
```

~~~

Or we can use **bracket notation**:

```javascript
let y = myObject["someProp"]; // 42
```

~~~

**Question**: The **dot notation seems much smoother**, so **why would we ever want bracket notation**?

~~~

**Answer**: That allows us to do **dynamic lookups**:

```
let propName = "someProp";
let z = myObject[propName]; // 42
```

~~~

We **add a property simply by assigning to it**:

```javaScript
let myObject.newProp = 777;
```

~~~

And we **delete a property** using the `delete` keyword:

```javascript
delete myObject.newProp;
```

~~~

If we **access a non-existing property** we always get `undefined`.

```javascript
myObject.bogusProp; // undefined
```

~~~

Contrary to primitives, **objects are references**, which means that this is false since it is **two different objects**:

```javascript
let test = ( {a:1} === {a:1} ); // false
```

~~~

While this is true, since they **point to the same object**:

```javascript
let x = {a:1};
let y = x;
let test = x === y; // true
```

~~~

Since **objects are references** they are **always truthy**:

```javascript
if ({}){
  console.log("An empty object is truthy!"); // will be shown!
}
```

~~~

We can **iterate over objects** using a **`for-in` loop**:

```javascript
for (let key in myObject){
  console.log(key+" has value "+myObject[key]);
}
```

~~~

Finally: **object can contain other objects**:

```javascript
let me = {
  name: "David",
  address: {
    street: "Åsgatan 9",
    zip: 27131,
    city: "Ystad"
  }
}
```

~~~

We can **access properties to any depth**: 

```
let myZip = me.address.zip;
```

...although we might have to **guard for undefineds**:

```
let myZip = me.address && me.address.zip;
```
