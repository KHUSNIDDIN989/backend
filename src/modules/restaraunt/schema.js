const { gql } = require("apollo-server");

module.exports = gql`
  type RES {
    id: ID!
    name: String!
    img: String
    res_cotegory_id: ID!
  }
  extend type Query {
    restaraunts: [RES!]!
    restaraunt(id: ID!): [RES!]!
  }
  extend type Mutation {
    newRes(name: String!, res_cotegory_id: ID!, img: String!): [RES!]!
    deleteRes(id: ID!): RES!
  }
`;
