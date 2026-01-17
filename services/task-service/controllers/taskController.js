const Task = require("../models/Task");

exports.create = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

exports.list = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};
