import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const vehicleResolvers = {
  Query: {
    vehicles: async () => {
      try {
        return await prisma.vehicle.findMany();
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicles');
      }
    },
    vehicle: async (_, { id }) => {
      try {
        return await prisma.vehicle.findUnique({ where: { id: parseInt(id) } });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle');
      }
    },
  },
  Mutation: {
    createVehicle: async (_, args) => {
      try {
        return await prisma.vehicle.create({
          data: {
            name: args.name,
            description: args.description,
            price: args.price,
            primaryImage: args.primaryImage,
            otherImages: args.otherImages,
            availableQuantity: args.availableQuantity,
            manufacturer: { connect: { id: parseInt(args.manufacturerId) } },
            model: { connect: { id: parseInt(args.modelId) } },
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to create vehicle');
      }
    },
    updateVehicle: async (_, { id, ...rest }) => {
      try {
        return await prisma.vehicle.update({
          where: { id: parseInt(id) },
          data: { ...rest },
        });
      } catch (error) {
        throw new ApolloError('Failed to update vehicle');
      }
    },
    deleteVehicle: async (_, { id }) => {
      try {
        await prisma.vehicle.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete vehicle');
      }
    },
  },
};
