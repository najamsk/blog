---
title: refactoring in vim - golang & graphql
date: 2023-04-19T17:58:26.000Z
layout: post
comments: true
draft: false
categories:
- Golang
- Graphql
- Vim

---
Following will convert golang struct to a 99design graphql schema type.



{{< highlight golang  "linenos=true, style=emacs">}}

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

{{< highlight golang  "linenos=true, style=emacs">}}

    type Post struct {
      UserID int    
      ID     int    
      Title  string 
      Body   string 
	}

{{< / highlight >}}


Next two steps are field name to camel case and data type to be capitalize.
