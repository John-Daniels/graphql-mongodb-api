const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: { type: String },
    imageUrl: {
      type: String,
      default:
        "https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5534816884752384/image/4916621335330816",
    },
    desc: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      default: ["All"],
    },
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model("books", bookSchema)

module.exports = Book
