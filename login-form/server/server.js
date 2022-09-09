const database = require("./database.js");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var jsonParser = bodyParser.json();

app.listen(8085, () => {
  console.log("Server running on 8085");
  database._getUser("hello", "billy").then((res) => console.log(res));
});

app.post("/login", jsonParser, async (req, res) => {
  const { username, password } = req.body;

  // _getUser().then((res) => console.log(response));
});
