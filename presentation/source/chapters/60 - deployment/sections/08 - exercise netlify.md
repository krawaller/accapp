---
title: Exercise - Netlify
tagline:
---

<div class="goal"></div>

Goal: Autopublish our app online

~

list)

* sign up on Netlify
* connect your repo
* configure the build
* configure the site


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

item)

We must now tell Netlify **which folder to publish** and **what command to run**:

![](resources/images/newnetlifyconfig.png)

We can also specify a **branch** and **advanced options**, but we won't need either.

~~

item)

Your new app will get a **random name** - let's fix that! Go to the **Settings tab**:

![](resources/images/newnetlifysettings.png)

~~

On that screen, in the **Site information** section, hit **Change site name**:

![](resources/images/newnetlifynewname.png)

~~

Now for the magic - if you change your site name to `myawesomereviewsite`, then...

* your site is visitable at **`http://myawesomereviewsite.netlify.com`**
* it **updates whenever you push to Github**!

But, since I've already used `myawesomereviewsite`, you'll have to pick something else! :)

~~

<div class="checklist"></div>

You are done when...

* The app is visitable online
* Pushing to `master` updates the app
