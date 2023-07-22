const express = require("express");
const APP_SERVER = express();

// REGISTER ALL CONTROLLERS
APP_SERVER.use("/categories", require("./Controllers/Categories.controller"));
APP_SERVER.use("/services", require("./Controllers/Services.controller"));
APP_SERVER.use("/specialists", require("./Controllers/Specialist.controller"));

module.exports = APP_SERVER;
