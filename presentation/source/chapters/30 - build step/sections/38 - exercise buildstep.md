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
* Add `less` as a local devDep
* Add a `.gitignore` file to prevent tracking of `node_modules`
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

Now let's **add `less` as a local development dependency**:

```
npm install --save-dev less
```

~~

item)

Because we have local dependencies, we now have a **`node_modules`** folder.

![](resources/images/nodemodules.png)

Since this is just 3rd party code, we **don't want to track it** with Git!

~~

We prevent this by **adding a `.gitignore` file** in the root of our folder.

![](resources/images/gitignore.png)

~~~

This file should contain **paths to all files and directories** that we wish to **ignore**. So far, that's just the node modules directory!

```
node_modules
```

~~

item)

Let's now register a **local command** to **generate our less file**:

```bash
{
  "scripts": {
    "styles": "lessc styles.less styles.css"
  }
}
```

Of course, make sure the names match your CSS file.

~~~~

Now, in a terminal in the project folder, try...

```bash
npm run styles
```

...and make sure the CSS file is properly regenerated!

~~~

<div class="checklist"></div>

You are done when...

* LESS is locally installed (in `node_modules/less`)
* `node_modules` isn't tracked by Git
* Typing `npm run styles` regenerates the CSS

