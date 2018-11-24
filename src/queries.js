import gql from "graphql-tag";

export const COMPLETED = gql`
  {
    completed @client
  }
`;
