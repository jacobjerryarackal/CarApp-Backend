import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    users: async () => {
      try {
        return await prisma.user.findMany();
      } catch (error) {
        throw new ApolloError('Failed to fetch users');
      }
    },
    user: async (_, { id }) => {
      try {
        return await prisma.user.findUnique({
          where: { id: parseInt(id) },
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch user');
      }
    }
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      try {
        return await prisma.user.create({
          data: { email, password },
        });
      } catch (error) {
        throw new ApolloError('Failed to create user');
      }
    },
    updateUser: async (_, { id, email, password }) => {
      try {
        return await prisma.user.update({
          where: { id: parseInt(id) },
          data: { email, password },
        });
      } catch (error) {
        throw new ApolloError('Failed to update user');
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        await prisma.user.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete user');
      }
    },
  },
};

