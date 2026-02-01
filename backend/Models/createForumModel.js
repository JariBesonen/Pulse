const db = require("../Config/db");

const createNewForum = async (forumName, forumDes) => {
  const query =
    "INSERT INTO forums (title, description) VALUES ($1, $2) RETURNING *";
  const result = await db.query(query, [forumName, forumDes]);
  return result.rows;
};

module.exports = { createNewForum };
