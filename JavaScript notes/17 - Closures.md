## Function can return a function :

```javascript
function outerFunction() {
  function innerFunction() {
    console.log('Hello world')
  }
  return innerFunction
}

// Stores 'innerFunction' in it
const ans = outerFunction()
console.log(ans)

// call 'ans' function
ans()
```

## Closures : Refer notes for diagram of GEC

- When a function A returns a function B present inside it, it not only returns the function B but also function A's lexical environment(local memory) from function A's FEC.
- This is called as closure.
- In below example, when we call 'ans()' function at 4th line, it requires to log 'firstName' and 'lastName' which we don't even pass into it's parameters while calling it, so Local memory of 'ans' func's FEC won't have them.
- So we look into GEC's Memory creation i.e global memory for it.
- In GEC, we already executed 'printFullName' by creating it's FEC and while returning function 'printName' we returned 'printFullName' FEC's local memory also i.e Closure
- We will find it there in variable 'ans' as when a function returns a function, it not only returns the function but also the parent function i.e 'printFullName's Local memory which contained 'firstName' and 'lastName'.

```javascript
function printFullName(firstName, lastName) {// 1st line in overall code
  function printName() {// 1st line in printfullname
    console.log(firstName, lastName) // 1st line in printName
  }
  // printName will be returned with printFullName's lexical environment i.e firstname and lastname due to closure
  return printName // 2nd line in printfullname
}

// Stores 'printName' func in it
const ans = printFullName('nikhil', 'bagwe') // 2nd line
console.log(ans) // 3rd line

ans() // 4th line
```
