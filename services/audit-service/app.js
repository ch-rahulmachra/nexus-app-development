
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const routes = require("./routes/audit.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "audit-service" });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, "0.0.0.0", () =>
    console.log("Audit service running")
  );
});
