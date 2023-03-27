## Code :

- Install "mongoose" package

```js
import mongoose from "mongoose";

// Establishing connection with DB
mongoose
  .connect(
    "mongodb+srv://nikhil:1234@cluster0.h6ajzwb.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "backend",
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Defining Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Creating a collection in our DB
const message = mongoose.model("Message", messageSchema);

const app = express();

// when submit btn is pressed post API is called
app.post("/", async (req, res) => {
  // console.log(req.body);
  const messageData = { name: req.body.name, email: req.body.email };
  await message.create(messageData);
  res.render("success");
});

// Test if data is getting stored in MongoDB
app.get("/add", (req, res) => {
  message.create({ name: "nikhil", email: "nik@mail.com" }).then(() => {
    res.send("Sent to DB");
  });
});
```

## Complete code :

```js
import express from "express";
import path from "path";

import mongoose from "mongoose";

// Establishing connection with DB
mongoose
  .connect(
    "mongodb+srv://nikhil:1234@cluster0.h6ajzwb.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "backend",
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

// Defining Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Creating a collection in our DB
const message = mongoose.model("Message", messageSchema);

const app = express();

const users = [];

// setting the static folder path
app.use(express.static(path.join(path.resolve(), "public")));
// using middleware to access req.body content
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

// displaying data in 'index.ejs'
app.get("/", (req, res) => {
  res.render("index", { name: "Nikhil" });
});

// when submit btn is pressed post API is called
app.post("/", async (req, res) => {
  // console.log(req.body);
  const messageData = { name: req.body.name, email: req.body.email };
  await message.create(messageData);
  res.render("success");
});

app.listen(8080, () => {
  console.log("Server is working");
});

// save data in MongoDB

app.get("/add", (req, res) => {
  message.create({ name: "nikhil", email: "nik@mail.com" }).then(() => {
    res.send("Sent to DB");
  });
});
```
