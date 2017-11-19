---
title: "Git and Github [TODO: cut down]"
tagline: The tools of the trade
---

~

## First-time setup

If this is your first time with Git, you will want to start by configuring Git
to recognize your name and email address.

    git config --global user.name "Your Name Here"
    git config --global user.email "your_email@youremail.com"


~

With Git, you *make a commit for each change* you wish
to record in the system

<div class="warning-border">
    Some version control systems keep track of history
    per file. Git versions the whole tree. 
</div>
~

list)

### A commit consists of:

* A snapshot of all the files
* A commit message
* An author
* A date

~

In Git, committing is a two-step process

<img class="img_no_border"
     src="resources/images/adding_and_committing.png"
     alt="Git-add-commit"
     style="max-height: 500px" />

~

### Adding new files

The `add` command places a file in the staging area
<small>Below is given that the README file exists</small>
```diff
$ git add README
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

### Committing changes

With existing files, add places the changes to that
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

<h3 class="lowercase">.gitignore</h3>

One annoyance is that after building our code,
the generated files show up in the status output

<pre class="custom-code">
    <code># On branch master
# Untracked files:
#
#       <span class="warning-text">main.exe</span>
#       <span class="warning-text">main.obj</span>
#       <span class="warning-text">util.obj</span></code>
</pre>

~

The solution is to *add a .gitignore* file

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

~

<h3 class="lowercase">git diff</h3>

The status command gives you an overview of your changes; diff gives the details
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

~

<h3 class="lowercase">git log</h3>

Shows a log of all the commits, most recent commit first

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
<h3 class="lowercase">git log</h3>

Has more options than you can possibly imagine;
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

### A central repository

The most common use of remotes is to set up a central repository

<img src="resources/images/a_central_repository.png"
     alt="Merge commits"
     class="img_no_border no_margin">

<div class="info-border">
    It's the central repository because everyone
    agrees it is. To Git, it's just another copy.
</div>

~

### Hosted Git

There are a range of hosted Git services out there,
which can host your central repository for you

GitHub is the largest today, offering free hosting
for public repositories (used by thousands of open
source projects) and private hosting for individuals
and organizations

~

### Creating a Github account

Creating an account is free, and easy.

Go to `https://github.com/`.

> Follow the directions

~

### Adding a remote

After creating a repository on GitHub, we need to
tell our local Git repository about it by adding
it as a remote

```diff
$ git remote add origin https://github.com/<user>/<repo>.git
```

Since you can have multiple remotes, you have to
specify a name as well as the address

>    The convention used by almost all Git users is to
     call the central repository remote origin

~

*Pushing is taking commits we have locally and
copying them to a remote*

If we have a new, empty, central repository
then our first push should use the -u flag

```diff
$ git push -u origin master
```

<img src="resources/images/dag-the_first_push.png"
     alt="The first push"
     class="img_no_border no_margin">
