import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const modelResolvers = {
  Query: {
    models: async () => {
      try {
        return await prisma.model.findMany();
      } catch (error) {
        throw new ApolloError('Failed to fetch models');
      }
    },
    model: async (_, { id }) => {
      try {
        return await prisma.model.findUnique({ where: { id: parseInt(id) } });
      } catch (error) {
        throw new ApolloError('Failed to fetch model');
      }
    },
  },
  Mutation: {
    createModel: async (_, args) => {
      try {
        const model = await prisma.model.create({
          data: {
            name: args.name,
            manufacturer: { connect: { id: parseInt(args.manufacturerId) } },
          },
          include: {
            manufacturer: true,
          },
        });
    
        return model;
      } catch (error) {
        throw new ApolloError('Failed to create model');
      }
    },
    
    updateModel: async (_, { id, name, manufacturerId }) => {
      try {
        const updateData = {};
    
        if (name) updateData.name = name;
        if (manufacturerId) updateData.manufacturer = { connect: { id: parseInt(manufacturerId) } };
    
        return await prisma.model.update({
          where: { id: parseInt(id) },
          data: updateData,
          include: {
            manufacturer: true,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to update model');
      }
    },
    
    deleteModel: async (_, { id }) => {
      try {
        await prisma.model.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete model');
      }
    },
  },
};
