import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
    features: [Features]
    feature(id: ID!): Features
  }

  extend type Mutation {
    createUser(email: String!, password: String!): User
    updateUser(id: ID!, email: String, password: String): User
    deleteUser(id: ID!): Boolean
  }
`;
