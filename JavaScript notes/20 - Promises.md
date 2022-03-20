# Promise :

- Promise is a future value which we don't now as of now, but we will know it in the future.
- Promise is stored in memory as an object containing 'status' and 'value' properties.
- Promise is an feature of browser.
- Promise is executed asynchronously by browser like setTimeout i.e first the whole JS code will be executed and then promise will be executed.
- 'then' from promise is added into microtask queue(when promise is resolved) instead of callback queue for execution.
- When callstack finishes executing GEC, then only event loop sends 'then' for execution.
- Suppose if both callback and microtask queues have a function in them, then function present in microtask queue will be executed first by event loop, as microtask queue has higher priority than callback queue.

## Example :

- Situation - I promised my friend that I will make fried rice for him if all indegrients are present in bucket.

```js
const bucket = ['vegetables', 'fruits', 'rice', 'salt', 'chips']

const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes('vegetables') &&
    bucket.includes('salt') &&
    bucket.includes('rice')
  ) {
    // Whatever written inside 'resolve' func will be returned if promise is resolved.
    // We can return anything - string, object, array, etc.
    resolve('Fried Rice')
  } else {
    // If promise is rejected, below string will be returned.
    reject("Couldn't do it ")
  }
})

myPromise.then(
  // when promise gets resolved/fulfilled, this function runs
  // thus, "myFriedRice = Fried Rice" which we wrote in above resolve function
  (myFriedRice) => {
    console.log('lets eat ', myFriedRice)
  },
  // when promise gets rejected, this function runs
  (error) => {
    console.log(error)
  }
)
```

### Other way of writing promise - Here 'then' block acts as 'resolve' function and 'catch' block acts as 'reject' function.

```javascript
myPromise
  .then((myFriedRice) => {
    console.log('lets eat ', myFriedRice)
  })
  .catch((error) => {
    console.log(error)
  })

```
