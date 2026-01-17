const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  project_id: DataTypes.INTEGER,
  assigned_to: DataTypes.INTEGER,
  status: DataTypes.STRING
});

module.exports = Task;
