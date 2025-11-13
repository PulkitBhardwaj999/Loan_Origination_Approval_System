const express = require("express");
const router = express.Router();

// MUST load correct middleware file
const auth = require("../middleware/auth.middleware.js");

// Load loan controller
const loanCtrl = require("../controllers/loan.js");

console.log("Loaded loan controller:", loanCtrl);

// Loan routes
router.post("/apply", auth, loanCtrl.apply);
router.get("/my-loans", auth, loanCtrl.getMyLoans);

module.exports = router;
