---
title: "Pagination design patterns - pimp your hit area"
date: "2010-12-31"
categories:
  - "ux-design"
tags:
  - "design"
  - "pagination"
  - "pattern"
  - "ux"
---

According to a [Smashing Magazine article on pagination](http://www.smashingmagazine.com/2007/11/16/pagination-gallery-examples-and-good-practices/) "In most cases pagination is better than traditional “previous – next” navigation as it offers visitors a more quick and convenient navigation through the site. It’s not a must, but a useful nice-to-have-feature." 

<!--more-->

And there are plenty of examples and design patterns out there some of which give really powerful control to users. But there's a problem...


### The problem with some pagination

The problem that the majority of websites and design patterns fail to address is to cater well for the default behaviour whilst giving people all then options they might desire.

Consider the design of the TV set. Manufacturers and designers have realised that although it's important to be able to adjust the contrast without a remote control, it is not a default behaviour - and therefore it is ok to hide the controls at the side of the set, maybe even covered by a discreet door.

Well, coming back to pagination, how many users are going to need to go to exactly page twenty two, or twenty three or twenty four? (On a side note - if people are forced to remember page numbers to locate an item then you're probably already doing something wrong in your user interface). I often find it hard - particularly when using mobile devices to activate a tiny > link when its crowded out by ten other page numbers and other links.

### Designing using the normal distribution curve.

Throughout product design and architecture the design brief is shaped by what's called the [normal distribution](http://en.wikipedia.org/wiki/Normal_distribution_curve).  It all gets a bit statistical and mathematical but in lamens terms it is a term used to describe how/where the majority of people fit within a normal distribution curve.

{% image "./src/assets/postimages/journal/Standard_deviation_diagram_micro.svg.png", "Normal distribution curve", "A normal distribution curve as described on wikipedia https://en.wikipedia.org/wiki/Probability_theory" %}



If you look at the heights of a group of adults, you'll probably notice that most of them look about the same height. A few may be noticeably taller and a few may be noticeably shorter. This 'same height' will be near the average (called the 'mean' in statistics) and is shown in anthropometry tables as the fiftieth percentile, often written as '50th %ile'. This means that it is the most likely height in a group of people. 1

The beauty of the normal distribution curve is that it is so universal in its application. Chart people's average height and you will get a normal distribution curve. How about weight, music taste, there are so many things it will describe - because it in itself is describing a random distribution around a mean/average value.

In other words it "is a continuous probability distribution that is often used as a first approximation to describe real-valued random variables that tend to cluster around a single mean value". 2

### So what does that mean for design

Well in the world of furniture design for example - you may not be able to make a workbench 'height adjustable' - so what you do it make sure that it caters for as many people as possible.

Deciding whether to use the 5th, 50th or 95th percentile value depends on what you are designing and who you are designing it for.

Usually, you will find that if you pick the right percentile, 95% of people will be able to use your design. For instance, if you were choosing a door height, you would choose the dimension of people's height (often called 'stature' in anthropometry tables) and pick the 95th percentile value – in other words, you would design for the taller people. You wouldn't need to worry about the average height people, or the 5th percentile ones – they would be able to fit through the door anyway. 3

### Hypothesis on how this applies to pagination

So how would a normal distribution curve apply to our pagination. Stats on pagination are pretty difficult to come by but  I believe it could look something like this.

Now in this case the curve would actually be rather squared but I just wanted to illustrate how it fits with the normal distribution model.

### Possible solutions

So for pagination it would seem to make sense to design for the 50th percentile - which is likely to cover  95% of use. But thats not all - we can actually cater for the final 5% of users by giving them less prominent options - just like in the TV example.

Therefore I propose that designers should provide people with large, usable and pleasing hit areas for the default behaviours of moving backward and forward and then supplementing this with the feature rich pagination toolkit of their choice.

### My preferred solution

{Missing sketch showing big forward and backwards buttons, with link to 'more options'}

I believe that any solution should be designed to fit the specifics of an interface. That said simply highlighting the back and next and then adding in any complex pagination features into an overlay would seem like a good place to start. I'd love to know what you think.

- 1Anthropometry - step by step - http://www.ergonomics4schools.com/lzone/anthropometry.htm
- 2 Normal distribution - http://en.wikipedia.org/wiki/Normal\_distribution\_curve
- 1Anthropometry - step by step - http://www.ergonomics4schools.com/lzone/anthropometry.htm
