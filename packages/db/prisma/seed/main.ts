import { PrismaClient } from '@prisma/client';
import { seedAdmins } from './tables/admins';

const prisma = new PrismaClient();

async function main() {
  await seedAdmins(prisma);
}

await main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
