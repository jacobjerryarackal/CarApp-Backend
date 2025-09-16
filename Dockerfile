<<<<<<< HEAD




=======
>>>>>>> 1e5424ed2ecd357c946ab424bd4c03da9baf4006
# Dockerfile
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 7000
<<<<<<< HEAD
CMD ["npm", "start"]
=======
CMD ["npm", "start"]
>>>>>>> 1e5424ed2ecd357c946ab424bd4c03da9baf4006
