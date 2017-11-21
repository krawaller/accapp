---
title: Spreads
tagline: 'the dark side of rests'
---

You have already seen how we use **rest** element/parameter to capture several array elements into a single variable:

```javascript
var [winner, ...losers] = competitors;
```

~~

Now imagine **the opposite scenario** - we have the `winner` and `losers` variables, and want to define `competitors`. In ES3 this is done like this:

```javascript
var competitors = [winner].concat(losers);
```

~~

ES2015 gives us a new options - **spreads**! It looks exactly like rest, but we use it on the *right side* instead (or when we *call* a function as opposed to when we define it):

```javascript
var competitors = [winner, ...losers];
```

We say that we *spread* the contents of the expression into the outer array.

~~

Spreads gives us a less verbose way to **copy an object and add properties to it**, which is otherwise done like this:

```javascript
var augmentedObj = Object.assign({}, oldObj, newProps);
```

~~

With spreads we can instead do this:

```javascript
var augmentedObj = {...oldObj, ...newProps};
```
~~

Note that while spreads and rests *with arrays* are in the spec for ES2015, **object spread is still a Stage 3 proposal** (November 2017).

It is **expected to be accepted into an upcoming release** of the language, and is already supported by Babel and the like.


