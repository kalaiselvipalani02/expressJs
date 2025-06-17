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

//Address schema

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    zip: Number,
  },
  { timestamps: true }
);
//UserSchema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    state: String,
    address: addressSchema, //Embedded doc
  },
  { timestamps: true }
);

const User = mongoose.model("UserProfile", userSchema);

const createUser = async () => {
  try {
    const newUser = User.create({
      name: "Emmanuel",
      email: "emmanuel@gmail.com",
      address: {
        street: "Oak Street",
        city: "Camp",
        state: "Ghana",
        zip: 122,
      },
    });
    console.log(newUser);
  } catch (err) {
    console.log(err);
  }
};

createUser();
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
