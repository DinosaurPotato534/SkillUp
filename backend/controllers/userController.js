const User = require("../models/user");

// fetch all users
const fetchAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};

// fetch all mentors
const allMentors = async (req, res) => {
  try {
    const mentors = await User.find({ role: "mentor" });
    res.status(200).json({ mentors });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch mentors", error: error.message });
  }
};

// fetch mentors associated with user
const userMentors = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.find({ uid: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const mentors = await User.find({ uid: { $in: user.mentors } });
    res.status(200).json({ mentors });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch mentors", error: error.message });
  }
};

// fetch mentees associated with user
const userMentees = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.find({ uid: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const mentees = await User.find({ uid: { $in: user.mentees } });
    res.status(200).json({ mentees });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch mentees", error: error.message });
  }
};

module.exports = {
  fetchAll,
  allMentors,
  userMentees,
  userMentors,
};
