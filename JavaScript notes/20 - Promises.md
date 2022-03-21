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

# Function returning a promise :

```js
function myPromise() {
  const bucket = ['vegetables', 'fruits', 'rice', 'salt', 'chips']

  return new Promise((resolve, reject) => {
    if (
      bucket.includes('vegetables') &&
      bucket.includes('salt') &&
      bucket.includes('rice')
    ) {
      resolve({ value: 'Fried Rice' })
    } else {
      reject("Couldn't do it ")
    }
  })
}

myPromise()
  .then((myFriedRice) => {
    console.log('lets eat ', myFriedRice)
  })
  .catch((error) => {
    console.log(error)
  })

```

# Promise and Settimeout :

- You want to resolve / reject promise after 2 seconds

```js
function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true
    setTimeout(() => {
      if (value) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}

myPromise()
  .then(() => {
    console.log('resolved')
  })
  .catch(() => {
    console.log('rejected')
  })
```

# Promise chaining using 'then' method :

- 'then' method always returns a Promise.
- Thus, 'then' is used for promise chaining.
- Since, in below example, 1st 'then' method is returning a promise, thus we are able to chain it with another 2nd 'then' method. Because we can only use 'then' method on a promise.
- Suppose we don't return 'value' in 1st 'then' method, then 'undefined' will be returned and printed by 2nd 'then' method. In this case, Internally JS is returning 'Promise.resolve(undefined)'.

```js
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve('foo')
  })
}

myPromise()
  .then((value) => {
    console.log(value)
    value += 'bar'
    // Internally JS is returning a Promise not a normal string
    // return Promise.resolve(value)
    return value
  })
  .then((value) => {
    console.log(value)
    value += 'baaz'
    return value
  })
  .then((value) => {
    console.log(value)
  })
```

# Callback Hell solution - Promises :

- We can use promise chaining using 'then' method to write a more readable code and avoid callback hell.

```html
<body>
    <div class="container">
      <!-- h1.heading$*5{Hello World} -->
      <h1 class="heading1">Hello World</h1>
      <h1 class="heading2">Hello World</h1>
      <h1 class="heading3">Hello World</h1>
      <h1 class="heading4">Hello World</h1>
      <h1 class="heading5">Hello World</h1>
    </div>
  </body>
```

```js
const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')

// Function returning promise
function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text
        element.style.color = color
        resolve()
      } else {
        reject('element not found')
      }
    }, time)
  })
}

// 'changeText' function will return a promise, so we can chain a 'then' method to it and keep doing so on.
changeText(heading1, 'one', 'red', 1000)
  .then(() => {
    // Here we have to return the promise specifically as below or else it will return 'undefined' by default.
    // If we don't write 'return' the promise will be immediately resolved by returning 'undefined.
    // Thus, by writing 'return' JS will wait for 1sec for 'changeText' func to return a Promise which will be chained to next 'then'.
    return changeText(heading2, 'two', 'blue', 1000)
  })
  .then(() => {
    return changeText(heading3, 'three', 'purple', 1000)
  })
  .then(() => {
    return changeText(heading4, 'four', 'yellow', 1000)
  })
  .then(() => {
    changeText(heading5, 'five', 'orange', 1000)
  })
```

### A more cleaner version of above code :

- In the above code, instead of writing 'return' everytime, we can remove the curly brackets and since it's an arrow function it will automatically return the promise.

```js
changeText(heading1, 'one', 'red', 1000)
  .then(() => changeText(heading2, 'two', 'blue', 1000))
  .then(() => changeText(heading3, 'three', 'purple', 1000))
  .then(() => changeText(heading4, 'four', 'yellow', 1000))
  .then(() => changeText(heading5, 'five', 'orange', 1000))
  // Suppose if 'heading2' is not present, then promise will be rejected in 2nd 'then'. 
  // Thus, the remaining 'then' won't be executed and directly 'catch' will be executed.
  .catch((error) => {
    alert(error)
  })
```


