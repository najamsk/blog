---
layout: post
title: Realtek HD sound card working
date: 2007-04-30T22:23:21+05:00
comments: true
categories:
- linux
- tips
---
Hi guyz

My sound card working now after installing latest <a href="http://www.alsa-project.org/"><font color="#578fb2">Alsa</font></a> driver, Lib and Utils.

Compile alsa-driver like this:

{{< highlight ps1  "linenos=true,style=emacs">}}

./configure --with-cards=hda-intel
    make
    make install

{{< / highlight >}}

and alsa-lib and alsa-util in this order like this:

{{< highlight ps1  "linenos=true,style=emacs">}}
    ./configure
    make
    make install

{{< / highlight >}}

Reboot and there you go!

Regards
Najam Sikander Awan
