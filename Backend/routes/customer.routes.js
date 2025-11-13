const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');

const customerCtrl = require('../controllers/customer');

// GET logged-in customer profile
router.get('/me', auth, customerCtrl.getMyProfile);

// UPDATE customer financial details
router.put('/update', auth, customerCtrl.updateCustomerInfo);

// GET logged-in customer's loans
router.get('/my-loans', auth, customerCtrl.getMyLoans);

module.exports = router;

