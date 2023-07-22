const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATING SCHEMA:: THE STRUCTURE OF DATA THAT WE ARE DEALING WITH
const CategorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: false,
  },
  categoryImage: {
    type: String,
    required: true,
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

module.exports = mongoose.model("category", CategorySchema);
