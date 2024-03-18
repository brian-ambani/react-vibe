require("dotenv").config();

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

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
