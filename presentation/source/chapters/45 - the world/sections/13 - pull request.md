---
title: Pull requests
tagline: "Or: why programming is AWESOME"
---

<div class="learn"></div>

Employing **continuous integration** for pull requests

~~

Getting an **email** whenever someone **pushes faulty code** is useful.

But, ideally, we'd want to **prevent that from happening at all**. Fortunately this is rather easy to do, since we can **disallow merging of pull requests with errors**!

~~~

Here's the **normal flow when we work**:

* team member has **repo cloned on local machine**
* she creates a **new branch** whenever she starts a new feature
* she **implements the feature in that branch**
* when done she'll **open a pull request** from that branch to master
* others will **look through the code** ("code review")
* when enough ppl have agreed the branch is **merged**

~~~

Hooking up **continuous integration into the Pull Request flow** simply means that we want Github to **prevent merging unless CircleCI says all is ok**!

~~~

This will purely be a **configuration on Github**. Github provides a plethora of integration possibilities, and listening to CircleCI + friends is just one of them.
