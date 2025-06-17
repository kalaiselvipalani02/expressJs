require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000 || process.env.PORT;
//Instance of express
const app = express();

const URL = process.env.URL;

//Connect to mongodb
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("Error to connecting DB", error);
  }
};

//call db DBConnection
connectToDB();
//author schema
const authorSchema = new mongoose.Schema({
  name: String,
});
//compile author schema to form model
const Author = mongoose.model("Author", authorSchema);
//book schema
const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  { timestamps: true }
);
const Book = mongoose.model("Book", bookSchema);

//create  author
const createAuthor = async () => {
  try {
    const authorDoc = await Author.create({
      name: "Masyntech",
    });
    console.log(authorDoc);
    return authorDoc;
  } catch (err) {
    console.log(err);
  }
};

//create book
const createBook = async () => {
  try {
    const author = await createAuthor();
    const authorDoc = await Book.create({
      title: "MERN for every one",
      author: author._id,
    });
    console.log(authorDoc);
  } catch (err) {
    console.log(err);
  }
};
createBook();
//Start the server
app.listen(PORT, console.log(`Server is running on ${PORT}`));
