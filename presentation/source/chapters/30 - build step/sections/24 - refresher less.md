---
title: CSS preprocessing
tagline: bells and whistles
---

<div class="learn"></div>

Freshen up our **LESS** skills.

~~

Although CSS has grown more powerful, there is still **a lot to be desired**:

* **variables**
* **computations**
* **mixins**
* **nested declarations**

~~~

This has driven many to try to **add a layer on top of CSS**. The two most popular solutions are **SASS and LESS**.

<div class="equality">
  ![js](resources/images/sass.svg)
  <span></span>
  ![heart](resources/images/less.png)
</div>


Read more at [http://sass-lang.com/](http://sass-lang.com/) and [http://lesscss.org/](http://lesscss.org/).

~~~

The idea is that we write in a language that **compiles down to regular CSS**.

![](resources/diagrams/css-compile.svg)

In other words you will be editing a `.less` or `.sass` file, and from that generate a `.css` file that you serve to the client.

~~~

For example, this LESS code:

```less
@bgcolor: #f938ab;

.sidebar {
  background-color: @bgcolor;
  & h2 {
    width: 100% * 2 / 3;
  }
}
```

~~

...**translates** to this **CSS**:

```css
.sidebar {
  background-color: #f938ab;
}

.sidebar h2 {
  width: 66.66666667%
}
```
