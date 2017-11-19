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
<small>(It is also possible to do it with a single command)</small>

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

<h3 class="lowercase">git diff</h3>
```diff
-    for (i = 0; i < 10; i++)
+    for (i = 0; i < n; i++)
```
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-6">
            <div class="warning-border" style="margin: 10px">
                <span class="warning-text">Red</span> and the "-", indicate removed lines
            </div>
        </div>
        <div class="col-sm-6">
            <div class="info-border" style="margin: 10px">
                <span class="info-text">Green</span> and the "+" indicate added lines
            </div>
        </div>
    </div>
</div>

~

By default diff only shows unstaged changes;
use the staged option to see the staged changes

```diff
$ git add src/main.c
$ git diff --staged
```

```diff
diff --git a/src/main.c b/src/main.c
index 5f8a873..81f2948 100644
--- a/src/main.c
+++ b/src/main.c
@@ -1,5 +1,5 @@
 #include "util.h"

 int main() {
-    print_ten_times("Hello, world!\n");
+    print_n_times("Hello, world!\n", 10);
}
```

~

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

## Creating a Github account

Getting such an account is free of charge, and easy. Here's how.

1. Go to `http://github.com/`.
2. Some way down the page, in the middle, is a big blue button labeled
   "Plans, Prising and Signup". Click it.
3. You're taken to a new page. At the top and to the right is a button
   labeled "Create a free account". Click it.
4. In the form on the next page, fill in the requested details. Choose
   your username wisely; it will become a part of the URLs of all your
   repositories.
5. Click "Create an account". Done.

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

<div class="info-border">
    The convention used by almost all Git users is to
    call the central repository remote origin
</div>


~

## Uploading a repo to GitHub

1. Create a public repository `exercise-2` using your Github account. (If you
   don't have a Github account, see the instructions before Exercise 1.)
2. Follow the instructions from Github to add a `remote`. (Use "HTTP", not
   "SSH", as your protocol.) `push` your repository. Don't forget the `-u` flag,
   suggested by Github. You may have to consider proxy settings to make this
   step work, if you're pushing from inside corporate walls.
3. Use the `branch` command without arguments. Same branches as before. Now try
   `branch` with the option `-a`. A new branch, `remotes/origin/master`, should
   show up.
4. Do a `checkout` of your `new-feature` branch.
5. Do a `push` to `origin new-feature`, thus creating a new branch `new-feature`
   at Github, too.
   
~


### The first push

*Pushing is taking commits we have locally and
copying them to a remote*

If we have a new, empty, central repository
then our first push should use the -u flag

```diff
$ git push -u origin master
```

<img src="resources/images/dags/dag-the_first_push.png"
     alt="The first push"
     class="img_no_border no_margin">

~

### Cloning

The `clone` command is used when you want to *get
a local copy of a remote repository*; it also sets
up origin to point to the remote for you

```diff
$ git clone https://github.com/<user>/<repo>.git
```

<img src="resources/images/dags/dag-cloning.png"
     alt="Cloning"
     class="img_no_border no_margin"
     style="max-height: 200px">

<div class="warning-border">
    You use `clone` once to get an initial copy of
    the remote; later you'll be using `pull` to
    synchronize.
</div>

~

### Sharing changes (1)

After you have done some work locally, you will
have one or more commits that the central
repository does not have

<img src="resources/images/dags/dag-sharing_changes_1.png"
     alt="Sharing Changes"
     class="img_no_border no_margin"
     style="max-height: 300px">

In this case, we need to copy the one extra,
new commit over to the central server

~

### Sharing changes (2)

The push command is used to do this:

```diff
$ git push origin master
```

<img src="resources/images/dags/dag-sharing_changes_2.png"
     alt="Sharing Changes"
     class="img_no_border no_margin"
     style="max-height: 300px">

<div class="info-border">
    You don't need to tell Git which commit(s)
    it needs to copy. It always works that
    out for you. :)
</div>

~

### Getting the latest changes (1)

At this point, the central repository has a commit
that Norbert the New Guy doesn't have in his local
copy of the repository

<img src="resources/images/dags/dag-getting_the_latest_changes_1.png"
     alt="Sharing Changes"
     class="img_no_border no_margin"
     style="max-height: 300px">

We need to copy that new commit from the central
repository into the local copy

~

### Getting the latest changes (2)

The `pull` command is used to fetch the latest
changes and merge them into our local copy

```diff
$ git pull
```

<img src="resources/images/dags/dag-getting_the_latest_changes_2.png"
     alt="Sharing Changes"
     class="img_no_border no_margin"
     style="max-height: 300px">

~

### Getting the latest changes (3)

`pull`  
really just calls two other commands for us:

`fetch`  
This command fetches all of the changes from a
remote that we don't know about locally

`merge`  
We already saw this one! :)

<div class="info-border">
    The exact same mechanism we used to merge local
    branches is also used to merge commits from a
    remote. Neat, huh? :)
</div>

~