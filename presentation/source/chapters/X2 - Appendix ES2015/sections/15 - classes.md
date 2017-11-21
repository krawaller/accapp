---
title: Classes
tagline: Waiter, there are classes in my JS!
---

Before ES2015, JavaScript used to famously **lack classes**.

This was **not an oversight**. Consider what **classes are normally used for**:

* **resusing functionality** and 
* setting up **hierarchies**

~~~

In **JavaScript** this is addressed by

* simply **grabbing methods** and/or **mixing objects**
* **prototypal "inheritance"**, which should really be called delegation

~~~

This means that **classes didn't really serve a purpose**. Yet they were **still frequently used**, through the weird, bolted-on **`new`** syntax which **makes functions behave like constructors**:

```javascript
var user = new User("David", 1979);
```

~~~ 

But to really make this **behave like normal classes**...

```javascript
var lucas = new Dog("Lucas");
lucas instanceOf Dog; // true
lucas instanceOf Animal; // true
lucas.bark(); // Lucas goes woof!
```

~~~

...then lots of **jumping through hoops** had to be done:

```javascript
Dog.prototype = new Animal();
Dog.prototype.constructor = Animal;
Dog.prototype.bark = function() {
  console.log(this.name, "goes woof!");
}
```

~~~

To **facilitate "class" use** in JavaScript, **ES2015 introduced the `class`** syntax:

```javascript
class Dog extends Animal {
  bark() {
    console.log(this.name, "goes woof!");
  }
}
```

Note how **method shorthands** are available in class declarations too!

~~

But it is important to note that this does **not mean that JavaScript has actual classes**.

Under the hood the same weird `prototype` and `constructor` dance happens.

~~~

list)

Still, since the **syntax hides the mismatch**, it can be a **convenient way to package functionality**. And Angular makes heavy use of this construct, so let's **check out some details**! Specifically:

* constructor
* methods
* properties

~~~

item)

First off, what **used to go in the fake constructor**...

```javascript
function Animal(name) {
  this.name = name;
}
```

~~~

...is now placed in a literal **`constructor` method** in the class declaration:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

~~~

If you want **the inherited constructor to be invoked too**, you must **do so yourself** with the new **`super` keyword**:

```javascript
class Dog extends Animal {
  constructor(name) {
    super(name);
    this.nickname = name + 'y boy';
  }
}
```

~~~

item)

And you've **already seen methods**:

```javascript
class Dog extends Animal {
  constructor() { ... }
  bark() {
    console.log(this.name,"goes woof!");
  }
}
```

Similar to object methods, **`this`** (normally) **points to the instance**.

~~~

item) 

Finally, as you saw, **properties are normally initialised in the constructor**:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
```

~~~

...but when we use **TypeScript** we can also **initialise properties directly on the class declaration**:

```typescript
class Dog {
  numberOfLegs = 4;
}
```

This is **likely to become a part of JavaScript syntax** too.

~~~

So, to **recap**:

* classes are just a **light syntactic sugar** introduced in ES2015
* we normally **don't need them in JavaScript**
* but they are a **convenient way to bundle related functionality**
* which **Angular makes heavy use of**!




