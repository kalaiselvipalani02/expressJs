require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 3000 || process.env.PORT;
//Instance of express
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
//cookie middleware
app.use(cookieParser());
const users = [
  {
    username: "John",
    password: "123",
    role: "admin",
  },
  {
    username: "Sarah",
    password: "1234",
    role: "admin",
  },
];

//home route
app.get("/", (req, res) => {
  res.render("index");
});

//home route
app.get("/index", (req, res) => {
  res.render("index");
});
//login
app.get("/login", (req, res) => {
  res.render("login");
});

//login
app.post("/login", (req, res) => {
  //find user login details
  const { username, password } = req.body;
  const userFound = users.find((user) => {
    return user.username === username && user.password === password;
  });

  //set cookie
  //* Prepare login user details. Setting cookie
  res.cookie("userData", JSON.stringify(userFound), {
    maxAge: 3 * 24 * 60 * 1000, // expiry in 3 days
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  //cookie valid, render dashboard otherwise redirect to login page
  if (userFound) {
    res.redirect("/dashboard");
  }
});

//submit details
app.get("/dashboard", (req, res) => {
  //grab the user from cookie
  const userData = req.cookies.userData
    ? JSON.parse(req.cookies.userData)
    : null;
  const username = userData ? userData.username : null;
  //const userData = req.cookies()
  //render the dashboard or login page
  if (username) {
    res.render("dashboard", { username });
  } else {
    res.redirect("/login");
  }
});

//logout
app.get("/logout", (req, res) => {
  //clear cookie
  res.clearCookie("userData");
  res.status(200).json({ message: "Logged out successfully" });
});
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
