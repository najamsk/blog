---
title: "Setting up blog with hugo & vercel"
date: 2020-04-30T22:23:21+05:00
layout: post
comments: true
categories: 
- blog 
- hugo
---

ok so I am playing with hugo trying to get a blog up and running with it. I have following todo items in mind with my blog:

* get a clean theme
* get code preview
* maybe comments support somehow? usind disquss?
* deployment of theme and any custom code with vercel formerly known as zeit.


## Get Theme

I end up choosing [hyde-hyde](https://themes.gohugo.io/hyde-hyde/) due to it's slick clean look. After that I digg around to figure out how to make sidebar links work.
Changed social media links and make those posts page work. Following links helped me to achieve that. 

* [hyde theme](https://github.com/htr3n/hyde-hyde) on github.


## Code Snippet

Hugo has builtin support for code snippet. So I change every blog post to match what hugo needs. [Documentation](https://gohugo.io/content-management/syntax-highlighting/) provide few styles to enable code snippet support for different languages.


## Comments

Using for comment mangement it's fairly simple once you figured out what part you need to modify in config file. [Read more](https://gohugo.io/content-management/comments/)
