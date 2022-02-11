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

## Inheritance using 'extends' keyword :

- In case methods with same name are present in both parent as well as child class, JS will consider child class's method and run it.
- JS will always first look into child class for the method and if it is not present than it will go to parent class.

```javascript
// Parent class
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating...`
  }

  isCute() {
    return this.age <= 1
  }
}

// Sub class
class Dog extends Animal {
  bark() {
    return `${this.name} is barking...`
  }
}

// Creating object/instance
const scooby = new Dog('scooby', 1)

console.log(scooby.eat())
console.log(scooby.bark())
```
## super keyword :

- 'super' means our parent class's name.
- Suppose we have to add just one new property in sub class's constructor and rest remaining properties are same as parent class, we will use super.

```javascript
// Parent class
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating...`
  }

  isCute() {
    return this.age <= 1
  }
}

// Sub class
class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age)
    this.color = color
  }

  color1() {
    return `${this.name} is of ${this.color} color.`
  }
}

const scooby = new Dog('scooby', 1, 'brown')

console.log(scooby.color1())
console.log(scooby)
```



