---
title: Versatile function definitions
tagline: 'defining function like a boss'
---

list)

ES2015 provides **several neat features for defining functions**:

* default parameter values
* rest parameters
* destructuring parameters
* arrow functions

~~

item)

**Default parameter values** exist in many languages, and was popularised in JS through [CoffeeScript]().

The idea is to **handle optional parameters** in a smoother way. 

~~

Creating a **function with an optional parameter** in ES3 meant we had to do a sometimes tedious dance of initialization:

```javascript
function makePerson(name, age) {
  var age = age || 'unknown';
  // do complex stuff
}
```

This may or may not do what you want. (Hint: is `0` a reasonable value for `age`?)

~~

With **default parameter values** we can instead do this: 

```javascript
function makePerson(name, age = 'unknown') {
  // do complex stuff
}
```

~~

item)

The second new feature, **rest parameters**, is a way of capturing multiple arguments into a single variable like a rest element in a destructuring.

This can often save us from having to do awkward stuff with the not-quite-an-array `arguments` object.

~~

Imagine a `competition` function that is called with all contenders one by one:

```javascript
function competition() {
  var contenders = Array.prototype.slice.call(arguments);
  var winner = contenders[0];
  var losers = contenders.slice(1);
  // do something with winner and losers
}
```

~~

Using rest parameters, this function simply becomes:

```javascript
function competition(winner, ...losers) {
  // do something with winner and losers
}
```

~~

Note that the rest parameter **has to be the last parameter**, just like the rest element, and for the same reason.

~~

item)

Remember **destructuring**? We can **use that in signatures**:

```javascript
function introduce({name, age}) {
  console.log(name,"is",age,"years old");
}
var me = {name: "David", age: 37};
introduce(me); // David is 37 years old
```

~~

item)

Finally - know how **defining anonymous functions** in JS is rather verbose?

```javascript
var mcboatify = function(arg) {
  return "Boaty Mc"+arg+"Face";
};
```
~~

With **arrow functions** things feel less heavy:

```javascript
var mcboatify = (arg) => {
  return "Boaty Mc" + arg + "Face";
};
```

~~

They can become smaller still - if we have **exactly one parameter**, we can **omit the parenthesis** in the signature:

```javascript
var mcboatify = arg => {
  return "Boaty Mc" + arg + "Face";
};
```

~~


Finally, if you **just want to return an expression**, we can **skip brackets and the return keyword**:

```javascript
var mcboatify = arg => "Boaty Mc" + arg + "Face";
```

Now the function body consists of a single expression, which will be implicitly returned.

~~

Note however that if you want to use the **single expression form with an object literal**, we have to **wrap it in parenthesis** to distinguish it from a regular function block:

```javascript
var createUser = (name,age)=> ({name,age})
```

~~

Arrow functions are not only less heavy to write, they are also lighter for the interpreter since they **don't get an implicit context parameter**.

~~

Which means that if you refer to `this` inside an arrow function, it is the **same `this` as on the outside**.

```
var me = this;
setTimeout(() => {
  console.log(this === me); // true
}, 10)
setTimeout(function(){
  console.log(this === me); // false
}, 10)
```

~~~

As a final note; arrow functions can beautifully describe the flow for **nested higher order callbacks**. Remember the **`multiplier` example** from the functional programming section?

```javascript
function multiplier(func,times){
  return function(){
    for(var i = 0; i < times; i = i + 1){
      func();
    }
  };
}
```

~~~

With arrow functions, that becomes:

```
var multiplier = (func,times)=> ()=> {
  for(var i = 0; i < times; i = i + 1){
    func();
  }
}
```
