require("dotenv").config();

const express = require("express");

// express app
const app = express();

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
