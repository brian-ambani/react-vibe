require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const projectRoutes = require("./routes/projects.routes");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/projects", projectRoutes);

// connect to DB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & running on port", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
