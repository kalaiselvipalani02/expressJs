const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");
//Serve the static files/folder
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
//route the ejs pages
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/products", (req, res) => {
  const products = [
    { name: "Laptop", price: 1999 },
    { name: "Phone", price: 899 },
    { name: "Tablet", price: 699 },
    { name: "HeadSet", price: 299 },
  ];

  res.render("product", { products });
});
app.get("/user", (req, res) => {
  //get data from db., now use dummy data
  const userData = {
    username: "Alice",
    age: 25,
    isPremiumUser: true,
    email: "alice@gmail.com",
  };
  res.render("userData", userData);
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
