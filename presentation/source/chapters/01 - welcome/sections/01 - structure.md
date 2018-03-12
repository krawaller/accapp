---
title: Course structure
tagline: How we'll go about things
---

The course is divided into several **chapters**, where you're currently in the first.

```dot
digraph {
  rankdir = TD
  bgcolor = transparent
  
  Chapter1, Chapter2, Chapter3
  rest [label="..."]
  Index -> Chapter1, Chapter2, Chapter3, rest 
}
```

We access the chapters from an **index**, giving you a **birds-eye view** of the entire contents.

~~

Each **chapter** has many **sections**:

```dot
digraph {
  rankdir = TD
  bgcolor = transparent

  page1_1, page1_2, page1_3,  page2_1, page2_2
  Title -> Motivation -> Overview -> Section1 -> Section2
  rest [label="...", style=dashed]
  Motivation [style=dashed]
  Section2 -> rest -> End
  Section1 -> page1_1 -> page1_2
  Section2 -> page2_1 -> page2_2
  page2_2 -> page2_3 [style=dashed]
  page1_2 -> page1_3 [style=dashed]
  page1_3, page2_3 [style=invis]
  {rank=same; page1_1, page2_1}
  {rank=same; page1_2, page2_2}
  {rank=same; Title, Motivation, Overview, Section1, Section2, rest, End}

}
```

~~

In the **printed material** (or PDF) and in the **presentation top-right corner**, the slides are numbered **`X‑Y‑Z`** where...

* `X` is the number of the current **chapter**
* `Y` is the number of the section **section** within that chapter
* `Z` is the number of the **slide** within that section

~~~~

From now on, all **sections** will be one of **two types**:

* Learning sections
* Exercise sections

~~~

<div class="learn"></div>

When you see this symbol at the top of a section, that means it is a **learning resource**.

A short sentence or two will say **what we want to learn**.

~~

<div class="goal"></div>

This symbol means the section is an **exercise**.

~~~

<div class="checklist"></div>

Towards the **bottom of the exercise sections** you'll find a **Definition of Done** slide

* which gives you
* a check list
* to know when
* you are finished

~~~

<div class="solution"></div>

Below that, if it is a coding exercise, you'll also find a **link to a solution** on a slide with this symbol.
