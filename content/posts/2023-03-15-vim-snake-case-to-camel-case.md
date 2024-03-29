---
title: Change snake case to camel case using VIM
date: 2023-03-15T17:58:26.000Z
layout: post
comments: true
draft: false
categories:
- Vim
---
As I'm working on refactoring some legacy code, I've encountered the challenge of changing the variable naming convention. The current convention is not standardized, and I've noticed that snake case (e.g., first_name) is commonly used. One additional constraint is to only change part of a file. 

Following will looks for any places with an underscore followed by a lower case letter and replaces that with an upper case letter.

{{< highlight bash "linenos=table,hl_lines=8 15-17,linenostart=1" >}}

    :1,$s/_\([a-z]\)/\u\1/g

{{< / highlight >}}


If you want to change case on selected lines you can use following.

{{< highlight bash "linenos=table,hl_lines=8 15-17,linenostart=1" >}}


    :3,6s/_\([a-z]\)/\u\1/g

{{< / highlight >}}
