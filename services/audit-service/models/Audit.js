
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Audit = sequelize.define("Audit", {
  action: DataTypes.STRING
});

module.exports = Audit;
