const jwt = require("jsonwebtoken");
const TokenBlacklist = require("../models/tokens");

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, "4e5245907dfeca9f0763");

    // Check if the token is blacklisted
    const blackListed = await isTokenBlacklisted(token);
    if (blackListed) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach user information to the request for further use in the route
    req.user = decodedToken.userInfo;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Function to check if a token is blacklisted
const isTokenBlacklisted = async (token) => {
  // Check in your MongoDB TokenBlacklist collection
  const blacklistedToken = await TokenBlacklist.findOne({ token });
  return blacklistedToken ? true : false;
};

module.exports = authenticateToken;
