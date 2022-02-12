# JS code execution :

+ Code is compiled - Before executing 1st line of code, our whole code is compiled.
  * Compilation phase consists of 3 steps:
  1. Tokenizing/Lexing - Code is breaked down into small pieces called tokens.
  2. Parsing - Creates AST(Abstract Syntax Trees)
  3. Code generation - With help of ASTs code is generated which can be executed

+ Then code is executed - JS code can only be executed inside 'Execution Context'
  * Code Execution phase steps : This happens before 1st line of code is executed
  1. Global Execution context is created. 

# How Global Execution context is created?

1. There are 2 phases :
  * Creation phase
  * Code execution phase
2. All the variables are created and put into 'Creation' phase(Global memory) and set to 'undefined'
3. 'this' is set to 'window' obj which is provided by browser in case the pgm is run on browser.
4. Then we enter into 'Code execution phase' where we start executing code from 1st line and output its result into console accordingly.
5. As per our example when JS executes 3rd line, it will print 'undefined' in the console as firstname is set to undefined in creation phase.

# IMP - Why compiling/parsing is done first?
1. For early error checking
2. To determine appropriate scoping of variables

### Note : Originally, JS is a syynchronous programming language i.e until 1 line is completely executed, execution of 2nd line won't start. Thus, JS is also single-threaded i.e thread will execute 1 line and then start executing 2nd line. Browser provides JS with asynchronous feature.

## Code below proves that JS compiles whole code 1st that executes it from 1st line :

```javascript
// First 3 lines won't be executed even though they are correct
console.log(this)
console.log(window)
console.log(firstName)
// Since we added a '.' before 'Nikhil', JS will throw an error as the whole code is parsed before executing 1st line.
var firstName = .'Nikhil'
```

## Code shows how variables are created in Global execution context :

```javascript
console.log(this)
console.log(window)
// it will log 'undefined' in the console as firstname is set to undefined in creation phase of Global execution context.
console.log(firstName)
// variable 'firstName' is present in global scope which is determined by JS during parsing and now it will be set to 'Nikhil'
var firstName = 'Nikhil'
console.log(firstName)
```

## Original notes :
```javascript
/*
JS code execution :

1. Code is compiled - Before executing 1st line of code, our whole code is compiled.
  - Compilation phase consists of 3 steps:
  1. Tokenizing/Lexing - Code is breaked down into small pieces called tokens.
  2. Parsing - Creates AST(Abstract Syntax Trees)
  3. Code generation - With help of ASTs code is generated which can be executed

2. Then code is executed - JS code can only be executed inside 'Execution Context'
  - Code Execution phase steps : This happens before 1st line of code is executed
  1. Global Execution context is created.
  2. 

- How Global Execution context is created?
1. There are 2 phases :
  - Creation phase
  - Code execution phase
2. All the variables are created and put into 'Creation' phase(Global memory) and set to 'undefined'
3. 'this' is set to 'window' obj which is provided by browser in case the pgm is run on browser.
4. Then we enter into 'Code execution phase' where we start executing code from 1st line and output its
   result into console accordingly.
5. As per our example when JS executes 3rd line, it will print 'undefined' in the console as firstname is 
   set to undefined in creation phase.

- Why compiling/parsing is done first?
1. For early error checking
2. To determine appropriate scoping of variables

Note : Originally, JS is a syynchronous programming language i.e until 1 line is completely executed, execution of 2nd line won't 
start. Thus, JS is also single-threaded i.e thread will execute 1 line and then start executing 2nd line. Browser provides JS with 
asynchronous feature.
*/

// console.log(this)
// console.log(window)
// console.log(firstName)
// // Since we added a '.' before 'Nikhil', JS will throw an error as the whole code is passed before executing 1st line.
// var firstName = .'Nikhil'

console.log(this)
console.log(window)
// it will log 'undefined' in the console as firstname is set to undefined in creation phase.
console.log(firstName)
// variable 'firstName' is present in global scope which is determined by JS during parsing and now it will be set to 'Nikhil'
var firstName = 'Nikhil'
console.log(firstName)
```
