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

- You can also pass extra parameters in 'call'

```javascript
const person1 = {
    name : 'Nikhil',
    age : 20,
    about : function(hobby, favGame){
        console.log(this.name, this.age, hobby, favGame)
    }
}

const person2 = {
    name : 'Ram',
    age : 45
}

person1.about.call(person2, 'Dancing', 'Cricket')
```

# apply() :

- 'apply' is same as 'call' only that we pass the remaining parameters as an 'array' into it.

```javascript
const person1 = {
    name : 'Nikhil',
    age : 20,
    about : function(hobby, favGame){
        console.log(this.name, this.age, hobby, favGame)
    }
}

const person2 = {
    name : 'Ram',
    age : 45
}

person1.about.apply(person1, ['Dancing', 'Cricket'])
```
# bind() :

- Similar to 'call'
- 'bind' returns a function and we can store that function in a variable so that it can be called anytime.

```javascript
function about(hobby, favGame){
    console.log(this.name, this.age, hobby, favGame)
}

const person1 = {
    name : 'Nikhil',
    age : 20,
    
}

const person2 = {
    name : 'Ram',
    age : 45
}

const func = about.bind(person2, 'Dancing', 'Cricket')

func()
```
