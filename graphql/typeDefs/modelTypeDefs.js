import { gql } from 'apollo-server-express';

export const modelTypeDefs = gql`
  type Model {
    id: ID!
    name: String!
    manufacturer: Manufacturer!
  }

  extend type Query {
    models: [Model]
    model(id: ID!): Model
  }

  extend type Mutation {
    createModel(name: String!, manufacturerId: ID!): Model
    updateModel(id: ID!, name: String): Model
    deleteModel(id: ID!): Boolean
  }
`;
