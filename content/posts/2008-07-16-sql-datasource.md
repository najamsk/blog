---
layout: post
title: Sql Data Srouce Control Fetch data from database
date: 2008-04-30T22:23:21+05:00
comments: true
categories:
- asp.net
- ado.net
- c#
---
Hi in asp.net 2.0 this new datasource control has been added and i liked it alot and i used it on many places so i thought it would be nice if I share my knowledge with all my readers so first of all i would just like to show you how to retrieve some data from your database into C# code behind file.

{{< highlight csharp  "linenos=true,style=emacs">}}
string userID = string.Empty;

string UserName="najam";
SqlDataSource myDbSource = new SqlDataSource();
myDbSource.ConnectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
myDbSource.SelectCommand = "select userId from Users where userName='" + UserName + "'";
myDbSource.ProviderName = "System.Data.SqlClient";
DataView dv = (DataView)myDbSource.Select(new DataSourceSelectArguments());
DataTable dt = dv.Table;
if (dt.Rows.Count > 0)
{
userID = dt.Rows[0][0].ToString();
}

{{< / highlight >}}

Above code will return user id if username supplied. You will see no data adapters or command object.

If you like instead of creating sql datasrouce control in code behind just drag and drop it onto ur aspx page and then in your code behind reference it that will shorten the line of code for fetching data from your database.
