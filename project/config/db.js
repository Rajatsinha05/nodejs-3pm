const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to the mongo");
  } catch (error) {
    console.log(error);
  }
};
module.exports = dbConnect;
