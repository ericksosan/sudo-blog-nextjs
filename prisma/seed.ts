import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import slugify from 'slugify';

const prisma = new PrismaClient();

async function main() {
  await prisma.like.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.save.deleteMany();
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: [
      { id: '1', name: 'Technology' },
      { id: '2', name: 'Health' },
      { id: '3', name: 'Travel' },
      { id: '4', name: 'Food' },
      { id: '5', name: 'Lifestyle' },
    ],
  });

  const users = [
    { id: '1', firstname: 'John', lastname: 'Doe', email: 'john.doe@example.com', password: 'password123', fullname: 'John Doe' },
    { id: '2', firstname: 'Jane', lastname: 'Smith', email: 'jane.smith@example.com', password: 'password123', fullname: 'Jane Smith' },
    { id: '3', firstname: 'Alice', lastname: 'Johnson', email: 'alice.johnson@example.com', password: 'password123', fullname: 'Alice Johnson' },
    { id: '4', firstname: 'Bob', lastname: 'Brown', email: 'bob.brown@example.com', password: 'password123', fullname: 'Bob Brown' },
    { id: '5', firstname: 'Charlie', lastname: 'Davis', email: 'charlie.davis@example.com', password: 'password123', fullname: 'Charlie Davis' },
  ];

  const hashedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    })
  );

  await prisma.user.createMany({
    data: hashedUsers,
  });

  const posts = [
    {
      id: '1',
      userId: '1',
      title: 'The Future of Artificial Intelligence',
      content: 'Artificial Intelligence (AI) is no longer a concept of the future; it is here, and it is transforming our world in countless ways. From healthcare to finance, AI is revolutionizing industries by enhancing efficiency, accuracy, and decision-making. The implications of AI are profound, and its potential continues to grow as we develop more advanced technologies. However, with great power comes great responsibility. Ethical considerations surrounding AI, such as privacy, security, and job displacement, must be addressed to ensure that its benefits are maximized while minimizing potential harms.',
      categoryId: '1',
    },
    {
      id: '2',
      userId: '2',
      title: 'Mindful Eating: Beyond Diets',
      content: 'Mindful eating is a practice that encourages individuals to be fully present during their meals, paying attention to their hunger and satiety cues without judgment. Unlike traditional diets that often promote restriction and guilt, mindful eating fosters a positive relationship with food and body. By savoring each bite, recognizing emotional triggers for eating, and choosing nourishing foods, individuals can improve their overall well-being, maintain a healthy weight, and enjoy a more balanced and fulfilling approach to eating.',
      categoryId: '2',
    },
    {
      id: '3',
      userId: '3',
      title: 'Sustainable Travel: Explore the World Without Leaving a Trace',
      content: 'Sustainable travel is about making mindful choices that minimize our environmental impact and support local communities. From choosing eco-friendly accommodations to participating in conservation efforts, travelers can explore the world while preserving it for future generations. Sustainable travel also involves respecting local cultures and traditions, reducing waste, and supporting businesses that prioritize sustainability. By adopting these practices, we can enjoy enriching travel experiences while contributing to the health of our planet.',
      categoryId: '3',
    },
    {
      id: '4',
      userId: '4',
      title: 'Fusion Cuisine: Flavors of the World on Your Plate',
      content: 'Fusion cuisine combines ingredients and techniques from various culinary traditions to create innovative and exciting dishes. This approach to cooking celebrates cultural diversity and creativity, resulting in unique flavors and textures that delight the palate. From sushi burritos to kimchi tacos, fusion cuisine offers endless possibilities for culinary exploration. Whether you are a professional chef or a home cook, experimenting with fusion recipes can broaden your culinary horizons and inspire new culinary creations.',
      categoryId: '4',
    },
    {
      id: '5',
      userId: '5',
      title: 'Minimalism: Living with Less to Experience More',
      content: 'Minimalism is a lifestyle that emphasizes simplicity and intentionality. By decluttering our physical and mental spaces, we can focus on what truly matters and find greater fulfillment. Minimalism encourages us to prioritize experiences over possessions, reduce stress, and live more sustainably. It is not about deprivation but about making mindful choices that align with our values and goals. Embracing minimalism can lead to a more balanced, joyful, and purposeful life.',
      categoryId: '5',
    },
  ]

  const postsSluged = posts.map((post) => {
    const slug = slugify(post.title, { lower: true, strict: true })

    return {
      ...post,
      slug
    }
  })

  await prisma.post.createMany({
    data: postsSluged
  });

  await prisma.comment.createMany({
    data: [
      { id: '1', postId: '1', userId: '2', content: 'Great post about technology!' },
      { id: '2', postId: '2', userId: '3', content: 'Very informative, thanks!' },
      { id: '3', postId: '3', userId: '4', content: 'I love traveling tips, keep them coming!' },
      { id: '4', postId: '4', userId: '5', content: 'These recipes are amazing!' },
      { id: '5', postId: '5', userId: '1', content: 'Very useful lifestyle tips, thanks!' },
    ],
  });

  await prisma.like.createMany({
    data: [
      { id: '1', postId: '1', userId: '2' },
      { id: '2', postId: '2', userId: '3' },
      { id: '3', postId: '3', userId: '4' },
      { id: '4', postId: '4', userId: '5' },
      { id: '5', postId: '5', userId: '1' },
    ],
  });

  await prisma.save.createMany({
    data: [
      { id: '1', postId: '1', userId: '3' },
      { id: '2', postId: '2', userId: '4' },
      { id: '3', postId: '3', userId: '5' },
      { id: '4', postId: '4', userId: '1' },
      { id: '5', postId: '5', userId: '2' },
    ],
  });
}

main()
  .then(() => {
    console.log('Seeding finished.');
  })
  .catch((e) => {
    console.error('Seeding error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
