/**
 * Account Creation
 * Account Sign In
 * Update Account of User
 * Password Reset
 */
const AuthenticationController = require("express").Router();
const AuthModel = require("../Models/Auth.model");

/**
 * METHOD = POST
 * API = ACCOUNT CREATION
 * END POINT = {BASE_URL}/api/auth/create
 */
AuthenticationController.post("/create", (req, res, next) => {
  const user = req.body;
  const newUser = new AuthModel({
    ...user,
  });
  newUser
    .save()
    .then((result) => {
      if (result._id) {
        return res.status(200).json({
          success: true,
          message: "Signup successful!!",
          data: result,
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Signup failed!!",
        error: err.message,
      });
    });
});

module.exports = AuthenticationController;
