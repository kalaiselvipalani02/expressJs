const express = require("express");
const app = express();
const PORT = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");
//username : kalaiselvipalani02
//password: Z3XMNvHstX7yZeES
//mongodburl: mongodb+srv://kalaiselvipalani02:Z3XMNvHstX7yZeES@dbcluster.il7aclb.mongodb.net/studentDb&appName=dbCluster
const mongodbURL =
  "mongodb+srv://kalaiselvipalani02:Z3XMNvHstX7yZeES@dbcluster.il7aclb.mongodb.net/studentDb&appName=dbCluster";

//connect to mongodb
//Step1. create the client
const client = new MongoClient(mongodbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDb connected");
    const database = client.db("mernfullstack");

    //Collections
    //Create employees collection

    const employees = database.collection("employees");
    const employeesDocs = [
      { name: "Alice", age: 25, department: "HR" },
      { name: "Bob", age: 30, department: "Finance" },
      { name: "Charlie", age: 35, department: "IT" },
      { name: "David", age: 40, department: "Operations" },
      { name: "Eva", age: 45, department: "IT" },
    ];

    const result = await employees.insertMany(employeesDocs);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
//call the db connection
connectDB();

//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
