const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THAT WE ARE DEALING WITH
const ServicesSchema = mongoose.Schema({
  servicesName: {
    type: String,
    required: true,
  },
  servicesDescription: {
    type: String,
    required: false,
  },
  servicesImage: {
    type: String,
    required: true,
  },
  serviceCategory: {
    type: Schema.Types.ObjectId,
    ref: "mentor",
  },
  serviceGender: {
    type: Array,
    required: true,
  },
  pricingDetails: {
    normalPrice: { type: Number, required: true },
    actualPrice: { type: Number, required: true },
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

module.exports = mongoose.model("services", ServicesSchema);
