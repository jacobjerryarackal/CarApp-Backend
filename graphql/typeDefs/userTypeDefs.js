import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    city: String!
    state: String!
    country: String!
    pincode: String!
    password: String!
    verified: Boolean!
    createdAt: String!
    updatedAt: String!
    bookings: [Booking]
  }

  type AuthPayload {
    token: String!
    user: User
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    features: [Features]
    feature(id: ID!): Features
  }

  extend type Mutation {
    createUser(
      name: String!,
      email: String!,
      phone: String!,
      city: String!,
      state: String!,
      country: String!,
      pincode: String!,
      password: String!
    ): User
    updateUser(
      id: ID!,
      name: String,
      email: String,
      phone: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
      password: String
    ): User
    deleteUser(id: ID!): Boolean
    loginUser(email: String!, password: String!): AuthPayload
  }
`;
