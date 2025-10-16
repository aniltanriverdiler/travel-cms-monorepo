const { PrismaClient } = require("../src/generated/prisma");
const prisma = new PrismaClient();

async function testConnection() {
  try {
    const hotels = await prisma.hotel.findMany();
    console.log('MongoDB’ye bağlandın, Hotel sayısı:', hotels.length);
  } catch (err) {
    console.error('Bağlantı hatası:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
