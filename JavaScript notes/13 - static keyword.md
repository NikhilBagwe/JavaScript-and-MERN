## static :

- Methods/properties declared using 'static' keyword can directly be accesesd by using class name.
- It is not required to make an object of class inorder to access them.
- We cannot access static methods by through object of that class as it will give error.

```javascript
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  // static property
  static desc = 'static property'

  // static method
  static classInfo() {
    return `This is Person class static method`
  }

  get fullname() {
    return `${this.firstName} ${this.lastName}`
  }
}

const info = Person.classInfo()
console.log(info)

console.log(Person.desc)

```
