---
title: Exercise - Webpack
tagline: 
---

<div class="goal"></div>

Goal: bundle our code with webpack

~~

list)

Here's the plan!

* turn `data.js` into exported
* add `jquery` as local dependency
* add `webpack` as local development dependency
* configure webpack
* add script to run webpack
* update `index.html`

~~~

Lots of steps, but don't fret - most of them are very simple, promise! :)

~~

item)

Right now **`data.js`** simply **declares a variable** which we'll then magically use in another file.

Let's stop this, and instead make `data.js` explicitly **export the variable**! There are code examples in the previous section.

~~~

Then turn your attention to **`code.js`** and make it **import the variable from `data.js`**, instead of just assuming that the variable is magically present.

~~~

item)

Let's add jQuery as a local dependency!

```bash
npm install --save jquery
```

~~~~

Again you have to **update `code.js`** to import `jquery` instead of just assuming it exists.

~~

item)

Next we need to **import webpack as a local development dependency**!

```bash
npm install --save-dev webpack webpack-cli
```

This installs both webpack and **`webpack-cli`**, for using via the terminal.

~~~

item)

The configuration for webpack lives in a separate **`webpack.config.js`** file. 

Add such a file, and see the former section for what it should contain!

~~~

item)

Now that webpack is present and configured we can **add a script** to `package.json` to run it. Let's call it **`bundle`**!

```
  "scripts": {
    "styles": "lessc styles.less styles.css",
    "bundle": "webpack"
  },
```

~~

Try it by typing `npm run bundle` in the terminal, and see if `bundle.js` appears as expected!

~~

item)

As the very final step, let's **update `index.html`** to use our new setup.

This means...

* **removing all existing script elements**
* **adding a new one for `bundle.js`**

~~

<div class="checklist"></div>

You are done when...

* Doing `npm run bundle` generates a `bundle.js`
* That's the only script file in `index.html`
* The app still works like before


~~

<div class="solution"></div>

If you get stuck, see the [Webpack](https://github.com/krawaller/js-app-solutions/tree/master/webpack) solution.
