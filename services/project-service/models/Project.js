const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define("Project", {
  name: DataTypes.STRING,
  owner_id: DataTypes.INTEGER
});

module.exports = Project;
