import 'dotenv/config';
import prismaClientModule from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';

const { PrismaClient } = prismaClientModule;
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is required to connect to PostgreSQL.');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
});

const connectDB = async () => {
try{
    await prisma.$connect();
    console.log('Database connected via prisma');
}catch(error){
    console.error('Database connection error:', error);
    process.exit(1);
}
};

const disconnectDB = async () => {
    await prisma.$disconnect();
}

export {connectDB, disconnectDB, prisma};