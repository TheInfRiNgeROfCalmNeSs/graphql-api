const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions')

const typeDefs = gql`
    type Query {
        sessions(input: InputSession): [Session]
        sessionById(id: ID): [Session]
    }

    type Session {
        id: ID!,
        title: String!,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String,
    }

    input InputSession {
        id: ID,
        title: String,
        description: String,
        startsAt: String,
        endsAt: String,
        room: String,
        day: String,
        format: String,
        track: String,
        level: String,
    }
`

const resolvers = {
    Query: {
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: 3000 }).then(({ url}) => console.log(`GraphQL running at ${url}`));

