---
title: "Tracking javascript events unobtrusively with google analytics"
date: "2008-08-18"
categories: 
  - "code"
tags: 
  - "dom-scripting"
  - "google-analytics"
  - "javascript"
  - "js"
  - "tracking"
---

### One of the key things I want tracked on my website is those who click on the rss icon and add me to their feed reader. When someone actually clicks on subscribe - hey that means that they like what they have seen and want to read more. I am humbled. I am overjoyed. I have a conversion!<!--more-->

In [google analytics](http://www.google.com/analytics/) you can set up conversion goals, and therefore can quickly see on entry whether you have achieved any of your goals in the last set time period. Normally a goal will be a page, like a thank-you page, but in my case I want to track a link to an xml/rss file, which cannot be tracked by javascript.

Looking around online there are some examples of tracking rss - although many of them refer to google analytics' old script which calls the function urchin. I need one which calls the newer pageTracker.\_trackPageview arguement. Most recommend the use of an inline javascript which fires the page tracker onclick. But I have several rss links on my website and I don't want to relpicate this javascript behaviour across all of that code. Otherwise when it comes to changing the code I will need to manually go and update every link with the onclick. Also I want to seperate the behaviour of this javascript from the content of the website.

### DOMScripting to the rescue

The solution to this problem is to use a [DOM event](http://en.wikipedia.org/wiki/DOM_Events) to call the function. By adding a class to any links which are used to 'Subscribe' we can write a DOMScript which creates the javascript event on page load.

### Tracking javascript events

So this is what you need to do:

1. add a class of "rss" to each instance of the RSS link you want to track
2. add the following code to your javascript library

```
/* track links with the class of rss */
function trackRss(){
if (!document.getElementsByTagName) return false; //added to test the browsers DOM compatibility
if (!document.getElementsByTagName('a')) return false; //added to test for any divs
var divs = document.getElementsByTagName('a');
 for(var i=0,j=divs.length;i<j;i++){
  if (divs[i].className.match('rss')){ // .match to deal with multiple class names
   divs[i].onclick = function (){
		var pageTracker = _gat._getTracker("UA-XXXXXX-X"); //Enter your Google Analytics account ID here
		pageTracker._initData();
		pageTracker._trackPageview("/rss/subscribe/");
   }
  }
 }
}
```

Note, you will have to add in your urchin tracker ID within the main function at the end of this code. This whole function will now need to be called on page load. I would recommend using an addLoadEvent script like the one below.

```
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(trackRss);
```

The result of all of this is that a click on any link with the class "rss" will fire google analytics, and in this example it will read the page as "rss/subscribe" (from the trackPageview)

### Extensibility

I think there may be a way of making this more scaleable by getting one function to handle multiple tracking links. Could it use a rel attribute? So that you assign a class to identify it is a tracked link, and a rel to tell it what to call the link.
