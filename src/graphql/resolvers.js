const Book = require("../models/Books")

//data set
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    hello: () => "hello",
    books: async () => await Book.find(),
  },
  Mutation: {
    createBook: async (_, { title, author, imageUrl, desc, categories }) => {
      const book = new Book({ title, author, imageUrl, desc, categories })
      return await book.save()
    },
    updateBook: async (
      _,
      { id, title, author, imageUrl, desc, categories }
    ) => {
      const book = await Book.findByIdAndUpdate(
        id,
        { title, author, imageUrl, desc, categories },
        { new: true }
      )
      return book
    },
  },
}

module.exports = resolvers
