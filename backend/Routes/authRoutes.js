const express = require('express');
const router = express.Router();
const validateRequest = require('../Middleware/validate.js');
const { authSchema } = require('../Validation/authSchemas.js');
const { register, login } = require('../Controllers/authController.js');

router.post(
   '/register',
   validateRequest(authSchema),
   register
);

router.post(
   '/login',
   validateRequest(authSchema),
   login
);

module.exports = router;