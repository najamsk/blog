---
layout: post
title: Read SMTP settings from asp.net web.config
date: 2008-04-30T22:23:21+05:00
comments: true
categories:
- asp.net
- .net
- c#
---
hi guyz



Sorry for writing after such a long time i guess i am very busy now a days so for a project i needed to read my smtp email settings defined in my web.config file so after some efforts i am able to read these settings direct from my system .net section.

{{< highlight csharp  "linenos=true,style=emacs">}}

System.Configuration.Configuration config = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration(HttpContext.Current.Request.ApplicationPath);
System.Net.Configuration.MailSettingsSectionGroup settings = (System.Net.Configuration.MailSettingsSectionGroup) config.GetSectionGroup("system.net/mailSettings");
Response.Write("&lt;br&gt;Username="+settings.Smtp.Network.UserName);
Response.Write("&lt;br&gt;Password=" + settings.Smtp.Network.Password);
Response.Write("&lt;br&gt;host=" + settings.Smtp.Network.Host);
Response.Write("&lt;br&gt;port=" + settings.Smtp.Network.Port);
Response.Write("&lt;br&gt;from=" + settings.Smtp.From);

{{< / highlight >}}
