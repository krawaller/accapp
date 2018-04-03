---
title: Webpack
tagline:
---

<div class="learn"></div>

Learning about **Webpack**.

~~

Time to get to know one of the **most important tools**:

<div style="background-color: white;">
![](resources/images/webpack.png)
</div>

~~~

list)

[Webpack](https://webpack.js.org/) solves a whole range of problems:

* it **lets us use modules**...
* because it **bundles our code** into a single file
* it can also do **other transpilings**

~~~

item)

Webpack lets us **use Node module syntax in our code**. This means that instead of splitting our code into files and then **including them all in script elements** (which means they all execute in the same scope), we can **use proper modules**!

~~~

So instead of **creating a global variable** in `data.js`...

```javascript
let movieData = {
  title: 'Inception', // etc
};
```

...and then **magically be able to reference that** in `code.js`...

```javascript
renderMovie(movieData);
```

~~~

...we can **explicitly export it** in `data.js`...

```
module.exports = {
  title: 'Inception', // etc
}
```

...and **import it** in `code.js`:

```
let movieData = require("./data");

renderMovie(movieData);
```

~~~

Note that we **have to write the path as `"./data"`**.

If we write it as `"data"`, npm will assume we mean a **3rd party module within `node_modules`** and look there instead!

~~~

Working with modules in this way has many advantages;

* It becomes **clear what a file exports and imports**
* Files are executed in **separate scopes**
* Webpack can **bundle it all into a single file**, which we'll soon see!

~~~~

Note that there is also an **ES6 version** of the module syntax. In **`data.js`** we'd **export** it like so...

```
export const movieData = {
  title: 'Inception', // etc
};
```

...and then in `code.js` we'd **import** like this:

```
import {movieData} from './data';

renderMovie(movieData);
```

~~~

item)

The **bundling into a single file** is at the core of Webpack. It requires us to **use a module setup** as described above.

With such as setup we'd **point Webpack to the entry file**. It'll then start there, **dynamically follow all require calls**, and bundle up everything into a **single file**.

~~~ 

We do this in a **configuration file** with the magical name **`webpack.config.js`**. This file should **export a config object**:

```javascript
module.exports = {
  mode: 'development', // whether we're building for dev or prod
  entry: './code.js', // which file to begin with
  output: {
    path: __dirname, // what folder to put bundle in
    filename: 'bundle.js' // what name to use for bundle
  }
};
```

There are of course **many more config options**!

~~

question)

...wait, what was this thing?

```javascript
path.resolve(__dirname, ".")
```

Where did `path` come from, and what is `__dirname`?

~~~

answer)

Well! **`__dirname`** is a global variable in Node, pointing to the **current directory**.

Node has many things like that - just like the browser has `document` etc!

~~ 

And **`path`** is a **build-in helper** in node for adding parts of a path together! We bring it in like so:

```javascript
var path = require("path");
```

And then we can do...

```javascript
path.resolve(firstPart, secondPart, thirdPart)
```

...without worrying about if we'll end up with double slashes etc.

~~~

item)

Via **plugins**, Webpack can also do a whole bunch of **other conversions** while it's at it. This might include...

* turning smart JS to dumb via [Babel](https://babeljs.io/) or something similar
* inlining images
* minifying/uglifying
* dealing with text resources
* ...and a whole bunch of other things!
