const mongoose = require("mongoose");

// Create a TokenBlacklist model
const TokenBlacklist = mongoose.model("TokenBlacklist", {
  token: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now, expires: 24 * 3600 }, // Expire after 24 hours
});

module.exports = TokenBlacklist;
