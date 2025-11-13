const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { requireRole } = require("../middleware/role.middleware");
const officerCtrl = require("../controllers/officer");

router.get("/loans", auth, requireRole("OFFICER"), officerCtrl.getLoans);
router.post("/loans/:id/review", auth, requireRole("OFFICER"), officerCtrl.review);

module.exports = router;
