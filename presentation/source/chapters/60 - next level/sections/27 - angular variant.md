---
title: Controller variant
tagline: Because there's many ways to skin a cat
---

<div class="learn"></div>

Learn about the **alternate controller syntax**

~~

AngularJS has been around for a long time. So long, in fact, that it has **the same problems as the web**!

* we realise there are **better ways** to do certain things
* but we can't change because we want to be **backwards compatible**

Of course we can get around this through **versioning**, but AngularJS hasn't always done that to good effect.

~~

One of the things they found a better way for is really fundamental, namely, **interpolation**. You've seen how we **attach values to `$scope`** in the controller:

```javascript
app.controller("myawesomecontroller", function($scope){
  $scope.greeting = "Hello world!";
});
```

...which can then be **accessed in the template**:

```html
<div ng-controller="myawesomecontroller">
  <p>{{greeting}}</p>
</div>
```

~~

There is a **competing syntax** for this - we can define our controller to **work with `this`** instead of **`$scope`**:

```javascript
app.controller("myawesomecontroller", function(){
  this.message = "Hello world!";
});
```

We no longer attach data to `$scope`, but to `this` instead.

~~~

For this alternate syntax we must connect the controller **slightly differently** by giving it an alias...

```
<div ng-controller="myawesomecontroller as ctrl">
```

...and when we interpolate we must **access the variables off of the alias**:

```html
<p>{{ctrl.message}}</p>
```

~~

question)

Fine, getting rid of `$scope` was nice, but isn't this new syntax **fiddlier** since we have to use an alias?

~~

answer)

Yup, it is. But the advantage is that with **nested scopes** it becomes super clear where the variables come from:

```
<div ng-controller="myawesomecontroller as ctrl">
  <h1>{{ctrl.title}}</h1>
  <div ng-controller="innercontroller as ctrl2">
    <p>{{ctrl2.content}}</p>
  </div>
</div>
```
