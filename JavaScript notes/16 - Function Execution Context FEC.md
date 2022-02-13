# Function Execution context:

- Call stack is used by JS to check which execution context is being created and it keeps track of how many lines of code are executed.
- When FEC is created, it has same 2 phaases as GEC had.

1. Creation phase OR Local Memory Creation phase :
2. Code Execution phase

## Let's analyze the following code :

```javascript
let foo = 'foo' // 1st line
console.log(foo) // 2nd

function getFullName(firstName, lastName) { // Whole func is 3rd line
  console.log(arguments) // 1st line for FEC
  let myVar = 'var inside func' // 2
  console.log(myVar) // 3
  const fullName = firstName + ' ' + lastName // 4
  return fullName // 5
}

const personName = getFullName('nikhil', 'bagwe') // 4th
console.log(personName) // 5th
```
## When the above code is executed :

1. It is first compiled.
2. GEC is created.
    - During Memory creation phase of GEC:
    - Variables are created in global memory and set to 'undefined' or 'uninitialized' depending on 'var' or 'let/const' is used while declaring them.
    - Function is stored as it is.
    - Inside memory it looks like following:
    - window : {}
    - this : window
    - foo : uninitialized
    - getFullName : function() {Whole func is stored as it is}
    - personName : uninitialized
3. During Code execution phase of GEC:
    - 1st line -> 'foo' value is set to 'foo' inside memory
    - 2nd line -> 'foo' printed
    - 3rd line -> Function is already stored so nothing happens.
    - ### 4th line -> Function execution context is created as function call is made. So FEC is pushed into call stack on top of GEC. Refer notes.
    - Local Memory Creation phase of FEC :
      - Inside local memory creation, an array like object is created inside which arguments are stored.
      - eg : arguments : [nikhil, bagwe]
      - We can perform indexing and calculate its length.
      - Func arguments are assigned to 'arguments' object's values
      - eg: firstName : 'nikhil
          lastName : 'bagwe'
    - Now in Code execution phase  FEC:
      - 1st line ->The arguments obj is printed.
      - 2nd line ->'myVar' value is set to 'var inside func'
      - 3rd line ->myVar is printed
      - 4th line ->'fullname' is set to 'Nikhil bagwe'
      - 5th line ->'fullname' is returned to personName and now personName is set to 'nikhil bagwe'.
      - FEC is finished executing and popped from call stack

```javascript
/*
Function Execution context:

- Call stack is used by JS to check which execution context is being created and it keeps track of how many lines of code are executed.
- When FEC is created, it has same 2 phaases as GEC had.

1. Creation phase OR Local Memory Creation phase :
2. Code Execution phase
*/

/*
=> During Memory creation phase of GEC:
- Variables are created in global memory and set to 'undefined' or 'uninitialized' depending on 'var' or 'let/const' is used while declaring them.
- Function is stored as it is.

= Code:
- window : {}
- this : window
- foo : uninitialized
- getFullName : function() {
  console.log(arguments)
  let myVar = 'var inside func'
  console.log(myVar)
  const fullName = firstName + ' ' + lastName
  return fullName
}
- personName : uninitialized

=> During Code execution phase:

1st line -> 'foo' value is set to 'foo' inside memory
2. 'foo' printed
3. Function is already stored so nothing happens.
4. Function execution context is created as function call is made. So FEC is pushed into call stack on top of GEC. Refer notes.
  - Inside local memory creation, an array like object is created inside which arguments are stored.
  eg : arguments : [nikhil, bagwe]
  - We can perform indexing and calculate its length.
  - Func arguments are assigned to 'arguments' object's values
  eg: firstName : 'nikhil
      lastName : 'bagwe'
  - Now in Code execution phase :
    - The arguments obj is printed.
    - 'myVar' value is set to 'var inside func'
    - myVar is printed
    - 'fullname' is set to 'Nikhil bagwe'
    - 'fullname' is returned to personName and now personName is set to 'nikhil bagwe'.
    - FEC is finished executing and popped from call stack
*/

let foo = 'foo' // 1
console.log(foo) // 2

function getFullName(firstName, lastName) {
  // Whole func is 3rd line
  console.log(arguments) // 1
  let myVar = 'var inside func' // 2
  console.log(myVar) // 3
  const fullName = firstName + ' ' + lastName // 4
  return fullName // 5
}

const personName = getFullName('nikhil', 'bagwe') // 4
console.log(personName) // 5
```


