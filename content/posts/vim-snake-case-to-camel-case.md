---
_template: post
---

+++
categories = ["vim"]
comments = true
date = 2023-03-15T22:00:00Z
layout = ""
title = "change snake case to camel case using VIM"

+++
As I'm working on refactoring some legacy code, I've encountered the challenge of changing the variable naming convention. The current convention is not standardized, and I've noticed that snake case (e.g., first_name) is commonly used. One additional constraint is to only change part of a file. 

Following will looks for any places with an underscore followed by a lower case letter and replaces that with an upper case letter.

{{< highlight toml  "linenos=true, style=emacs">}}

    :1,$s/_\([a-z]\)/\u\1/g

{{< / highlight >}}


If you want to change case on selected lines you can use following.

{{< highlight toml  "linenos=true, style=emacs">}}

    :3,6s/_\([a-z]\)/\u\1/g

{{< / highlight >}}
