---
title: CI exercise
---

In this exercise we'll look at a couple of different CI options.
We'll experiment with using Travis CI.

Book:

## Main Task
### Travis CI

In order to test our ability to make passing/failing tests we'll create a simple
test script that passes if the tag `CODE_ERROR` is not found in a `.md` file, and fails
if it is found. This simple coding test will allow us to setup our CI system and
simulate testing.  We'll also be able to try out the **Pull Request** system in GitHub.

1. Create a new GitHub repository named `ci-exercise-travis`.  Make sure you keep it public.
Check the "Initialize this repository with a README".
2. Clone this repo onto your local computer.
3. In the project settings enable Travis CI under Integrations and Services.
4. Click on the link to visit "https://travis-ci.org/profile" and turn on Travis for your repo.
   If your new repo doesn't show up you may need to click the "Sync account" button at the top of the page.
5. Click the little settings wheel next to your repo. Turn on the setting for "Build only if
  .travis.yml is present"
6. Checkout a new branch `feature/enable-travis`.
7. Create an empty `.travis.yml` file in the root of the directory.
8. We need to specify some basic Travis setup. We don't need to specify a language for now.  We will
   need to setup a script that does:
   `(grep -R CODE_ERROR ./*.md || exit 0 && exit 1)`.  Note that this simply inverts the return code of
   grep so that if we have a match we exit with a non-zero code, and we exit with a zero code when there
   are no matches. You can consult the [Travis Getting Started](https://docs.travis-ci.com/user/getting-started/)
   if you need more help.
9. Add the file and commit it to your branch.
10. Push the branch to the remote.
11. Now that the branch is on the remote you'll need to visit your repo in GitHub and create a
   **Pull Request** for your branch.  If you've done all the above steps correctly you should see
   two different Travis builds kicked off:
  - **continuous-integration/travis-ci/pr**
  - **continuous-integration/travis-ci/push**
  For this first commit the two builds are identical, but they aren't always.

  The **pr** build builds what "would" happen if this pull request was merged.  The **push**
  build builds the actual contents of the branch.  This is a pattern that we'll want to maintain as
  we can ensure that the master build won't be broken by conflicting branch merges.
12. Merge your **PR**(Pull Request).
13. Now that we have a CI system enabled on our repository.  Lets prevent anyone from committing
  changes that have not passed our CI test or code review.

  Open up the project settings in GitHub and enable protections for the `master` branch.  Make sure
  that you enable "Require status checks to pass before merging".
14. We'll now try out our new protection. Checkout master and `git pull --rebase` in your repository.
  you should see your new branch in the list of updates.
15. Create a new branch named `feature/my-new-feature`.
16. Create a file named `my-code.md` (or any other name that you like as long as it ends in `.md`).
  Write a few lines of code or text in it.  Make sure that you **do not** include the `CODE_ERROR` tag.
  Commit this and push up your new branch.
17. Go to [travis-ci.org](https://travis-ci.org) and find your job. Look under "Build History". Note how your new branch
  is already built! This is a really useful feature for developers to allow them to see if a build will
  pass/fail before they even prepare to merge.
18. Go to GitHub and create a Pull Request for your new branch. After a second you'll see that a **pr**
  build is in progress.  Once it passes the box will go green.
21. Lets try out to make sure our CI build can fail.  We can simply add another commit on the same branch.
  Update your `.md` file to include `CODE_ERROR` someplace in it.
22. Commit and push your changes, confirm that the CI build has now failed.
23. Fix your code, push up a change and confirm the CI is now green.  Merge your patch!
