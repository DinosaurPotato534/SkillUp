const express = require("express");
const authenticateToken = require("../middleware/validateJwt");
const mentorshipRequestRoute = express.Router();
const mentorshipRequestController = require("../controllers/mentorshipRequest.controller");

mentorshipRequestRoute.use(authenticateToken);

// send mentorship request
mentorshipRequestRoute.post(
  "",
  mentorshipRequestController.createMentorshipRequest
);

// fetch mentorship requests for user
mentorshipRequestRoute.get("", mentorshipRequestController.getRequestsForUser);

// accept mentorship request
mentorshipRequestRoute.put(
  "/:requestId/accept",
  mentorshipRequestController.acceptMentorshipRequest
);

// decline mentorship request
mentorshipRequestRoute.put(
  "/:requestId/decline",
  mentorshipRequestController.declineMentorshipRequest
);

module.exports = mentorshipRequestRoute;
