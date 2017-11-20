---
title: Exercise - Build step
tagline: Plugging in the pipe
---

<div class="goal"></div>

Goal: define building and dependencies in the project

~~

Currently our project has **two big downsides**:

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

Create a package.json by typing...

```bash
npm init
```

...in the root of your project!

~~ 

item)

Now let's **add `less` as a local dependency**:

```
npm install --save-dev less
```

~~

item)

After that we can register a **local command** to **generate our less file**:

```bash
{
  "scripts": {
    "build": "lessc styles.less styles.css"
  }
}
```

Of course, make sure the names match your CSS file.

~~~~

Now, in a terminal in the project folder, try...

```bash
npm run build
```

...and make sure the CSS file is properly regenerated!

~~~

<div class="checklist"></div>

You are done when...

* LESS is locally installed (`node_modules/less`)
* The build script regenerates the CSS

