const express = require("express");
const PORT = 3000;
const app = express();

//home
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to Express App",
  });
});

//Show all user
app.get("/users", (req, res) => {
  res.json({
    status: "success",
    message: "Show All Users",
  });
});
//single user
app.get("/users/:id", (req, res) => {
  res.json({
    status: "success",
    message: "Display selected user",
  });
});
//add user
app.post("/users/", (req, res) => {
  res.json({
    status: "success",
    message: "User added",
  });
});
//update user
app.put("/users/:id", (req, res) => {
  res.json({
    status: "success",
    message: "User updated",
  });
});

//delete user
app.delete("/users/:id", (req, res) => {
  res.json({
    status: "success",
    message: "User deleted",
  });
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
