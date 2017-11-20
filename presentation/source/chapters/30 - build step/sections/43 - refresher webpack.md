---
title: Webpack
tagline:
---

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
let movieData = require("./data.js");

renderMovie(movieData);
```

~~~

This way of working has many advantages;

* It becomes **clear what a file exports and imports**
* Files are executed in **separate scopes**
* Webpack can **bundle it all into a single file**, which we'll soon see!

~~~~

Note that there is also an **ES6 version** of the module syntax. In **`data.js`** we'd **export** it like so...

```
const movieData = {
  title: 'Inception', // etc
};

export movieData;
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

```
module.exports = {
  entry: './code.js',
  output: {
    filename: 'bundle.js'
  }
};
```

There are of course **many more config options**!

~~~

item)

Via **plugins**, Webpack can also do a whole bunch of **other conversions** while it's at it. This might include...

* turning smart JS to dumb via [Babel](https://babeljs.io/) or something similar
* inlining images
* minifying/uglifying
* dealing with text resources
* ...and a whole bunch of other things!
