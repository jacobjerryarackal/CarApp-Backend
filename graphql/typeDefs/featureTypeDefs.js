import { gql } from 'apollo-server-express';

export const featuresTypeDefs = gql`

  type Features {
    id: ID!
    engineType: String!
    transmission: String!
    horsepower: Int
    torque: Int
    fuelEfficiency: Float
    dimensions: String
    weight: Float
    safetyFeatures: [String]
    infotainment: String
    vehicleType: VehicleType
  }

  extend type Mutation {
    createFeatures(
    engineType: String!
    transmission: String!
    horsepower: Int
    torque: Int
    fuelEfficiency: Float
    dimensions: String
    weight: Float
    safetyFeatures: [String]
    infotainment: String
    vehicleTypeId: ID!
  ): Features

    updateFeatures(
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
    ): Features
    
    deleteFeatures(id: ID!): Boolean
  }
`;

