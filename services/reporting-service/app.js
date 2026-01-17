const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/reports", async (req, res) => {
  try {
    const response = await axios.get(
      "http://project-service:7000/projects/",
      { headers: { Authorization: req.headers.authorization } }
    );

    res.json({
      totalProjects: response.data.length
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "project-service" });
});

app.listen(process.env.PORT, () => {
  console.log("Reporting service running");
});