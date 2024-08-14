import { gql } from 'apollo-server-express';

export const bookingTypeDefs = gql`
  type Booking {
    id: ID!
    vehicle: Vehicle!
    customerName: String!
    bookingDate: String!
    seats: Int!
    totalPrice: Float!
  }

  extend type Query {
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  extend type Mutation {
    createBooking(
      vehicleId: ID!
      customerName: String!
      bookingDate: String!
      seats: Int!
      totalPrice: Float!
    ): Booking
    deleteBooking(id: ID!): Boolean
  }
`;
