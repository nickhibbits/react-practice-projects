const database = require("./database.js");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var jsonParser = bodyParser.json();

app.listen(8085, () => {
  console.log("Server running on 8085");
  // database._getUser("hello", "billy").then((res) => console.log(res));
});

console.log(database.users);

app.post("/login", jsonParser, async (req, res) => {
  const { username, password } = req.body;
  database._getUser(username, password).then((response) => {
    console.log("login status, ", response);
    console.log("users", database.users);
    res.send(response);
  });
});

app.post("/create-user", jsonParser, async (req, res) => {
  const { username, password, fullName } = req.body;
  database._createUser(fullName, username, password).then((response) => {
    console.log("users", response);
    res.send(response);
  });
});
