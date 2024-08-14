import { gql } from 'apollo-server-express';
import { vehicleTypeDefs } from './vehicleTypeDefs.js';
import { bookingTypeDefs } from './bookingTypeDefs.js';
import { modelTypeDefs } from './modelTypeDefs.js';
import { manufacturerTypeDefs } from './manufacturerTypeDefs.js';
import { adminTypeDefs } from './adminTypeDefs.js';

export const typeDefs = gql`
type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
  ${vehicleTypeDefs}
  ${bookingTypeDefs}
  ${modelTypeDefs}
  ${manufacturerTypeDefs}
  ${adminTypeDefs}
`;
