const { z } = require('zod');

const authSchema = z.object({
   username: z.string().min(3).max(30),
   email: z.email().max(254),
   password: z.string().min(8).max(64)
});

module.exports = {
   authSchema
};