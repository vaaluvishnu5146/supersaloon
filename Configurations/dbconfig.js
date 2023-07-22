const mongoose = require("mongoose");
let URI;
if (process.env.NODE_ENV === "development") {
  URI = `mongodb://localhost:27017/supersaloon`;
} else {
  URI = `mongodb+srv://${process.env.NODE_MONGO_DB_USERNAME}:${process.env.NODE_MONGO_DB_PASSWORD}@cluster0.ez75xfb.mongodb.net/${process.env.NODE_MONGO_DB_NAME}?retryWrites=true&w=majority`;
}
/**
 * CONNECT NODEJS WITH MONGOOSE
 */
mongoose
  .connect(`${URI}`)
  .then((response) => {
    // console.log("RESPONSE::", response);
    console.log("CONNECT TO::", URI);
  })
  .catch((error) => {
    console.log("ERROR CONNECTINMG TO DATABASE::", error);
  });

// npm i mongoose
