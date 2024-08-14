import { gql } from 'apollo-server-express';

export const vehicleTypeDefs = gql`
  type Vehicle {
    id: ID!
    name: String!
    description: String!
    price: Float!
    primaryImage: String
    otherImages: [String]
    availableQuantity: Int!
    manufacturer: Manufacturer!
    model: Model!
  }

  extend type Query {
    vehicles: [Vehicle]
    vehicle(id: ID!): Vehicle
  }

  extend type Mutation {
   
    createVehicle(
      name: String!
      description: String!
      price: Float!
      primaryImage: String
      otherImages: [String]
      availableQuantity: Int!
      manufacturerId: ID!
      modelId: ID!
    ): Vehicle

    updateVehicle(
      id: ID!
      name: String
      description: String
      price: Float
      primaryImage: String
      otherImages: [String]
      availableQuantity: Int
      manufacturerId: ID
      modelId: ID
    ): Vehicle
    
    deleteVehicle(id: ID!): Boolean
  }
`;
