---
title: Destructuring and rest
tagline: 'cherry-picking the raisins from the cookie'
---

[Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is a way to pick values from nested structures without having to do the manual digging.

~~ 

Let's say we have an **array of `contenders`**, each represented by an object.

```javascript
let contenders = [
  {name: "David", age: 37},
  {name: "Carl", age: 38}
  /* and a few others */
];
```

They are **sorted by position** so the first contender won, etc.

~~

If we wanted the **name of the winner** we would do something like this in ES5:

```javascript
let winnersName = contenders[0].name;
```

~~ 

With **destructuring**, we can instead do this:

```javascript
let [{name: winnersName}] = contenders;
```

Or, combined with the **same-key-value shorthand**:

```javascript
let [{name}] = contenders;
```

~~

Destructuring also allows us to use the powerful **rest** element which can **lump up many array elements into one**, making for some very succinct code:

```javascript
let [winner, ...losers] = contenders;
```

~~

Note that the rest element **has to be the last one in the array**, so this wouldn't work:

```
let [...others, superloser] = contenders; // syntax error
```

~~

question)


Wait.. Theoretically, **the rest could be placed *anywhere***, as long as there's just one. The parser should still be able to figure out what's what!

Right?

~~

answer)


True. But that would **require lookahead**, which is **complex and more taxing**. And so the choice was made to only allow the rest element in the last position.

