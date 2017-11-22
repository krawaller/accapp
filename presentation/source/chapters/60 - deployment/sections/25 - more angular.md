---
title: More AngularJS
tagline: An AngularJS cookbook
---

Of course, what we just did didn't accomplish anything (except for making our bundle 10x bigger).

Time to start **actually using AngularJS**!

~~

list)

Here you'll get some **useful patterns** that we will emply later!

* interpolation
* rendering lists
* conditional class
* handling events
* dynamic images
* hide unhandled templates

~~

item)

You've **already seen this**, but let's repeat: In the controller we can **attach data to the `$scope`**...

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

You also saw the **alternate syntax** where we **attach data to `this`**...

```javascript
app.controller("myawesomecontroller", function(){
  this.greeting = "Hello world!";
});
```

...and we **read values off of an alias**:

```
<div ng-controller="myawesomecontroller as ctrl">
  <p>{{ctrl.greeting}}</p>
</div>
```

~~

item)

AngularJS has an **`ng-repeat`** directive to **repeat an HTML element for each item in a list**. Say we expose a list:

```javascript
$scope.chores = ["make bed", "take out trash", "do dishes"];
```

Then in the HTML we can do this:

```html
<ul>
  <li ng-repeat="item in chores">{{item}}</li>
</ul>
```

Here `item` is just an iteration variable name that we make up, like `i` in a for loop.

~~~

item)

AngularJS has a syntax to **conditionally give an element a class**. Let's say we have this CSS...

```
.highlight {
  border: 3px solid gold;
}
```

...and we expose a `isHighlighted` boolean in the controller:

```
$scope.isHighlighted = true;
```

~~~

Then in the HTML we have a paragraph that we want to **get the `.hightlight` class when the `isHighlighted` flag is true**. We accomplish that using the **`ng-class`** directive:

```html
<p ng-class="{highlight: isHighlighted}">
```

It has an **object-like syntax**; the keys are classes that we maybe get, and the values determine if we get that particular key.

~~~~

item)

AngularJS lets us catch event via **event-specific directives**. For example we capture click events using **`ng-click`**!

There are **two parts to this** - first we **expose a handler in our controller**:

```javascript
$scope.handleClick = function(){
  alert("BOOM went the world!");
}
```

~~~~

Secondly, in the HTML, we'll **call that handler** from code written inside **`ng-click`**:

```html
<button ng-click="handleClick()">Don't press me</button>
```

As you can see this is **very similar to oldschool `onclick`**!

~~~~

item)

Let's say we have a **dynamic URL for an image** that we expose in the controller:

```javascript
$scope.urlToImage = "https://img.bricklink.com/ItemImage/SL/6086-1.png"
```

In the HTML we could use normal interpolation in the `src` attribute:

```html
<img src="{{urlToImage}}"/>
```

~~

However, if we do, we'll get an ugly 404 as **the browser will try to download the url `{{urlToImage}}`**, since it parses the document before AngularJS has had the chance to transform that to the actual data.

The solution is to use the **`ng-src` directive** instead:

```html
<img ng-src="{{urlToImage}}"/>
```

~~~

item)

Speaking of that - we'll still see **ugly `{{message}}` stuff flash by** elsewhere in our template when the page first shows, before AngularJS has kicked off. The solution is the **`ng-cloak`** directive.

First, **add this style**:

```css
[ng-cloak] {
  display: none !important;
}
```

As you can see, this style will **hide all elements with an `ng-cloak` attribute**.

~~~

Next, **add that attribute to the root** of your app:

```html
<body ng-app="myawesomeapp" ng-cloak>
```

When AngularJS encounters that attribute it will **remove it**. The end result is that the **app will become visible when AngularJS has parsed the template**, which prevents the user from seeing the ghastly `{{ ... }}` stuff!
