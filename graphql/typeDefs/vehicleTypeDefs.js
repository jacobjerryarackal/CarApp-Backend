import { gql } from 'apollo-server-express';

export const vehicleTypeDefs = gql`
  type Vehicle {
  id: ID!
  name: String!
  description: String!
  primaryImage: String
  otherImages: [String]
  availableQuantity: Int!
  manufacturer: Manufacturer!
  model: Model!
  vehicleTypes: [VehicleType!]!
  features: [Feature!]! 
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
    vehicleType: VehicleType!  
  }

  type VehicleType {
    id: ID!
    name: String!
    description: String
    features: [Feature!]!
    vehicles: [Vehicle!]!
  }

  type VehiclePrice {
    id: ID!
    price: Float!
    vehicleType: VehicleType!
    vehicle: Vehicle!
  }

  extend type Query {
    vehicles: [Vehicle]
    vehicle(id: ID!): Vehicle
  }

  extend type Mutation {
    createVehicle(
      name: String!
      description: String!
      primaryImage: String
      otherImages: [String]
      availableQuantity: Int!
      manufacturerId: ID!
      modelId: ID!
      vehicleTypeIds: [ID!]!
      featuresId: [ID!]!
    ): Vehicle

    updateVehicle(
      id: ID!
      name: String
      description: String
      primaryImage: String
      otherImages: [String]
      availableQuantity: Int
      manufacturerId: ID
      modelId: ID
      vehicleTypeIds: [ID!]
      featuresId: [ID!]
    ): Vehicle

    deleteVehicle(id: ID!): Boolean
  }
`;
