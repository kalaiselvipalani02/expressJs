const express = require("express");
const PORT = 3000;
const app = express();
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const isAuthenticated = require("./middlewares/isAuthenticated");

//!built in middleware
app.use(express.json()); //body request
//app.use(express.static()); //handle static files
//app.use(express.urlencoded()); //handle form data
//!Application level middleware
//Logging details of every request
app.use((req, res, next) => {
  console.log("App level middleware");
  next(); //call next middleware or call handler
});

//home
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to Express Routing",
  });
});
//user Routing
app.use("/users", isAuthenticated, userRouter);
//product routing
app.use("/products", productRouter);
//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
