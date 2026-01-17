const router = require("express").Router();
const controller = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

// Get logged-in user profile
router.get("/me", auth, controller.profile);

// Admin-only: Update user role
router.put("/users/:id/role", auth, async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Access denied" });
  }

  const { role } = req.body;

  if (!["USER", "ADMIN"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  await User.update({ role }, { where: { id: req.params.id } });

  res.json({ message: "Role updated" });
});

module.exports = router;