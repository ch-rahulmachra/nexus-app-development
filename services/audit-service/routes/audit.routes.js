
const router = require("express").Router();
const ctrl = require("../controllers/audit.controller");

router.get("/", ctrl.getAll);
router.post("/", ctrl.create);

module.exports = router;
