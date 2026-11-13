---
title: "Larger, more useable click areas using clickBox"
description: "Enlarging the click area of an element has obvious benefits for a person using your website, making it easier to get from one page to another without having to target small links with their cursor."
date: "2008-07-22"
categories:
  - "code"
tags:
  - "add-new-tag"
  - "dev"
  - "dom-scripting"
  - "javascript"
---

Enlarging the click area of an element has obvious benefits for a person using your website, making it easier to get from one page to another without having to target small links with their cursor. Using this simple DOMscript we can easily make our click areas much bigger and easier for people to click.

From both a marketing and usability point of view it is always important to make sure that people using your website can get from A to B as easily as possible. <!--more-->

But how can we achieve this clickable-ness without reverting back to making our banners out of a single, inaccessible image? And how do we do it in a way that will help, rather than hinder our natural search listings?

Well we could:

1. Make an image with all our text and graphics. But this is at the cost of scalability and accessibility, and maybe more importantly will not be recognised as well by google.
2. We could create our nice sematic html, get it to render correctly. Apply a link to the key phrase using an h tag (thumbs up for google), and apply an onClick event to the div.

That's genius. Google can see our h tag link and rank it appropriately. The html is well formed and accessible AND we can make the whole area clickable. and it could look something like this.

```
<div class="myBannerAd">
<h3><a href="http://www.mygoodproduct.com/trackingurl/1789425311" onclick="document.location.href='http://www.mygoodproduct.com/trackingurl/1789425311'">Buy it, its good</a></h3>
<p>It won't let you down - ever</p>
<p class="button">Click here to buy it now</p>
</div>
```

But wait a minute - there's a fly in the ointment. Not only do we have to apply an inline javascript - breaking the golden rule of seperating content and behaviour, but we also have to duplicate the url. Not so bad in itself - but opening us up to errors if we have lots of these types of links. Furthermore, of we do have lots of these types of links, we are replicating the document.location.href behaviour over and over again

## Enter clickBox();

clickBox is a handy little domscript which applies this behaviour on the [DOM event](http://en.wikipedia.org/wiki/DOM_Events) of page load. By applying a class name of clickBox to a div you want to be clickable it will turn your core html from this:

```
<div class="myBannerAd clickBox">
<h3><a href="http://www.mygoodproduct.com/trackingurl/1789425311">Buy it, its good</a></h3>
<p>It won't let you down - ever</p>
<p class="button">Click here to buy it now</p>
</div>
```

into this

```
<div class="myBannerAd clickBox">
<h3><a href="http://www.mygoodproduct.com/trackingurl/1789425311" onclick="document.location.href='http://www.mygoodproduct.com/trackingurl/1789425311'">Buy it, its good</a></h3>
<p>It won't let you down - ever</p>
<p class="button">Click here to buy it now</p>
</div>
```

## The script

I have to thank [Jay Bishop](http://www.leveret.co.uk/blog/) for this script, who developed this script to implement clickBox on the [First Choice Holidays](http://www.firstchoice.co.uk) website.

It works by traversing the DOM and locating each div with a class of clickBox. It then looks at it's children for any a tags and takes the first a tag and applies the onclick event to it. Whats even better is that although the whole box will be clickable, secondary or tertiary links will still maintain their correct link, so there are no problems with over-riding other links.

```js
/* makes all of div clickable, linking to the first href found within the row. You simply need to add the class 'clickBox' */

function clickableDivs(){

if (!document.getElementsByTagName) return false; //added to test the browsers DOM compatibility

if (!document.getElementsByTagName('div')) return false; //added to test for any divs
var divs = document.getElementsByTagName('div');
 for(var i=0,j=divs.length;i<j;i++){
  if (divs[i].className.match('clickBox')){ // .match to deal with multiple class names
  if (!divs[i].getElementsByTagName('a')[0]) continue; // to ensure no errors if href is not present
  divs[i].style.cursor = "pointer"; // change the cursor to a pointer if onclick is applied
   divs[i].onclick = function (){
     window.location = this.getElementsByTagName('a')[0].href; //regular link
   }
  }
 }
}
```

## Implementing the script

In order to call the funtion on page load we use an addLoadEvent script adapted from [Simon Willison's original.](http://simonwillison.net/2004/May/26/addLoadEvent/) In our case we created a library of DOM scripts which includes both the addLoadEvent script and the clickBox script.

Insert the [DOM Scripts Library](http://www.alstevens.co.uk/js/clickbox.js) into the head of your document.

```js
<script type="text/javascript" src="/js/clickbox.js"></script>
```

Add the class to any element which you want to make clickable

```js
<div class="myBannerAd clickBox">
<h3><a href="http://www.mygoodproduct.com/trackingurl/1789425311">Buy it, its good</a></h3>
<p>It won't let you down - ever</p>
<p class="button">Click here to buy it now</p>
</div>
```

and were done.

## Extensibility

Adding any behaviours to these elements in the future (ie add an icon in there, put in a background colour etc) is also a synch. All we need to do is add the required functionality into the script and it will automatically be applied to all of the clickBox elements. Yes, it really is that easy!

## Update

I have removed some unneccessary functions from my original clickBox code which were proprietry to our website code. Thanks [Jay](http://www.leveret.co.uk/blog/) for pointing these out.
