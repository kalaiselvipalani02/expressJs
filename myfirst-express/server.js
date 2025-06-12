const express = require("express");
const PORT = 3000;
const app = express();
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

app.use(express.json());
//home
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to Express Routing",
  });
});
//user Routing
app.use("/users", userRouter);
//product routing
app.use("/products", productRouter);
//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
