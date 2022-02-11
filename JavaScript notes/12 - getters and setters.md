## get :

- When we have to call a method without adding parenthesis after it we use 'get' keyword.
- Here we treat a method as a property.
- We just have to add 'get' before the method's declaration.
- After adding 'get' if we call it using parenthesis it give error.

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('nikhil', 'bagwe', 20)

console.log(person1.fullname)
```

## Setter function - used to change/set property values

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  fullname() {
    return `${this.firstName} ${this.lastName}`
  }

  setname(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Nikhil', 'Bagwe', 20)
console.log(person1.fullname())

person1.setname('Ram', 'Sharma')
console.log(person1.fullname())
```
### OR - using 'set' keyword

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`
  }

  // Setter
  set fullname(fullname) {
    // splits fullname where ' ' space appears
    const [firstName, lastName] = fullname.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Nikhil', 'Bagwe', 20)
console.log(person1.fullname)

person1.fullname = 'Ram Sharma'
console.log(person1)
```
