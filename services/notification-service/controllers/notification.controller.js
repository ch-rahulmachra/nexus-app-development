
const Notification = require("../models/Notification");

exports.getAll = async (req, res) => {
  const data = await Notification.findAll();
  res.json(data);
};

exports.create = async (req, res) => {
  const note = await Notification.create({ message: req.body.message });
  res.json(note);
};
