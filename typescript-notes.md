# Intro :

- Typescript is superset of Javascript.
- But it's not like it gives extra features to JS.
- TS allows you to write JS in a more precise manner so there are less errors at runtime.
- TS provides **TYPE SAFETY**
- TS is a Development tool i.e your project still runs in JS
- It is not a 100% standalone language itself, but a wrapper around JS. Still it is a programming language.

# Type Safety :

- JS allows us to add a variable of number data type with string which it shouldn't allow.

```js
console.log(2+'2');    // 22
console.log(null + 2); // 2
```

- TS will allow you to stop this weird behaviour by giving Type Safety.

# What TS provides you ?

- Static Checking : The syntax of the language is constantly being analyzed by the IDE when you are writing code even without running the code even once.
- It is the only thing TS provides you with.
- JS dosen't has static checking. Thus, we only get errors after running the JS file at runtime.

# Install TS on system :

```bash
npm install -g typescript

tsc -v  // Check TS installed or not

tsc intro.ts  // To compile a TS file to generate it's corresponding JS file
```
