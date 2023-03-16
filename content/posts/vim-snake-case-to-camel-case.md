+++
categories = ["vim"]
comments = true
date = 2023-03-15T22:00:00Z
layout = ""
title = "vim snake case to camel case"

+++
I am refactoring some legacy code and one issue I faced is to change variable naming convention. There is no fix scheme and in many places found snake case (first_name) wanted to change things in a large file but limited to certain lines.

Following will looks for any places with an underscore followed by a lower case letter and replaces that with an upper case letter.

{{< highlight toml  "linenos=true, style=emacs">}}
    :1,$s/_\([a-z]\)/\u\1/g
    
{{< / highlight >}}    

If you want to change case on selected lines you can use following.


{{< highlight toml  "linenos=true, style=emacs">}}
    :3,6s/_\([a-z]\)/\u\1/g
    
{{< / highlight >}}