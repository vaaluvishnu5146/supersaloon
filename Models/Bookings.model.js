const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THAT WE ARE DEALING WITH
const BookingSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "services",
  },
  specialistsId: {
    type: Schema.Types.ObjectId,
    ref: "services",
  },
  bookingDetails: {
    bookingSlot: {
      type: Number,
      required: true,
    },
    bookingMessage: {
      type: String,
    },
    bookingStatus: {
      type: String,
      default: "pending", // pending, confirmed, cancelled
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("booking", BookingSchema);
