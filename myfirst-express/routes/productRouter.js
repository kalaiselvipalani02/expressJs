const express = require("express");
const productRouter = express.Router();

productRouter
  .route("/")
  .get((req, res) => {
    res.json({
      status: "Success",
      message: "Display All Product",
    });
  })
  .post((req, res) => {
    res.json({
      status: "Success",
      message: "Add Product",
    });
  });

productRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      status: "Success",
      message: "Display single Product",
    });
  })
  .put((req, res) => {
    res.json({
      status: "Success",
      message: "Product Updated",
    });
  })
  .delete((req, res) => {
    res.json({
      status: "Success",
      message: "Product deleted",
    });
  });

module.exports = productRouter;
