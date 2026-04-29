const express = require("express");
require("dotenv").config();

const app = express();

// Environment & Port
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

// --------------------
// 🔹 Logging Middleware
// --------------------
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

// --------------------
// 🔹 Routes
// --------------------

// Home
app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});

// Status
app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: ENV,
  });
});

// Info (NEW)
app.get("/info", (req, res) => {
  res.json({
    name: "Express Deployment App",
    version: "1.0.0",
    author: "Your Name",
  });
});

// --------------------
// 🔹 404 Error Handling
// --------------------
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// --------------------
// 🔹 Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} mode`);
});
