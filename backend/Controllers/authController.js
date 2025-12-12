const User = require('../Models/authModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
   const { username, email, password } = req.body;
   const role = 'user';

   try {
      const userExists = await User.checkUserExists(email);

      if (userExists) {
         return res.status(409).json({ message: 'User already exists' });
      };

      const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

      const registeredUser = await User.registerUser(username, email, hashedPassword, role);

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
      next(err);
   }
}

module.exports = {
   register
}