---
layout: post
title: Sql Data Srouce Control Updating Data From Database
date: 2008-04-30T22:23:21+05:00
comments: true
categories:
- ado.net
- c#
- asp.net
---
hey guyz finally we have to learn how to update our tables in database so only for you guys here is my sample code

{{< highlight csharp  "linenos=true,style=emacs">}}

    string giftId = GridView1.SelectedRow.Cells[0].Text.ToString(); //getting an id
    SqlDataSource myDbSource = new SqlDataSource();
    myDbSource.ConnectionString = ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;
    //myDbSource.InsertCommand = "update gifts set giftActivate=1 where giftId=" + Entrydate + ")";
    myDbSource.UpdateCommand = "update gifts set giftActivate='1' where giftId=" + giftId;
    myDbSource.ProviderName = "System.Data.SqlClient";
    myDbSource.Update();
{{< / highlight >}}

Well this code set giftActive flag to 1 for all the rows matched with giftid value.
