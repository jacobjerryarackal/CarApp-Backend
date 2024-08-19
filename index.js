import express from 'express';
import cors from 'cors'; 
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers/index.js';
import { typeDefs } from './graphql/typeDefs/index.js';
import pkg from 'pg';
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { Client } from "minio";

const { Pool } = pkg;
const app = express();
app.use(cors()); 
app.use(bodyParser.json()); 
dotenv.config();


try{
  console.log(process.env.MINIO_ENDPOINT);
  console.log(parseInt(process.env.MINIO_PORT));
  
  const minioConfig = new Client({
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: parseInt(process.env.MINIO_PORT, 10) || 9000,
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
  });
  testMinio(minioConfig);

  
  console.log(`Server is running on http://localhost:${parseInt(process.env.MINIO_PORT)}`);

}
catch(err){
  console.log("errors");
  
console.log(err);

}
async function testMinio(minioConfig) {
  try {
    // Check buckets
    const buckets = await minioConfig.listBuckets();
    console.log('Buckets:', buckets);

    // Create a new bucket
    const bucketName = 'test-bucket';
    await minioConfig.makeBucket(bucketName, 'us-east-1');
    console.log(`Bucket "${bucketName}" created`);

    // Upload a file
    const filePath = './path/to/file.txt';
    await minioConfig.fPutObject(bucketName, 'file.txt', filePath);
    console.log('File uploaded successfully');

    // Download a file
    const fileStream = await minioConfig.getObject(bucketName, 'file.txt');
    fileStream.pipe(process.stdout);

  } catch (err) {
    console.error('MinIO error:', err);
  }
}



const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'carapp',
  password: '12345678',
  port: 5432,
});

async function testDbConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    console.log('PostgreSQL connected:', result.rows);
    client.release();
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

testDbConnection();

const server = new ApolloServer({
  typeDefs,   
  resolvers,  
});

await server.start(); 

server.applyMiddleware({ app, path: '/graphql' }); 

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
