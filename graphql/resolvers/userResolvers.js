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
    createUser: async (_, { name, email, phone, city, state, country, pincode, password }) => {
      try {
        return await prisma.user.create({
          data: { name, email, phone, city, state, country, pincode, password },
        });
      } catch (error) {
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
