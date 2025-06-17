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

//Define with builtin validation
const userProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please username is required"],
    unique: true,
    minLength: 3,
    maxLength: 0,
  },
  age: {
    type: Number,
    min: 25,
    max: 60,
    required: [true, "Please enter age"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: "Other",
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
});

//Step2: Compile the schema to form Model
const User = mongoose.model("User", userProfileSchema); //model starts with caps

//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
