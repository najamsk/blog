+++
categories = ["golang", "graphql", "vim"]
comments = true
date = 2023-04-19T21:00:00Z
layout = ""
title = "refactoring in vim - golang & graphql"

+++
Following will looks convert golang struct to a 99design graphql schema type.

{{< highlight toml  "linenos=true, style=emacs">}}

    
    type Post struct {
      UserID int    `json:"userId"`
      ID     int    `json:"id"`
      Title  string `json:"title"`
      Body   string `json:"body"`
	}


{{< / highlight >}}


If you want to change case on selected lines you can use following.

{{< highlight toml  "linenos=true, style=emacs">}}

    :3,6s/`.*/

{{< / highlight >}}


Above regular expression will remove the json tags from the line 3 to 6.