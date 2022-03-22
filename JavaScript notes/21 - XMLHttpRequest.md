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
