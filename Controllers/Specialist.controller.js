const SpecialistController = require("express").Router();
const SpecialistModel = require("../Models/Specialist.model");

/**
 * ENDPOINT - GET ALL Mentor DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/specialist/
 */
SpecialistController.get("/", (request, response, next) => {
  SpecialistModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Specialist fetched successfully!!!",
          result: data,
          success: true,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Specialist Found",
          success: true,
        });
      }
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Error occurred",
        error: error,
        success: false,
      });
    });
});

/**
 * ENDPOINT - POST A Mentor Data
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/specialist/create
 */
SpecialistController.post("/create", (request, response, next) => {
  const { generalDetails, professionalDetails, createdAt, updatedAt, userId } =
    request.body;
  const Services = new SpecialistModel({
    generalDetails,
    professionalDetails,
    createdAt,
    updatedAt,
    userId,
  });
  Services.save()
    .then((resp) => {
      return response.status(200).json({
        message: "Specialist created successfully!!",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Specialist saving failed!!",
        error,
      });
    });
});

module.exports = SpecialistController;
