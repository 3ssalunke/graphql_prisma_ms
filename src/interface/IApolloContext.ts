import { PrismaClient } from "@prisma/client";

export interface IApolloContext {
  prisma: PrismaClient;
}
