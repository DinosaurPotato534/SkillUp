const mongoose = require("mongoose");
const envVars = require("./config");

const mongoURI = envVars.DB_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;
