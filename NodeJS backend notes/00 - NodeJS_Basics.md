## Intro :

- NodeJS is a Javascript runtime environment which helps us to run JS outside the browser.

## Creating a NodeJS app :

```js
npm init
```
- Above command asks us for some information and then creates a package.json file.
- **package.json** file stores info about the whole project.
- Now create an index.js file and write some code inside it and that can be executed there itself in the terminal using "node index.js" cmd.
- So we didn't require browser to run JS.

## nodemon :

- Now evertime we make changes in index.js file, server needs to be restarted to implement the changes. 
- So use nodemon.
- You can either install it globally or locally for the current project only.
- If you install it locally, you will have to make the required changes in the "package.json" file by adding a new script ("start": "nodemon index")
- After that, to start the server just run "npm start" cmd and nodemon will work and restart server everytime you make changes.

## Creating a basic SERVER: 

```js
const http = require('http')

const server = http.createServer(() => {
    console.log("Hello 8080");
})

server.listen(8080, () => {
    console.log('Server is working');
})
```
- When we hit the server url i.e "http://localhost:8080/", "Hello 8080" will be printed inside terminal on every reload/hit, nothing else will happen. 
- The url will keep reloading endlessely as we have not wriiten anything inside createServer except log stmt.
- So here we can access "request, response" parameters as below.

```js
const server = http.createServer((req, res) => {
    console.log("Hello 8080");
})
```
- request = is what user does to our server i.e sends a request
- response = is what server gives in response to the request made.

### We can access what url is user hitting using "req"
```js
const server = http.createServer((req, res) => {
    console.log(req.url);
})
```

### To stop the endless reloading of server use "res" :

```js
const server = http.createServer((req, res) => {
    res.end("<h1>Page loaded</h1>")
})
```

## Basic Navigation / Routing :

```js
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === '/about'){
        res.end("<h1>About Page</h1>")
    }
    else if(req.url === '/contact'){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(8080, () => {
    console.log('Server is working');
})
```


# Modules :

- Everything in NodeJS is an module. It can be a function, a variable declared with server module, etc.
- There are 3 types of module : Inbuilt in nodejs , Third party installed through npm, user made 

## Creating a user made module :

- Create a new file and write below code:
```js
const name = 'Nikhil Bagwe'

module.exports = name
```

- Then import the newly created module in index.js and then you can use it there
```js
const name = require('./mymodule')
console.log(name);
```

# Use "import" keyword :

- Instead of using "require" we can use "import" to use a module in our file as we do in REACT.
- In package.json add below line:
```js
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "type": "module",  // Add this line
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^2.0.22"
  }
}

```
- Now we can import modules as shown below:
```js
//const http = require('http')
//const name = require('./mymodule')
import http from 'http'
import name from './mymodule.js'
```

- Also we have to make changes while exporting user made modules:
```js
const name = 'Nikhil Bagwe'

export default name
```

- If we want to export multiple modules then
```js
const name = 'Nikhil Bagwe'
const name2 = 'Sung jin woo'
const name3 = 'Naruto'

export default name
export {name2, name3}
```

- While importing in index.js :
```js
import {name2, name3} from './mymodule.js'
```
- In case of exporting single module i.e "export default name", we can change it's name while importing. Eg: export default firstName. It will still work.
- We can also export in line as follows:
```js
export const name3 = 'Naruto'
```
- While importing we can import all modules as an object in a single line.
```js
import * as myObj from './mymodule.js'
console.log(myObj);

// op
[Module: null prototype] {
  default: 'Nikhil Bagwe',
  name2: 'Sung jin woo',
  name3: 'Naruto'
}
```

