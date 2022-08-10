const { gql } = require("apollo-server");

module.exports = gql`
  scalar Date
  type ORDER {
    id: ID!
    orderName: String!
    orderUserName: String!
    orderUserNumber: String!
    orderedUserLocation: String!
    orderedTime: Date!
  }
  extend type Query {
    orders: [ORDER!]!
  }
  extend type Mutation {
    neworder(
      orderName: String!
      orderUserName: String!
      orderUserNumber: String!
      orderedUserLocation: String!
    ): ORDER!
    deleteorder(id: ID!): ORDER!
  }
`;
