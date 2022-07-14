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
    createBook: async (_, { title, author }) => {
      const book = new Book({ title, author })
      return await book.save()
    },
  },
}

module.exports = resolvers
