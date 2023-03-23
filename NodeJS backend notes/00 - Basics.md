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





