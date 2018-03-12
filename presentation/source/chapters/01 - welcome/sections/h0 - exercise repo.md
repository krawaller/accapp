---
title: Exercise - set up repo
tagline: Becoming part of the world
draft: true
---

<div class="goal"></div>

Goal: **Track our stuff** in an **online git repo**!

~~~

list)

Here's what we need to do:

* init git repo locally
* add a file
* create github repo
* add remote to local repo
* start tracking files
* do initial commit
* push to github repo

~~~

item)

**Make a folder** somewhere on your hard drive called `JS days` (or something).

**Initialise a git repo** in that folder by **navigating to it in a terminal** and type:

```bash
git init
```

~~~

This will create an **invisible `.git` folder** where Git does its magic.

(depending on your OS settings this might be hidden)

~~~

item)

For this to be exciting we must **have something to track**! 

Therefore, **create a file** called `me.txt` or something in the folder. In that file, write:

* how much you know about HTML, CSS and JS, scale 1-10
* what your feelings are towards learning JS :)

~~

item)

Now **log into Github** and **create a new repo** using the plus button in the top-right corner:

![](resources/images/newgithubrepo.png)

~~~

Give the new repo a **fitting name**:

![](resources/images/newreponame.png)

No other settings need to be filled. When you're done, hit the green **Create repository** button at the bottom!

~~~

This will transition you to `github.com/yourusername/yourreponame`. Here, make sure **`HTTPS` is selected** and then hit the far-right button to **copy the HTTPS path**!

![](resources/images/copynewrepoaddress.png)

~~~

**If you get tired of typing your password all the time:**

You can switch your remote to use **ssh** if you have time left after finishing the exercise.

~~~
item)

Now we need to add the Github repo as a **remote** in our local one! In the terminal, while somewhere inside your local gitrepo, type:

```bash
git remote add origin https://some.url
```

...where you simply **paste** the final part to be the correct URL for your repo!

~~

item)

We must now tell our local repo to **track the local file**!

Since we want to **track everything**, we can cheat by simply doing this...

```bash
git add .
```

...in the root of our repo.

~~~

item)

The former command will stage the initial state of those files. Let's commit it!

```bash
git commit -m "initial commit"
```

~~~~

item)

Now we must tell our remote repo about the changes we've made:

```bash
git push -u origin master
```

If you reload your repo in the weppage, you should now see your files!

~~~~

<div class="checklist"></div>

You are done when...

* There's a repo on Github...
* ...that contains all of the code
