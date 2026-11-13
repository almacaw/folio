---
title: "Glitchy and jumpy jQuery/jCarousel animation"
date: "2009-04-21"
published: false
categories:
  - "code"
tags:
  - "jquery-jcarousel-css-troubleshooting"
---

I came across a particularly bizarre bug when working on the new [Fluke website](http://flukelondon.co.uk). It seemed to appear from nowhere mid-project and manifested itself in a rather odd animation glitch.

I had set up a couple of jCarousel arrays and found that one one page (which had it's won unique styling) the carousel animation seemed to glitch, dragging the background with it in a jumpy, jaggedy manner.

<!--more-->

## The solution

Having searched online I couldn't find any other instances of this. After half a day of de-constructing the page I finally found that the css file was to blame. It wasn't the contents, but the file itself, which must have somehow become slightly corrupt or contained some hidden characters.

Either way I managed to find an earlier source file, save a new version and copy all the styles over.

Strange, but true and hopefully this post might save someone out there a great deal of time.
