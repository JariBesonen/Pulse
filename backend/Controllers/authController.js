const User = require('../Models/authModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { success } = require('zod');

const register = async (req, res, next) => {
   const { username, email, password } = req.body;

   try {
      const userExists = await User.findUserByEmail(email);

      if (userExists) {
         return res.status(409).json({ message: 'User already exists' });
      };

      const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));

      const registeredUser = await User.registerUser(username, email, hashedPassword);

      if (!registeredUser) {
         return res.status(500).json({ message: 'Failed to register user' });
      };

      const token = jwt.sign(
         { id: registeredUser.id },
         process.env.SECRET_KEY,
         { expiresIn: '7d' }
      );

      return res.status(201).json({ 
         success: true, 
         token: token, 
         user: registeredUser, 
      });

   } catch (err) {

      if (err.code === '23505') {
         return res.status(409).json({
            success: false,
            error: 'Username or email already exists'
         })
      }

      next(err);
   }
}

module.exports = {
   register,
}