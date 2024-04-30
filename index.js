require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("its_ayushh_here");
});

app.get("/ayush", (req, res) => {
  res.send("<h1> This is Ayush Agrawal's Route </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
