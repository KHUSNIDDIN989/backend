const { gql } = require("apollo-server");

module.exports = gql`
  type COTEGORY {
    id: ID!
    name: String!
    img: String
  }
  extend type Query {
    cotegory: [COTEGORY!]!
  }
`;
