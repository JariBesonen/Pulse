const db = require('../Config/db');

const findUserByEmail = async (email) => {
   const result = await db.query(
      'SELECT id, username, email, password, role FROM users WHERE email = $1',
      [email]
   );

   return result.rows[0] || null;
};

const registerUser = async (username, email, password) => {
   const result = await db.query(
      `
      INSERT INTO users (username, email, password) 
      VALUES ($1, $2, $3)
      RETURNING id, username, email, role
      `,
      [username, email, password]
   );

   return result.rows[0] || null;
}

module.exports = {
   findUserByEmail,
   registerUser,
}