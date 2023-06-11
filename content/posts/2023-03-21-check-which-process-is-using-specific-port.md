---
title: Check which process is using specific port
date: 2023-03-21T17:58:26.000Z
layout: post
comments: true
draft: false
categories:
- Terminal, Dev

---

This is a simple command to find out about process id binded with a port. Maybe you can kil the process.


{{< highlight toml  "linenos=true, style=emacs">}}

	lsof -i tcp:1313

{{< / highlight >}}
