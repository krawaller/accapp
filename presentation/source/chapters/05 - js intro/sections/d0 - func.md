---
title: Functional programming
tagline: Jumping down the rabbit hole 
---

JavaScript is a **functional language**, which modern JS makes frequent use of.

Let's just do a **quick sanity check** to make sure we're all on the same page!

~~~

So - since **functions are first class citizens**, we can **send them around just like any value**.

Which also means that **a function can take, and/or return, other functions**! Such a function is called a **higher order function**.

~~~

As a contrived **example**, say we have this function:

```javascript
let spam = function(){
  console.log("SPAM!");
}
```

~~~

And then we have this **higher order function**:

```javascript
function repeater(func,times){
  for(let i = 0; i < times; i = i + 1){
    func();
  }
}
```

~~~

If we **invoke `repeater`** like this:

```javascript
repeater(spam,3);
```

We would **see this in the console**:

```
"SPAM!"
"SPAM!"
"SPAM!"
```

~~~

To show we can also **return new functions**, take a look at this beauty:

```javascript
function multiplier(func,times){
  return function(){
    for(let i = 0; i < times; i = i + 1){
      func();
    }
  };
}
```

~~~

Did you see the difference? `multiplier` doesn't execute the parameter function, but **returns a new function**!

```javascript
let tripleSpam = multiplier(spam,3);
```

If we **execute the returned function** we get the triple spam:

```javascript
tripleSpam(); // SPAM! SPAM! SPAM!
```

~~~

Functional programming is a **really powerful tool**, and something that is likely to **get you hooked once you have learned it**. We warmly encourage you to explore the subject! 

~~~~

Note: the **functional paradigm** is about much more than just passing functions around, we've really just scratched the surface here.

