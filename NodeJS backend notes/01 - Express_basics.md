# Intro :

- Helps to write code syntatically better than NodeJs.

## Creating a Server in Express :

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
