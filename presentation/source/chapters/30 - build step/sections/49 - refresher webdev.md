---
title: Webpack dev server
tagline: a smoother workflow
---

<div class="learn"></div>

Learning about **Webpack dev server**.

~~

Of course, having to manually press the build button every time gets old quickly.

But, there is a tool for solving that! Time to meet **[Webpack dev server](https://github.com/webpack/webpack-dev-server)**.

This is a **ridiculously powerful tool**, we'll just be scratching the surface here.

~~

list)

We'll walk through...

* installation
* configuration
* running
* notifications

~~

item)

Webpack dev server is installed from npm like usual:

```text
npm install --save-dev webpack-dev-server
```

~~~

item)

We configure it by **adding a `devServer` part** in the webpack config:

```
var path = require("path");

module.exports = {
  // ... other stuff excluded ...
  devServer: {
    contentBase: __dirname, // the root for the server
    watchContentBase: true, // so we reload if other stuff like CSS changes
    port: 9000, // it'll now be at http://localhost:9000
  }
};
```

~~

item)

Running it is as simple as running webpack. We **add a script** to the package.json executing the `webpack-dev-server` binary

```
  "bundle": "webpack",
  "start:dev": "webpack-dev-server"
```

This will also read from `webpack.config.js`.

The name `start:dev` isn't magical, just traditional.

~~

As long as this process is running, webpack will automatically... 

* **regenerate `bundle.js`**
* **reload the browser**

...whenever a file is changed!

~~~

Not only that; it will...

* do **incremental builds** 
* **serve `bundle.js` from memory**

...which means it is *faster* than normal!

~~

item)

Having a watcher is convenient, but it **can be dangerous**. How do we know if it has reloaded or not?

One way to help is to have a **notifier** tell us whenever the bundle is regenerated!

~~

We can achieve this by installing **Webpack notifier**...

```text
npm install --save-dev webpack-notifier
```

...and adding it as a plugin in `webpack.config.js`:

```
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  // ... other stuff removed ...
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ]
};

```
