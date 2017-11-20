---
title: "Exercise - static content"
tagline: Laying the foundation
---

<div class="goal"></div>
Goal: Make **HTML** and **CSS** to show a **movie review** page

~

Here's what we're going for:

![](resources/images/moviereview.png)

~

list)

Here's the battle plan

* create a **project folder**
* add **html file**
* add **css file**

~

item)

Create **folder** somewhere to host our movie review project. Open that folder in Visual Studio Code.

~~

item)

Add a new file called **`index.html`**.

![](resources/images/vcs-createfile.png)

~~

Make VSC give you a **base to start** by entering...

```
html:5
```

...at the top of the file and then **hit tab**. Voilà, you get a full HTML document!

~~~

Now **flesh out the document** with the HTML needed to get the same contents as in the screenshot!

Although, of course, you are free to **choose any movie**.

~~~

Your review should contain the **exact same parts** as mine:

* an image
* a title
* a short text
* a list of notable actors

~~

Regarding the image, **don't download it locally**! Instead simply **link to it online**.

```
<img src="http://bit.ly/kvalitetsrullebild">
```

~~ 

item)

Time to add a **coat of paint**!

Create a new file in our folder called **`styles.css`**:

![](resources/images/cssfile.png)

~~~

Connect it via a **link element** in the head of `index.html`.

```html
<link rel="stylesheet" href="styles.css">
```

~~

Now add some CSS in that file to...

* make the site **centered vertically**
* lay it out in **two columns**
* **size the image** so it isn't too big or small
* tweak the rest as you please!

~~

<div class="checklist"></div>

You are done when...

* double-clicking `index.html` shows the review in a browser
* it looks ok (don't spend too long!)
