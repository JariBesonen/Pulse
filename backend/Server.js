const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require('helmet');
const PORT = 5000;
const corsOptions = require('./Middleware/corsOptions');
const notFound = require('./Middleware/notFound');
const handleError = require('./Middleware/errorHandler');
const apiLimiter = require('./Middleware/rateLimit');

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(apiLimiter);

app.get("/health", (req, res) => {
  res.send("server is listening..");
});

app.use(notFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
