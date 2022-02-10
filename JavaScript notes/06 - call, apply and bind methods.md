# call() :

- Used to call a function

```javascript
function hello(){
    console.log('Hello world')
}

hello.call()
```

- We can use 'call' method to borrow methods from other objects.
- We can set the 'this' of other object's method while calling it. 
- IMP : If you are using 'call()' , it is necessary to mention the object's name on which it is to be called or it will return 'undefined'
- 
```javascript
const person1 = {
    name : 'Nikhil',
    age : 20,
    about : function(){
        console.log(`Person name is ${this.name} and age is ${this.age}`)
    }
}

const person2 = {
    name : 'Ram',
    age : 45
}

person1.about.call(person2)

// op : Person name is Ram and age is 45
```
