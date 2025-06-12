const express = require("express");

//!instance of express

const app = express();
//receiving data from client
app.use(express.json());
//create the PORT
const PORT = 3000;

const books = [
  { id: 1, title: "The great Gatsby", author: "F.Scott" },
  { id: 2, title: "The Moby Dic", author: "Herman" },
  { id: 3, title: "The MERN Stack", author: "Masynctech" },
];

//define the router handler
app.get("/", (req, res) => {
  //res.send("Hello world");
  res.json({
    status: "Success",
    message: "Welcome to my first express application",
  });
});

//fetch all books
app.get("/books", (req, res) => {
  res.json({
    status: "success",
    message: "Books fetched successfully",
    data: books,
  });
});

//fetch a book
app.get("/books/:id", (req, res) => {
  //req.param  - holds the params /books/:id
  const id = req.params.id;

  const book = books.find((book) => book.id === parseInt(id));
  if (book) {
    res.json({
      status: "success",
      message: "Get a book with id",
      data: book,
    });
  } else if (!book) {
    return res.json({
      status: "failed",
      message: `Book with ${id} not found`,
    });
  }
});

//add book
app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json({
    status: "success",
    message: "Book successfully added",
    data: books,
  });
});
//start the server
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
