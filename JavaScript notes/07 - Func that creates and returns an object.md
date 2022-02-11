- Function that can create and return that object

```javascript
function createUser(name, age, email){
    const user = {}
    user.name = name
    user.age = age
    user.email = email
    user.about = function(){
        return `${this.name} is ${this.age} years old.`
    }
    return user
}

const user1 = createUser('Nikhil', 21, 'nik@gmail.com')
console.log(user1)

const about = user1.about()
console.log(about)
```

## Disadvantage :

- Each time we create a new user, copy of 'about' method is stored in the memory.
- So if we create thousands of user objects, everytime 'about' method will be created and it will take up a lot of memory.

## Solution : 

- Store the methods in a different object and assign it's reference to 'about' func inside 'createUser'
- Thus the address/reference at which 'about' in 'userMethods' obj is stored is assigned to 'about' func inside 'createUser' saving memory
- So we are creating only 1 copy of methods and using it when called.

```javascript
const userMethods = {
    about : function(){
        return `${this.name} is ${this.age} years old.`
    }
}

function createUser(name, age, email){
    const user = {}
    user.name = name
    user.age = age
    user.email = email
    // Store reference of 'about' from userMethods object
    user.about = userMethods.about
    return user
}

const user1 = createUser('Nikhil', 21, 'nik@gmail.com')
const user2 = createUser('Om', 3, 'om@gmail.com')

console.log(user1.about())
console.log(user2.about())
```

## Disadvantage : 

- Suppose if you have to add thousands of methods inside 'userMethods' obj and you forget to assign anyone of it inside 'createUSer' func will cause a problem.

## Solution : Use Object.create()

```javascript
const userMethods = {
    about : function(){
        return `${this.name} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >= 18
    }
}

function createUser(name, age, email){
    const user = Object.create(userMethods) // Creates an empty obj {} and sets its proto to 'userMethods'
    user.name = name
    user.age = age
    user.email = email
    return user
}

const user1 = createUser('Nikhil', 21, 'nik@gmail.com')
const user2 = createUser('Om', 3, 'om@gmail.com')

// Whenever JS dosen't finds the required method inside 'user1 or user2' it will look inside their 'proto' to find 
// them as proto is set/referenced to 'userMethods' obj.
console.log(user1.about())
console.log(user2.is18())
```




