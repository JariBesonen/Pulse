const allowedOrigins = [
   'http://localhost:3000',
   'http://localhost:5000',
];

const corsOptions = {
   origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
         return callback(null, true);
      } else {
         return callback(new Error('origin is not allowed'), false);
      }
   },
   credentials: true,
   optionsSuccessStatus: 200
}

module.exports = corsOptions;