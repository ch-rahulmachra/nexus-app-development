
const Audit = require("../models/Audit");

exports.getAll = async (req, res) => {
  const data = await Audit.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  const log = await Audit.create({ action: req.body.action });
  res.json(log);
};
