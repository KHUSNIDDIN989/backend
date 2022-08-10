const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    phone: String!
  }
  extend type Query {
    users: [User!]!
  }
  extend type Mutation {
    newUser(name: String!, phone: String!): User!
    deleteUser(id: ID!): User!
  }
`;
