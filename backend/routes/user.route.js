const express = require("express");
const authenticateToken = require("../middleware/validateJwt");
const userController = require("../controllers/userController");
const userRoute = express.Router();

userRoute.use(authenticateToken);
userRoute.get("", userController.fetchAll); // fetch all users
userRoute.get("/mentors", userController.allMentors); // fetch all mentors
userRoute.get("/:userId/mentors", userController.userMentors); // fetch mentors  associated with user
userRoute.get("/:userId/mentees", userController.userMentees); // fetech all mentees associated with user

module.exports = userRoute;
