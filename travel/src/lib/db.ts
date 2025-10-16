import type { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const getPrisma = async (): Promise<PrismaClient> => {
  if (!globalThis.prisma) {
    const { PrismaClient } = await import("@prisma/client");
    globalThis.prisma = new PrismaClient();
  }
  return globalThis.prisma;
};
