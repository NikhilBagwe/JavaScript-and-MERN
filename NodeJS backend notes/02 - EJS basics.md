# Intro :

- It lets us embed JavaScript code in a template language that is then used to generate HTML.
- Allows us to pass dynamic data instead of just displaying static data

## Using EJS :

- Create a folder with name "views". Don't change name
- Inside the folder create "index.ejs" file and write code :

### index.ejs :

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express</title>
</head>
<body>
    <h1>Express Basics</h1>
    <h3>Hello <%=name%></h3>
</body>
</html>
```
- Basically inside <%= %> we can write JS.
- In index.js file setup the view engine to send data :

### index.js :
```js
import express from 'express'

const app = express()

// setting up view engine
app.set('view engine', 'ejs')

// displaying data in 'index.ejs'
app.get('/', (req, res) => {
    res.render('index', {name: "Nikhil"})
})

app.listen(8080, () => {
    console.log("Server is working");
})
```

- Suppose if we try accessing an undefined variable in "index.ejs" it will throw error.
- So to handle it we use "locals" object.

```html
<body>
    <h1>Express Basics</h1>
    <h3>Hello <%= locals.namee %></h3>
</body>
```
- Above code will render and the code won't break.


# Serving Static files :

- Create a folder "public" which will store static files to be served.
- We have to pass the absolute path to static()
- We have to use it inside a middleware

```js
app.use(express.static(path.join(path.resolve(), 'public')))
```
- Now we can directly access files stored in public folder from url
- eg: http://localhost:8080/index.html










