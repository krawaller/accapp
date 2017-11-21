---
title: Miscellaneous
tagline: 'odds and ends'
---

list)

There's three more things worth mentioning:

* declaring variables with **`let`**
* declaring variables with **`const`**
* **template strings**

~~

item)

Variables in JavaScript have **functional scope**.

Even if you declare them inside an **if-block in the middle of a function**, the variable is still **visible throughout the entire function**.

~~~

So when you write this...

```
function myFunc(arg,lib){
  if (arg === 42){
    var ret = lib.method() + 7;
    return ret;
  }
  // do sth else
}
```
~~~

...this is what (conceptually) happens:

```
function myFunc(arg,lib){
  var ret;
  if (arg === 42){
    ret = lib.method() + 7;
    return ret;
  }
  // do sth else
}
```

In other words, the **declaration is hoisted to the top**.

~~~

This is generally considered a **design mistake**, and can give rise to **weird bugs**.

ES6 therefore introduces **`let` as an alternative to `var`** for declaring variables, and the **only difference** is that **`let` has block scope**.

~~~

item) 

In most languages there's a way to **define constants**, meaning a **variable that cannot change**.

This is **missing from JavaScript**.

~~

A common "hack" is to **name constants in all capitals**:

```
var SOME_CONST = 42;
```

But this has **no technical significance**, it is just a hint.

~~~

ES6 therefore introduces **`const` as another alternative to `var`**, and the **only difference** is that you **cannot reassign the value**.

```
const answer = 42;
answer = 43; // throws an error
```

~~~

item)

Finally, **template strings**!

```
let userTempl = `
  First name: ${user.fname}
  Last name: ${user.lname}
`;
```

~~~

As you saw, template strings...

* are **defined inside two backticks**
* can **contain linebreaks**
* allow **interpolation inside ${}**

~~~

There's also a **semi-secret way to invoke functions with templates**. Here's an example from [Choo](https://github.com/yoshuawuyts/choo):

```
html`
  <main class="app">
    Count: ${state.counter.count}
    <button onclick=${(e) => send('counter:increment')}>+</button>
  </main>`
```

The **`html` function is invoked** with the templates and interpolated values.

