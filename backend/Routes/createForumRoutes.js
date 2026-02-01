const express = require("express");
const router = express.Router();
const validateRequest = require("../Middleware/validate.js");
const {createNewForumController} = require("../Controllers/createForumController");
// const auth = require("../Middleware/auth");

const { createForumSchema } = require("../Validation/forumSchema");

router.post("/createForum", validateRequest(createForumSchema), createNewForumController);

module.exports = router;
