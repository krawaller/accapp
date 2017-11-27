---
title: Code quality
tagline: Getting rid of the lint
---


<div class="learn"></div>

Learn about different aspects of **code quality** and **tools** to enforce it.

~~

list)

So - **code quality**. What do we actually mean? There are (at least) **3 different aspects**:

* syntax errors
* aesthetics
* politics

~~~

item)

First off code needs to be **correct**. Our editor should prevent us from writing code with **syntax errors**.

Even in a loosely typed language, catching syntax errors early is very possible.

~~ 

Loosely typed means having to accept a higher ratio of **runtime errors** and **bugs**, but that's another discussion.

~~~

item)

But code quality can be discussed outside of the realm of errors. 

For instance, as a team we can make decisions on certain **aesthetics**.

~~~

A common example is how to indent our files - **tabs** or **spaces**!

The important thing is not what we choose, but that we use our choice **consistently** throughout our codebase.

Having a consistent style is an important part of having **quality code**.

~~~

item)

Then there are things that we can be consistent about that aren't really aesthetics. For example:

* how large should a function be before we split it
* how many different parameters is ok to have
* how many branches are ok within a function

This is what we mean by **politics**.

~~~

Just as with aesthetics, a codebase is easier to read and predict if we **follow the same politics** throughout.

Again - **consistency**.

~~~

The category of tools that help to **enforce syntax, aesthetics and choices** are called **linters**.

The name comes from the lint in your belly-button - a linter is a tool that picks this out!

~~~

The different choices we can make (tabs or spaces, etc) are called **rules**.

We can **configure a linter** and tell it what our opinion is on the various rules.

~~

Because the whole point of linters is to **ensure consistency**, that means that all team members need to **use it in the same way**.

We achieve this by making sure that the **linter configuration is part of our source code**. That way everyone who clones the repo will get the **same choices made**.

~~~

We can **run the linters** (in other words, test if our source code obeys the rules) in a variety of ways:

* show **feedback in our editor as we code**
* have a **linter command that tests the entire source**
* run it on a **central repo** when ppl try to check in code.

We'll explore the last point later, and the first two now!
