const Approval = require("../models/Approval");

exports.create = async (req, res) => {
  const approval = await Approval.create(req.body);
  res.json(approval);
};

exports.list = async (req, res) => {
  const approvals = await Approval.findAll();
  res.json(approvals);
};
