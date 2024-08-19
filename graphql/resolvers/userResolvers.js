import { ApolloError } from 'apollo-server-errors';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'; 

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
    loginUser: async (_, { email, password }) => {
      try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          console.error('User not found');
          throw new ApolloError('Invalid email or password');
        }
        if (user.password !== password) {
          console.error('Password does not match');
          throw new ApolloError('Invalid email or password');
        }
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        return { token, user };
      } catch (error) {
        console.error('Error in loginUser resolver:', error);
        throw new ApolloError('Failed to log the user');
      }
    },
    

    createUser: async (_, { name, email, phone, city, state, country, pincode, password }) => {
      try {
        return await prisma.user.create({
          data: { name, email, phone, city, state, country, pincode, password },
        });
      } catch (error) {
        console.log(error);
        throw new ApolloError('Failed to create user');
      }
    },
    updateUser: async (_, { id, name, email, phone, city, state, country, pincode, password }) => {
      try {
        return await prisma.user.update({
          where: { id: parseInt(id) },
          data: { name, email, phone, city, state, country, pincode, password },
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
