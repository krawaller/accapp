---
title: Exercise - CircleCI
tagline: 
---

<div class="goal"></div>

Goal: Hooking up CircleCI 

~

As previously mentioned there are **many tools available** to do continuous integration as a service.

We'll be using CircleCI!

![](resources/images/circleci.png)

~

list)

Here's the battleplan:

* Sign up for CircleCI
* Setup a project
* Configure our repo
* Try it out


~~~

item)

First we have to **sign up**.

* Go to [https://circleci.com](https://circleci.com/) and hit the **sign up** button to the top right**
* Next, choose **Sign up with Github**
* On the new screen, **log in with your Github credentials**
*  Next, **agree to authorize CircleCI**

You should now arrive at your brand new **CircleCI dashboard**!

~~

item)

Time to **connect your repo**!

Hit the **Add project** button to the far right:

![](resources/images/circleci-addprojects.png)

~~

You'll now see a **filterable list of all your repos** on Github.

Find the correct repo and hit the **Setup project** button next to it.

![](resources/images/circleci-setuprepo.png)

~~~

On the **settings screen** choose **Linux**, version **2.0** and **Node**:

![](resources/images/circleci-settings.png)

All done here, well done!

~~~

item)

Finally we have to **configure CircleCI** by adding **configuration files to our repo**!

In your project, add a **folder called `.circleci`** with a **`config.yml`** inside it!

![](resources/images/circleci-folder.png)

~~~

Inside **`config.yml`**, paste the following:

```yaml
version: 2
jobs:
  build:
    working_directory: ~/tmp
    docker:
      - image: circleci/node:7
    steps:
      - checkout
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

This instructs CircleCI how to **build and lint the project**.

~~

item)

Time to **try this out**! Do a regular **add, commit and push** of your new config file.

~~

Now go back to the **CircleCI dashboard** in the browser and **click `Builds`** in the top left corner. You'll see something like this...

![](resources/images/circleci-running.png)

...which will then turn into **this**:

![](resources/images/circleci-running.png)

~~~

...except if there was a **problem**. Then you'd instead see red, and clicking that would **show the output log**. You'd also get an **email** saying things went belly-up.

Try this by

* making a small lint violation in your LESS file
* adding, committing and pushing the error

~~

<div class="checklist"></div>

You are done when...

* CircleCI tries to build and lint your app on every push
* You are notified via mail when it fails
