# Application level middleware :

- Can be used application wide

```js
import express from "express"

// create server
const app = express()
const port = 8080
app.listen(port, () => console.log("Server running"))

// Application level middleware - Can be used application wide

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} === Request [${req.method}] [${req.url}]`)
  next()
}

app.use(loggerMiddleware)

//output on accessing url :Thu Mar 30 2023 11:54:36 GMT+0530 (India Standard Time) === Request [POST] [/api/users]

```

# Router level middleware :

```js
const router = express.Router()

// fakeauth middleware function
const fakeAuth = (req, res, next) => {
  const authStatus = false // Toggle this to check how middleware func is called
  if (authStatus) {
    console.log("User authStatus: ", authStatus)
    next()
  } else {
    res.status(401)
    throw new Error("User is not authorized")
  }
}

// So on every route whenever someone sends a request, we will execute the middleware function first and if authStatus is true
// then only response will be visible
   
app.use(fakeAuth)

app.use("/api/users", router)

const getUsers = (req, res) => {
  res.json({ message: "Get all users" })
}

const createUser = (req, res) => {
  res.json({ message: "Create new user" })
}

router.route("/").get(getUsers).post(createUser)
```

# Error handling middleware :

- Convert the error msg into JSON object and then throw it to user.

```js
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500
  res.status(statusCode)

  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
      })
      break

    case 404:
      res.json({
        title: "Not found",
        message: err.message,
      })
      break

    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
      })
      break

    default:
      break
  }
}

// when we make authStatus : false inside fakeAuth function, the error is displayed in JSON format to user
app.use(errorHandler)
```

# Built-in middleware :

- When I try sending data from client to server in post request, data won't be sent and we get undefined

```js
const createUser = (req, res) => {
  console.log("this is the request body received from client: ", req.body)
  res.json({ message: "Create new user" })
}
```

- So we use built-in middleware in ExpressJS

```js
// Allows us to get data stream from client to server
app.use(express.json())

// to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }))

// To serve static folders
app.use(express.static(path.join(__dirname, 'public')))

// throws error when user tries accessing any route which is not defined
app.all("*", (req, res) => {
  res.status(404)
  throw new Error("ROute not found")
})

```

# Third party middleware :

- Morgan used for logging.
- Multer to upload files to server.

# Full code :

```js
import express from "express"
import path from "path"

// create server
const app = express()
const port = 8080
app.listen(port, () => console.log("Server running"))

// Built-in middleware

// Allows us to get data stream from client to server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(express.static(path.join(__dirname, "public")))

// Application level middleware - Can be used application wide

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} === Request [${req.method}] [${req.url}]`)
  next()
}

app.use(loggerMiddleware)
//output on accessing url :Thu Mar 30 2023 11:54:36 GMT+0530 (India Standard Time) === Request [POST] [/api/users]

// Router level middleware ===========================

const router = express.Router()

// fakeauth middleware function
const fakeAuth = (req, res, next) => {
  const authStatus = true // Toggle this to check how middleware func is called
  if (authStatus) {
    console.log("User authStatus: ", authStatus)
    next()
  } else {
    res.status(401)
    throw new Error("User is not authorized")
  }
}

// So on every route whenever someone sends a request, we will execute the middleware function first and then only response will be visible
app.use(fakeAuth)

app.use("/api/users", router)

const getUsers = (req, res) => {
  res.json({ message: "Get all users" })
}

const createUser = (req, res) => {
  console.log("this is the request body received from client: ", req.body)
  res.json({ message: "Create new user" })
}

router.route("/").get(getUsers).post(createUser)

// Error handling middleware - Convert the error msg into JSON object and then throw it to user

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500
  res.status(statusCode)

  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
      })
      break

    case 404:
      res.json({
        title: "Not found",
        message: err.message,
      })
      break

    case 500:
      res.json({
        title: "Server Error",
        message: err.message,
      })
      break

    default:
      break
  }
}

// throws error when user tries accessing any route which is not defined
app.all("*", (req, res) => {
  res.status(404)
  throw new Error("ROute not found")
})

// when we make authStatus : false inside fakeAuth function, the error is displayed in JSON format
app.use(errorHandler)
```
