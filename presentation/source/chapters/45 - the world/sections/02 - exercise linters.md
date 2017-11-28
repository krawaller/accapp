---
title: Exercise - hooking up linters
tagline: 
---

<div class="goal"></div>

Goal: Have commands to lint our code

~~

list)

Since we are using **two separate languages** in our project, we need two different linting solutions!

* Lint our LESS code
* Lint our JavaScript

~~~

item)

One of the most popular tools for linting CSS is [Stylelint](https://stylelint.io/).

![](resources/images/stylelint.svg)

Stylelint also understands both SASS and LESS.

~~~

We **install it from npm** as per usual:

```
npm install --save-dev stylelint
```

~~

We **configure Stylelint** by adding a **`.stylelintrc`** file:

![](resources/images/stylelintfile.png)

~~~

Here's what the content looks like:

```
{
  "rules": {
    "max-empty-lines": 4
  }
}
```

The `max-empty-lines` rule is just an example. You can find a [full list of rules](https://stylelint.io/user-guide/rules/) on the Stylelint homepage. Glance through it and **add the rules you like**!

~~~

Having done that we need to **add a script to run the linter**. Put the following into the `scripts` section of `package.json`:

```
  "lintless": "stylelint styles.less",
```

Make sure your command matches what you've chosen to call your style file.

~~~

To test, **make a change in the LESS file that violates a rule** and run...

```
npm run lintless
```

...and you'll see something like:

![](resources/images/stylelintoutput.png)

~~~

It would also be valuable to **get this feedback directly in the editor**. In VSC, go to the extensions tab and **find the Stylelint extension**:

![](resources/images/stylelintextension.png)

~~~

Now VSC will **show the errors as you code**:

![](resources/images/stylelintineditor.png)

~~

item)

Ok! Time to make a very similar journey for our **JavaScript**. Our linting tool here will be [ESLint](https://eslint.org/).

![](resources/images/eslint.png)

~~~

We **install it from npm** as per usual, yet again:

```
npm install --save-dev eslint
```


~~

We'll need **two new files**:

![](resources/images/eslintfiles.png)

~~~

The **configuration** in **`.eslintrc`** looks like this:

```json
{
  "parserOptions": { "ecmaVersion": 6 },
  "rules": {
      "quotes": ["error", "double"]
  }
}
```

Again the `quotes` rule is just an example of what you can do.

See the [full list of ESLint rules](https://eslint.org/docs/rules/) and pick what you like!

~~~

The other file, **`.eslintignore`**, is for - surprise - listing **paths that should not be linted**. We have a few of those:

```
webpack.config.js
distribution
```

Go ahead and add the above to your file!

~~~

Next up we need a **script to run ESLint**. Add the following to the script sections of `package.json`:

```
  "lintjs": "eslint ."
```

This simply tells ESLint to lint everything in the current folder.

~~

question)

Instead of linting the whole folder and ignoring some stuff, couldn't we have **moved our source files into a separate directory**, then tell ESLint to lint **only that directory**?

~~~

answer)

Yes. And that would probably be much better, especially when the number of source files grow.

But then I wouldn't get to show you `.eslintignore`! :D

~~

Time to make VSC aware of what we just did! We need the **ESLint extension**:

![](resources/images/eslintextension.png)

As you can see this extension is **ridiculously popular**.

~~~

Having done that, we now get **JS rules violation feedback in the editor**:

![](resources/images/eslintineditor.png)

~~

<div class="checklist"></div>

You are done when...

* there's a `lintjs` command
* non-source js files are not linted
* there's a `lintless` command
* there's a `lint` cmnd that runs both
* errors from both linters are shown in VSC

~~

<div class="solution"></div>

If you get stuck, see the [Lint](https://github.com/krawaller/js-app-solutions/tree/master/lint) solution.
