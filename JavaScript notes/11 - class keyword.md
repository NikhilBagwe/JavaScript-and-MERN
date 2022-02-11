## class :

- Class does similar things under the hood what we did using function and prototype.
- We have to use 'new' keyword to create an object of a class
- constructor is called first while creating object
- Then the methods from class are linked to the object's prototype

```javascript
class CreateUser {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  about() {
    return `${this.name} is ${this.age} years old.`
  }

  is18() {
    return this.age >= 18
  }
}

// function CreateUser(name, age, email) {
//   this.name = name
//   this.age = age
//   this.email = email
// }

// CreateUser.prototype.about = function () {
//   return `${this.name} is ${this.age} years old.`
// }

// CreateUser.prototype.is18 = function () {
//   return this.age >= 18
// }

const user1 = new CreateUser('Nikhil', 16, 'nik@gmail.com')

console.log(user1.about())
console.log(user1)
console.log(Object.getPrototypeOf(user1))

```
