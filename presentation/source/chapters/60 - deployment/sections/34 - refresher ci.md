---
title: Continuous integration and Travis
tagline:
---

Travis CI offers both cloud hosted and self-hosted options.
 
![Travis](resources/images/travis.png)

It's also **free** for open source projects.

~

Travis CI is tightly integrated into GitHub and an excellent choice if you use GitHub.

~

Go to: Project Settings -> Integrations & services
Select: Add Service -> Travis CI 

![Add Travis](resources/images/add-travis.png)

~

Go to Travis and turn on for your project:
![Turn on Travis](resources/images/turn-on-travis.png)

~

Create a `.Travis.yml` file with build instructions:
```yaml
language: node_js
node_js:
  - "6"

cache:
  directories:
    - node_modules

install: npm install

script:
  - npm run test
```
Commit the file into the root of the repository.

Book:
We really like how Travis files are committed into the repository that is built.  This means that
if the build steps change in the future, when you check out an old version the CI system still
knows how to build that old version.  In previous systems often backwards compatibility was broken
when the build steps changed.

In addition typically this work is done by the developers who know the testing and code best.

~

Now that we have a build it's a good idea to **require builds to pass** prior to merging to master.

~

On GitHub:
Go to: Project Settings -> Branches
Select "Choose a branch..." under Projected Branches

![Protect-a-branch](resources/images/protect-a-branch.png)

~

Turn on "Require status checks to pass before merging":
![Protect-master](resources/images/protect-master.png)

Book:
We'd also **strongly** recommend requiring pull request reviews prior to merging.

Note: You may need to run the Travis job once before the status checks show up to select them.

~

Now when a developer creates a pull request they'll be able to see the CI status and (if enabled)
the review status.

![Protect-master](resources/images/merge-status.png)
