require("dotenv").config();
console.log(process.env);

const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ messages: ["hello", "howdy", "goodbye"] });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
