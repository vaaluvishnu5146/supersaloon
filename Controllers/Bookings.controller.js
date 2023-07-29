/**
 * Account Creation
 * Account Sign In
 * Update Account of User
 * Password Reset
 */
const BookingController = require("express").Router();
const BookingModel = require("../Models/Bookings.model");

/**
 * METHOD = POST
 * API = BOOKING CREATION
 * END POINT = {BASE_URL}/api/booking
 */
BookingController.post("/", (req, res, next) => {
  const bookingDetails = req.body;
  const Booking = new BookingModel({
    ...bookingDetails,
  });
  Booking.save()
    .then((result) => {
      if (result._id) {
        return res.status(200).json({
          success: true,
          message: "Booking successful!!",
          data: result,
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: "Booking failed!!",
        error: err.message,
      });
    });
});

module.exports = BookingController;
