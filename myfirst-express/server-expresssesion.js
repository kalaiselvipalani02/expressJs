require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const PORT = 3000 || process.env.PORT;
const URL = process.env.URL;
const session = require("express-session");
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

//create the loginSchema
const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

//compile the schema to form mongoose.model
const Login = mongoose.model("Login", loginSchema);

const createLoginUser = async () => {
  hashedPassword = await bcrypt.hash("123", 10);
  await Login.create({
    username: "Masyntech",
    password: hashedPassword,
    role: "user",
  });
};

//createLoginUser();
//form data
app.use(express.urlencoded({ extended: true }));
//json  data
app.use(express.json());
//cookie middleware
app.use(cookieParser());
//session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60 * 60 * 100, //expires 1 hour
    },
    store: MongoStore.create({
      mongoUrl: process.env.URL,
      collectionName: "sessions",
    }),
  })
);
//----Custom middleware ---

//!--- isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
  const username = req.session.userData ? req.session.userData.username : null;
  if (username) {
    next();
  } else {
    res.redirect("/login");
  }
};
//!-- isAdmin (Authorization)
const isAdmin = (req, res, next) => {
  const admin = req.session.userData.role === "admin";
  if (admin) {
    return next();
  } else {
    res.send({
      message: "Forbidden Access",
    });
  }
};
//home route
app.get("/", (req, res) => {
  console.log(req.session);

  res.json({
    message: "Welcome to APP",
  });
});
/*
//home route
app.get("/index", (req, res) => {
  res.render("index");
});
//login
app.get("/login", (req, res) => {
  res.render("login");
}); */

//login
app.post("/login", async (req, res) => {
  //find user login details
  const { username, password } = req.body;
  const userFound = await Login.findOne({
    username,
  });
  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    //create session
    req.session.userData = {
      username: userFound.username,
      role: userFound.role,
    };

    res.json({
      message: "Login successful",
    });
  } else {
    res.json({
      message: "Login failure",
    });
  }
});

//Admin route for Admin user only access
app.get("/admin-only", isAdmin, (req, res) => {
  res.json({
    message: "Admin Dashboard",
  });
});
//submit details
app.get("/dashboard", isAuthenticated, (req, res) => {
  //grab the user from cookie
  //const userData = req.session.userData ? req.session.userData.username : null

  const username = req.session.userData ? req.session.userData.username : null;

  //const userData = req.cookies()
  //render the dashboard or login page
  if (username) {
    // res.render("dashboard", { username });
    res.json({
      message: `Logged in ${username}`,
    });
  } else {
    res.json({
      message: "Please Login",
    });
  }
});

//logout
app.get("/logout", (req, res) => {
  //clear cookie
  req.session.destroy("userData");
  res.json({
    message: "Logout successfully",
  });
});
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
