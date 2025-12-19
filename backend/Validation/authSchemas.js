const { z } = require('zod');

const registerSchema = z.object({
   username: z.string().min(3).max(30),
   email: z.email().max(254),
   password: z.string().min(8).max(64)
});

const loginSchema = z.object({
   email: z.email().max(254),
   password: z.string().min(8).max(64)
});

module.exports = {
   registerSchema,
   loginSchema
};