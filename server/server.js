const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

//import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
//create a new Apollo server and pass schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//integrate Apollo server w/ Express app as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    //log where we can go to test GQL API
    console.log(`API server running on port ${PORT}${server.graphqlPath}!`);
  });
});
