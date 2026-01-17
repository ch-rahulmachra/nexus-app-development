require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/expenses", require("./routes/expenseRoutes"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", service: "expense-service" });
});

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Expense service running on ${process.env.PORT}`)
  );
});
