---
title: Vim set current directory to the current buffer directory
date: 2023-02-27T17:58:26.000Z
layout: post
comments: true
draft: false
categories:
- Vim

---
Sometimes, I tend to forget this simple command, which can be handy for quickly switching to the directory of the current buffer in Vim. This can be useful when searching for files within your project, especially if your project search is not based on the git root or if your current directory is not being tracked by git.

{{< highlight toml  "linenos=true, style=emacs">}}

    :cd %:p:h

{{< / highlight >}}
