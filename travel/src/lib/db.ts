import { PrismaClient } from "@/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const getPrisma = (): PrismaClient => {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  return globalThis.prisma;
};