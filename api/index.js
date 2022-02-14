const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const dataSources = () => ({
    sessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: 3000 }).then(({ url}) => console.log(`GraphQL running at ${url}`));

