---
title: Versatile object definitions
tagline: 'defining objects like a boss'
---

list)

In ES2015 we got five small but nice features for **defining objects in a smoother way**:

* dynamic keys
* automatic same-key-value
* method shorthand
* getters
* setters

~~

item)

If we wanted to create an **object with a dynamic key** we had to go about it in a roundabout way before:

```javascript
var obj = {};
var obj[dynamicKey] = someValue;
```

~~

Now, instead, we can use the **dynamic key syntax** by wrapping it in brackets:

```javascript
var obj = {[dynamicKey]: someValue};
```

~~

item)

Also, if our value is in a **variable with the same name as the intended key**, like here:

```javascript
var person = {
  name: name,
  age: age
};
```

~~

...ES2015 introduces a **shorthand syntax**:

```javascript
var person = {name, age};
```

~~

item)

And if we define an **object with a method**:

```javascript
var obj = {
  method: function(arg1,arg2){
    // do advanced stuff
  }
};
```

~~

...ES2015 lets us be less verbose by using the [method shorthand syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions):

```javascript
var obj = {
  method(arg1,arg2){
    // do advanced stuff
  }
};
```

~~

This can also be **combined with the dynamic key syntax**:

```javascript
var obj = {
  [methodName](arg1,arg2){
    // do advanced stuff
  }
};
```

~~

item)

Finally, ES2015 also introduced **getters and setters**.

Let's look at **getters** first. They are very useful for dealing with **computed properties**.

~~

Say we're working with **user objects** like this:

```javascript
var user = {
  firstName: "John",
  lastName: "Doe"
};
```

Now we want to implement a **computed property `fullName`**.

~~

 Here's an **ES3 solution** doing it as a **method**:

```javascript
var user = {
  firstName: "John",
  lastName: "Doe",
  fullName: function(){
    return this.firstName + ' ' + this.lastName;
  }
}

user.fullName(); // John Doe
```

~~

By using an **ES2015 getter** we can access the computed property normally instead:

```javascript
var user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

user.fullName; // John Doe, without invocation!
```

Cf. [uniform access principle](https://en.wikipedia.org/wiki/Uniform_access_principle).

~~

item)

A **setter** let's you **act upon prop mutation**, for example **logging**...

```javascript
var user = {
  set userName(str) {
    log(this._userName + " changed name to " + str);
    this._userName = str;
  }
}

user.userName = "Steve"; // Bob changed name to Steve
```

~~

...or **validation**:

```javascript
var user = {
  set userName(str) {
    if (str.match(/[^a-z]/)){
      throw "Name can only contain lowercase letters!";
    }
    this._userName = str;
  }
}

user.userName = "Bob the 1 and only"; // Name can only contain..
```

~~~

question)

Did you note that we used a **different property name** inside the setter? The setter was for `userName`, but inside it we instead set `_userName`.

Why do you think that is?

~~~

answer)

If we mutated the same property inside the setter then that would trigger the setter to be called, which would mutate the property, which would trigger the setter, etc. We would end up in an **infinite loop**.




