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
- Inshort 'this' becomes the object on which it is called on. 
- eg: person1.about() => this -> person1
```javascript
function personInfo(){
    console.log(`Person name is ${this.name} and age is ${this.age}`)
}
    
const person1 = {
    name : 'Nikhil',
    age : 20,
    about : personInfo
}

const person2 = {
    name : 'Ram',
    age : 8,
    about : personInfo
}

person1.about()
person2.about()

// o/p : Person name is Nikhil and age is 20
//       Person name is Ram and age is 8
```
