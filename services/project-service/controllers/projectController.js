const Project = require("../models/Project");

exports.create = async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    owner_id: req.user.id
  });
  res.json(project);
};

exports.list = async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
};
