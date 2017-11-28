---
title: Exercise - Run CircleCI on PR:s
tagline: 
---

<div class="goal"></div>

Goal: Prevent breaking PR:s

~

list)

Here's the plan:

* set up your master branch to be protected
* make a PR to someone else
* have someone else make a PR to you

~~~

item)

First off, head over to **your repo Github** to start setting it up!

Go to the **settings tab** to the far right.

![](resources/images/github-repo-settings.png)

~~~

Once there choose **Branches** and **select `master` as the protected branch**:

![](resources/images/github-settings-branches.png)

~~

**Tick the boxes** like this...

![](resources/images/github-protection.png)

...and hit **`Save changes`** at the bottom.

~~~

That's it - now **CircleCI will run on every pull request**!

~~

item)

Time to **test the protection of a friend**!

Go **find a classmate** who has completed the previous step.

~~~

Navigate to **their repo on Github**, click **`Clone or download`** and then the **Copy to clipboard** button!

![](resources/images/github-clone.png)

~~~

In your terminal, navigate somewhere were you can put new projects and type:

```bash
git clone <paste-to-get-url-here>
```

You paste the address by **right-clicking in the terminal and selecting `paste`**.

~~

Now **navigate into the new project**. The folder has the same name as the repo you cloned.

```bash
cd myfriendsreviewsite
```

Once inside, **create a new branch**.

```
git checkout -b somenewbranchname
```

~~

**Open the folder in VSC**, and make a **bad change to a file somewhere** so that the linter protests of the build won't work.

Then do:

```bash
git add .
git commit -m "awesome change"
git push -u origin somenewbranchname
```

~~

Now go **back to their repo on Github**. Github will see your new branch and **show a convenient `Compare & pull request button`**. Hit that!

![](resources/images/github-prbutton.png)

~~

On the next screen add a **message explaining what you've done** and hit **`Create pull request`**!

![](resources/images/github-makepr.png)

~~

Inside the PR you'll **see the CircleCI tests running**, and eventually **show an error**.

On your friend's machine the **merge button will be shown in red**.

Now **fix the code** and push a new commit. Watch the **PR update** and the **merge button go green**!

~~~

item)

Having done all that, **make someone do the same to you** to make sure that your branch is protected too!

~~

<div class="checklist"></div>

You are done when...

* a breaking PR cannot be merged to your repo
* someone has successfully merged a PR to your project
* you have a PR merged to someone else's repo
