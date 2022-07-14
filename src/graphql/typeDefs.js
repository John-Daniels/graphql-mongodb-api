const { gql } = require("apollo-server-express")

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String!
    imageUrl: String!
    desc: String!
    categories: [String!]!
    createdAt: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    hello: String!
    books: [Book!]!
  }

  type Mutation {
    createBook(title: String!, author: String!, imageUrl: String!): Book!
    updateBook(
      id: String!
      title: String
      author: String
      imageUrl: String
      desc: String
      categories: [String!]
    ): Book!
  }
`
// https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=600/v2api/collection/10370001/5534816884752384/image/4916621335330816
module.exports = typeDefs
