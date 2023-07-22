const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THAT WE ARE DEALING WITH
const SpecialistSchema = mongoose.Schema({
  generalDetails: {
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    primaryPhoneNumber: {
      type: String,
      required: true,
    },
    primaryEmail: {
      type: String,
      required: true,
    },
    secondaryPhoneNumber: {
      type: String,
    },
    secondaryEmail: {
      type: String,
    },
    profileImage: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  professionalDetails: {
    experience: {
      type: Number,
      required: true,
    },
    specializations: {
      // HERE PUT ALL THE CATEGORIES SPECIALIST CAN WORK
      type: Array,
    },
    skills: {
      // ALL THE SERVICE SPECIALIST CAN DO IN ALL THE CATEGORIES
      type: Array,
    },
    ratings: { type: Number, required: true },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("specialists", SpecialistSchema);
