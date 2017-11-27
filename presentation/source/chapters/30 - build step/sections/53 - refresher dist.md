---
title: Distribution files
tagline: Made to order
---

<div class="learn"></div>

The concept of **distribution files**.

~~

question)

Two of these files are **special**. Which?

![](resources/images/differentfilesquestion.png)

~~~

answer)

These! They alone are **generated** from the rest:

![](resources/images/differentfilesanswer.png)

~~~~

We **don't want to track generated files**, and we **don't really want to mix them with our source files**.

But, it is the **generated files** that we want to **serve to the client**, and **not our source files**!

~~~

This is what a **proper build step** should take care of; it should **generate a directory** containing **everything the client needs**. This directory should **not contain anything not needed**, but only the stuff that is needed to run the app.

~~~

And, by peculiar chance, you'll now get to **set up generating such a folder**! :)
