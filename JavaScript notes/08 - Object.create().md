## IMP - Refer previous '07' article
- We want JS to first look whether the given key is present inside the obj2, if not than it will check for the key inside obj1 and return it.
- This can be acheived bu using 'Object.create()' which adds the mentioned object as reference to __proto__ or [[Prototype]] of current object which is being created.
- This creates a proto chain.
- eg: const obj2 = Object.create(obj1) // obj1 is added into proto of obj2
- When JS dosen't find something it looks into the object's proto for it

```javascript
const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
}

const obj2 = Object.create(obj1) // Creates an empty object -> 'obj2' = {} 

// When we insert key1 into 'obj2', then it's value will be displayed instead of obj1's 'key1'
obj2.key1 = 'unique'

console.log(obj2.key2)
console.log(obj2.key1)

// To check obj1 is added into proto of obj2 run this
console.log(obj2.__proto__)
```
