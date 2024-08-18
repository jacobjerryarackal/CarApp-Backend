import { ApolloError } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const bookingResolvers = {
  Query: {
    bookings: async () => {
      try {
        return await prisma.booking.findMany({
          include: { vehicle: true, user: true }
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch bookings');
      }
    },
    booking: async (_, { id }) => {
      try {
        return await prisma.booking.findUnique({
          where: { id: parseInt(id) },
          include: { vehicle: true, user: true }
        });
      } catch (error) {
        throw new ApolloError('Failed to fetch booking');
      }
    },
  },
  Mutation: {
    createBooking: async (_, { vehicleId, userId, userName, bookingDate, totalPrice }) => {
      try {
        return await prisma.booking.create({
          data: {
            vehicle: { connect: { id: parseInt(vehicleId) } },
            user: { connect: { id: parseInt(userId) } },
            userName,
            bookingDate,
            totalPrice,
          },
        });
      } catch (error) {
        throw new ApolloError('Failed to create booking');
      }
    },
    deleteBooking: async (_, { id }) => {
      try {
        await prisma.booking.delete({ where: { id: parseInt(id) } });
        return true;
      } catch (error) {
        throw new ApolloError('Failed to delete booking');
      }
    },
  },
};
