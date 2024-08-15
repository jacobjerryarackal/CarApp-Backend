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
    vehicleType: VehicleType!
    features: [Feature!]!
  }

  type VehicleType {
    id: ID!
    name: String!
    description: String
  }

  type Feature {
    id: ID!
    engineType: String
    transmission: String
    horsepower: Int
    torque: Int
    fuelEfficiency: Float
    dimensions: String
    weight: Float
    safetyFeatures: [String]
    infotainment: String
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
      vehicleTypeId: ID!
      featuresId: [ID!]
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
      vehicleTypeId: ID
      featuresId: [ID!]
    ): Vehicle

    deleteVehicle(id: ID!): Boolean
  }
`;
