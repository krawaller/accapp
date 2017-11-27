---
title: Package.JSON
tagline: The heart
---

<div class="learn"></div>

Learning about **npm and package.json** more in depth.

~~

Let's take a closer look at npm! We acces it with the `npm` command through Node.js:

```bash
$ npm
  
  Usage: npm <command>
```

~~

list)

The npm revolves around the **`package.json` file**. Let's explore that! Specifically, we'll look at:

* install packages globally
* initiate a `package.json` file
* track dependencies
* semantic versioning
* development dependencies
* scripts

~

item)

To **install a package** you just type:

```
npm install react
```

This will generate a `node_modules` folder with react and all its
dependencies, if any.

*Hint: You probably want to ignore this folder in your VCS*

~

Packages can also be installed globally:

```bash
$ npm install -g eslint
```

~

item)

We can setup a **`package.json`** file to **track dependencies in our project**, as well as do **other configurations**.

~

**Getting started** with a new project is simple:

```bash
npm init
```

This initializes the folder as an Node.js project by **creating a package.json in it**.

~

The result, after you have answered a bunch of questions, might look something like:

```json
{
  "name": "Install dependencies example",
  "version": "1.0.0",
  "description": "Project description",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"We have no tests yet\""
  },
  "author": "Eric Lavesson",
  "license": "ISC"
}
```

~

item)

Using the `--save` flag we can **track dependencies** in our `package.json`.

```
npm install --save react
```

- As of npm 5.0.0 `--save` is the default behaviour.

~

Here's the `package.json` file after the saved dependency (shortened for convenience):

```json
{
  "dependencies": {
      "react": "^15.3.2"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"We have no tests yet\""
  }
}
```

Note how `react` is now listed as a dependency.
~

item)

npm uses **Semantic versioning** (also called **semver**)

A "version" is described as a string, such as `1.2.3`, where:

```
1 - MAJOR (incompatible API changes)
2 - MINOR (new functionality, backwards compatible) 
3 - PATCH (patches and bugfixes)
```

~

In your `package.json` (and also when installing, you can specify a
semver, together with one of several comparators. A few common examples
include:

```
>=1.2.3     # Anything greater than or equal to this version

=1.2.3      # Exactly this version

^1.2.3      # Accept the latest major version
            # (1.3.0 OK, but not 2.0.0)

~1.2.3      # Accept the latest minor version
            # (1.2.4 OK, but not 1.3.0)
```

~~

There's a giant heap of these. Check the following URL for the spec:

https://docs.npmjs.com/misc/semver
~

item)

We can mark some dependencies as **development-specific** with the `--save-dev` flag:

```
npm install --save-dev mocha
```

~

Let's look at the resulting `package.json`:

```json
{
  "dependencies": {
      "react": "^15.3.2"
  },
  "devDependencies": {
      "mocha": "^3.1.2"
  },
  "scripts": {
    "test": "echo \"We have no tests yet\""
  }
}
```
~

question)

I just cloned a repo with a `package.json` file. Since the `node_modules` folder is ignored, how do I actually install the dependencies?

~

answer)

Simple. You just run `npm install`!

This command will download all the `dependencies` and `devDependencies` and place them in a `node_modules` folder.


~

item)

Runnable **scripts** can be added as a `scripts` property in `package.json`

```json
{
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "printme": "echo \"This is a meaningless script\""
  }
}
```

~

Once a script is registered like that, we can run it like this:

```
npm run printme
```

This just runs our pointless command that we defined in `printme`. You'll use it for more useful stuff in the build step coming in later!
