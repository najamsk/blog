---
layout: post
title: Writing .Net Windows Service Made Easy Using Topshelf
date: 2013-04-30T22:23:21.000+05:00
comments: true
published: true
categories:
- topshelf
- ".net"
- c#
- windows services

---
I have first read about <a href="http://topshelf-project.com/">topshelf</a> <a href="http://gregorsuttie.com/2012/08/20/what-i-learned-last-week-13th-august-17th-august/">Gregor's blog</a> and later fond scott hanselman recommendation about it.


```csharp {linenos=table,linenostart=1}
public class TownCrier {
  readonly Timer _timer;
  public TownCrier() {
    _timer = new Timer(1000) {
      AutoReset = true
    };
    _timer.Elapsed += (sender, eventArgs) => Console.WriteLine("It is {0} an all is well", DateTime.Now);
  }
  public void Start() {
    _timer.Start();
  }
  public void Stop() {
    _timer.Stop();
  }
}

public class Program {
  public static void Main() {
    HostFactory.Run(x => {
      x.Service(s => {
        s.ConstructUsing(name = & gt; new TownCrier());
        s.WhenStarted(tc => tc.Start());
        s.WhenStopped(tc => tc.Stop());
      });
      x.RunAsLocalSystem();
      x.SetDescription("Sample Topshelf Host");
      x.SetDisplayName("Stuff");
    });
  }
}

//end

```

I have slowly started to play with this tool learning its simple APP, browsing documentation and creating test code. One of my asp.net project has a page which is performing monthly payments using authorize.net and as number of users are increased this page is timing out and asp.net gives us thread aborted exception.

This was perfect timing to use topshelf and migrate payment code into a windows service. So I have started with very basic sample, few timers, stop/start events and while I was into it I have decided to implement Unit Of Work and Repository pattern for data access layer. Will write a short post about how I have used these patterns with asp.net web forms application.

Back to Topshelf service has been written and deployed on live server and its working so far but I need to answer following questions and they will be a learning document for newcomer.
<ul>
<li><span style="line-height: 21px;">Q. When timer is elpased and if any config file is modified would it read updated settings?</span></li>
<li>even if service is running if code is reading from config inside timer elapsed event handler it will get fresh values from config</li>
<li><span style="line-height: 21px;">Q. How to install/uninstall the service?</span></li>
<li><span style="line-height: 21px;">Q. How to recover if service keeps running even after stop signal or some bug don't let it stop?</span></li>
<li><span style="line-height: 21px;">Q. How to send cc email using NLOG?</span></li>
<li><span style="line-height: 21px;">Q. Nlog write to file?</span></li>
<li><span style="line-height: 21px;">Q. How sential is helping me on live server with logging?</span></li>
<li><span style="line-height: 21px;">Q. When topshelf code is modified new exe file can be updated after just stopping service or un-install is required?</span></li>
<li><span style="line-height: 21px;">Q. Used Settings section (type safety) in app.config vs app settings that is basically a key value pair of string types?</span></li>
</ul>

This tools also works great with logging tools, I have tested it against NLog and to view these logs I have used Sential.

