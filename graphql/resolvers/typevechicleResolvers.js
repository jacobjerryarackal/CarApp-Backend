import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const vehicletypeResolvers = {
  Query: {
    vehicleTypes: async () => {
      try {
        return await prisma.vehicleType.findMany({
          include: {
            vehicles: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle types');
      }
    },
    vehicleType: async (_, { id }) => {
      try {
        return await prisma.vehicleType.findUnique({
          where: { id: parseInt(id) },
          include: {
            vehicles: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle type');
      }
    },
  },
  Mutation: {
    createVehicleType: async (_, { name, description }) => {
      try {
        return await prisma.vehicleType.create({
          data: {
            name,
            description,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to create vehicle type');
      }
    },
    updateVehicleType: async (_, { id, name, description }) => {
      try {
        return await prisma.vehicleType.update({
          where: { id: parseInt(id) },
          data: {
            name,
            description,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to update vehicle type');
      }
    },
    deleteVehicleType: async (_, { id }) => {
      try {
        await prisma.vehicleType.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete vehicle type');
      }
    },
  },
};