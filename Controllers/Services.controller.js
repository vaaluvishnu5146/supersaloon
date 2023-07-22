const ServicesController = require("express").Router();
const ServicesModel = require("../Models/Services.model");

/**
 * ENDPOINT - GET ALL Mentor DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/services/
 */
ServicesController.get("/", (request, response, next) => {
  console.log("HIT");
  ServicesModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Services fetched successfully!!!",
          result: data,
          success: true,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Services Found",
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
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/services/create
 */
ServicesController.post("/create", (request, response, next) => {
  const {
    servicesName,
    servicesDescription,
    servicesImage,
    servicesCategory,
    servicesGender,
    pricingDetails,
    createdAt,
    updatedAt,
  } = request.body;
  const Services = new ServicesModel({
    servicesName,
    servicesDescription,
    servicesImage,
    servicesCategory,
    servicesGender,
    pricingDetails,
    createdAt,
    updatedAt,
  });
  Services.save()
    .then((resp) => {
      return response.status(200).json({
        message: "Services created successfully!!",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Services saving failed!!",
        error,
      });
    });
});

module.exports = ServicesController;
