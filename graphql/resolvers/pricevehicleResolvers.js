import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const priceVehicleResolvers = {
  Query: {
    vehiclePrices: async () => {
      try {
        return await prisma.vehiclePrice.findMany({
          include: {
            vehicleType: true,
            vehicle: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle prices');
      }
    },
    vehiclePrice: async (_, { id }) => {
      try {
        return await prisma.vehiclePrice.findUnique({
          where: { id: parseInt(id) },
          include: {
            vehicleType: true,
            vehicle: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle price');
      }
    },
  },
  Mutation: {
    createVehiclePrice: async (_, args) => {
      try {
        const vehiclePrice = await prisma.vehiclePrice.create({
          data: {
            price: args.price,
            vehicleType: { connect: { id: parseInt(args.vehicleTypeId) } },
            vehicle: { connect: { id: parseInt(args.vehicleId) } }, 
          },
          include: {
            vehicleType: true,
            vehicle: true,
          },
        });
        return vehiclePrice;
      } catch (error) {
        console.log(error);
        throw new ApolloError('Failed to create vehicle price');
      }
    },
    updateVehiclePrice: async (_, { id, ...rest }) => {
      try {
        return await prisma.vehiclePrice.update({
          where: { id: parseInt(id) },
          data: {
            ...rest,
            vehicleType: rest.vehicleTypeId
              ? { connect: { id: parseInt(rest.vehicleTypeId) } }
              : undefined,
            vehicle: rest.vehicleId
              ? { connect: { id: parseInt(rest.vehicleId) } }
              : undefined,
          },
          include: {
            vehicleType: true,
            vehicle: true, 
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to update vehicle price');
      }
    },
    deleteVehiclePrice: async (_, { id }) => {
      try {
        await prisma.vehiclePrice.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete vehicle price');
      }
    },
  },
};

