const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  name: { type: String, required: [true, "Name field is required"] },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
  },
  password: { type: String, required: [true, "Password field is required"] },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["mentor", "mentee"],
  },
  mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
