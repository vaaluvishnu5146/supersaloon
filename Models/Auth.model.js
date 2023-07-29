const mongoose = require("mongoose");

// CREATING SCHEMA:: THE STRUCTURE OF DATA THAT WE ARE DEALING WITH
const AuthSchema = mongoose.Schema({
  generalDetails: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    maritialStatus: {
      type: String,
      required: false,
    },
  },
  contactDetails: {
    primaryPhoneNumber: {
      type: Number,
      required: true,
    },
    secondaryPhoneNumber: {
      type: Number,
      required: false,
    },
    primaryEmail: {
      type: String,
      required: true,
    },
    secondaryEmail: {
      type: Number,
      required: false,
    },
  },
  addressDetails: {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
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

module.exports = mongoose.model("user", AuthSchema);
