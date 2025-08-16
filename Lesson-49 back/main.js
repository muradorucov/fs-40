const express = require("express");
const app = express();
const fs = require("fs")

app.use(express.json());



let books = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1"
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2"
  }
]

app.get("/books", (_, res) => {
  res.status(200).json({
    messag: "Books list",
    books
  })
})

app.post("/books", (req, res) => {

  const newBook = req.body;


  if (!newBook.title || !newBook.author) {
    return res.json({
      message: "title or author is required"
    })
  }

  books.push(newBook);

  res.status(202).json({
    message: "book created",
    book: books[books.length - 1]
  })
})

app.get("/book/:id", (req, res) => {
  const { id } = req.params;

  const foundBook = books.find(book => book.id === id);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found",
      id
    })
  }

  res.status(200).json(foundBook)
})

app.put("/book/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;


  // if (!title || !author) {
  //   return res.json({
  //     message: "title or author is required"
  //   })
  // }

  const foundBook = books.find(book => book.id === id);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found",
      id
    })
  }


  foundBook.title = title;
  foundBook.author = author;


  res.status(200).json({
    message: "Boook update is succesfull",
    foundBook
  })


})

app.delete("/book/:id", (req, res) => {
  const { id } = req.params;

  const foundBook = books.find(book => book.id === id);

  if (!foundBook) {
    return res.status(404).json({
      message: "Book not found",
      id
    })
  }

  books = books.filter(book => book.id !== id);

  res.status(200).json({
    message: "Book is deleted"
  })
})



app.listen(3300, () => {
  console.log("server is runn!");
})