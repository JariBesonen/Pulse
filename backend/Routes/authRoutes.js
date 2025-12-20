const express = require('express');
const router = express.Router();
const validateRequest = require('../Middleware/validate.js');
const { authSchema } = require('../Validation/authSchemas.js');
const { register } = require('../Controllers/authController.js');

router.post(
   '/register',
   validateRequest(authSchema),
   register
);

module.exports = router;