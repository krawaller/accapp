---
title: Node
tagline: JS in a box
draft: true
---


question)

*So, I've heard that Node.js is a server, is this correct?*

~

answer)

*No*

~

### The official explanation

> Node.js is a **JavaScript runtime** built on Chrome's V8 JavaScript
> engine. Node.js uses an event-driven, non-blocking I/O model that
> makes makes it lightweight and efficient.

Notice how it never mentions the word "web server" anywhere, but rather
calls it a runtime.

~

It's a runtime -> another way to execute code

In this case, the code happens to be JavaScript :)

~

In fact, there's plenty of projects out there based on Node.js, such
as [Slack](https://slack.com), and the [Atom](https://atom.io) and
[Brackets](https://brackets.io) editors.

In fact, if you want to take a closer look at desktop development with
Node.js, check out the [Electron framework](https://electron.atom.io)
(which is used to build Atom)

~

You can of course use Node.js as a server though:

```javascript
// server.js
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Why, hello there!\n');
}).listen(8080);

console.log('Server running on port 8080');
```

... and start it up as such:

```bash
$ node server.js
```

~

We typically also use node to **install dependencies** and to run our **build steps**.