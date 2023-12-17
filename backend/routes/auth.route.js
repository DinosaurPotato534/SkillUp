const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.post("/signup", authController.signUp);
authRouter.post("/login", authController.signIn);
authRouter.get("/logout", authController.logout);

module.exports = authRouter;
