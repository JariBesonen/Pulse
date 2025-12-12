const express = require('express');
const router = express.Router();
const validateRequest = require('../Middleware/validate');
const { register } = require('../Controllers/authController.js');

router.post(
   '/register',
   validateRequest,
   register

)

module.exports = router;