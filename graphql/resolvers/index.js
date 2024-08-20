import { vehicleResolvers } from './vehicleResolvers.js';
import { bookingResolvers } from './bookingResolvers.js';
import { modelResolvers } from './modelResolvers.js';
import { manufacturerResolvers } from './manufacturerResolvers.js';
import { adminResolvers } from './adminResolvers.js';
import { featureResolvers } from './featureResolvers.js';
import { userResolvers } from './userResolvers.js';
import { vehicletypeResolvers } from './typevechicleResolvers.js';
import { priceVehicleResolvers } from './pricevehicleResolvers.js';

export const resolvers = {
  Query: {
    ...vehicleResolvers.Query,
    ...bookingResolvers.Query,
    ...modelResolvers.Query,
    ...manufacturerResolvers.Query,
    ...adminResolvers.Query,
    ...featureResolvers.Query,
    ...userResolvers.Query,
    ...vehicletypeResolvers.Query,
    ...priceVehicleResolvers.Query
  },
  Mutation: {
    ...vehicleResolvers.Mutation,
    ...bookingResolvers.Mutation,
    ...modelResolvers.Mutation,
    ...manufacturerResolvers.Mutation,
    ...adminResolvers.Mutation,
    ...featureResolvers.Mutation,
    ...userResolvers.Mutation,
    ...vehicletypeResolvers.Mutation,
    ...priceVehicleResolvers.Mutation
  },
};
