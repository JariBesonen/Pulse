const express = require('express');
const router = express.Router();
const validateRequest = require('../Middleware/validate');
const { registerController } = require('../Controllers/authController.js');

router.post(
   '/register',
   validateRequest,
   registerController
   
)