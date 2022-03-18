# setTimeout :

- JS is a synchronous programming language and single threaded.
- Synchronous programming - Statements will be executed one after another i.e line by line.
- Example of Synchronous program

```javascript
console.log('Script start')

// for loop takes time for executing, thus blocking further code from executing
for (let i = 1; i < 1000; i++) {
  console.log('Inside for loop')
}

console.log('Script ends')
```

## setTimeout is used for Asynchronous programming :

- setTimeout is provided by browser.
- setTimeout returns an 'id'.
```javascript
console.log('Script start') //1

setTimeout(() => {
  console.log('Inside setTimeout')
}, 1000) // 2

console.log('Script ends') // 3
```

- In above code, when execution starts, first line is executed and 'Script start' is printed in console.
- When we reach 2nd line, JS realizes that setTimeout is functionality of browser, thus it gives the 2nd line to browser. So the browser takes the function and as per the given delay, it counts for 1000ms and returns the callback function.
- Meanwhile, JS executes 3rd line and prints 'Script ends'. 
- When browser completes counting upto 1000ms, it returns callback function passed in setTimeout which is stored into callback queue.
- The Event loop will check if callstack is empty or not. If it's empty, then it will pass the callback func from callback queue to callstack to get executed and thus, 'Inside setTimeout' is printed.

## Even if you set the delay to 0ms, first the whole JS code will be executed i.e GEC and then only the callback func returned from setTimeout will be sent to callstack by event loop for execution.

```javascript
console.log('Script start') //1

setTimeout(() => {
  console.log('Inside setTimeout')
}, 0) // 2

for (let i = 1; i < 100; i++) {
  console.log('.....')
} // 3

console.log('Script ends') // 4
```

## Stop callback function from executing using clearTimeout & 'id' :

```javascript
console.log('Script start') //1

const id = setTimeout(() => {
  console.log('Inside setTimeout')
}, 0) // 2

for (let i = 1; i < 100; i++) {
  console.log('.....')
} // 3

console.log('setTimeout id is ', id)

console.log('Clearing time out')
// Stopping callback func from executing using 'id' returned by setTimeout :
clearTimeout(id)

console.log('Script ends') // 4
```
