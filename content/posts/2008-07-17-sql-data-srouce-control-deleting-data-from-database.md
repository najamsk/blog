---
layout: post
title: Sql Data Srouce Control Deleting Data From Database
date: 2008-04-30T22:23:21+05:00
comments: true
categories:
- asp.net
- c#
- ado.net
---
Hey guyz today i will show you how to fire delete query by using our beloved control sqldatasource.

Here is the code

{{< highlight csharp  "linenos=true,style=emacs">}}
SqlDataSource myDbSource22 = new SqlDataSource();
myDbSource22.ConnectionString = ConfigurationManager.ConnectionStrings["lalConnectionString"].ConnectionString;
myDbSource22.ProviderName = "System.Data.SqlClient";
myDbSource22.DeleteCommand = "delete from ProductsGroups where pid = " + productId;
myDbSource22.Delete();
{{< / highlight >}}

All it does it deletes all the rows for a given productID from table productgroups. Simple right ;)
