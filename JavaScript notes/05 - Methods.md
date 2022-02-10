## What is a method ?

- A function inside an object is called as method.

```javascript
const person = {
    name : 'Nikhil',
    age : 20,
    about : function(){
        console.log(`Person name is ${this.name} and age is ${this.age}`)
    }
}

person.about()
```
- Here 'this' is the whole object itself i.e 'person'.
- Run below code to understand.

```javascript
const person = {
    name : 'Nikhil',
    age : 20,
    about : function(){
        console.log(this)
    }
}

person.about()

// o/p : { name: 'Nikhil', age: 20, about: [Function: about] }
```
