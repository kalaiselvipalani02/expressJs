const express = require("express");
const userRouter = express.Router();

//!Getting all user
userRouter.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Display All User",
  });
});

//!single user
userRouter.get("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Single user",
  });
});

//!update user
userRouter.put("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "User updated",
  });
});

//!delete user
userRouter.delete("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "User deleted",
  });
});
//!add user
userRouter.post("/", (req, res) => {
  res.json({
    status: "Success",
    message: "User added",
  });
});
module.exports = userRouter;
