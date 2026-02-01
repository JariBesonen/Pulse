const { createNewForum } = require("../Models/createForumModel");

const createNewForumController = async (req, res) => {
  const { forumName, forumDes } = req.body;

  console.log(forumName, forumDes);
  try {
    const newForum = await createNewForum(forumName, forumDes);

    res.status(201).json(newForum);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server error - createForumController" });
  }
};

module.exports = { createNewForumController };
