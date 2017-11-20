---
title: The build step
tagline: modern armoury
---

In modern JS developemt we frequently use a **build step**:

![](resources/diagrams/buildstep.svg)

~~~~

This takes care of...

* **bundling** the code into a single file
* **transpiling** to lower JS versions
* **other stuff** such as minification, tree shaking, etc

~~~~

The most common build step tools are [Webpack](https://webpack.github.io/) and [Browserify](http://browserify.org/).

You'll also hear about people placing configuration in [Grunt](https://gruntjs.com/) or [Gulp](http://gulpjs.com/), but the cool kids use npm scripts instead.

We'll talk more about the build step shortly!

~~~~

For transpiling, the most common solution is **[Babel](https://babeljs.io/)**:

<div style="display:inline-block;width:550px;">
![](resources/images/babel.png)
</div>

~~~~~

By default Babel does nothing, we must **configure** it:

```javascript
{
  "presets": [
    "es2015",
    "es2016",
    "stage-0",
    "react"
  ],
  "plugins": [
    "transform-regenerator",
    "transform-decorators-legacy"
  ]
}
```