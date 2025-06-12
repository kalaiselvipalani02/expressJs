const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");

//step 1: serve static file
app.use(express.static(path.join(__dirname, "public"))); //dynamic folder path
//route the html pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "home.html"));
});

//about
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "about.html"));
});

//contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "contact.html"));
});

//gallery
app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "gallery.html"));
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
