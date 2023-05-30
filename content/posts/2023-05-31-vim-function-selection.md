---
title: Vim Selecting Function Body
date: 2022-10-28T20:58:26.000+03:00
layout: post
comments: true
categories:
- Vim
draft: true

---

The better way to select a function content is to go inside a function 
with your cursor and type : vi} it will select everything between { and }.

Another method is using v{o} this will also select function body.

In case you want to select body and the function signature you can do va{V
