import { gql } from 'apollo-server-express';

export const adminTypeDefs = gql`
  type Admin {
    id: ID!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    admin: Admin
  }

  extend type Query {
    admins: [Admin]
    admin(id: ID!): Admin
  }

  extend type Mutation {
    createAdmin(email: String!, password: String!): Admin
    updateAdmin(id: ID!, email: String, password: String): Admin
    deleteAdmin(id: ID!): Boolean
    loginAdmin(email: String!, password: String!): AuthPayload
  }
`;
