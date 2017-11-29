---
title: Intro to AngularJS
tagline: Your first JS framework!
---

<div class="learn"></div>

Learn about **AngularJS**

~~

So! Time to **get to know AngularJS**, a JavaScript **framework** by Google.

~~~

question)

**How many JS frameworks** are there?

~~~

answer)

Well.

[https://dayssincelastjavascriptframework.com/](https://dayssincelastjavascriptframework.com/)

~~~

question)

Speaking of many frameworks - can you **spot the difference** between these two?

<div class="equality">
![](resources/images/angular1.png)
<span></span>
![](resources/images/angular2.svg)
</div>

~~~

answer)

Obviously;

* The first is the logo for **AngularJS**, the framework we're talking about
* The second represents **Angular**, a spiritual successor to AngularJS but a **completely different framework** (even though it started on version 2.0.0)

~~~

Some more comparisons:

<table class="small">
  <thead>
    <tr>
      <th></th><th>Angular v1</th><th>Angular v2+</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Official name</td>
      <td>AngularJS</td>
      <td>Angular</td>
    </tr>
    <tr>
      <td>Homepage</td>
      <td><a href="http://angularjs.org">http://angularjs.org</a></td>
      <td><a href="http://angular.io">http://angular.io</a></td>
    </tr>
    <tr>
      <td>NPM package</td>
      <td><a href="https://www.npmjs.com/package/angular">angular</a></td>
      <td><a href="https://www.npmjs.com/package/@angular/core">@angular</a></td>
    </tr>
    <tr>
      <td>Git repo</td>
      <td><a href="https://github.com/angular/angular.js">angular/angular.js</a></td>
      <td><a href="https://github.com/angular/angular">angular/angular</a></td>
    </tr>
    <tr>
      <td>version (nov 2017)</td>
      <td>1.6.6</td>
      <td>5.0.2</td>
    </tr>
  </tbody>
</table>


~~

question)

...isn't this **hugely confusing**?

~~~

answer)

Yes. Yes, it is.

~~~

Anyhow! Frameworks. They are all about **providing convenient infrastructure**.

But before we get to how AngularJS does that, let's talk about **how to get it up and running**!

~~

We start an AngularJS application by **creating an app module**:

```javascript
import * as angular from "angular";

let app = angular.module("myawesomeapp", []);
```

The empty array at the end is for **module dependencies**, if we had any (3rd party ui components, etc).

~~~

We must then **mark where in the HTML the app should instantiate**. We do this by placing a `ng-app` "directive" in our HTML, telling AngularJS to **connect that element to our app**.

This is often done on the body:

```html
<body ng-app="myawesomeapp">
```

~~

The app itself doesn't do anything until we **controllers** to it:

```javascript
app.controller("myawesomecontroller", function($scope){
  $scope.message = "Hello world!";
});
```

Everything we attach to our weird-looking **`$scope`** thing will be available for use in the HTML!

~~~~

We can then **connect the controller to an element within the app**:

```
<div ng-controller="myawesomecontroller">
```

And inside of **that**, we can access the values on **`$scope`** via **interpolation**:

```html
<p>{{message}}</p>
```

~~~~

There is so much more to tell, but what you just saw is the **basic pattern of AngularJS**!
