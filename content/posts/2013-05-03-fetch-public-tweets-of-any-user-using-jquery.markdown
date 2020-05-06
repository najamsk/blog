---
layout: post
title: "fetch public tweets of any user using jQuery"
date: 2013-04-30T22:23:21+05:00
comments: true
categories: 
- twitter
- jQuery
- tips
- javascript
- ajax
---

I have been asked by many friends how to load tweets of any user using jQuery I have put some time and found two ways to do that using jQuery.

<!-- more -->

## Twitter Timeline API
following is the code to get public tweets of any user using javascript and twitter timeline api

{{< highlight js  "linenos=true,style=emacs">}}

    $.ajax({
        type : 'GET',
        dataType : 'jsonp',
        url : 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=najamsikander',

    success : function(tweets) {
    console.log(tweets);
    var twitter = $.map(tweets.results, function(obj, index) {
    return {
    username : obj.from_user,
    tweet : obj.text,
    imgSource : obj.profile_image_url,
    geo : obj.geo
    };
    }); console.log(twitter );
    console.log(twitter.length);
        }
    });

{{< / highlight >}}

## Twitter Search
If you only need less then 5 tweets and you don’t want to deal with api rate constraint use following code that just search tweets of any user.

{{< highlight js  "linenos=true,style=emacs">}}

    $.ajax({
        type : 'GET',
        dataType : 'jsonp',
        url : 'http://search.twitter.com/search.json?from=najamsikander',

    success : function(tweets) {
        var twitter = $.map(tweets.results, function(obj, index) {
        return {
            username : obj.from_user,
            tweet : obj.text,
            imgSource : obj.profile_image_url,
            geo : obj.geo
            };
        }); 
        console.log(twitter);
        }
    });

{{< / highlight >}}
