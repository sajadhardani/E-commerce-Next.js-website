// import { PrismaClient } from '@/generated/prisma/client'

import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import type * as PrismaType from '@prisma/client';
// import type * as Prisma from '@prisma/client';

// adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });
export type { PrismaType };
