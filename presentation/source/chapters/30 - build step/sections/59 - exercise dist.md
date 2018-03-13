---
title: Exercise - Distribution
tagline: An ACTUAL build step, at last!
---

<div class="goal"></div>

Goal: Have a deployable `distribution` folder without source files

~~

list)

Here's the plan:

* **tweak webpack** to output into distribution folder
* **tweak webpack dev server** to work from that folder
* **tweak less** to output into distribution folder
* add a script to **copy `index.html`** into distribution folder
* make Git **ignore distribution folder**
* add **build script** that runs all other scripts

~~

item)

We need to **change webpack** so that it **outputs the bundle into the distribution folder** instead:

Inside `webpack.config.js`, simply change the `output.path` in the config to `distribution`

~~

item)

We also have to **change webpack dev server** to work from the distribution folder.

Inside `webpack.config.js`, change `devServer.contentBase` to the same thing as `output.path`!

~~

item)

Similarly, **tweak the less script** to output to `distribution/styles.css` instead of just `styles.css`.

~~~

item)

We want to **keep `index.html` among our tracked source files**.

But at the same time we **need it inside the distribution folder**!

~~

We solve this via **adding a simple copying script** to `package.json`:

```
  "copyindex": "cp index.html distribution/index.html"
```

Run `npm run copyindex` in the terminal to see if it works!

~~

**<span style="color: red;">WARNING!</span>**

The `cp` command does *not* work in normal Windows terminals!

But, since Linux is standard on web servers, we **need to use this syntax**.

To get around this: Use the **Git bash** terminal, that speaks Linux! :)

~~

item)

The `distribution` folder is now full of generated files, which we **don't want to track**. 

Add the whole folder to the `.gitignore` file!

~~

item)

As a final step, let's **add a `build` script** that runs all other scripts.

```
  "build": "npm run bundle && npm run less && npm run copyindex"
```

Try it out, and see if the `distribution` folder is populated as expected.

~~

<div class="checklist"></div>

You are done when...

* There's a `distribution` folder
* That folder isn't tracked by git
* Everything the app needs to run is inside that folder
* That folder contains no other files

~~

<div class="solution"></div>

If you get stuck, see the [Distribution](https://github.com/krawaller/js-app-solutions/tree/master/distribution) solution.
