const MentorshipRequest = require("../models/mentorshipRequests");

// Create a new mentorship request
const createMentorshipRequest = async (req, res) => {
  try {
    const { mentorId, menteeId, skill, description } = req.body;

    const newRequest = new MentorshipRequest({
      mentorId,
      menteeId,
      skill,
      description,
    });

    const savedRequest = await newRequest.save();

    res
      .status(201)
      .json({ message: "Mentorship request created", request: savedRequest });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create mentorship request",
      error: error.message,
    });
  }
};

// Accept a mentorship request
const acceptMentorshipRequest = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const role = req.user.role;

    if (role !== "mentor") {
      return res.status(401).json({
        message: "You don't have the right permissions to accept requests",
      });
    }

    const updatedRequest = await MentorshipRequest.findByIdAndUpdate(
      requestId,
      { $set: { status: "accepted" } },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Mentorship request not found" });
    }

    res.status(200).json({
      message: "Mentorship request accepted",
      request: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to accept mentorship request",
      error: error.message,
    });
  }
};

// Decline a mentorship request
const declineMentorshipRequest = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const role = req.user.role;

    if (role !== "mentor") {
      return res.status(401).json({
        message: "You don't have the right permissions to decline requests",
      });
    }

    const updatedRequest = await MentorshipRequest.findByIdAndUpdate(
      requestId,
      { $set: { status: "declined" } },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Mentorship request not found" });
    }

    res.status(200).json({
      message: "Mentorship request declined",
      request: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to decline mentorship request",
      error: error.message,
    });
  }
};

// Fetch all mentorship requests associated with a user
const getRequestsForUser = async (req, res) => {
  try {
    const userId = req.user.userId;
    const requests = await MentorshipRequest.find({
      $or: [{ mentorId: userId }, { menteeId: userId }],
    });

    res.status(200).json({ requests });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch mentorship requests",
      error: error.message,
    });
  }
};

module.exports = {
  createMentorshipRequest,
  acceptMentorshipRequest,
  declineMentorshipRequest,
  getRequestsForUser,
};
