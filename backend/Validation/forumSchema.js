const { z } = require("zod");

const createForumSchema = z.object({
  forumName: z.string().min(3).max(30),
  forumDes: z.string().min(8).max(300),
  // forumTags: z.array(z.string().min(1).max(20)).max(10).optional(),
});

module.exports = {
  createForumSchema,
};
