const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:5000",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5000",
]);

const corsOptions = {
  origin: (origin, callback) => {
    console.log("CORS Origin header raw:", origin);

    // normalize: remove trailing slash if present
    const normalized = typeof origin === "string" ? origin.replace(/\/$/, "") : origin;

    console.log("CORS Origin header normalized:", normalized);

    if (!normalized || allowedOrigins.has(normalized)) {
      return callback(null, true);
    }

    return callback(new Error(`origin is not allowed: ${normalized}`), false);
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
