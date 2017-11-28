---
title: Continuous Integration
tagline: 
---


<div class="learn"></div>

Understand what **continuous integration** is and why we do it

~~

In modern JS development, **continuous integration** is a very important term.

The idea behind it is to make it **cheaper to merge new code**.

~~

We accomplish this by **automating all checks possible**. This frequently includes:

* Making sure the **build works**
* Applying the **linter rules**
* Running the **unit tests**

~~

question)

Wait... shouldn't the **developers always do this**?

~~

answer)

**Yes**. But...

> This is such a small change, surely nothing can break

...etc. In essence, **humans can't be trusted**.

~~~

Also, research shows that simply **knowing that rigorous testing is applied to all code** will make the team...

* feel more **ownership** for the code
* feel more **trust** for the code

...which are both very valuable things.

~~~~

So, how is this all accomplished? We use a **continuous integration system**.

These used to be server-based, such as [https://jenkins.io/](https://jenkins.io/). Very powerful, but also rather **fiddly to set up**.

~~

Now it is more popular to use **CI as a service solutions**.

Two popular ones are [https://travis-ci.org/](https://travis-ci.org/) and [https://circleci.com/](https://circleci.com/).

Next up we'll try our hand at the latter!
