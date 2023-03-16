+++
categories = ["vim"]
comments = false
date = ""
layout = ""
title = "vim snake case to camel case"

+++
I am refactoring some legacy code and one issue I faced is to change variable naming convention. There is no fix scheme and in many places found snake case (first_name) wanted to change things in a large file but limited to certain lines.

Following will looks for any places with an underscore followed by a lower case letter and replaces that with an upper case letter.

    :1,$s/_\([a-z]\)/\u\1/g

If you want to change case on selected lines you can use following.

    :3,6s/_\([a-z]\)/\u\1/g