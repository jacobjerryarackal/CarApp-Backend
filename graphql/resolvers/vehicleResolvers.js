import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const vehicleResolvers = {
  Query: {
    vehicles: async () => {
      try {
        return await prisma.vehicle.findMany({
          include: {
            manufacturer: true,
            model: true,
            vehicleTypes: true, 
            features: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicles');
      }
    },
    vehicle: async (_, { id }) => {
      try {
        return await prisma.vehicle.findUnique({
          where: { id: parseInt(id) },
          include: {
            manufacturer: true,
            model: true,
            vehicleTypes: true,
            features: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch vehicle');
      }
    },
  },
  Mutation: {
    createVehicle: async (_, args) => {
      try {
        const vehicle = await prisma.vehicle.create({
          data: {
            name: args.name,
            description: args.description,
            price: args.price,
            primaryImage: args.primaryImage,
            otherImages: args.otherImages,
            availableQuantity: args.availableQuantity,
            manufacturer: { connect: { id: parseInt(args.manufacturerId) } },
            model: { connect: { id: parseInt(args.modelId) } },
            vehicleTypes: {
              connect: args.vehicleTypeIds.map(id => ({ id: parseInt(id) }))
            },
            features: {
              connect: args.featuresId ? args.featuresId.map(id => ({ id: parseInt(id) })) : []
            },
          },
          include: {
            manufacturer: true,
            model: true,
            vehicleTypes: true,
            features: true,
          },
        });
        return vehicle;
      } catch (error) {
        console.log(error);
        throw new ApolloError('Failed to create vehicle');
      }
    },
     
    
    updateVehicle: async (_, { id, featuresId, ...rest }) => {
      try {
        return await prisma.vehicle.update({
          where: { id: parseInt(id) },
          data: {
            ...rest,
            vehicleType: rest.vehicleTypeId
              ? { connect: { id: parseInt(rest.vehicleTypeId) } }
              : undefined,
            features: featuresId
              ? { connect: featuresId.map((id) => ({ id: parseInt(id) })) }
              : undefined,
          },
          include: {
            manufacturer: true,
            model: true,
            vehicleType: true, 
            features: true,
          },
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
