import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'; 

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
    loginAdmin: async (_, { email, password }) => {
      try {
        const admin = await prisma.admin.findUnique({ where: { email } });
        if (!admin) {
          console.error('Admin not found');
          throw new ApolloError('Invalid email or password');
        }
        if (admin.password !== password) {
          console.error('Password does not match');
          throw new ApolloError('Invalid email or password');
        }
        const token = jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET);
        return { token, admin };
      } catch (error) {
        console.error('Error in loginAdmin resolver:', error);
        throw new ApolloError('Failed to log the admin');
      }
    },
    createAdmin: async (_, args) => {
      try {
        return await prisma.admin.create({
          data: {
            email: args.email,
            password: args.password, 
          },
        });
      } catch (error) {
        console.log(error);
        
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
