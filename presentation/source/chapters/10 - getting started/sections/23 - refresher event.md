---
title: DOM event refresher
tagline: "Gotta catch 'em all"
---

Another thing we can do with a **node reference** is to **make code run when things happen to it**.

The API for this is simple:

```javascript
node.addEventListener("nameOfEvent", functionToRun);
```

The function we pass in is called an **event handler**.

~~~

Here's a **simple example**:

```javascript
function goBoom(){
  alert("You pushed the button. BOOM goes the world!");
}

node.addEventListener("click",goBoom);
```

~~

It is quite common to **define the event handler in place** as an anonymous function:

```javascript
node.addEventListener("click", function(){
  alert("You pushed the button. BOOM goes the world!");
});
```

~~

The event handler is called with an **event object**, which might be useful for some events:

```
inputFieldNode.addEventListener("keyup", function(e){
  if (e.key === "Enter" || e.keyCode === 13){
    submitForm();
  }
});
```

