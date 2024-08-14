import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const manufacturerResolvers = {
  Query: {
    manufacturers: async () => {
      try {
        return await prisma.manufacturer.findMany();
      } catch (error) {
        throw new ApolloError('Failed to fetch manufacturers');
      }
    },
    manufacturer: async (_, { id }) => {
      try {
        return await prisma.manufacturer.findUnique({ where: { id: parseInt(id) } });
      } catch (error) {
        throw new ApolloError('Failed to fetch manufacturer');
      }
    },
  },
  Mutation: {
    createManufacturer: async (_, args) => {
      try {
        return await prisma.manufacturer.create({
          data: {
            name: args.name,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to create manufacturer');
      }
    },
    updateManufacturer: async (_, { id, ...rest }) => {
      try {
        return await prisma.manufacturer.update({
          where: { id: parseInt(id) },
          data: { ...rest },
        });
      } catch (error) {
        throw new ApolloError('Failed to update manufacturer');
      }
    },
    deleteManufacturer: async (_, { id }) => {
      try {
        await prisma.manufacturer.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete manufacturer');
      }
    },
  },
};

