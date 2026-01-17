const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Approval = sequelize.define("Approval", {
  expense_id: DataTypes.INTEGER,
  approver_id: DataTypes.INTEGER,
  decision: DataTypes.STRING
});

module.exports = Approval;
