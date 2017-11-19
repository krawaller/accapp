---
title: Node [TODO - cut down]
tagline: JS in a box
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

Sadly, this does not scale very far. It's a very crude way to set up
a webserver.

As an example, imagine that we want to **read a json file** and then
return that as the response instead.

~

### A naive approach

```javascript
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  var json = fs.readFileSync(
      path.join(__dirname, 'hello-message.json'));

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(json);
}).listen(8080);

console.log('Server running on port 8080');
```

~

Remember, we have one single thread. Reading a file is **blocking IO**.

~

### A less naive approach

```
http.createServer(function (req, res) {
  fs.readFile(
    path.join(__dirname, 'hello-message.json'), function (err, data){
      var status; var response;
      if (err) { // Handle errors
        status = 500;
        response = JSON.stringify({ err: "Something went wrong" });
      } else { // Got the file content
        status = 200;
        response = data;
      }
      res.writeHead(status, {'Content-Type': 'application/json'});
      res.end(response);
    });
}).listen(8080);
console.log('Server running on port 8080');
```

~

question)

So to do asynchronous work, we simply pass along callbacks?

~

answer)

Yes - the convention in Node.js is that the last argument in an asynchronous call should **always be a function** that
can be used as the callback.

Moreover, the first argument of the callback will always contain errors if present

~

question)

But doesn't this suck?

~

answer)

Absolutely. Asynchronous operations in Node.js leads to poorly structured, deeply nested code blocks
 
```
someAsyncOp(function(err, r1){
  if (err) { /* Handle errors */ }
  else {
    anotherAsyncOp(r1, function(err, r2){
      if (err) { /* Handle errors */ }
      else {
        thirdAsyncOp(r2, function(err, r3) {
            // .. And so on
        });
      }
    });
  }
});
```

~

A better way, using ES2015, promises and Express:

```
import express from 'express';
import Promise from 'bluebird';
import path from 'path';

let app = express();
let fs = Promise.promisifyAll(require('fs'));

app.get('/', (req, res) => {
    fs.readFileAsync(path.join(__dirname, 'hello-message.json'))
        .then(content => res.status(200).json(JSON.parse(content)))
        .catch(_ => res.status(500).json({
            err: "Something went wrong" })
        );
});

app.listen(8080, () => console.log('Server running on port 8080'));
```

And THIS is the kind of thing we want to cover today!
