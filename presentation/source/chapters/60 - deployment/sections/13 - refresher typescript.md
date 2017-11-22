---
title: TypeScript
tagline: Fooling the devil
---

So - 

![](resources/images/typescript.svg)

~~

The **catchphrase** for [TypeScript](https://www.typescriptlang.org/) is...

> JavaScript that scales

...and that's a pretty good description! TypeScript is regular JavaScript (ES6, to be more precise), but with some **useful tools added on top**. In mathetical terms this means a **superset of JavaScript**.

~~~

The browsers can't understand TypeScript, however, so we must **compile** it before we serve it:

![](resources/images/ts-compile.svg)

Conceptually the **same as we did for LESS**!

~~~


~~~

So **what does TypeScript add**? Many things!

Most importantly **types**, as the name suggests.

~~

We can **add type annotations to variables, parameters and functions**:

```typescript
let name: string = 'foo;'

function isAllowedInToTheBar(age: number): boolean {
  return age >= 18;
}
```

Now, if some other code **violates these annotations**, TypeScript would **flag this as a problem**. (During compilation, or even earlier, if your editor is TypeScript-aware.)

~~~

However, the **real power of TypeScript** is that it does **static analysis** of your code. So if we later typed this...

```typescript
let willHaveFunTonight = isAllowedInToTheBar(16);
```

...and hovered above `willHaveFunTonight`, a TypeScript-aware editor would **tell you that this is a boolean**!

~~~

In other words, **this example code**...

```typescript
let name: string = 'foo;'
```

...was **unnecessarily complex**, as **this would be enough**:

```typescript
let name = 'foo';
```

TypeScript **sees from the assignment that `name` is a string**, and will treat it as such.

~~~

In other words - simply by activating TypeScript we **get a lot of power**, even if we **don't use any type annotations**!


~~~

Perhaps the most powerful part of TypeScript is that it allows us to **create types for object shapes**:

```typescript
type User {
  name: string,
  age: number
}
```

~~~

Now we can **type our objects**...

```typescript
let me: User = { name: "David", age: 37 };
```

...and **TypeScript will ensure compliance**:

```typescript
let you: User = { name: "Bob" }; // angry red squiggly line since we're missing age
```

~~~

Note that **types are purely a development artifact**, there'll be **no trace of them in the generated JS code**.

Which means there's **no performance or bloat penalty** to using them, but we gain in **code clarity** and **bug prevention**!

~~~

There is a lot more to say about TypeScript. In fact, we have a [whole course just about TypeScript](https://edument.se/education/categories/webdevelopment/typescript)!
