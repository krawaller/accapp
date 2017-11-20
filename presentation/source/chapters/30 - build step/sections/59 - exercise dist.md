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
* **tweak less** to output into distribution folder
* add script to **copy `index.html`** into distribution folder
* make Git **ignore distribution folder**
* add **build script** that runs all other scripts

~~

item)

We need to **change webpack** so that it **outputs the bundle into the distribution folder** instead.

Simple change the output filename into `distribution/bundle.js`!

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
* That folder contains no source files
* You can copy just that folder somewhere else and the app still works
