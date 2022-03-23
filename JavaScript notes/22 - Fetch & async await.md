# Fetch :

- fetch will return an promise on resolving which we call as 'response'. 
- We apply '.json()' method on the response to parse and obtain the data.
- Promise returned by 'fetch' will only be rejected when there is a Network error. So catch block will only be executed for network errors.

```js
const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
```

## In order to make 'catch' block work, we will add some conditions to 'then' block. Now, If error is present, catch block is executed.

```js
fetch(url)
  .then((response) => {
    // Checks for 'ok' property is 'true' or not
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Something went wrong')
    }
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log('inside catch')
    console.log(error)
  })
```

# async & await :

```js
// Async function always returns a promise.
async function getPosts() {
  // 'await' will wait until 'fetch' is resolved
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  // Since 'response.json()' also returns a promise, we use 'await'
  const data = await response.json()
  // console.log(data)
  return data // Here also an promise will be returned, so use 'then' method to display data
}

getPosts().then((data) => console.log(data))
```
