const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rw5rajatas:node@cluster0.nuq4cyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to the Mongodb.....");
  } catch (error) {
    console.log("error",error);
    
  }
};

module.exports = dbConnect;
