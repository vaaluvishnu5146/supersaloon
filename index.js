const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
const HTTP_SERVER = express();

/**
 * ENABLING CORS
 */
HTTP_SERVER.use(cors());
/**
 * ENABLING ENVIRONMENT VARIABLES IN NODE PROJECT
 */
dotenv.config();
require("./Configurations/dbconfig");

// CONFIGS
const PORT = process.env.NODE_PORT || 5000;
const HOST_NAME = "localhost";

// INJECTING MIDDLEWARES
// CONFIGURE BODY PARSER MIDDLE WARE
HTTP_SERVER.use(bodyParser.json());
HTTP_SERVER.use(bodyParser.urlencoded({ extended: true }));

// INJECT APP_SERVER IN HTTP_SERVER
HTTP_SERVER.use("/api", require("./app"));

HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});
