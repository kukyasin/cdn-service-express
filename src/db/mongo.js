const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
  });
