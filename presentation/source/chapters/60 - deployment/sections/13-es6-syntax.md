---
title: ES2015 syntax
tagline: ''
---

ES2015 is arguably the most notable update that ECMAScript (and hence,
JavaScript) has ever received.

With that in mind, let's walk through some of the more prominent new
syntactic structures.

~

### The `let` keyword

Quiz: What output will this program produce? 

```
var radii = [2, 4, 6, 8];
var areas = [];

for (var i in radii) {
    var r = radii[i];
    areas.push(r*r*Math.PI);
}

console.log(r);
```

~

Using `let`, we get lexical/block scopes as expected:

```
let radii = [2, 4, 6, 8];
let areas = [];

for (let i in radii) {
    let r = radii[i];
    areas.push(r*r*Math.PI);
}

console.log(r); // <-- this is now an error
```

~

### Nicer iteration

Instead of:

```
let values = [];
for (let i = 0; i < 100; i++) { values.push(i); }

for (let i in values) {
    console.log(values[i]);
}
```

~

... we can now type:

```
let values = [];
for (let i = 0; i < 100; i++) { values.push(i); }

for (let n of values) {
    console.log(n);
}
```

~

### Arrow functions

Suddenly, we have lambda expressions that actually look like lambda
expressions. Instead of this:

```
var radii = [2, 4, 6, 8];

var areas = radii.map(function (r) {
    return r*r*Math.PI;
});
```

... we can now write this:

```
let radii = [2, 4, 6, 8];
let areas = radii.map(r => r*r*Math.PI);
```

~

### Classes

Remember this?

```
function Circle(radius) {
    this.r = radius
}

Circle.prototype.area = function () {
    return this.r*this.r*Math.PI;
}

// Creating instances using 'new':
var c1 = new Circle(8);

// Alternatively, with Object.create:
var c2 = Object.create(Circle.prototype, {
    r: { value: 8, enumerable: true }
});
```

~

JavaScript has always had ways to deal with OO, but its object system
has always been a bit odd at best. This can now be expressed as:

```
class Circle {
    constructor(radius) {
        this.r = radius;
    }
    
    area() {
        return this.r * this.r * Math.PI;
    }
}

// Creating instances:
let c1 = new Circle(8);

// Print the area
console.log(c1.area());
```

~

### Properties

In fact, since `area` is a computed, read-only property, we can even
express it as such:

```
class Circle {
    constructor(radius) {
        this.r = radius;
    }

    get area() {
        return this.r * this.r * Math.PI;
    }
}

// Creating instances:
let c1 = new Circle(8);

// Print the area, accessing it as any other property
console.log(c1.area);
```

~

### Inheritance

Inheritance is also supported, using a *much* simpler approach than the
old prototype based one:

```
class Circle extends Shape {
    // ...
}
```

~

### Modules

Where we used to have functions only, we suddenly have all these new
**abstractions** to play with. Another one is the concept of a **module**

~

Consider a simple use-case of just putting `Circle` in its own file:

```
// circle.js
export class Circle {
    constructor(radius) {
        this.r = radius;
    }

    area() {
        return this.r*this.r*Math.PI;
    }
}
```

Notice the **export** keyword

~

In order to use this, we'd put the following in the file that wants
to access the module:

```
// "import" statements must be top-level
import {Circle} from './circle';

let c = new Circle(2);
console.log(c.area());
```

~

Another alternative would be to export multiple classes from a more
generic module:

```
// shapes.js
export class Circle { /* ... */ }
export class Rectangle { /* ... */ }
```

```
// server.js
import {Circle, Rectangle} from './shapes';

let c = new Circle(2);
let r = new Rectangle(3, 5);
// ...
```

~

And yet *another* way of doing it, would be to export only a single
thing, but making that the *default export*:

```
// vector2d.js
export default class Vector2D {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    get magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        let mag = this.magnitude;
        return new Vector2D(this.x / mag, this.y / mag);
    }
}
```

~

In this case, the usage would be:

```
// No need to use { and }, since we only export a default option 
import Vector2D from './vector2d';

let u = new Vector2D(2, 3);
let un = u.normalize();
console.log(`magnitude (u): ${u.magnitude}`);
console.log(`magnitude (uv): ${un.magnitude}`);
// ...
```

~

### Generator functions

Ever used generator expressions in Python? Or perhaps `IEnumerable` in
.Net? Or the `Stream` api in Java?

The thing these all have in common is **lazyness**, and now we can be
lazy in JavaScript too!

~

Generators are marked with the `*` operator, and we `yield` values,
thus generating them lazily
 
```
function* f() {
    // ...
    yield someValue;
}
```

~

Example: generating all even numbers between 0 - 1000 lazily:

```
function* numbers(max) {
    for (let i=0; i <= max; i++)
        yield i;
}

function* filter(items, predicate) {
    for (n of items)
        if (predicate(n)) yield n;
}

let query = filter(numbers(1000), v => v % 2 == 0);

for (n of query) {
    console.log(n);
}
```

~

### Promises

Promises are the main way to represent asynchronous work in JavaScript.
In fact, they're important enough to get their own section.

Up next, we'll take a look at promises and why we really, really want
to use them ASAP with Node.js

~


### Overview

Promises was introduced natively in JavaScript with ECMAScript2015.

Before that we had to use external libraries to make use
of all the sweetness of Promises.

~

### Overview

Promises/A+

> An open standard for sound, interoperable JavaScript promises—by
implementers, for implementers.

~

### Overview

A ton of Promises/A+ implementations are available:

* [Bluebird](http://bluebirdjs.com/docs/getting-started.html)
\- Which we'll focus on here
* [Q](http://documentup.com/kriskowal/q/) - That AngularJS wraps in `$q`
* [Promise](https://www.promisejs.org/)

There are many more but these are the most popular.

~

### Overview

Actually, even if Promise is available natively we probably want to
make use of all the nice features the external libraries provide.

*Hint: Bluebird's `Promise.promisifyAll()`
which we'll get back to later.*

~

### Overview

So what is a Promise then?

*Understanding Promises -- the above question includes
a hidden joke.*

~

### Overview

Short description by MDN:

> The Promise object is used for asynchronous computations.
> A Promise represents a value which may be available now,
> or in the future, or never.

~

### Overview

A Promise can be:

* fulfilled - when everything worked as intended
* rejected - when an error occurred during the task
* pending - when it's waiting to be fulfilled or rejected

~

### Overview

Creating a Promise:
```javascript
var promise = new Promise((resolve, reject) => {
    // Perform a task and then...

    if(/* things went well */) {
        resolve('Hooray!');
    }
    else {
        reject('Ouch');
        //Production code should return an appropriate error.
    }
});
```

~

### Overview

Make use of a Promise:

```javascript
promise.then(result => {
    console.log(result); // -> Hooray!
}).catch(err => {
    console.log(err); // -> Ouch!
});
```

~

### Overview

`resolve` and `reject` can be used directly from the Promise object:

```javascript
Promise.resolve(['Node.js', 'Promise']).then(labels => {
    labels.forEach(label => console.log(label));
    // -> Node.js
    // -> Promise
}).catch(err => {
    console.log(err); // -> Ouch!
});
```

~

### Overview

We finally have the tools to avoid the tipped-over christmas tree that
our callback hell brings!

~

### Overview

We can actually chain Promises:

```javascript
request({ uri: `${GIT_USERS}${username}`, headers })
    .then(user => doSomethingWithUser(user))
    .then(repoUrl => doSomethingWithRepoUrl(repoUrl))
    //We can go on forever...
    .then(response => doSomethingMore(response))
    .then(response => doEvenMore(response))
    .catch(err => console.log(err.message));
```

This would be a disaster using callbacks.

*NOTE: All functions must return a Promise to make this work.*

~

### Promises/A+

There's a bunch of various Promise implementations out there, and many
of them differ in slight, but annoying ways.

To fix this, **Promises/A+** was suggested as a common standard.

~

### A note on jQuery's Promises

jQuery has had the notion of Promises for a long time (before Promises/A+
was the standard). Note that they are not **Promises/A+ compliant**

~

question)

Shouldn't we use jQuery Promises at all?

~

answer)

We should use them indirectly by converting them to something standard
compliant.

~

### jQuery's Promises

Using BlueBird, it's a quick fix:

```javascript
let jqPromise = $.ajax(someUrl);
let promise = Promise.resolve(jqPromise);

promise.then(result => console.log(result))
    .catch(err => console.log(err));
```

BlueBird assimilates jQuery promises and wraps them in a standard
compliant one.

~

### jQuery's Promises

For shorter syntax:

```javascript
Promise.resolve($.ajax(someUrl))
    .then(result => console.log(result))
    .catch(err => console.log(err));
```

~

### Bluebird

![](http://bluebirdjs.com/img/logo.png)

A Promises/A+ implementation.

~

### Bluebird

Bluebird advantages:

* Good performance
* Promisification
* Easy to debug

~

### Bluebird

Installing it:

```
$ npm install --save bluebird
```

~

### Bluebird

Using it:

```javascript
import Promise from 'bluebird';

//From here on we use Bluebird Promise
```

~

question)

So, now Promise works as before. Why Bluebird?

~

answer)

One big reason: Promisification!

~

### Bluebird

To transform a function to return a Promise instead of using a callback
we need to Promisify that function.

```javascript
import Promise from 'bluebird';
let readFile = Promise.promisify(require("fs").readFile);
```

*NOTE: This will only work on functions with a "node-style callback".*

~

### Bluebird

Now instead of:

```javascript
fs.readFile('/movies.json', (err, movies) => {
  if (err) throw err;
  console.log(movies);
});
```

We can do:

```javascript
readFile('/movies.json')
    .then(movies => console.log(movies))
    .catch(err => console.log(err));
```

~

### Bluebird

An even nicer way to get functions promisified
is `Promise.PromisifyAll`.

With this function we can promisify an entire module on one line.

```javascript
import Promise from 'bluebird';
let fs = Promise.promisifyAll(require("fs"));
```

~

### Bluebird

All "node-style callbacks" will get an Async-suffix.
That is, `readFile` is now called `readFileAsync`.

```javascript
fs.readFileAsync('/movies.json')
    .then(movies => console.log(movies))
    .catch(err => console.log(err));
```

...and `rmdir` becomes `rmdirAsync` and so on:

```javascript
fs.rmdirAsync('/movies')
    .then(() => fs.mkdirAsync('/movies'))
    .then(() => fs.writeFileAsync('/movies/movies.json', data))
    .catch(err => console.log(err));
```

~

### Handling errors

Since callbacks pass along an error when things go wrong the
syntax is pretty nice:

```javascript
request({ uri: `${GIT_USERS}${username}`, headers })
    .then(user => {
        let reposUrl = JSON.parse(user).repos_url;
        if(!reposUrl)
            throw { message: 'No url achieved' };
        return request({uri: JSON.parse(user).repos_url, headers});
    })
    // ..shortened! More .then should be here.
    .catch(err => console.log(err.message));
```

*NOTE: Errors passed on by `request` will also end up in the catch.*

~

### Handling errors

Let's create a custom error:

```javascript
//errors.js
export function PromiseDemoError(message) {
    this.message = message;
}
PromiseDemoError.prototype = Object.create(Error.prototype);
```

We can import and use this wherever we want.

~

### Handling errors

Make use of the custom error:

```javascript
import { PromiseDemoError } from './errors.js';

request({ uri: `${GIT_USERS}${username}`, headers })
    .then(user => {
        let reposUrl = JSON.parse(user).repos_url;
        if(!reposUrl)
            throw new PromiseDemoError('No repo url achieved');
        return request({uri: JSON.parse(user).repos_url, headers});
    })
    // ..shortened! More .then should be here.
    .catch(PromiseDemoError, err => console.log(err.message));
    .catch(err => console.log(err.message));
```

*NOTE: The first catch will execute only if the error is
PromiseDemoError. The second catch executes on all other errors.*
