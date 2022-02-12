## Hoisting :

### In case of Function declaration :
- Variables are stored into global memory before the code is executed at time when GEC was created.
- Thus, they can be accesed before declaring them which is called hoisting.
- When GEC is created, variavles are assigned undefined, function is stored as it is.

```javascript
console.log(this)  // window object is printed
console.log(window) // window object is printed
console.log(firstName) // undefined

// The whole myFunc will be printed
console.log(myFunc)
// Calling myFunc
myFunc()

// A function created using 'function' keyword i.e Function declaration is stored into Global memory when 
// GEC(Global Execution context) is created.
// So we can call/print it before it's declaration
function myFunc() {
  console.log('This is my function.')
}

var firstName = 'Nikhil'
console.log(firstName)
```
### In case of Function expression :

- In case of Function Expression, the function will be treated as a variable and will be set to undefined in global memory when GEC is created.
- So hoisting is not possible in case of Function Expression

```javascript
console.log(myFunc) // undefined

// myFunc variable is set to this function
var myFunc = function () {
  console.log('This is my function.')
}

console.log(myFunc) // myFunc is printed
```

### Let and const :

- In case of 'let' and 'const', the variable will be created and memory will be assigned to it but it will be uninitialized in global memory when GEC is created.
- So hoisting is possible in case of 'let' and 'const' as they are created in global memory but they are useless until they are 'initialized'.

### TDZ - During the time when variable is uninitialized, it is present in Temporal Dead Zone and will keep throwing Reference error until it is initialized.
```javascript
// Error : Uncaught ReferenceError: Cannot access 'firstName' before initialization
console.log(firstName)

// 'firstName' will be initialized to 'Nikhil'
let firstName = 'Nikhil'

console.log(firstName)
```

- Suppose if we not even define the variable anywhere in our pgm and try printing it, it will throw a different error.
- Thus, it proves let and const are hoisted.

```javascript

// Error : Uncaught ReferenceError: firstName is not defined
console.log(firstName)

```

