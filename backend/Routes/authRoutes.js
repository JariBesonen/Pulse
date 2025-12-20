const express = require('express');
const router = express.Router();
const validateRequest = require('../Middleware/validate.js');
const { registerSchema, loginSchema } = require('../Validation/authSchemas.js');
const { register, login } = require('../Controllers/authController.js');

router.post(
   '/register',
   validateRequest(registerSchema),
   register
);

router.post(
   '/login',
   validateRequest(loginSchema),
   login
);

module.exports = router;