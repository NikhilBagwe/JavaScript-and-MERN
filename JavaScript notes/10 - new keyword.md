## new keyword :

- new keyword creates an empty object {}
- Here, this = {}
- 'new' returns the object(previously empty obj) after filling it with key value pairs.
- new keyword automatically sets the __proto__ of user1 to prototype object of 'createUser' function i.e if JS dosen't finds a method like'about()' inside 
  user1 obj it will go and check inside 'prototype' obj of 'createUser'. 
- Thus we don't have to explicitly set => const user = Object.create(createUser.prototype)

### IMP - When we create a function which can only be called using 'new', keep its name's first letter capital. For identification purpose.

```javascript
function CreateUser(name, age, email) {
  // new keyword creates an empty obj so we don't have to declare it. Also sets its [[Prototype]] to 'createUser.prototype'
  this.name = name
  this.age = age
  this.email = email
  // new keyword will return by itself so we don't have to write return statement, but if we want we can write - 'return this;'
}

CreateUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old.`
}

CreateUser.prototype.is18 = function () {
  return this.age >= 18
}

const user1 = new CreateUser('Nikhil', 16)
console.log(user1)
user1.about()
```
### When you have to access only properties of user1 excluding prototype properties use 'hasOwnProperty()'

```javascript
function CreateUser(name, age, email) {
  this.name = name
  this.age = age
  this.email = email
}

CreateUser.prototype.about = function () {
  return `${this.name} is ${this.age} years old.`
}

CreateUser.prototype.is18 = function () {
  return this.age >= 18
}

const user1 = new CreateUser('Nikhil', 16)

// prints only those properties that belong to 'user1'
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key)
  }
}
```
