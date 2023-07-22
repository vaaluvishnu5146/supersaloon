const CategoriesController = require("express").Router();
const CategoriesModel = require("../Models/Categories.model");

/**
 * ENDPOINT - GET ALL Mentor DATA
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/mentors/
 */
CategoriesController.get("/", (request, response, next) => {
  console.log("HIT");
  CategoriesModel.find()
    .then((data) => {
      if (data.length > 0) {
        return response.status(200).json({
          message: "Categories fetched successfully!!!",
          result: data,
          success: true,
        });
      } else {
        return response.status(200).json({
          message: "Alas!! No Categories",
          success: true,
        });
      }
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Error occured",
        error: error,
        success: false,
      });
    });
});

/**
 * ENDPOINT - POST A Mentor Data
 * PATH TO ACTIVATE THIS METHOD = http://localhost:5000/api/restaurants/create
 */
CategoriesController.post("/create", (request, response, next) => {
  console.log("MENTOR DATA", request.body);
  const {
    categoryName,
    categoryDescription,
    categoryImage,
    createdAt,
    updatedAt,
  } = request.body;
  const Mentor = new CategoriesModel({
    categoryName,
    categoryDescription,
    categoryImage,
    createdAt,
    updatedAt,
  });
  Mentor.save()
    .then((resp) => {
      return response.status(200).json({
        message: "Category saved successfully!!",
      });
    })
    .catch((error) => {
      return response.status(400).json({
        message: "Category saving failed!!",
        error,
      });
    });
});

module.exports = CategoriesController;
