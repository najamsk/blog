---
title: Golang Swagger2.0
date: 2022-10-28T20:58:26.000+03:00
draft: true

---
This post is currently in progress. Please don't read, you shall not pass. 🧙🏻‍♂️

This post serve as small documentation to add swagger and its ui to your existing golang API. I will be using go swagger 2.0 library or framework to do so which basically add comments on your existing code to generate swagger documentation.

* Make a small [gorilla mux](https://github.com/gorilla/mux) api two endpoints with GET and POST
* Add the comments annotations to source code, meaning handlers
* Download swagger-ui from the [go-swagger repo](https://github.com/swagger-api/swagger-ui)
* Serve the swagger-ui folder as a fileserver.
* Embed the swagger-ui inside output binary
* Deploy this small api server to GCP
* Host on AWS
* Maybe deploy it using kubernetes

{{< gist najamsk 3affd02f2bc8abb05171b64861323631 >}}