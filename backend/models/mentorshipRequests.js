const mongoose = require("mongoose");

const mentorshipRequestSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Mentor ID cannot be blank"],
  },
  menteeId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Mentee ID cannot be blank"],
  },
  skill: String,
  description: String,
  status: {
    type: String,
    enum: ["accepted", "declined", "pending"],
    default: "pending",
  },
});

const mentorshipRequests = mongoose.model(
  "mentorshipRequests",
  mentorshipRequestSchema
);

module.exports = mentorshipRequests;
