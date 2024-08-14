import { vehicleResolvers } from './vehicleResolvers.js';
import { bookingResolvers } from './bookingResolvers.js';
import { modelResolvers } from './modelResolvers.js';
import { manufacturerResolvers } from './manufacturerResolvers.js';
import { adminResolvers } from './adminResolvers.js';

export const resolvers = {
  Query: {
    ...vehicleResolvers.Query,
    ...bookingResolvers.Query,
    ...modelResolvers.Query,
    ...manufacturerResolvers.Query,
    ...adminResolvers.Query,
  },
  Mutation: {
    ...vehicleResolvers.Mutation,
    ...bookingResolvers.Mutation,
    ...modelResolvers.Mutation,
    ...manufacturerResolvers.Mutation,
    ...adminResolvers.Mutation,
  },
};
