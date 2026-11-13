---
title: "An accessible \"Starkers\" Wordpress theme"
date: "2008-07-31"
categories:
  - "code"
tags:
  - "accessibility-dev-code-wordpress-css"
---

When I came to putting together this blog I was really happy to find the [Starkers Wordpress Theme](http://starkerstheme.com/). However with some simple additions – which can be easily implemented – from high contrast layouts and access keys to skip menus - we could make a massive difference in terms of accessibility to all sorts of users. This is the concept behind the creation of an Accessible Starkers Theme.<!--more-->

So why use Starkers? The Starkers theme is a brillant starting point from any Web Designer/Developer point of view since it gives us the clean starting point from which to style up the website. It starts by stripping out all css, and implements a universal reset [like this one](http://meyerweb.com/eric/thoughts/2007/04/12/reset-styles/).This is fabulous since it never is easy modifying other peoples css. More importantly it cleans up the code generated with the result being clean, [semantic markup](http://en.wikipedia.org/wiki/HTML#Semantic_HTML) which in theory makes the website more accessible, googleable, maintainable, and more visible by multiple devices. SO in theory, all the building blocks are in place for a highly accessible website.

Yesterday we went to the [Shaw Trust](http://www.shaw-trust.org.uk/) in Wales to get our company website audited from an accessibility point of view. The Shaw Trust is a national charity that provides training and work opportunities for people who are disadvantaged in the labour market due to disability, ill health or other social circumstances. They offer a Web Accessibility Accreditation service to businesses which is designed to be the most comprehensive service available and endorsed by GAWDS (The Guild of Accessible Web Designers), it combines a full technical audit with rigorous disability user testing. Every member of the testing team is an experienced assistive technology user and understands the frustrations of not being able to access websites that don't consider the needs of disabled users.

It was a really interesting day spending time with real people with differing needs, using the website on an array of different devices, from switches to screen readers. I have been involved with much discussion about accessibility - normally amongst colleagues and the wider online community, but had never spent time with real people accessing websites on all of these devices. Seeing all the little improvements we could make to our website - which would make a big difference for people of differing needs made me realise that I have kind of put accessibility no the back seat for a while. Resting happy that my semantic markup would be easily accessible to a screen reader - I had forgotten about the useful devices which can easily be implemented, from high contrast layouts and access keys to skip menus - which make a massive difference to all sorts of users.

Suffice to say it will be a while until we can implement these changes to our website but that got me thinking that it might be nice to include some of those accessibility features - as standard - in a Wordpress theme.

## The Starkers Accessibility Theme

So I got to thinking that maybe I could build on the great work done by Elliot Jay Stocks by adding in some standard accessibility components into the Starkers theme. That's where I am at the moment and I am wondering what features I would like to include. Off the top of my head I might add in:

1. Skip menu and access keys - hidden by css but accessible to keyboard and screen reader users
2. Style sheet switcher - to enable a high contrast layout
3. An accessibility guide for the website

## Your feedback

Is there anything you think should be included, or not included in such a  theme. I'd love to hear your feedback
