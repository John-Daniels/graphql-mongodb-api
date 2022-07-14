const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model("books", bookSchema)

module.exports = Book
