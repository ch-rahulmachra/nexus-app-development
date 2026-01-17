const Expense = require("../models/Expense");

exports.create = async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
};

exports.list = async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
};
