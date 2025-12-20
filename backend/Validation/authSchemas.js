const { z } = require('zod');

const authSchema = z.object({
   username: z.string().min(6),
   email: z.string().min(6),
   password: z.string().min(6)
})

module.exports = {
   authSchema
};