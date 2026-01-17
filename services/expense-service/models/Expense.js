const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Expense = sequelize.define("Expense", {
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "PENDING"
  }
});

module.exports = Expense;