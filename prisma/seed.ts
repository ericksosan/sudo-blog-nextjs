import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear categorías
  const category1 = await prisma.category.create({
    data: { name: 'Tech' },
  });

  const category2 = await prisma.category.create({
    data: { name: 'Lifestyle' },
  });

  // Crear usuarios
  const user1 = await prisma.user.create({
    data: {
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'password123', // Nota: en un proyecto real, usa una contraseña encriptada
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'janedoe',
      email: 'janedoe@example.com',
      password: 'password123', // Nota: en un proyecto real, usa una contraseña encriptada
    },
  });

  // Crear posts
  const post1 = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post',
      userId: user1.id,
      categoryId: category1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the content of the second post',
      userId: user2.id,
      categoryId: category2.id,
    },
  });

  // Crear comentarios
  await prisma.comment.createMany({
    data: [
      {
        content: 'Great post!',
        userId: user2.id,
        postId: post1.id,
      },
      {
        content: 'Very informative!',
        userId: user1.id,
        postId: post2.id,
      },
    ],
  });

  // Crear likes
  await prisma.like.createMany({
    data: [
      {
        userId: user1.id,
        postId: post2.id,
      },
      {
        userId: user2.id,
        postId: post1.id,
      },
    ],
  });

  // Crear saves
  await prisma.save.createMany({
    data: [
      {
        userId: user1.id,
        postId: post1.id,
      },
      {
        userId: user2.id,
        postId: post2.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
