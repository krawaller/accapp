---
title: Functions
tagline: code in a can
---

This section is **an overview of functions**, in case you need a refresher!

~~~

There are **two different ways to define a function** in JavaScript. First as a **named function**:

```javascript
function echoer(word,times){
  let echo = "";
  for(let i = 0; i < times; i = i + 1){
    echo = echo + word;
  }
  return echo;
}
```

~~~

Or as an **anonymous function** which we can assign to a variable:

```javascript
let echoer = function(word,times){
  let echo = "";
  for(let i = 0; i < times; i = i + 1){
    echo = echo + word + " ";
  }
  return echo;
}
```

Mostly it **doesn't really matter** which way you choose.

~~~

As the example showed, we use **`return something`** to return a value. If you just do `return;`, the returned value is `undefined`, which it also is if you don't use `return` at all.

~~~

We **execute a function by using parens**, and **listing eventual parameters** within those:

```
let withEcho = echoer("hello",3); // "hello hello hello "
```

~~~

**Question**: What is the **difference** between this:

```
let x = func;
```

and **this**:

```
let x = func();
```

~~~

**Answer**: Well:

* In the **first example**, **`x` has a reference to `func`**. Which means that after that, **doing `x()` and `func()` would yield the same thing**.

* In the **second example**, **`x` is whatever `func` returned**.

~~~

A final observation - There is nothing stopping us from **having functions on objects**:

```
myObject.beingAnnoying = function(){
  console.log("SPAM!");
};
myObject.beingAnnoying(); // "SPAM!"
```

When a function is a property on an object it is called a **method** of that object.

~~~

And to end on a meta note; there is also nothing stopping us from **having objects (or anything else) on functions**, since **functions are objects**.

```
let func = function(){};
func.prop = {hello:"world!"};
console.log(func.prop.hello); // "world!"
```

