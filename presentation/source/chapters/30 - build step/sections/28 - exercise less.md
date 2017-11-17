---
title: Exercise - LESS
tagline:
---

<div class="goal"></div>

Goal: Style our app with LESS

~

list)

Battleplan:

* install LESS globally
* add a LESS file
* use LESS syntax
* compile LESS to CSS

~~~

item)

First we **install LESS globally**:

```
npm install -g less
```

You might have to **run the terminal as administrator** to be allowed to do this.

~~

Then try typing this in **any terminal**:

```
lessc -v
```

If you see a LESS version number, you're ok!

~~

item)

Now we need to **add a LESS file**!

Simply **copy the CSS file** but call it `.less` instead.

~~

item)

This is all pointless unless we **use some LESS syntax**!

Look up a feature you like (variables are easy), and **use it in the LESS file**!

~~

item)

Now we must **generate the CSS file**! In a terminal, navigate to the project folder and type:

```
lessc styles.less styles.css
```

You might have to **tweak according to your exact file names**.

~~

After this command, notice that the `styles.css` file will change accordingly!

~~

You'll **redo this process** every time you make a change to the LESS file.

(unless you add a watcher!)

~~

<div class="checklist"></div>

You are done when...

* The styles are controlled from a LESS file
* The app still looks as expected in the browser
