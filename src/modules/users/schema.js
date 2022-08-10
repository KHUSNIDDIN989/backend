const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    password: String!
  }

  type Query {
    users: [User!]
    user: User
  }

  type Mutation {
    newUser(name: String!, password: String!): String
    login(username: String!, password: String!): String
  }
`;
