---
title: Babel [TODO - cut down]
tagline:
draft: true
---


Originally and (in)famously created in 10 days by Brendan Eich, who
wanted to build a LISP interpreter for the browser.

Name is still highly confusing, and it still gets confused with Java
every now and then.

~

### Timeline

... Finding a name is hard

* 1995 - Created by Brendan Eich. Was initially called **Mocha**
* 1995 - Later same year, renamed to **LiveScript**
* 1995 - Hey, still same year. Renamed to **JavaScript** after licensing
from Sun (Now Oracle)

~

### Timeline

* 1996 - JavaScript taken to the ECMA committee. Official name: ECMAScript
* 1998 - ECMAScript 2 released
* 1999 - ECMAScript 3 released
* 2000 - Work on ECMAScript 4 begins, but gets cancelled for various reasons 

*Then, nothing happens for a few years.*

~

### Timeline

During 2005:

* Work restarts on ES4. Lots of things happening.
* Later this year... Crockford, Microsoft and a few other players
  opposes ES4. Forms their own subcommittee and designs ES3.1
* Bickering between ES3.1 and ES4 goes on for quite some time...

During 2008:

* Finally, an agreement. ES3.1 prevails but gets renamed to ES5.

~

### Timeline

So, to summarize: ES5 used to be ES3.1, but shortly before that it was
ES4 which got cancelled twice.

Awesome.

~

### Timeline

In 2015 and 2016, respectively, ES6 and ES7 specifications are finalized.
Officially known as ECMAScript 2015 and ECMAScript 2016.

*... And here we are* 

~


Initially called **ES6 Harmony**, the current standard we're working
towards is known as **ES2015**.

~

The browser is still one of the most common places to see JavaScript,
but most browsers only support bits and pieces of ES2015.

![alt text](resources/images/browsers.png)

~

question)

*So how do I actually use ES2015?*

~

answer)

![alt text](resources/images/babel.png)

~

Regardless of whether you're running JavaScript in the browser, or
if you're running it through Node, you can always *transpile* your
code to the current standard, ES5.

![alt text](resources/images/transpile.png)

*Note: 'transpile' is a meaningless term that just means 'compile' - it
sounds hipper though.*

~

Let's fire up a project and get Babel up and running:

```
$ mkdir babel-demo && cd babel-demo
$ npm init

# ... Fill stuff out

# Install babel as a dev dependency, plus the ES2015 preset
$ npm install --save-dev babel-cli
$ npm install --save-dev babel-preset-es2015
```

*Note: While you can install babel-cli globally, using the -g flag, it's
usually recommended not to do this.*

~

You might wonder about the `babel-preset-es2015`. Babel is built around
different *presets* depending on what you're doing.

For instance, for those who want to use JSX and React, there's a
`babel-preset-react` plugin (amongst others).

~

Babel won't use plugins just because they're installed, so we'll
have to specify which ones to use in a `.babelrc` file.

```
{
    "presets" : ["es2015"]
}
```

We "just" want to compile es2015 code, so we'll be happy with that plugin.

~

To start things up, we'll put the following in `index.js`:

```javascript
// Finally, new syntax!
class Greeter {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        // Yay! Template strings!
        console.log(`Hello ${this.name}!`);
    }
}

// Instantiate and call:
let g = new Greeter("Eric");
g.greet();
```

~

We'll also have to add a `start` target to `package.json`:

```
{
  "name": "babel-demo",
  "scripts": {
    "start": "babel-node index.js"
  },
  "devDependencies": {
    "babel-cli": "^6.18.0",
    "babel-preset-es2015": "^6.18.0"
  }
}
```

(Shortened for convenience, as usual)

~

There's one thing worth noting here, in the Babel docs:

> **Not meant for production use**

> You should not be using babel-node in production. It is unnecessarily
> heavy, with high memory usage due to the cache being stored in memory.
> You will also always experience a startup performance penalty as the
> entire app needs to be compiled on the fly.

~

... So, running `babel-node index.js` works great for a demo.

```
...
"scripts": {
    "compile": "babel index.js -d build/"
    "start": "node build/index.js"
},
...
```

In production, you'll most likely have a large number of modules, and
compiling and producing build artifacts is most likely the better option
