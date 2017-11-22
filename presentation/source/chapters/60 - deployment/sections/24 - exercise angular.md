---
title: Exercise - installing AngularJS
tagline:
---

<div class="goal"></div>

Goal: Install AngularJS

~~

In this exercise we'll just **install angular** and make sure it's working.

We'll **let our existing jQuery logic stay** for now.

~~

list)

Here's the battle plan:

* install angular
* create minimal app and controller
* hook it into HTML

~~

item)

First we **install and download the package**:

```bash
npm install --save angular
```

~~~~

We'll also want to **fix the typings**! First we install them...

```bash
npm install --save-dev @typings/angular
```

...and then we **register them in `tsconfig.json`**:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "types": [
      "angular",
      "jquery"
    ]
  }
}
```

~~

item)

Next we create a minimal **app** and **controller**. Put this at the top of `code.ts`:

```typescript
import * as angular from "angular";

let app = angular.module("reviewApp", []);

app.controller("reviewController", function($scope){
  $scope.message = "Hello from Angular!";
});
```

~~~~

item)

Finally, let's hook this up to the HTML in `index.html`!

First, use **`ng-app`** to tell AngularJS to start the app in the `body`:

```html
<body ng-app="reviewApp">
```

~~

Next we **connect the controller** to the container div using **`ng-controller`**:

```html
<div ng-controller="reviewController" class="container">
```

~~

Finally, just inside that div, we **interpolate the `message`** from the controller just to make sure things work:

```html
{{message}}
```

~~~

If it all works out you should **see the message** in the rendered app!

![](resources/images/message.png)

~~~

<div class="checklist"></div>

You are done when...

* You see the message from AngularJS
* Nothing else changed
