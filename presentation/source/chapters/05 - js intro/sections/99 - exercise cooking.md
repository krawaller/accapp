---
title: Exercise - cooking time!
tagline: getting functional
---

<div class="goal"></div>

Goal: Freshen up our JS skills

~~

Let's have an initial exercise to gauge your JS fu.

We'll throw **objects**, **arrays** and **functions** into the mixer and see what happens!

~~~

We'll **use Node** for this exercise, and play around with **a single `shop.js` file**.

**Create that file** in a folder somewhere, and **navigate to it in a terminal**!

~~~

In that file, **define at least 3 recipe objects** using different ingredients. They should **look like this**:

```
let supersoup = {
  potato: 3,
  onion: 1,
  corn: 1
};
```

The **keys are ingredients**, and the values are **how many of the ingredient is needed**.

~~~

Now define a **shop object** containing all used **ingredients as keys** and the corresponding **price per ingredient as value**.

```
let ICA = {
  potato: 12,
  tomato: 7,
  cucumber: 3,
  corn: 5,
  // ...
};
```

~~~

Now **create a function** that **calculates the cost for a recipe**...

![](resources/diagrams/recipecostcalc.svg)


~~~

...and **try it for a few of them**:

```
console.log("Supersoup costs "+costOfRecipe(supersoup,ICA));
console.log("My famous stew costs "+costOfRecipe(stew,ICA));
```

~~~~

To test this, we simply **type the following in the terminal**:

```
node shop
```

...given that

* the **name of the file is `shop.js`**.
* we're **in the same folder**

~~~

Exactly like with the previous exercise:

* You **may work in teams** of up to 3
* **Submit the file** by putting it in your personal folder in the repo.

~~~

**Challenge**: Too easy? How about this:

* Create **a few other shops with different prices**
* **Collect all shops** in a `shops` object: `{ ICA: {...}, coop: {...}, ... }`;

And **THEN**:

~~~

Create a **`findCheapestStore` function** that takes the `shops` object and a recipe, and tells you which store is the cheapest for that recipe!

![](resources/diagrams/beststore.svg)

Now demonstrate that for a few recipes:

```
console.log("Cost of stew at ICA", costOfRecipe(stew,ICA));
console.log("Shop for supersoup at", findCheapestStore(supersoup,stores));
```

~

<div class="checklist"></div>

You are done when...

* typing `node shop` in the terminal shows `costOfRecipe` working
* ...and `findCheapestStore` in case you bit into that one
