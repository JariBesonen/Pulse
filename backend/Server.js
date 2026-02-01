const express = require("express");
const app = express();
const PORT = 5000;
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const corsOptions = require("./Middleware/corsOptions.js");
const notFound = require("./Middleware/notFound.js");
const authRoutes = require("./Routes/authRoutes.js");
const apiLimiter = require("./Middleware/rateLimit.js");
const handleError = require("./Middleware/errorHandler.js");
const forumRoutes = require("./Routes/createForumRoutes.js");

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.set("trust proxy", 1);

app.use(apiLimiter);

app.get("/health", (req, res) => {
  res.send("server is listening..");
});

app.use("/api/users", authRoutes);
app.use("/api/forums", forumRoutes);
app.use(notFound);
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
