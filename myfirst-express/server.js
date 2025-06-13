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
    //1.Database name(school);
    const database = client.db("mernfullstack");

    //2.creating collections Eg: student, library department
    const students = database.collection("students");
    //3.document - individual
    //insert one
    /*const result = await students.insertOne({
      id: 1,
      name: "Agnes",
      age: 20,
      subject: ["Maths", "Physics"],
    });*/
    //insert many
    /* const result = await students.insertMany([
      {
        name: "Joseph",
        age: 30,
        grade: "A",
        pass: true,
        subject: ["Physics", "Chemistry"],
      },
      {
        name: "Alice",
        age: 30,
        grade: "B",
        pass: true,
        subject: ["Maths", "Computer"],
      },
      {
        name: "Anes",
        age: 29,
        grade: "A",
        pass: true,
        subject: ["Maths"],
      },
    ]);*/

    //Read data - find
    /*const resultCursor = students.find();
    const result = await resultCursor.toArray();*/

    //findOne()
    /* const result = await students.findOne({
      name: "Agnes",
    });*/

    //update  document
    //updateOne
    /*const result = await students.updateOne(
      {
        name: "Joseph", //filter record
      },
      {
        $set: { age: 40, pass: false, grade: "B" },
      }
    );*/
    //updateMany
    /*const result = await students.updateMany(
      { grade: "B" },
      {
        $set: { pass: true },
      }
    );*/
    //findOneAndUpdate
    /*const result = await students.findOneAndUpdate(
      { name: "Joseph" },
      {
        $set: { age: 35 },
      }
    );
*/
    //delete - document
    //deleteOne
    // const result = await students.deleteOne({ name: "Alice" });

    //deleteMany
    //const result = await students.deleteMany({ grade: "B" });

    //findAndDelete

    const result = await students.findOneAndDelete({
      name: "Anes",
    });
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
