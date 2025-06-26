require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const PORT = 3000 || process.env.PORT;
const URL = process.env.URL;

const MongoStore = require("connect-mongo");
//Instance of express
const app = express();

//connect to db
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connection successfully");
  })
  .catch((e) => console.log(e));

//form data
app.use(express.urlencoded({ extended: true }));
//json  data
app.use(express.json());
//cookie middleware
app.use(cookieParser());

//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
