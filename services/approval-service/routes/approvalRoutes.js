const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/approvalController");

router.post("/", auth, controller.create);
router.get("/", auth, controller.list);

module.exports = router;
