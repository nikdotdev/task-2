const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";


app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});


app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: ENV,
  });
});


app.get("/info", (req, res) => {
  res.json({
    name: "Express Deployment App",
    version: "1.0.0",
    author: "Your Name",
  });
});


app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});
