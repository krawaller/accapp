---
title: Your teacher
tagline: The preacher
---

Let's **start with the most important** - me!

```dot
digraph {
  rankdir = LR
  bgcolor = transparent

  David [label="David\nWaller"]

  singing -> David
  boardgames -> David
  metal -> David

  David -> teacher
  David -> programmer

  teacher -> Edument
  programmer -> Edument

  programmer -> JS [dir=none]
  teacher -> subs [dir=none]

  JS,subs [shape=box]

  subs [label="maths, Swedish,\nprogramming"]

  {rank=same;programmer,JS}
  {rank=same;teacher,subs}

}
```

~~~

Contact information: 

* **Email**: [david.waller@edument.se](mailto:david.waller@edument.se)
* **Blog**: [http://blog.krawaller.se](http://blog.krawaller.se)
* **Twitter**: [krawaller](http://twitter.com/krawaller)
* **Phone**: 0708-293094

Don't be a stranger!

~~~

But, **fair warning** - I spend my days singing this gospel:

<div class="equality">
  ![js](resources/images/js-logo.png)
  <span>=</span>
  ![heart](resources/images/heart.png)
</div>


~~~~~

Now for what's actually most important - **you**! :)