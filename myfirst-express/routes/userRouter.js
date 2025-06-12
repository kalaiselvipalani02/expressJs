const express = require("express");
const userRouter = express.Router();
//using the route()  - grouping router
userRouter
  .route("/")
  .get((req, res) => {
    res.json({
      status: "Success",
      message: "Display All User",
    });
  })
  .post((req, res) => {
    res.json({
      status: "Success",
      message: "User added",
    });
  });

userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      status: "Success",
      message: "Single user",
    });
  })
  .put((req, res) => {
    res.json({
      status: "Success",
      message: "User updated",
    });
  })
  .delete((req, res) => {
    res.json({
      status: "Success",
      message: "User deleted",
    });
  });

module.exports = userRouter;
