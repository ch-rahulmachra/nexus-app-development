const router = require("express").Router();
const controller = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.get("/me", auth, controller.profile);

module.exports = router;
