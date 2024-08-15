import { gql } from 'apollo-server-express';

export const typevechicleDefs = gql`
  type VehicleType {
    id: ID!
    name: String!
    description: String
    features: [Feature!]!
    vehicles: [Vehicle!]!
  }

  extend type Query {
    vehicleTypes: [VehicleType!]
    vehicleType(id: ID!): VehicleType
  }

  extend type Mutation {
    createVehicleType(name: String!, description: String): VehicleType
    updateVehicleType(id: ID!, name: String, description: String): VehicleType
    deleteVehicleType(id: ID!): Boolean
  }
`;
