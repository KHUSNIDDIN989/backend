const { gql } = require("apollo-server");

module.exports = gql`
  type PRODUCT {
    id: ID!
    name: String!
    resName: String!
    img: String!
    price: Int!
    res: ID!
  }
  extend type Query {
    products(id: ID!): [PRODUCT!]!
    product: [PRODUCT!]!
  }
  extend type Mutation {
    newproduct(name: String!, img: String!, price: Int!, res: ID!): PRODUCT!
    deleteProduct(id: ID!): PRODUCT!
  }
`;
