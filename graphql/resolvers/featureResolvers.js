import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const featureResolvers = {
  Query: {
    features: async () => {
      try {
        return await prisma.features.findMany({
          include: { vehicleType: true },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch features');
      }
    },
    feature: async (_, { id }) => {
      try {
        return await prisma.features.findUnique({
          where: { id: parseInt(id) },
          include: { vehicleType: true },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch feature');
      }
    },
  },
  Mutation: {
    createFeatures: async (_, args) => {
      try {
        return await prisma.features.create({
          data: {
            engineType: args.engineType,
            transmission: args.transmission,
            horsepower: args.horsepower,
            torque: args.torque,
            fuelEfficiency: args.fuelEfficiency,
            dimensions: args.dimensions,
            weight: args.weight,
            safetyFeatures: args.safetyFeatures,
            infotainment: args.infotainment,
            vehicleType: { connect: { id: parseInt(args.vehicleTypeId) } },
          },
          include: { vehicleType: true },
        });
      } catch (error) {
        console.error('Detailed error:', error);
        throw new ApolloError('Failed to create features');
      }
    },
    updateFeatures: async (_, { id, ...rest }) => {
      try {
        return await prisma.features.update({
          where: { id: parseInt(id) },
          data: { ...rest },
          include: { vehicleType: true },
        });
      } catch (error) {
        throw new ApolloError('Failed to update features');
      }
    },
    deleteFeatures: async (_, { id }) => {
      try {
        await prisma.features.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete features');
      }
    },
  },
};
