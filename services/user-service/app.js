require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/userRoutes"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "user-service" });
});

app.listen(process.env.PORT, () =>
  console.log(`User service running on ${process.env.PORT}`)
);
