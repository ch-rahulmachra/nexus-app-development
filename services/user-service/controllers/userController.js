exports.profile = (req, res) => {
  res.json({ id: req.user.id, role: req.user.role });
};
