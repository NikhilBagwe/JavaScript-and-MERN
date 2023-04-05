## Why .NET core need to exsist ?

- .net framework was full of patches and workarounds that slowed it down.
- Everything was built on top of each other making it complex.
- .net framework was directly tied to windows. Apps made required Windows OS to run.
- It was designed to house everything in one package. But always we don't need everything. It was like an unnecesssary overhead that didn't used.
- It was designed 20 years (in 2002) ago when Internet was totally different as compared to now. Everything was desktop centric, unlike today we use mobile.

## Execution of C# code :

- C# source code file is given to Compiler which generates the IL (Intermediate Language) code.
- Thus we can use multiple languages in dotnet as all are compiled down to IL.
- Then IL is passed to .NET framework CLR which executes this code.

## What MS did ?

- Here Microsoft decided to create a new .NET core CLR which was faster and can execute the same IL on multiple platforms generated in above process.
- MS got a chance to remove all the patches from framework, and rewrite & figure out the right code to solve today's modern world problems.

---

## Advantages of .NET Core over .NET framework :

- Works on most platforms.
- Much faster.
- Modular - Functions such as cryptography are separated into different packages called NuGet packages which can be installed when needed. But in case of .NET framework it was part of the package already.
- Follows best practices - For MVC app you get Dependency injection preinstalled by default
- Modern as it was built from ground up to run apps in today's world
- Compliant with industry standards.
- Easy to upgrade

### Basically .NET framework was the old Runtime and .NET core is the new runtime

---

## .NET standard :

- A common interface of APIs for .NET implementation
- It helps you to convert a ".NET framework class library" to ".NET standard class library" which can be used to transition to ".NET core user Interface"
- Workflow : ".NET framework user Interface" => ".NET framework class library" => ".NET standard class library" => ".NET core class library" => ".NET core user Interface"
- Now using the same ".NET standard class library" you can also create ".NET framework user Interface"
- We can easily transition from framework to core
- .NET standard exists to sit in middle of two user interfaces.

---

## .NET Timelines :

### .NET Frameowrk :

- 1.0 : January 2002 
- 2.0 : October 2005
- 3.0 : November 2006
- 3.5 : November 2007
- 4.0 : April 2010 - Major update
- 4.5 : August 2012 - Last version of .NET framework

### .NET Core :

- 1.0 : June 2016 - Had limited functionality. Was present as a proof of concept.
- 2.0 and 2.1 LTS : May 2018 - Production ready. MVC, Razor pages, API support. Cross-platform i.e .NET apps can be hosted on Linux servers

### .NET Frameowrk :

- 4.8 : April 2019 - Last minor vesion of .NET framework and will never go beyond that. Still supported and receiving security updates

### .NET Core :

- 3.0 and 3.1 LTS : December 2019 - Desktop application WinForms was introduced
- MS skipped .NET Core 4.0 to avoid naming confusion as .NET framework 4.0 already exists.
- 5.0 : November 2020 - From here they dropped the name of 'core' as .NET framework 5.0 didn't exist, so no naming confusion. So from we call it just '.NET 5.0'
- 6.0 : November 2021

### We will get new .NET version every November.

---

## When to use each :

### .NET framework :

- Addition to existing projects.
- When forced to use old OS
- You can still use .NET framework to build projects today even though the version is not supported, but if you find a bug, you have to solve it on your own.

### .NET Core :

- New Projects
- When upgrading projects from older version as latest .NET 7 runs same C# code much faster.

---

## What about ASP.NET and ASP.NET Core ?

- These are frameworks for web applications.
- It's a way to work on the web with C#.

### ASP.NET :

- It is a framework built on top of .NET framework.
- It supports Webforms (Not similar to WinForms which only run on Windows desktop), MVC and WebAPI

### ASP.NET Core :

- It is a framework built on top of all .NET versions after .NET 5.0 i.e core and used to make web apps.
- It supports Razor pages, MVC, API, Blazor Server (Alternative to Webforms), Blazor Webassembly









