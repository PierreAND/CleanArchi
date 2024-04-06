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
      posts: {
        create: [
          {
            title: 'Absurde !! Vraiment bof !',
            content:
              "Je n'ai pas du tout apprécié la performance des joueurs cette apres midi , quel desastre !",
          },
          {
            title: 'A voir! Absolument splendide ! ',
            content:
              "J'ai passé un super moment lors de la projection numero aux Bois Dancé Mamé ! Quelle spectacle ! A ne pas rater ! ",
          },
        ],
      },
    },
  });
}
const disconnected = async () => {
  await prisma.$disconnect();
  console.log("It's completed");
};
main().catch(console.error).finally(disconnected);
