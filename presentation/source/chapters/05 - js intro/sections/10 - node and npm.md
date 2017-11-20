---
title: Node and NPM
tagline: workbench and pantry
---

list)

In the course we'll rely heavily on

* the **JavaScript runtime Node** and 
* the **package manager npm**

...so let's touch briefly on both!

~~~

item) 

[Node](https://nodejs.org/en/) is mostly associated with **running JavaScript on the server**, but in actuality it is a **JavaScript runtime that can be run anywhere**. Some **differences versus the in-browser runtime** is that

* Node has **no DOM**
* Node can **read and write files**
* Node has **its own module system**

~~~

There are **two ways to execute JS** with Node. We can enter the **REPL** by typing `node` in a node terminal...

![](resources/images/noderepl.png)

~~~

...or we can **execute JavaScript files** by typing `node myfile.js` which executes the JS code in `myfile.js`.

This of course is the **most common usage** of Node.

JS developers frequently use Node to **run code as part of their build chain**.

~~~

item)

However, Node is also used for **running `npm`**, through which we can **download packages from the online repository** at [https://www.npmjs.com/](https://www.npmjs.com/).

~~~

Allegedly npm is an **acronym for Node Package Manager**, but **npm themselves deny that** through **consistently using lower-case characters**, and through the **top-left corner of their homepage**: 

![](resources/images/npmmeaning.png)

~~~

We download packages by

* **turning our own code into a package** through adding a **`package.json` file**
* **listing the packages we depend on** in that file
* typing `npm install` to **download all listed dependencies** to `node_modules`
* **using those modules** in our code!

~~~

By having **`package.json` as part of the project**, but **excluding `node_modules`**, we get a **small code repository** which can still be **easily inflated with dependencies**.

And we can still be sure that **everyone has the same dependcies**.

(...at least if we're careful...)

~~~

A **downloaded published module** will normally **look like this**:

![](resources/diagrams/modulecontent.svg)

The `package.json` file will specify **where in the source the entry point is**.

~~~

So! **Node's module system** that we mentioned earlier lets us

* **import stuff from other files** by using `require`
* **export stuff from files** by assigning to `module.exports`

~~~

But **now for the beautiful part** - we can **also require packages** from `node_modules`!

Thus Node and npm together solve both the **code modularisation problem** along with **3rd party code import problem**.

~~~

Here's the **full truth** about **how we require stuff**:

![](resources/diagrams/loadmodule.svg)

~~

The important part is to realise that there is **no magic involved**, and that Node provides us with a **convenient way to load**...

* **core modules** (like `fs`, `http`, etc)
* **3rd party code** (like `angular`)
* **own local modules** (like `./src/mycomponent`)
