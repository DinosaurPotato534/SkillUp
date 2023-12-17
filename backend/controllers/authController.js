const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const TokenBlacklist = require("../models/tokens");

const signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        uid: newUser.uid,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userInfo: { userId: existingUser.uid, role: existingUser.role } },
      "4e5245907dfeca9f0763",
      {
        expiresIn: "24h", // Token expiration time
      }
    );

    res.status(200).json({
      message: "Login successful",
      user: {
        uid: existingUser.uid,
        name: existingUser.name,
        email: existingUser.email,
        role: existingUser.role,
      },
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to sign in", error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    // Add the token to the blacklist in MongoDB
    await TokenBlacklist.create({ token });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to logout", error: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  logout,
};
