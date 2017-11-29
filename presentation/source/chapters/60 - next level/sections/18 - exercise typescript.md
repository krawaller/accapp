---
title: Exercise - Converting to TypeScript
tagline:
---


<div class="goal"></div>

Goal: Install TypeScript

~~~

list)

Specifically, we will:

* Get dependencies
* TypeScriptify code files
* Configure TypeScript
* Make Webpack use typescript
* Fix a TS linter

~~

item)

First we need to **install**..

* **TypeScript**, which includes the compiler
* **TS-loader**, which is what allows webpack to read the typescript files and turn them into regular JavaScript

```bash
npm install --save-dev typescript ts-loader
```

~~~

item)

Now we need to **turn our files into typescript files**!

First, simply **rename them to `.ts`**!

![](resources/images/tsfiles.png)

~~~

We also have to use **`import`/`export` syntax**.

In **`data.ts`**, instead of doing `module.exports`, do:

```typescript
export const movieData = {
 // truncated
};
```

~~~

And in **`code.ts`** we exchange the `require` bits to:

```typescript
import {movieData} from "./data";
import * as $ from "jquery";
```

For those of you who already used the `import/export` syntax - note how we **must do `import * as $`** for jQuery instead of just ** `import $`**.

~~~

item)

Next we need to **configure TypeScript**. Create a new file with the magical name **`tsconfig.json`**:

![](resources/images/tsconfigfile.png)

~~~

In that file put **this content**:

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

~~~

There are of course **a lot more options** that can go into here, but this will suffice for now!

~~

item)

Time to **make WebPack aware of TypeScript** by doing some **changes to `webpack.config.js`**!

First we need to **change the `entry`** from `code.js` to `code.ts` since we renamed the file:

```javascript
  entry: './code.ts',
```

~~~~

Next we must tell WebPack to **care about `.ts` files**, otherwise it'll just ignore them! This is done with a **`resolve`** key, like this:

```javascript
  resolve: {
    extensions: ['.ts', '.js']
  }
```

~~~

Finally, below `resolve`, we must tell it to **use TypeScript to read those files**:

```javascript 
  module: {
    rules: [
      // all files with a `.ts` extension will be handled by `ts-loader`
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
```

~~

After all this, you should be able to do...

```
npm run bundle
```

...and it should still work like before!

~~~

item)

Final item on the agenda - we must **fix the code linting**!

ESLint doesn't understand TS, so, start by **removing it**! That is,

* **delete `.eslintrc`**
* **delete `.eslintignore`**
* **remove it from dependency in package.json**

~~~

Instead we'll be using [TSLint](https://palantir.github.io/tslint/)! So go do:

```
npm install --save-dev tslint
```
~~~

Now **create a file called `tslint.json`** and paste in the following:

```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```

The **`"extends" : ["tslint:recommended"]`** part will give us a whole bunch of sane **defaults**. Remove it if it annoys you. :)
~~~~

Of course we should **add a few rules of our own choosing too**!

* See the full list at [https://palantir.github.io/tslint/rules/](https://palantir.github.io/tslint/rules/)
* Pick a few that you like
* Add them to the `tslint.json` file in the `rules` section

~~~

And as before we must **make VSC aware** of our linter! Find the **`TSLint` extension** in the marketplace tab:

![](resources/images/vsc-tslint.png)

After reloading the VSC window you should now get linting in your ts files!

~~~

Final order of linting business - we must **replace the `lintjs` script** with something using TSLint instead!

```
   "lintts": "tslint -c tslint.json '*.ts'"
```

If you have deep folders you might need `tslint -c tslint.json '**/*.ts'` instead.

~~~~

Final final order of linting business -  don't forget to update `.circleci/config.yml` to use this new command! 

~~~

question)

So, after all this - **what did we actually gain**?

~~~

answer)

So far - **nothing**!

But now that TypeScript is in place, we can **reap the rewards** in the **next exercise**!

~~~~


~~

<div class="checklist"></div>

You are done when...

* The files are `.ts` files
* Running `npm run bundle` generates a bundle like before
* The app hasn't changed at all, it still runs

~~

<div class="solution"></div>

If you get stuck, see the [TypeScript Start](https://github.com/krawaller/js-app-solutions/tree/master/typescript_start) solution.
