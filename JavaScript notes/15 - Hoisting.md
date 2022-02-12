## Hoisting :

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
