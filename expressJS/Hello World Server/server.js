require("dotenv").config();
import express from "express";
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1> Here at login page </h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1>This is the sign up page</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
