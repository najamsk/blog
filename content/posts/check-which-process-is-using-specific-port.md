---
_template: post
---

+++
categories = ["commands"]
comments = false
date = 2023-03-21T22:00:00Z
layout = ""
title = "Check which process is using specific port"

+++
This is a simple command to find out about process id binded with a port. Maybe you can kil the process.


{{< highlight toml  "linenos=true, style=emacs">}}

	lsof -i tcp:1313

{{< / highlight >}}
