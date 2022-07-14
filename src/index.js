const express = require("express")
const { config } = require("dotenv")
const cors = require("cors")
const { ApolloServer } = require("apollo-server-express")
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core")

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

config()
require("./db")

const startServer = async () => {
  const app = express()
  app.use(cors())

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({}),
      ApolloServerPluginLandingPageDisabled(),
    ],
    // csrfPrevention: true,
    // cache: "bounded",
  })

  await server.start()

  server.applyMiddleware({ app })

  // The `listen` method launches a web server.
  app.listen(process.env.PORT || 4000, () =>
    console.log(
      `🚀  Server ready at http://localhost:4000${server.graphqlPath}`
    )
  )
}

startServer()
