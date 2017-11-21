---
title: Exercise - Netlify [TODO - finish]
tagline:
---

<div class="goal"></div>

Goal: Publish our app online

~

list)

* sign up on Netlify
* connect your repo
* configure the repo


~~

item)

Go to [https://app.netlify.com/signup](https://app.netlify.com/signup), and choose to sign up with your **Github credentials**.

This will allow Netlify to connect to your repos.

~~

item)

Once logged in, click **New site from Git**:

![](resources/images/newnetlify.png)

~~~

On the next screen, select **Github**:

![](resources/images/newnetlifygithub.png)

~

Next you'll have to **find the correct repo** among a list of all your repos. If you have many, use the search field to the right.

![](resources/images/newnetlifyfindrepo.png)

Once you find it, click it!

~~

The final step is to tell Netlify **which folder to publish** and **what command to run**:

![](resources/images/newnetlifyconfig.png)

We can also specify a **branch** and **advanced options**, but we won't need either.

~~

<div class="checklist"></div>

You are done when...

* The app is visitable online
* Pushing to `master` updates the app
