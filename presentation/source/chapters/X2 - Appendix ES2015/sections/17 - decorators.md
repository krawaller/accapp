---
title: Decorators
tagline: dewhatnow?
---

The **situation around decorators is rather confusing**;

* There is a [proposal](http://tc39.github.io/proposal-decorators/) to add it as a language feature
* There is a slightly different [implementation in TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html)
* There is the parallel idea in **`Reflect`**
* There is [disagreement](https://github.com/wycats/javascript-decorators/issues/48) on whether decorators are a good idea at all
* There is (was?) something called [annotations](http://blog.thoughtram.io/angular/2015/05/03/the-difference-between-annotations-and-decorators.html) that is sort of the same... yet not

~~~

Focusing on the **TypeScript implementation**, decorators are a way of decorating a class...

* **declaration**
* **property**
* **getter** or **setter**
* **method**
* **method parameter**

~~~

As a simple example, imagine that we have a **`debounce` function** that **throttles other functions**:

```javascript
function debounce(fn) {
  // ... create a throttled version of `fn`...
  return throttledFn;
}


```

~~~

And then we have a class with a **method that is very expensive** to call:

```javascript
class myClass {
  myExpensiveMethod: function() {
    // lots of heavy lifting here
  }
}
```

~~~

**Without decorators** we would do this:

```javascript
class myClass {
  myExpensiveMethod: debounce(function() {
    // lots of heavy lifting here
  })
}
```

~~~

**With decorators**, instead, we use the `@` syntax:

```javascript
class myClass {
  @debounce
  myExpensiveMethod: function() {
    // lots of heavy lifting here
  }
}
```

The **end result is the same thing**.

~~~

We can also have **decorators that take additional arguments**. For instance `debounce` could accept a **minimum number of milliseconds**:

```javascript
class myClass {
  @debounce(300)
  myExpensiveMethod: function() {
    // lots of heavy lifting here
  }
}
```

~~~

In other words, **decorators are just a light syntax sugar**.

But since an Angular app consists mainly of **classes with core functionality sprinkled in**, then **decorators make a lot of sense**.

~~~

This is what a **Hello-World component looks like without them**:

```typescript
AppComponent = Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>'
}).Class({
  constructor: function() {},
  // other model-specific stuff
});
```

~~~ 

And here it is in **using decorators** (through TypeScript):

```typescript
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>'
})
class AppComponent {
  // other model-specific stuff
}
```

~~~

If you want to **dig deeper into decorators**, check out...

* The [decorator section](https://www.typescriptlang.org/docs/handbook/decorators.html) of the TypeScript handbook
* This [concice and clear explanation](https://github.com/arolson101/typescript-decorators) with examples and interactive links

