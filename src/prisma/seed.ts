import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: {
      email: 'johndoe@mail.com',
    },
    update: {},
    create: {
      email: 'johndoe@mail.com',
      name: 'John Doe',
    },
  });
}
const disconnected = async () => {
  await prisma.$disconnect();
  console.log("It's completed");
};
main().catch(console.error).finally(disconnected);
