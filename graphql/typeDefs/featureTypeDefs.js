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
    vehicle: Vehicle
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
      vehicleId: ID!
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

