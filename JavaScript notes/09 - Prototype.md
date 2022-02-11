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

- Now instead of creating a separate object to store methods we will use the free space provided by function i.e 'prototype' object to store this methods.
- Instead of setting the '__proto__' of user to 'userMethods' we will set it to 'createUser.prototype'

```javascript
// const userMethods = {
//   about: function () {
//     return `${this.name} is ${this.age} years old.`
//   },
//   is18: function () {
//     return this.age >= 18
//   },
// }

function createUser(name, age, email) {
  const user = Object.create(createUser.prototype)
  user.name = name
  user.age = age
  user.email = email
  return user
}

// Storing the methods into prototype object
createUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old.`
}

createUser.prototype.is18 = function () {
  return this.age >= 18
}

const user1 = createUser('Nikhil', 21, 'nik@gmail.com')
const user2 = createUser('Om', 3, 'om@gmail.com')

console.log(user1)
console.log(user2.about())
```
