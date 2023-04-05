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

## Advantages of .NET Core over .NET framework :

- Works on most platforms.
- Much faster.
- Modular - Functions such as cryptography are separated into different packages called NuGet packages which can be installed when needed. But in case of .NET framework it was part of the package already.
- Follows best practices - For MVC app you get Dependency injection preinstalled by default
- Modern as it was built from ground up to run apps in today's world
- Compliant with industry standards.
- Easy to upgrade
