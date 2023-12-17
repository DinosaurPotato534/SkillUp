const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, default: mongoose.Types.ObjectId },
  name: { type: String, required: [true, "Name field us required"] },
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
});

const User = mongoose.model("User", userSchema);

module.exports = User;
