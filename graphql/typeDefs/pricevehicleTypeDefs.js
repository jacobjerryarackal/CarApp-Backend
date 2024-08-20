import { gql } from 'apollo-server-express';

export const priceVehicleTypeDefs = gql`
  type VehiclePrice {
    id: ID!
    price: Float!
    vehicleType: VehicleType!
    vehicle: Vehicle! 
  }

  extend type Query {
    vehiclePrices: [VehiclePrice]
    vehiclePrice(id: ID!): VehiclePrice
  }

  extend type Mutation {
    createVehiclePrice(
      vehicleTypeId: ID!
      vehicleId: ID!
      price: Float!
    ): VehiclePrice

    updateVehiclePrice(
      id: ID!
      vehicleTypeId: ID
      vehicleId: ID
      price: Float
    ): VehiclePrice

    deleteVehiclePrice(id: ID!): Boolean
  }
`;
