const { ApolloServer } = require('apollo-server');

const server = new ApolloServer();

server.listen({ port: 3000 }).then(({ url}) => console.log(`GraphQL running at ${url}`));

