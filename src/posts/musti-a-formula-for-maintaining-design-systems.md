---
title: "Maintaining design systems, how MUSTIE, a formula used by libraries could help"
description: "MUSTIE is an easily remembered acronym for six negative factors that frequently can help when removing components from a design system"
date: "2020-01-09"
categories:
  - "code"
  - "design"
  - "design-dev"
tags:
  - "design"
coverImage: "standing-ifo-whiteboard.jpg"
---

Design systems seem to be everywhere at the moment. And for good reason. As design teams grow and software starts eating the world, design systems allow us to manage our designs centrally. Reducing effort in build and maintenance of our growing digital platforms.

And now we are in 2020 we are all hoping that big re-designs are a thing of the past, which means our components will evolve as the platform does. But we live in a changing landscape. The websites these design systems serve are going to shift and change. New features will be added and old ones will fade away.

## Growing pains

As companies innovate and try new ideas, new components will be added to the design system. Slowly it will get bigger and bigger. But what happens when it gets too big?

When setting up a design system there is plenty of advice from people who say that you are better off starting small. This is because teams have been overwhelmed by too many components to begin with.

But as websites evolve, how do we go about mainatining what could become unmaintainable beasts? How can we stop the overwhelm?

{% image "./src/assets/postimages/journal/standing-ifo-whiteboard.jpg", "Illustration of two people with wireframes in the background", "" %}

## It will become increasingly neccessary to reduce noise

I was listening to one of my favourite podcasts. And it turns out that libraries face this very problem, albeit for slightly different reasons. We can’t keep adding books forever, so it becomes neccessary to remove unwanted books to make way for new books.

But getting rid of books is not an easy thing to do. People can get very emotional about it, and I suspect designers could end up getting emotional about components too. So how do libraries decode what should stay and what should go

It turns out that libraries use a system for deciding whether a book should be removed. They called it **weeding**.

In order to decide what should or shouldn’t be weeded they use a kind of formula and this acronmy called **‘Mustie’**

This formula could be different for each section of the library – and looks something like this:

_8/3/MUSTIE_

1) The first figure refers to the years since the book's latest copyright date (age of material in the book);  
2) The second figure refers to the maximum permissible time without usage (in terms of years since its last recorded circulation);  
3) The third refers to the presence of various negative factors, called MUSTIE factors.

So in the above case this would mean:

_"Consider a book in this class for discard when its latest copyright is more than eight (8) years ago; and/or, when its last circulation or in-house use was more than three (3) years ago; and/or, when it possesses one or more of the MUSTIE factors."_

## MUSTIE

MUSTIE is an easily remembered acronym for six negative factors that frequently ruin a book's usefulness and mark it for weeding:

**M** = **M**isleading  
(and/or factually inaccurate)  
**U**  = **U**gly  
(worn and beyond mending or rebinding)  
**S**  = **S**uperseded  
(by a truly new edition or by a much better book on the subject)  
**T**  = **T**rivial  
(of no discernible literary or scientific merit)  
**I** \= **I**rrelevant  
to the needs and interests of your community  
**E** = The material may be obtained expeditiously **E**lsewhere  
through interlibrary loan or reciprocal borrowing.

All this got me wondering—could this type of system be used in our component libraries? Could design ops folk use a similar system to objectively asses old components without emotion and the resulting debate it may cause?

Perhaps design systems should self-regulate. But as a team what if we actively want to say – don’t re-use that component over there, its out of date now.

So perhaps there is space for a process like weeding.

## Musti - A formula for weeding digital systems

Each organisation would have to figure out their own formula. Maybe there could be different rules for different parts of a system. Starting with keeping it simple I propose we could follow a template like this

_"Consider a component in this class for removal when it possesses one or more of the MUSTI factors."_

**M** = **M**isleading  
(and/or factually inaccurate)  
**U**  = **U**gly  
(old and beyond mending or re-coding)  
**S**  = **S**uperseded  
(by a truly new version of the code)  
**T**  = **T**rivial  
(just creates noise, of no useful merit on its own, always used in larger components, or never re-used)  
**I** \= **I**rrelevant  
to the needs and interests of your users

## Benefits to design operations

Periodically removing old and un-neccessary components will remove noise in growing design systems. This will free up designs and engineers to make swifter choices, remove noise from those choices, and help define product direction. It will aid coherence and be a better reflection of where the design team want to platform to be.

## Challenges

In an atomic design system we need to be very careful in completely **removing** anything. The removal of a small atomic element could cause multiple larger components to break. So in this sense we are talking about removing components from view, rather than deleting them entirely. Preventing them coming up in searches. Not allowing them to be suggested for prototyping. This way they remain in tact in the platform, but no longer get actively used in the design system as selectable components

## Wrap up

- Maintaining design systems is going to become difficult as they become large
- The noise of old components will start to erode efficiencies
- Removing components could be an emotive and difficult task without a framework
- Musti could provide an objective framework to remove some older components from view

Do you already use a system for removing old components? These are of-course one persons thoughts on the benefits of using a MUSTI system. I would love to hear your thoughts? What do you use? Are there any factors not covered by Musti?
