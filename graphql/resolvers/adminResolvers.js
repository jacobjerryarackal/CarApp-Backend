import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const adminResolvers = {
  Query: {
    admins: async () => {
      try {
        return await prisma.admin.findMany();
      } catch (error) {
        throw new ApolloError('Failed to fetch admins');
      }
    },
    admin: async (_, { id }) => {
      try {
        return await prisma.admin.findUnique({ where: { id: parseInt(id) } });
      } catch (error) {
        throw new ApolloError('Failed to fetch admin');
      }
    },
  },
  Mutation: {
    createAdmin: async (_, args) => {
      try {
        return await prisma.admin.create({
          data: {
            email: args.email,
            password: args.password, 
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to create admin');
      }
    },
    updateAdmin: async (_, { id, ...rest }) => {
      try {
        return await prisma.admin.update({
          where: { id: parseInt(id) },
          data: { ...rest },
        });
      } catch (error) {
        throw new ApolloError('Failed to update admin');
      }
    },
    deleteAdmin: async (_, { id }) => {
      try {
        await prisma.admin.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete admin');
      }
    },
  },
};
