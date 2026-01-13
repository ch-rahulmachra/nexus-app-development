require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Auth service running on ${process.env.PORT}`)
  );
});
