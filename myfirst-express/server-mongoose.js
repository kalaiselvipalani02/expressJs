require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;
//Instance of express
const app = express();

const URL = process.env.URL;

//Connect to mongodb
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Error to connecting DB", error);
  }
};

//call db DBConnection
connectToDB();

//!Design Schema
const userProfileSchema = new mongoose.Schema({
  username: String,
  age: Number,
  birthday: Date,
  isActive: Boolean,
  hobby: [String],
  ObjectId: mongoose.Schema.Types.ObjectId,
  address: {
    street: String,
    city: String,
    postCode: Number,
  },
  customData: mongoose.Schema.Types.Mixed,
});

//Compile the schema to form Model
const User = mongoose.model("User", userProfileSchema); //model starts with caps
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
