---
title: "How to install wireless USB drivers for Ubuntu"
description: " Solution if Ubuntu does not see your wireless adapter, and there appears to be no way of actually installing it."
date: "2009-01-04"
categories:
  - "ephemera"
tags:
  - "ubuntu"
  - "wireless"
---

Problem: Wireless USB  adapter doesn't work on Ubuntu. Belkin and Dynamode wireless adapters

Background: Since I can neither afford the luxury of an Apple OS or stand any longer the bloated and slow Windows I thought it was about time to try out Linux on a computer at home. Since the majority of use of this home computer will be browser based (and since soon I believe a great deal of applications will be browser based) I figured that there was nothing to stop me giving it a go.

<!--more-->

Well I have to say that once I got the installation complete I was most pleased with myself, and very happy with my zippy new computer.

> What you will need - Your Ubuntu installation CD - Your windows drivers/hardware drivers cd

It is just fabulous the way that Ubuntu automatically detects all hardware and everything just works automatically - that is - everything except my wireless USB and thus my connection to the internet.

My wife and I both have a deep seated hate of wires and that combined with a quirky house means that wireless is the only way to go for us.

## Unfortunately Ubuntu simply did not see my wireless adapter, and there appeared to be no way of actually installing it.

In a flustered state I managed to get our other computer online and tried to look up how to get ubuntu to work with a wireless usb and found a wealth of articles, and forum posts, most of which seemed to involve going to the command line and writing an essay in code.

Of course everything I tried threw errors and exceptions and to this day I have no idea of how to login as 'root'.

But having looked a little further I found out the solution was fairly simple, so I thought I would write a post on it in the hope it will save somebody a lot of time.

It might not work for everybody but could be a good place to start before you get your handy dirty in the Terminal window.

## The solution

You will need to get a few programs running to get your adater working. One is a program which I think controls and 'helps' wireless networking run and the second is a graphical user interface which converses with the first program without the user having to use the command line. Follow these steps

1. Go to: System > Administration > Synaptic Package Manager
2. Search there for: [ndiswrapper-utils, ndiswrapper-common](http://sourceforge.net/projects/ndiswrapper/) and [ndisgtk](http://linuxappfinder.com/package/ndisgtk)
3. If nothing is found then Insert your Ubuntu CD
4. You will now need to add the CD to your 'Souces'. In administration 'Manage Sources' and add your cd/dvd
5. Now in Synaptic Package Manager click on "Source" (This means the Ubuntu Source CD I think!?)
6. Again search for [ndiswrapper-utils, ndiswrapper-common](http://sourceforge.net/projects/ndiswrapper/) and [ndisgtk](http://linuxappfinder.com/package/ndisgtk)
7. You should now be able to tick these items and save the Package Manager, which will then install the three programs
8. Go to System > Administration > Windows Wireless devices (This is the new program you've just installed ndiskgt thanks to [Sam Pohlenz](http://spohlenz.blogspot.com/))
9. Now Click on Insert New Driver
10. Insert your cd which came with your wireless device
11. Browse to the cd and look for the .inf files.
12. Select the .inf file Note: Normally these will be in a config forlder or an inf folder and will probably be oranised by Windows Operating System. I chose Vista driver as this was most recent but with one adapter this didn't work. I think it will probably be a case of 'if at first you don't succeed'
13. Install

Voila, you should see an icon appear next to your volume control which is your Network Manager. This will allow you to select a Network, and tweak your wireless settings.

If you are at this stage and still Ubuntu des not see your wireless USB it is time to either try another driver, or look for alternative solutions.

## I could now see the wireless Networks but still could not connect?

Grr, I was trying to connect to a Secured network using the default WPA/WPA2 connection which worked fine under Windows. I found that by disabling Security on the actual Router (which makes the network unsecure and no passsword is required) I was able to connect.

This can be done by

1. creating a wired ethernet connection to your router
2. Logging into your router in your browser (mine was at http://192.168.1.1)
3. Changing the wireless security option to 'Disabled'

This is highly unsatisfactory since it means that not only can anyone use my network, but also everything I do online can potentially be detected and intercepted and that in theory someone listening in could get my credit card details.

I spent a day messing around with the WPA settings and WEP and others but have not yet managed to connect using these protocols.

So at the moment I have just decided to risk it. I will however be looking for a solution to this asap. If anyone has any suggestions I'd love to know.

That said I am now connected wirelessly and writing this article on my shiny new Ubuntu OS - lifes good!
