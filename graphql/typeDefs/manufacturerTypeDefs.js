import { gql } from 'apollo-server-express';

export const manufacturerTypeDefs = gql`
  type Manufacturer {
    id: ID!
    name: String!
  }

  extend type Query {
    manufacturers: [Manufacturer]
    manufacturer(id: ID!): Manufacturer
  }

  extend type Mutation {
    createManufacturer(name: String!): Manufacturer
    updateManufacturer(id: ID!, name: String): Manufacturer
    deleteManufacturer(id: ID!): Boolean
  }
`;
