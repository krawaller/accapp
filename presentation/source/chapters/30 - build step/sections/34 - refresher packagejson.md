---
title: Package.JSON
tagline: The heart
---


### Easy to start working with

To install a package you just type:

```
npm install react
```

This will generate a `node_modules` folder with react and all its
dependencies, if any.

*Hint: You probably want to ignore this folder in your VCS*

~

### Doing it for an upcoming project

Getting started with a new project is simple:
```
npm init
```
This initializes the folder as an Node.js
project by creating a package.json in it.

~

### package.json

```json
{
  "name": "Install dependencies example",
  "version": "1.0.0",
  "description": "Project description",
  "main": "index.js",
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

### Let's install a package again

Using the `--save` flag we can now save the dependency in our
`package.json`.

```
npm install --save react
```

~

### Updated package.json

Shortened for convenience.
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

### sidenote - semantic versioning

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

There's a giant heap of these. Check the following URL for the spec:

https://docs.npmjs.com/misc/semver
~

### Dependencies just for development

npm thought of this with the `--save-dev` flag.

```
npm install --save-dev mocha
```

Let's look at the `package.json` once again.

~

### Now with two kinds of dependencies

Again, just showing the important stuff.
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

I just cloned a repo with a `package.json` file. Since the `node_modules`
folder is ignored, how do I actually install the dependencies?

~

answer)

Simple. You just run `npm install`!

This command will download all the `dependencies` and `devDependencies`
and place them in a `node_modules` folder.


~

### Adding a script

Runnable scripts can be added as a `json` property in `package.json`

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

### Running scripts

npm uses a command called `run`:

```
npm run printme
```

This just runs our pointless command that we defined in `printme`

~

### Let's make a more useful example

Adding a test script to `package.json` instead:

```json
{
  "dependencies": {},
  "devDependencies": {
      "mocha": "^3.1.2",
      "babel-cli": "^6.18.0",
      "babel-preset-es2015": "^6.18.0",
  },
  "scripts": {
    "test": "mocha --compilers js:babel-core/register"
  }
}
```

*This script will by convenience look for a folder named `test` and run all the test files.*

~

### Running the test script

```
npm run test
```
or
```
npm test
```
*The later is a shortcut provided by npm. You can name a script to
whatever you want but this shortcut only works for `test` and `start`.*
