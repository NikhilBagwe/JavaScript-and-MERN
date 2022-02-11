## Prototype
- In JS, we can treat a function as a function as well as object.
- When we create a function, it gives us a 'prototype' object where we can store properties(key-value pairs) related to that function if needed.
- It is like a free space which is provided to a function.
- Only functions provide 'prototype'.

```javascript
function hello(){
    console.log('Hello world!')
}

// We can access name of a function like we access property of an obj
console.log(hello.name)

// We can add/set our own property to function
hello.myProperty = 'unique value'
console.log(hello.myProperty)

console.log(hello.prototype)
```
