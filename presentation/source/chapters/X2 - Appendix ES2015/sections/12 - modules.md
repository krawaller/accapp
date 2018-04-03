---
title: Modules
tagline: getting into the import/export business
---

As we saw earlier, **Node gave us modules** through the `require` and `module.exports` globals it provides.

But with ES2015, we got **native modules** for the very first time!

~~~

While **Node modules** followed the **CommonJS module standard**, what was implemented in the language follows **another syntax**, named **ES modules**.

But the **concepts are the same**. While you would do this in **CommonJS**...

```javascript
// file1.js
module.exports = {..};

//file2.js
var lib = require("./file1.js");
```

~~~

...you would do this with **ES modules**:

```javascript
// file1.js
export const lib = {..};

//file2.js
import lib from './file1.js'
```

We have to **name our exports** here, otherwise things are **pretty similar**.

~~~

There are **other differences too**, so for the full scope you should **check the MDN docs** for [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

~~~

Note that even though this is now **part of the language**, there are **no browsers that implement the functionality yet**.

This is mainly because it **wouldn't be practical** - we'd get a **gazillion http requests for small files**.

~~~

And since we **likely have a build step anyway** to do minification and transpiling and similar, you can easily **bundle your code into a single file**, too.

But, with the advent of HTTP2, **who knows what the future will hold**!

