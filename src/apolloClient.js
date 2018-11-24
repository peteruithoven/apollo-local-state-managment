import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./resolvers";

const typeDefs = `
  type Mutation {
    toggle(): Boolean
  }

  type Query {
    completed: Boolean
  }
`;

const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

export default client;
