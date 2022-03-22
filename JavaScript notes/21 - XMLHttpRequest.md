# XHR -> XML HTTTP Request :

1. Types of requests :

- GET = Read data
- POST = Create/Add new data
- PUT = Completely overwrite/update existing data
- PATCH = Update a small portion of existing data
- DELETE = Remove/delete data

2. JS vs JSON(Javascript Object Notation) :

- We have to write keys inside double quotes in JSON object unlike JS where it is not compulsory to do so. 

## Example code :

- Below code will be executed asynchronously by browser
- After opening the above code with live server, refresh the page again and open dev tools -> Network -> Select Fetch/XHR from options -> Click on 'posts' from 'Name' column -> Check 'Response' tab

```js
// create an object of XHR
const xhr = new XMLHttpRequest()

// If we enter a wrong url, then we won't get correct response and the 'Status code' obtained will be '404'.
const url = 'https://jsonplaceholder.typicode.com/posts'

// Making a GET request :
xhr.open('GET', url)

xhr.onreadystatechange = function () {
  // readyState goes through 4 states from 0 to 4- check docs
  if (xhr.readyState === 4) {
    const response = xhr.response
    const data = JSON.parse(response)
    console.log(typeof data)
  }
}

xhr.send()

```

## Instead of waiting for 'readystate' to become 4, as above code, we can use 'onload' method which will only run when 'readystate' becomes 4.

```js
const xhr = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts'

xhr.open('GET', url)

// Instead of waiting for 'readystate' to become 4, 'onload' method runs only when 'readystate' becomes 4.
xhr.onload = function () {
  console.log(xhr.readyState)
  const response = xhr.response
  const data = JSON.parse(response)
  console.log(data)
}

xhr.send()
```

## XHR using Promises :

- Here we will write a function which will return a promise containing response of the request been made if it is resolved.

```js
const url = 'https://jsonplaceholder.typicode.com/posts'

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.onload = function () {
      // Check for valid status code
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response)
      } else {
        reject(new Error('Something went wrong'))
      }
    }

    xhr.onerror = function () {
      reject(new Error('Something went wrong'))
    }

    xhr.send()
  })
}

sendRequest('GET', url)
  // when the promise is resolved, 'sendRequest' will return 'xhr.response' which we 
  // will parse in 'then' method and then this 'then' method will return data to next 'then' as the promise is resolved.
  .then((response) => {
    const data = JSON.parse(response)
    // console.log(data)
    return data
  })
  .then((data) => {
    console.log(data)
  })

```
