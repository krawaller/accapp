---
title: Exercise - set up repo
tagline: Becoming part of the world
---

<div class="goal"></div>

Goal: **Track our code** in an **online git repo**!

~~~

list)

Here's what we need to do:

* init git repo locally
* create github repo
* add remote to local repo
* start tracking files
* do initial commit
* push to github repo

~~~

item)

**Initialise a git repo** in the project folder by **navigating to it in a terminal** and type:

```
git init
```

~~~

This will create an **invisible `.git` folder** where Git does its magic:

![](resources/images/invisiblegitfolder.png)

(depending on your OS settings this might be hidden)

~~~

item)

TODO - instructions for github!

~~~

item)

Now we need to add the Github repo as a **remote** in our local one!

~~~

Go to the Github repo in the browser and **copy the address**:

TODO - screenshot

~~~ 

Now execute the following in the terminal locally:

```
git remote add origin someaddresshereTODO
```

~~

item)

Turning our focus back locally, we must start **tracking the files**!

```
git add .
```

~~~

item)

The former command will stage the initial state of those files. Let's commit!

```
git commit -m "initial commit"
```

~~~~

item)

Now we must tell our remote repo about the changes we've made:

```
git push origin master
```

~~~~

<div class="checklist"></div>

You are done when...

* There's a repo on Github...
* ...that contains all of the code
