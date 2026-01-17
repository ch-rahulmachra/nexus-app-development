require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", require("./routes/taskRoutes"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "task-service" });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Task service running on ${process.env.PORT}`)
  );
});
