const database = require("./database.js");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var jsonParser = bodyParser.json();

app.listen(8085, () => {
  console.log("Server running on 8085");
  // database._getUser("hello", "billy").then((res) => console.log(res));
});

// console.log(database.users);

app.post("/login", jsonParser, async (req, res, next) => {
  const { username, password } = req.body;
  database
    ._getUser(username, password)
    .then((response) => res.send(response))
    .catch((e) => {
      console.log("server error", e);
      next(e);
    });
});

app.post("/create-user", jsonParser, async (req, res) => {
  const { username, password, fullName } = req.body;
  database
    ._createUser(fullName, username, password)
    .then((response) => res.send(response));
});
