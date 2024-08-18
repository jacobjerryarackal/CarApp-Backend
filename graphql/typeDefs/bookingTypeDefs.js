import { gql } from 'apollo-server-express';

export const bookingTypeDefs = gql`
  type Booking {
    id: ID!
    vehicle: Vehicle!
    user: User!
    userName: String!
    bookingDate: String!
    totalPrice: Float!
  }

  extend type Query {
    bookings: [Booking]
    booking(id: ID!): Booking
  }

  extend type Mutation {
    createBooking(
      vehicleId: ID!,
      userId: ID!,
      userName: String!,
      bookingDate: String!,
      totalPrice: Float!
    ): Booking
    deleteBooking(id: ID!): Boolean
  }
`;
