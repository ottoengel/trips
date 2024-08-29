import { PrismaClient } from '@prisma/client'

// Verifique se existe uma instância global para o Prisma
const globalForPrisma = global as typeof global & {
  prisma?: PrismaClient;
};

// Se não existir, crie uma nova instância do PrismaClient
export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query'],
});

// Se não for produção, atribua a instância ao objeto global
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

