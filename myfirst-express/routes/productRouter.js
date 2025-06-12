const express = require("express");
const productRouter = express.Router();

//!Getting all Products
productRouter.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Display All Product",
  });
});

//!single Product
productRouter.get("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Display single Product",
  });
});

//!update product
productRouter.put("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Product Updated",
  });
});

//!delete Product
productRouter.delete("/:id", (req, res) => {
  res.json({
    status: "Success",
    message: "Product deleted",
  });
});

//!add Product
productRouter.post("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Add Product",
  });
});

module.exports = productRouter;
