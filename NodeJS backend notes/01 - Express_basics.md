# Intro :

- Helps to write code syntatically better than NodeJs.

# Creating a server with Basic routes :

```js
// creating the express app
const express = require("express")
const app = express()

// creating server
const port = 8080
app.listen(port, () => console.log("Server started"))

// setting first route - Get HTTP method
app.get("/", (req, res) => {
  // res.send("Hello world")
  res.json({ message: "Home Page" })
})

// Basic Routes
app.get("/users", (req, res) => {
  res.json({ message: "Get all users" })
})

app.get("/users/:id", (req, res) => {
  res.json({ message: `Get User with ID ${req.params.id}` })
})

app.post("/users", (req, res) => {
  res.json({ message: "Create new user" })
})

app.put("/users/:id", (req, res) => {
  res.json({ message: `Update User with ID ${req.params.id}` })
})

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Delete User with ID ${req.params.id}` })
})

```

## Some other methods in Express :

```js
import express from 'express'
import fs from 'fs'
import path from 'path'

// created a server
const app = express()

// API Routes 
app.get('/', (req, res) => {
    res.send('Hi')
})

// sending json data
app.get('/json', (req, res) => {
    res.json({
        success: true,
        products: []
    })
})

// sending status code on a route to throw error
app.get('/notfound', (req, res) => {
    // res.sendStatus(404);
    res.sendStatus(500);
})

// sending statuscode and custom message
app.get('/custom', (req, res) => {
    res.status(400).send("Bhai error hai!");
})

// sending a file as response
app.get('/file', (req, res) => {
    const pathlocation = path.resolve()
    res.sendFile(path.join(pathlocation, './index.html'));
})

app.listen(8080, () => {
    console.log("Server is working");
})
```

## Creating an Express app using Express Generator :

- Below cmd will scaffold all the files and project structure for an Express project

```js
npx express-generator folder-name
```

- Then run `npm install`
- The `public` folder contains all static files
- The `views` folder contains all template engine files which will have our UI
