
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const routes = require("./routes/notification.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "notification-service" });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log("Notification service running")
  );
});
