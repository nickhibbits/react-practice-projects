require("dotenv").config();
console.log(process.env.APIKEY);

const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

var jsonParser = bodyParser.json();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.post("/getCurrentWeather", jsonParser, async (req, res) => {
  console.log("req.body", req.body);
  const { city, state } = req.body;

  await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},"USA"&limit=3&appid=${process.env.APIKEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      return data;
    });

  // res.json({ messages: ["hello", "howdy", "goodbye"] });
});
