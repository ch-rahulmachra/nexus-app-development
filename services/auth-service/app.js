require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "auth-service" });
});

sequelize.sync().then(() => {
  app.listen(4000, () => console.log("Auth service running on 4000"));
});