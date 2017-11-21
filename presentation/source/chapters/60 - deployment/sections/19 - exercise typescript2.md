---
title: Exercise - Using TypeScript
tagline: Reaping the rewards
---

list)

* Utilize ES6 syntax
* Add a type for our review data
* Get type help for jQuery

~~~

item)

Since **TypeScript contains the ES6 syntax**, perhaps also use some other neat ES6 feature? For instance, use an **arrow function** as event handler!

```typescript
ui.rating.on("click", "span", (e) => {
  // truncated
});
```

For **more tips on ES6 stuff**, see the **ES6 appendix**!

~~~

item)

We have one **implicit class** in our app right now - the **review data**!

That has a certain shape, but inside the code we get **no help enforcing the correctness** of our usage.

Let's fix that!

~~~

I like to add such stuff in a separate **`interfaces.ts`** file:

![](resources/images/interfacesfile.png)

~~

Inside that file we'll **create an object type** and export it. Here's the one for my review data:

```typescript
export type Review = {
  title: string
  imgUrl: string
  review: string
  actors: string[]
}
```

Add one that matches your data!

~~~

Then we should **use that type in `data.ts`**!

```typescript
import { Review } from "./interfaces";

export const movieData: Review = {
  // truncated
};
```

~~~~

...and also in **`code.ts`** to **type the `renderMovie` parameter**:

```
import { Review } from "./interfaces";

function renderMovie(data: Review){
  // truncated
}
```

~~

Because, having done that we get **full intellisense** for our custom data:

![](resources/images/intellisense.png)

~~

item)

TypeScript can also help us with **intellisense for 3rd party code**. Let's fix that for **`jQuery`**!

Simply **install the official typings for jQuery**...

```
npm install --save-dev @types/jquery
```

~~~

...and **register them in `tsconfig.json`**:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "types": [
      "jquery"
    ]
  }
}
```

~~~

Having done that we get **full intellisense for jQuery** too!

![](resources/images/intellisensejquery.png)

~~~

<div class="checklist"></div>

You are done when...

* You're using some **ES6 feature**
* You get **intellisense for movie review** data
* You get **intellisense for jQuery**
