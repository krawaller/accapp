---
title: "Git and Github"
tagline: The tools of the trade
---

<div class="learn"></div>

Make sure we have an understanding of **Git and Github**.

~~

Chances are very slim that you'll be able to do modern web work without using...

* Git for version controlling and collaboration
* Github for an online-hosted master Git repo

~

list)

Probably you're already up and running (?), but here's a **condenced guide** for common patterns:

* First-time setup
* The idea of a commit 
* The commit flow
* Excluding files
* Seeing what changed
* A log of changes
* Central master repo

~

item)

If this is your first time with Git, you will want to start by **configuring Git**
to recognize your name and email address.

    git config --global user.name "Your Name Here"
    git config --global user.email "your_email@youremail.com"


~

item)

Git centers around the idea of a **commit**. We *make a commit for each change* you wish
to record in the system

<div class="warning-border">
    Some version control systems keep track of history
    per file. Git versions the whole tree. 
</div>

~

A **commit consists of**:

* A snapshot of all the files
* A commit message
* An author
* A date

~

item)

In Git, committing is a two-step process

<img class="img_no_border"
     src="resources/images/adding_and_committing.png"
     alt="Git-add-commit"
     style="max-height: 500px" />

~

The `add` command **places a file in the staging area**
<small>Below is given that the README file exists</small>
```diff
$ git add README.md
```
The `commit` command then takes the contents of the
staging area, and creates a commit
```diff
$ git commit

[master (root-commit) beb9dfd] Add a README.
 1 files changed, 1 insertions(+), 0 deletions(-)
 create mode 100644 README
```

~

For **existing files**, `add` will place the changes to that
file into the staging area, so you can commit changes
with two commands:

```diff
$ git add README
$ git commit
```

<small>
(A shorthand for these steps: `git commit README`)
</small>

~

~

item)

We want to avoid tracking **generated files** with Git. Let's say these are created by our build step:

<pre class="custom-code">
    <code># On branch master
# Untracked files:
#
#       <span class="warning-text">main.exe</span>
#       <span class="warning-text">main.obj</span>
#       <span class="warning-text">util.obj</span></code>
</pre>

~

The solution avoid tracking them is to *add a .gitignore* file

Content for .gitignore
```diff
*.exe
*.obj
```

Then commit the file
```diff
$ git add .gitignore
$ git commit
```

~~~

The `.gitignore` file won't be of immediate use, but we'll employ it in the **next chapter**.

~

item)

While `git status` gives you an overview of your changes, **`git diff` shows what changed**.
```diff
$ git diff
```

```diff
diff --git a/src/util.c b/src/util.c
index 9fe5927..e826a45 100644
--- a/src/util.c
+++ b/src/util.c
@@ -1,7 +1,7 @@
 #include <stdio.h>

-void print_ten_times(char *msg) {
+void print_n_times(char *msg, int n) {
     int i;
-    for (i = 0; i < 10; i++)
+    for (i = 0; i < n; i++)
         printf(msg);
}
```

~~

This is so useful that **VSC has a tab for it**:

![](resources/images/gitdiffvsc.png)

~

item)

Typing `git log` shows a log of all the commits, most recent commit first

<pre class="custom-code">
    <code><span class="gold-text">commit e20962ebed7b0288922320f217a6a3ab9371727c</span>
Author: jnthn <jnthn@jnthn.net>
Date:   Wed Apr 18 18:09:02 2012 +0200

  Add a .gitignore.

<span class="gold-text">commit eae16e7a7f34d1208ca8267c2fabbbc1eb8e3640</span>
Author: jnthn <jnthn@jnthn.net>
Date:   Wed Apr 18 17:56:55 2012 +0200

  Factor printing out to a utility file.

...</code>
</pre>

~

The log command has more options than you can possibly imagine;
one fairly useful one is:

```diff
$ git log --oneline
```

<pre class="custom-code">
    <code><span class="gold-text">e20962e</span> Add a .gitignore.
<span class="gold-text">eae16e7</span> Factor printing out to a utility file.
<span class="gold-text">887f06c</span> Start le coding!
<span class="gold-text">869cec3</span> Update README.
<span class="gold-text">8356287</span> Add a README.</code>
</pre>


To learn about (literally) dozens more, see:
```diff
$ git help log
```

~

item)

The most common use of remotes is to set up a **central repository**

<img src="resources/images/a_central_repository.png"
     alt="Merge commits"
     class="img_no_border no_margin">

<div class="info-border">
    It's the central repository because everyone
    agrees it is. To Git, it's just another copy.
</div>

~

There are a range of hosted Git services out there,
which can host your central repository for you

**GitHub** is the largest today, offering free hosting
for public repositories (used by thousands of open
source projects) and private hosting for individuals
and organizations

~

Creating an account is free, and easy.

If you haven't already got one, simply go to `https://github.com/` and follow the directions!

~

After creating a repository on GitHub, we need to
tell our local Git repository about it by **adding
it as a remote**:

```diff
$ git remote add origin https://github.com/<user>/<repo>.git
```

~~

Since you **can have multiple remotes**, you have to **specify a name** as well as the address

The convention used by almost all Git users is to give the **central repository** remote the name `origin`, but there's no technical magic to the name.

~

**Pushing** is taking commits we have locally and
**copying them to a remote**.

Our **first push** should use the -u flag:

```diff
$ git push -u origin master
```

After that you can simply push:

```bash
$ git push
```