## Why .NET core need to exsist ?

- .net framework was full of patches and workarounds that slowed it down.
- Everything was built on top of each other making it complex.
- .net framework was directly tied to windows. Apps made required Windows OS to run.
- It was designed to house everything in one package. But always we don't need everything. It was like an unnecesssary overhead that didn't used.
- It was designed 20 years ago when Internet was totally different as compared to now. Everything was desktop centric, unlike today we use mobile.

## Execution of C# code :

- C# source code file is given to Compiler which generates the IL (Intermediate Language) code.
- Thus we can use multiple languages in dotnet as all are compiled down to IL.
- Then IL is passed to .NET framework CLR which executes this code.
