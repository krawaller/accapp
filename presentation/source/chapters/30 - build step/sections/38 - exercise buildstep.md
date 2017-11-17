---
title: Exercise - Build step
tagline:
---

<div class="goal"></div>

Goal: define building and dependencies in the project

~~

The current approach has **two big downsides**:

* LESS must be **globally installed**
* You must **know how to generate** the CSS file

Let's fix this!

~~~

list)

* Add a `package.json` file
* Add `LESS` as a local devDep
* Add a buildscript

~~

item)

Create package.json WOO

~~ 

item)

add less local woo

```
npm install --save-dev less
```

~~

item)

build script

```
{
  "scripts": {
    "build": "lessc styles.less styles.css"
  }
}
```

yada uses local in `.bin` yada lbah

~~~~

Now, in a terminal in the project folder, try...

```
npm run build
```

...and make sure the CSS file is regenerated!

~~~

<div class="checklist"></div>

You are done when...

* LESS is locally installed (`node_modules/less`)
* The build script regenerates the CSS

