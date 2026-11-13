---
title: "Making google analytics unobtrusive"
description: "Whenever I implement a new tracking script it always strikes me how obtrusive the scripts tend to be. A proposal to make it un-obtrusive."
date: "2008-07-20"
categories:
  - "code"
tags:
  - "code"
  - "dev"
  - "dom-scripting"
  - "javascript"
---

Whenever I implement a new tracking script it always strikes me how obtrusive the scripts tend to be. They tend to put the script either at the start or the end of the document body, and they tend to use nasty document.writes. I love google analytics but sadly on this count it is no different. In this article I look at implementing google analytics in a less obtrusive way.

<!-- excerpt -->

You may wonder why I would want to look at the implementation of something which does wholly what it sets out to do, so I will start by explaining just a little about how I think the implementation should work.

1. In order to create a manageable code base I want to make sure the javascript is located in just one place. That is to say, if I want to modify the code at some point, I want to do it in just one place
2. In order to re-use the code I want it to be easily transferrable, without heavy code re-writes
3. To maintain the integrity of my website I want the behaviour (javascript) to be seperated from the content (html), just in the same way that we do with layout (css) and content (html)
4. Should heaven forbid, google's servers fail to respond quickly I don't want it to delay the loading of the whole webpage. This could be a point of contention for some people as if the webpage loads without the analytics script, and a person navigates away to another page, then we have not tracked them. Not good. I would question those worried about this scenario as follows: Which is more important in helping the person fulfill their objectives on your website, the tracking script, or the ability to use your pages as they are meant to be used without waiting. I think the answer is clear.NOTE: Your tracking script provider might have some issue with this. I have heard of in some cases the preference for the tracking script to be after the opening body tag. I think however that you need to think about the people who use your website rather than the ability to track their movements. Having the script in line might also help providers maintain a 99.9% uptime record, since if their server is down their script will stop your page loading. This in turn will make you less likely to navigate to a new page, which will mean that in theory at least, the server has been down less.

## So how do we achieve this

Simple really, using DomScripting methods we will

- seperate the javascript into it's own file (This fulfills 1,2 and 3)
- call the javascript on page load instead of in line (This fulfills point 4)

## Step 1 - grab your starting code

In my case I was provided with the following code by Google Analytics

``` js
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-999999-1");
pageTracker._initData();
pageTracker._trackPageview();
</script>
```

There are two parts to this script. The first actually loads an external .js file from google using the nasty document.write. The reason it loads it in using javascript is that the script is determining whether it resides on a secure server or not. This resolves any issues with 'mixed' security error messages on secure servers.

The second part assigns your unique user id and calls a couple of functions from the tracking code

## Step 2 - putting it all in one script

So the first thing we need to do is create a script and insert it into the head of your document. (Or wherever you are importing the rest of your scripts)

``` js
<script type="text/javascript" src="/wordpress/wp-content/themes/default/js/googleAnalytics.js"></script>
```

## Step 3 - heres the codey bit

The first thing we need in our code is a function that will call the Google Analytics function on the [DOM event](http://en.wikipedia.org/wiki/DOM_Events) of page load. There are lots of references out on the web detailing scripts which allow multiple onLoad functions to be called, and I believe that the one used here is based on [Simon Willisons addLoadEvent script](http://simonwillison.net/2004/May/26/addLoadEvent/). This script is a function that that you can call, to in turn call other functions on page load:

``` js
/* Simplifies onload, you will no longer have to add an onload event call just call addLoadEvent */
function addLoadEvent(func,arg){

if (!arg){
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
}
}
  else{/*if the onload event has an argument/parameter cater for that*/
  if (arg){
  oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func(arg);
    }
     window.onload = function() {
      oldonload();
      func(arg);
    }
  }
}
}
```

Now we have a function which can call our analytics function on load we just need to convert the javascript to make it a littel less obtrusive. The more tricly bit involves loading the external js file which I mentioned earlier in part one. For this we create a function which appends the script to the head of the document. This script is called immediately

``` js
function loadGAScript(){
    /*Check browser for Dom compatibility*/
if (!document.getElementsByTagName) return false;
/*Determines whether the page is using a secure or unsecure protocol*/
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
/*Writes in the script to the document head*/
var gaScript = document.createElement("script");
gaScript.setAttribute("src",gaJsHost +"google-analytics.com/ga.js");
gaScript.setAttribute("type","text/javascript");
var domHead = document.getElementsByTagName("head")[0]
domHead.appendChild(gaScript);
    }
    loadGAScript();
```

We then just need to call 'part two' of the script on page load. SO we create a function out of it:

``` js
/*Calls the analytics function*/
function callGA(){   
var pageTracker = _gat._getTracker("UA-999999-1");
pageTracker._initData();
pageTracker._trackPageview();
}
```

and then once the dom has loaded we will call this function

``` js
addLoadEvent(callGA);
```

### Putting it all together

So heres the easy bit.

- Download the [javascript file](http://www.alstevens.co.uk/downloads/googleAnalytics.js)
- Add a reference to the script in your document
- Customise your user id

and you're done
